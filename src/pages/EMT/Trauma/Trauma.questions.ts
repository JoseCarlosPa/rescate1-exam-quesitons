import {Question} from "../../../question";


export const faqData = [
    {
        question: "¿Qué es el 'mecanismo de lesión' (ML) y el 'índice de sospecha'?",
        answer: "El Mecanismo de Lesión describe las fuerzas que actuaron sobre el cuerpo para causar una lesión. El Índice de Sospecha es la conciencia y preocupación del paramédico por la existencia de lesiones potencialmente graves y no visibles, basándose en la evaluación del ML.",
    },
    {
        question: "¿Cuál es la diferencia entre un traumatismo cerrado y uno penetrante?",
        answer: "Un traumatismo cerrado es una lesión por impacto que no rompe la piel, como en un choque de auto o una caída. Un traumatismo penetrante es una lesión que perfora la piel y daña los tejidos subyacentes, como una herida por cuchillo o bala.",
    },
    {
        question: "Según la física del trauma, ¿qué factor es más importante en la gravedad de una lesión: la masa o la velocidad?",
        answer: "La velocidad es mucho más importante. La energía cinética, que es la energía de un objeto en movimiento, se calcula como ½ de la masa por la velocidad al cuadrado ($$E_c = \\frac{1}{2}mv^2$$). Esto significa que al duplicar la velocidad, la energía (y el potencial de daño) se cuadruplica.",
    },
    {
        question: "Describa las 'tres colisiones' que ocurren en un accidente automovilístico.",
        answer: "1. La colisión del vehículo contra otro objeto. \n2. La colisión del ocupante contra el interior del vehículo. \n3. La colisión de los órganos internos del ocupante contra las estructuras sólidas del cuerpo (huesos, cráneo).",
    },
    {
        question: "¿Cuáles son los cuatro tipos de lesiones por explosión?",
        answer: "• Lesión primaria: Causada por la onda expansiva de la explosión (daña órganos llenos de aire). \n• Lesión secundaria: Causada por fragmentos y escombros que vuelan. \n• Lesión terciaria: Causada cuando la persona es arrojada por la fuerza de la explosión. \n• Lesión cuaternaria: Otras lesiones (quemaduras, inhalación de tóxicos, etc.).",
    },
    {
        question: "¿Qué es el 'Período Dorado' (Golden Hour) en el manejo del trauma?",
        answer: "Es el período de tiempo después de una lesión traumática durante el cual existe la mayor probabilidad de que el tratamiento médico y quirúrgico rápido prevenga la muerte. Aunque no son exactamente 60 minutos, enfatiza la necesidad de un transporte rápido al centro adecuado.",
    },
    {
        question: "¿Qué es la cavitación en el contexto de un traumatismo penetrante?",
        answer: "La cavitación es el daño causado por la onda de presión que se forma alrededor de un proyectil de mediana o alta velocidad a medida que atraviesa el cuerpo. Esta onda expansiva puede dañar tejidos que no están en el camino directo del proyectil.",
    },
    {
        question: "¿Cuáles son algunos criterios para considerar el transporte rápido a un centro de trauma?",
        answer: "Los criterios se basan en la fisiología (hipotensión, GCS < 14), la anatomía de la lesión (heridas penetrantes en torso, tórax inestable) y el mecanismo de lesión (caída de gran altura, eyección del vehículo, muerte de otro ocupante en el mismo vehículo).",
    },
];


