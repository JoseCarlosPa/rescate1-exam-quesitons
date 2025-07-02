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
        question: "Un conductor que no llevaba cinturón de seguridad sufre una colisión frontal. Golpea el volante con el pecho. Siguiendo el concepto de las 'tres colisiones', la lesión del corazón contra el esternón sería la colisión de tipo:",
        options: [
            { letter: "a", text: "Primera" },
            { letter: "b", text: "Segunda" },
            { letter: "c", text: "Tercera" },
            { letter: "d", text: "Cuarta" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un paciente que fue arrojado contra una pared por la fuerza de una explosión cercana sufre una fractura de fémur. Este tipo de lesión se clasifica como:",
        options: [
            { letter: "a", text: "Lesión primaria por explosión" },
            { letter: "b", text: "Lesión secundaria por explosión" },
            { letter: "c", text: "Lesión terciaria por explosión" },
            { letter: "d", text: "Lesión cuaternaria por explosión" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de los siguientes pacientes cumple con los criterios de mecanismo de lesión para ser transportado a un centro de trauma?",
        options: [
            { letter: "a", text: "Un peatón golpeado por un coche a baja velocidad con una abrasión en la rodilla" },
            { letter: "b", text: "Un adulto que se cayó desde una altura de 7 metros (aprox. 23 pies)" },
            { letter: "c", text: "Un motociclista que derrapó a baja velocidad y tiene un esguince de tobillo" },
            { letter: "d", text: "Un pasajero en una colisión menor sin quejas de dolor" },
        ],
        correctAnswer: "b",
    },
    {
        question: "En un choque lateral (impacto en 'T'), el conductor tiene un alto índice de sospecha para lesiones en:",
        options: [
            { letter: "a", text: "La columna cervical por hiperextensión" },
            { letter: "b", text: "Las extremidades inferiores por el 'mecanismo de bolsa de papel'" },
            { letter: "c", text: "El lado del cuerpo que recibió el impacto, incluyendo cuello, tórax y pelvis" },
            { letter: "d", text: "El cráneo por golpear el parabrisas" },
        ],
        correctAnswer: "c",
    },
    {
        question: "La principal diferencia en el potencial de lesión entre una herida por cuchillo y una herida por un rifle de alta velocidad es:",
        options: [
            { letter: "a", text: "El riesgo de infección" },
            { letter: "b", text: "La presencia de una herida de entrada y salida" },
            { letter: "c", text: "El daño adicional causado por la cavitación del proyectil de alta velocidad" },
            { letter: "d", text: "La probabilidad de que el objeto se quede alojado" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un paciente es apuñalado en el abdomen con un picahielo. ¿Cuál es su principal preocupación con respecto a esta herida?",
        options: [
            { letter: "a", text: "La hemorragia externa suele ser masiva" },
            { letter: "b", text: "El daño interno puede ser mucho mayor de lo que sugiere la pequeña herida externa" },
            { letter: "c", text: "El riesgo de tétanos es extremadamente alto" },
            { letter: "d", "text": "Este tipo de herida siempre causa evisceración" },
        ],
        correctAnswer: "b",
    },
    {
        question: "La ruptura del tímpano por la onda de presión de una explosión es un ejemplo de una lesión:",
        options: [
            { letter: "a", text: "Primaria" },
            { letter: "b", text: "Secundaria" },
            { letter: "c", text: "Terciaria" },
            { letter: "d", text: "Cuaternaria" },
        ],
        correctAnswer: "a",
    },
    {
        question: "Al evaluar la escena de una caída, ¿qué factor es MENOS importante para predecir la gravedad de las lesiones?",
        options: [
            { letter: "a", text: "La altura desde la que cayó el paciente" },
            { letter: "b", text: "La hora del día en que ocurrió la caída" },
            { letter: "c", text: "La parte del cuerpo que impactó primero" },
            { letter: "d", text: "El tipo de superficie sobre la que aterrizó el paciente" },
        ],
        correctAnswer: "b",
    },
    {
        question: "El concepto de 'índice de sospecha' es más útil para el paramédico porque:",
        options: [
            { letter: "a", text: "Permite diagnosticar fracturas sin necesidad de rayos X" },
            { letter: "b", text: "Ayuda a anticipar y buscar lesiones que no son inmediatamente obvias" },
            { letter: "c", text: "Determina la culpabilidad en un accidente automovilístico" },
            { letter: "d", text: "Justifica no realizar una evaluación completa si el mecanismo es leve" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un trauma multisistémico se define como:",
        options: [
            { letter: "a", text: "Una lesión que requiere intervención quirúrgica" },
            { letter: "b", text: "Cualquier fractura de un hueso largo" },
            { letter: "c", text: "Una o más lesiones que afectan a más de un sistema corporal" },
            { letter: "d", text: "Cualquier traumatismo que ocurra en un paciente mayor de 65 años" },
        ],
        correctAnswer: "c",
    },
];