export const traumaGeneralQuestions: Question[] = [
    {
        "question": "Un conductor que no llevaba cinturón de seguridad sufre una colisión frontal. Golpea el volante con el pecho. Siguiendo el concepto de las 'tres colisiones', la lesión del corazón contra el esternón sería la colisión de tipo:",
        "options": [
            {"letter": "a", "text": "Primera"},
            {"letter": "b", "text": "Segunda"},
            {"letter": "c", "text": "Tercera"},
            {"letter": "d", "text": "Cuarta"}
        ],
        "correctAnswer": "c",
        "explanation": "La cinemática del trauma describe tres colisiones: 1) La colisión del vehículo contra otro objeto. 2) La colisión del ocupante contra el interior del vehículo (ej. pecho contra el volante). 3) La colisión de los órganos internos contra las paredes del cuerpo (ej. corazón y pulmones contra el esternón y las costillas). Esta tercera colisión es la que a menudo causa las lesiones internas más graves."
    },
    {
        "question": "Un paciente que fue arrojado contra una pared por la fuerza de una explosión cercana sufre una fractura de fémur. Este tipo de lesión se clasifica como:",
        "options": [
            {"letter": "a", "text": "Lesión primaria por explosión"},
            {"letter": "b", "text": "Lesión secundaria por explosión"},
            {"letter": "c", "text": "Lesión terciaria por explosión"},
            {"letter": "d", "text": "Lesión cuaternaria por explosión"}
        ],
        "correctAnswer": "c",
        "explanation": "Las lesiones por explosión se clasifican así: Primaria (onda de presión), Secundaria (fragmentos o proyectiles), Terciaria (el cuerpo es arrojado contra un objeto). La fractura por el impacto del cuerpo contra la pared es un ejemplo clásico de lesión terciaria. Las cuaternarias son otras lesiones relacionadas (quemaduras, inhalación, etc.)."
    },
    {
        "question": "¿Cuál de los siguientes pacientes cumple con los criterios de mecanismo de lesión para ser transportado a un centro de trauma?",
        "options": [
            {"letter": "a", "text": "Un peatón golpeado por un coche a baja velocidad con una abrasión en la rodilla"},
            {"letter": "b", "text": "Un adulto que se cayó desde una altura de 7 metros (aprox. 23 pies)"},
            {"letter": "c", "text": "Un motociclista que derrapó a baja velocidad y tiene un esguince de tobillo"},
            {"letter": "d", "text": "Un pasajero en una colisión menor sin quejas de dolor"}
        ],
        "correctAnswer": "b",
        "explanation": "Según las guías de triage de trauma, una caída de más de 6 metros (20 pies) para un adulto es un mecanismo de lesión significativo que justifica el transporte a un centro de trauma designado. Esta altura genera suficiente energía para causar lesiones internas graves, incluso si no son evidentes al principio."
    },
    {
        "question": "En un choque lateral (impacto en 'T'), el conductor tiene un alto índice de sospecha para lesiones en:",
        "options": [
            {"letter": "a", "text": "La columna cervical por hiperextensión"},
            {"letter": "b", "text": "Las extremidades inferiores por el 'mecanismo de bolsa de papel'"},
            {"letter": "c", "text": "El lado del cuerpo que recibió el impacto, incluyendo cuello, tórax y pelvis"},
            {"letter": "d", "text": "El cráneo por golpear el parabrisas"}
        ],
        "correctAnswer": "c",
        "explanation": "En un impacto lateral, el cuerpo se desplaza violentamente hacia el lado del impacto. Esto crea un alto riesgo de lesiones por compresión y cizallamiento en el lado afectado, incluyendo la columna cervical lateral, clavícula, costillas, pulmones, bazo (lado izquierdo), hígado (lado derecho) y pelvis."
    },
    {
        "question": "La principal diferencia en el potencial de lesión entre una herida por cuchillo y una herida por un rifle de alta velocidad es:",
        "options": [
            {"letter": "a", "text": "El riesgo de infección"},
            {"letter": "b", "text": "La presencia de una herida de entrada y salida"},
            {"letter": "c", "text": "El daño adicional causado por la cavitación del proyectil de alta velocidad"},
            {"letter": "d", "text": "La probabilidad de que el objeto se quede alojado"}
        ],
        "correctAnswer": "c",
        "explanation": "Un proyectil de alta velocidad transfiere una enorme cantidad de energía cinética a los tejidos, creando una cavidad temporal mucho más grande que el propio proyectil. Este estiramiento y compresión (cavitación) daña vasos sanguíneos, nervios y órganos que no están en la trayectoria directa de la bala, a diferencia de un cuchillo que solo daña el tejido que corta directamente."
    },
    {
        "question": "Un paciente es apuñalado en el abdomen con un picahielo. ¿Cuál es su principal preocupación con respecto a esta herida?",
        "options": [
            {"letter": "a", "text": "La hemorragia externa suele ser masiva"},
            {
                "letter": "b",
                "text": "El daño interno puede ser mucho mayor de lo que sugiere la pequeña herida externa"
            },
            {"letter": "c", "text": "El riesgo de tétanos es extremadamente alto"},
            {"letter": "d", "text": "Este tipo de herida siempre causa evisceración"}
        ],
        "correctAnswer": "b",
        "explanation": "En heridas penetrantes por objetos delgados como un picahielo o estilete, la herida externa puede ser muy pequeña y engañosa. Sin embargo, el objeto puede haber penetrado profundamente, lesionando órganos vitales y vasos sanguíneos importantes. Siempre se debe mantener un alto índice de sospecha de lesión interna grave."
    },
    {
        "question": "La ruptura del tímpano por la onda de presión de una explosión es un ejemplo de una lesión:",
        "options": [
            {"letter": "a", "text": "Primaria"},
            {"letter": "b", "text": "Secundaria"},
            {"letter": "c", "text": "Terciaria"},
            {"letter": "d", "text": "Cuaternaria"}
        ],
        "correctAnswer": "a",
        "explanation": "La lesión primaria por explosión es causada directamente por la onda expansiva de sobrepresión. Los órganos que contienen aire, como los oídos (membrana timpánica), los pulmones y el tracto gastrointestinal, son los más susceptibles a este tipo de daño por la diferencia de presión."
    },
    {
        "question": "Al evaluar la escena de una caída, ¿qué factor es MENOS importante para predecir la gravedad de las lesiones?",
        "options": [
            {"letter": "a", "text": "La altura desde la que cayó el paciente"},
            {"letter": "b", "text": "La hora del día en que ocurrió la caída"},
            {"letter": "c", "text": "La parte del cuerpo que impactó primero"},
            {"letter": "d", "text": "El tipo de superficie sobre la que aterrizó el paciente"}
        ],
        "correctAnswer": "b",
        "explanation": "La altura, la parte del cuerpo que impacta y la superficie de aterrizaje son factores críticos que determinan la cantidad de energía transferida y el tipo de lesiones. La hora del día en que ocurre la caída es irrelevante desde el punto de vista de la física y la cinemática del trauma."
    },
    {
        "question": "El concepto de 'índice de sospecha' es más útil para el paramédico porque:",
        "options": [
            {"letter": "a", "text": "Permite diagnosticar fracturas sin necesidad de rayos X"},
            {"letter": "b", "text": "Ayuda a anticipar y buscar lesiones que no son inmediatamente obvias"},
            {"letter": "c", "text": "Determina la culpabilidad en un accidente automovilístico"},
            {"letter": "d", "text": "Justifica no realizar una evaluación completa si el mecanismo es leve"}
        ],
        "correctAnswer": "b",
        "explanation": "El índice de sospecha es una de las herramientas de pensamiento crítico más importantes para un paramédico. Se basa en la comprensión de la cinemática del trauma para anticipar posibles lesiones internas graves basadas en el mecanismo, incluso si el paciente parece estable o presenta pocos signos externos de lesión."
    },
    {
        "question": "Un trauma multisistémico se define como:",
        "options": [
            {"letter": "a", "text": "Una lesión que requiere intervención quirúrgica"},
            {"letter": "b", "text": "Cualquier fractura de un hueso largo"},
            {"letter": "c", "text": "Una o más lesiones que afectan a más de un sistema corporal"},
            {"letter": "d", "text": "Cualquier traumatismo que ocurra en un paciente mayor de 65 años"}
        ],
        "correctAnswer": "c",
        "explanation": "El trauma multisistémico se refiere a un paciente que ha sufrido lesiones en dos o más sistemas corporales, como el sistema neurológico y el sistema cardiovascular, o el sistema respiratorio y el sistema musculoesquelético. Estos pacientes tienen un mayor riesgo de morbilidad y mortalidad."
    }
]