import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Cuál es la diferencia entre una reacción alérgica local y la anafilaxia?",
        answer: "Una reacción alérgica local afecta un área específica del cuerpo, como hinchazón y picazón en el sitio de una picadura de insecto. La anafilaxia es una reacción sistémica, severa y potencialmente mortal que afecta a múltiples sistemas del cuerpo a la vez (p. ej., piel y sistema respiratorio) y puede causar shock.",
    },
    {
        question: "¿Qué es un alérgeno y cuáles son las 5 categorías más comunes?",
        answer: "Un alérgeno es una sustancia que, aunque normalmente es inofensiva, causa una respuesta inmunitaria exagerada en personas sensibles. Las cinco categorías comunes son: \n1. Alimentos (nueces, mariscos). \n2. Medicamentos (penicilina, aspirina). \n3. Plantas (hiedra venenosa). \n4. Químicos (maquillaje, jabones). \n5. Picaduras y mordeduras de insectos.",
    },
    {
        question: "¿Qué papel juega la histamina en una reacción anafiláctica?",
        answer: "La histamina es el principal químico liberado por el cuerpo durante una reacción anafiláctica. Causa la dilatación de los vasos sanguíneos (lo que provoca hipotensión y urticaria), el aumento de la permeabilidad vascular (causando hinchazón o angioedema) y la constricción de los bronquios (causando dificultad para respirar y sibilancias).",
    },
    {
        question: "¿Qué es la urticaria y el angioedema?",
        answer: "La urticaria son ronchas rojas, elevadas y que pican en la piel, un signo muy común de una reacción alérgica. El angioedema es una hinchazón similar pero que ocurre en las capas más profundas de la piel, afectando comúnmente los labios, la cara, la lengua y las manos.",
    },
    {
        question: "¿Por qué la epinefrina es el tratamiento de primera línea para la anafilaxia?",
        answer: "La epinefrina es vital porque contrarresta directamente los efectos más mortales de la anafilaxia. Es un vasoconstrictor (revierte la hipotensión) y un broncodilatador (abre las vías respiratorias). Ningún otro medicamento actúa tan rápido y eficazmente en esta emergencia.",
    },
    {
        question: "¿Qué es el estridor y por qué es un signo tan preocupante?",
        answer: "El estridor es un sonido agudo y chillón que se escucha durante la inspiración. Es causado por una obstrucción severa de la vía aérea superior, generalmente por hinchazón de la laringe o la tráquea. Es un signo ominoso que indica que la vía aérea del paciente está a punto de cerrarse por completo.",
    },
    {
        question: "¿Cómo se define la anafilaxia en el campo?",
        answer: "Generalmente, se considera anafilaxia si un paciente fue expuesto a un alérgeno y presenta dos o más de los siguientes sistemas afectados: piel (urticaria, angioedema), respiratorio (disnea, sibilancias), cardiovascular (hipotensión, taquicardia) o gastrointestinal (náuseas, vómitos). O simplemente si presenta hipotensión después de la exposición.",
    },
    {
        question: "Un paciente que tuvo una reacción alérgica leve en el pasado, ¿puede tener una reacción grave en el futuro?",
        answer: "Sí. Una exposición previa sensibiliza al sistema inmunitario. Una exposición posterior al mismo alérgeno puede desencadenar una reacción mucho más rápida y severa, incluyendo anafilaxia potencialmente mortal.",
    },
];


export const inmunologieQuestions: Question[] = [
    {
        "question": "Un paciente es picado por una avispa. Desarrolla urticaria generalizada y se queja de dificultad para respirar. Al auscultarlo, usted escucha sibilancias. Esta presentación clínica es más consistente con:",
        "options": [
            {"letter": "a", "text": "Una reacción local"},
            {"letter": "b", "text": "Anafilaxia"},
            {"letter": "c", "text": "Un ataque de asma"},
            {"letter": "d", "text": "Una reacción tóxica"}
        ],
        "correctAnswer": "b",
        "explanation": "La anafilaxia se define por la afectación de dos o más sistemas corporales. En este caso, el paciente presenta afectación del sistema tegumentario (urticaria) y del sistema respiratorio (dificultad para respirar y sibilancias), lo que confirma el diagnóstico de anafilaxia, una emergencia potencialmente mortal."
    },
    {
        "question": "La epinefrina ayuda a revertir los efectos de la anafilaxia principalmente porque sus efectos beta-2 causan broncodilatación y sus efectos alfa-1 causan:",
        "options": [
            {"letter": "a", "text": "Vasodilatación para mejorar la perfusión"},
            {"letter": "b", "text": "Un aumento en la frecuencia cardíaca"},
            {"letter": "c", "text": "Vasoconstricción para aumentar la presión arterial"},
            {"letter": "d", "text": "Una disminución en la producción de histamina"}
        ],
        "correctAnswer": "c",
        "explanation": "La epinefrina es el fármaco de elección para la anafilaxia por sus múltiples efectos. La estimulación de los receptores beta-2 abre las vías respiratorias (broncodilatación), mientras que la estimulación de los receptores alfa-1 contrae los vasos sanguíneos (vasoconstricción), lo que revierte la hipotensión y el shock."
    },
    {
        "question": "Usted atiende a un paciente con signos de anafilaxia y se prepara para administrar epinefrina con un autoinyector. ¿Cuál es la acción más importante e inmediata a realizar?",
        "options": [
            {
                "letter": "a",
                "text": "Asegurarse de que el paciente tenga una vía aérea permeable y administrar oxígeno a alto flujo"
            },
            {"letter": "b", "text": "Administrar epinefrina"},
            {"letter": "c", "text": "Establecer un acceso intravenoso para administrar líquidos"},
            {"letter": "d", "text": "Realizar una evaluación secundaria completa para encontrar otras lesiones"}
        ],
        "correctAnswer": "b",
        "explanation": "En un paciente con anafilaxia y compromiso de la vía aérea o circulatorio, la administración de epinefrina es la intervención más crítica y que salva la vida. Debe administrarse sin demora, ya que revierte directamente los procesos fisiopatológicos de la reacción anafiláctica. Las otras medidas son importantes, pero secundarias a la epinefrina."
    },
    {
        "question": "Un paciente que está cenando en un restaurante de mariscos de repente desarrolla estridor, hinchazón de la lengua y se ve cianótico. El estridor indica:",
        "options": [
            {"letter": "a", "text": "Constricción de las vías aéreas inferiores (bronquios)"},
            {"letter": "b", "text": "Acumulación de líquido en los pulmones"},
            {"letter": "c", "text": "Obstrucción severa de la vía aérea superior"},
            {"letter": "d", "text": "Una disminución en la frecuencia cardíaca"}
        ],
        "correctAnswer": "c",
        "explanation": "El estridor es un sonido agudo y de alta tonalidad que se escucha durante la inspiración. Es causado por el paso turbulento de aire a través de una vía aérea superior severamente estrechada, generalmente por el edema de la laringe o la faringe (angioedema), y representa una emergencia de vía aérea inminente."
    },
    {
        "question": "La urticaria se define como:",
        "options": [
            {"letter": "a", "text": "Hinchazón de los labios y la lengua"},
            {"letter": "b", "text": "Ronchas rojas, elevadas y que pican en la piel"},
            {"letter": "c", "text": "Coloración azulada de la piel por falta de oxígeno"},
            {"letter": "d", "text": "Sonidos sibilantes durante la respiración"}
        ],
        "correctAnswer": "b",
        "explanation": "La urticaria, también conocida como habones o 'hives' en inglés, es una manifestación cutánea de una reacción alérgica. Se caracteriza por la aparición de ronchas o pápulas rojas, bien delimitadas, elevadas y muy pruriginosas (que causan picor)."
    },
    {
        "question": "Al evaluar a un paciente con una posible reacción alérgica, ¿cuál de los siguientes hallazgos clasificaría la reacción como anafilaxia?",
        "options": [
            {"letter": "a", "text": "Picazón y enrojecimiento localizado en el brazo donde ocurrió la picadura"},
            {"letter": "b", "text": "Estornudos y ojos llorosos"},
            {"letter": "c", "text": "Urticaria en el pecho e hipotensión"},
            {"letter": "d", "text": "Una frecuencia cardíaca de 100 latidos/min sin otros síntomas"}
        ],
        "correctAnswer": "c",
        "explanation": "La anafilaxia se diagnostica cuando hay afectación de múltiples sistemas. La urticaria es un signo del sistema cutáneo y la hipotensión es un signo de compromiso del sistema cardiovascular. La combinación de ambos cumple los criterios para el diagnóstico de anafilaxia."
    },
    {
        "question": "¿Cuál de las siguientes afirmaciones sobre la exposición a alérgenos es correcta?",
        "options": [
            {"letter": "a", "text": "La primera exposición a un alérgeno siempre causa la reacción más severa"},
            {"letter": "b", "text": "La severidad de las reacciones alérgicas tiende a disminuir con cada exposición"},
            {
                "letter": "c",
                "text": "Una persona no puede desarrollar una alergia a algo a lo que ha estado expuesta muchas veces sin problemas"
            },
            {
                "letter": "d",
                "text": "Una exposición que inicialmente solo causa una reacción leve puede sensibilizar a la persona para una reacción anafiláctica en el futuro"
            }
        ],
        "correctAnswer": "d",
        "explanation": "El proceso de sensibilización implica que el sistema inmunológico 'aprende' a reconocer un alérgeno en la primera exposición (o primeras exposiciones), produciendo anticuerpos IgE. En exposiciones posteriores, la reacción puede ser mucho más rápida y severa, pudiendo llegar a la anafilaxia."
    },
    {
        "question": "El principal efecto negativo de la liberación de histamina sobre el sistema cardiovascular es:",
        "options": [
            {"letter": "a", "text": "La hipertensión y el riesgo de hemorragia cerebral"},
            {"letter": "b", "text": "La vasoconstricción y el enfriamiento de las extremidades"},
            {"letter": "c", "text": "La bradicardia que puede llevar a un paro cardíaco"},
            {"letter": "d", "text": "La vasodilatación sistémica que causa hipotensión y shock"}
        ],
        "correctAnswer": "d",
        "explanation": "La histamina es un potente vasodilatador que aumenta el calibre de los vasos sanguíneos y aumenta la permeabilidad capilar. Esta vasodilatación generalizada provoca una caída drástica de la presión arterial y una fuga de líquido del espacio vascular al intersticial, llevando al shock distributivo."
    },
    {
        "question": "Un paciente con anafilaxia conocida se auto-administró su epinefrina justo antes de su llegada. Usted nota que su dificultad respiratoria está mejorando pero sigue ansioso y con una frecuencia cardíaca de 140. Su siguiente paso debe ser:",
        "options": [
            {
                "letter": "a",
                "text": "Administrar una segunda dosis de epinefrina inmediatamente para tratar la taquicardia"
            },
            {
                "letter": "b",
                "text": "Administrar oxígeno, continuar la evaluación y prepararse para el transporte, reconociendo que la taquicardia es un efecto esperado de la epinefrina"
            },
            {"letter": "c", "text": "Asumir que el paciente está teniendo un ataque de pánico y calmarlo verbalmente"},
            {"letter": "d", "text": "Pedirle al paciente que respire en una bolsa de papel para controlar la ansiedad"}
        ],
        "correctAnswer": "b",
        "explanation": "La taquicardia y la ansiedad son efectos secundarios comunes y esperados de la epinefrina debido a su estimulación de los receptores beta-1. Dado que la condición del paciente está mejorando, el manejo correcto es el cuidado de soporte (oxígeno, monitorización) y el transporte, sin administrar más epinefrina por los efectos secundarios."
    },
    {
        "question": "¿Cuál de las cinco categorías de alérgenos es la causa más común de anafilaxia mortal?",
        "options": [
            {"letter": "a", "text": "Plantas"},
            {"letter": "b", "text": "Químicos"},
            {"letter": "c", "text": "Alimentos"},
            {"letter": "d", "text": "Medicamentos inyectados, seguidos por picaduras de insectos"}
        ],
        "correctAnswer": "d",
        "explanation": "Aunque las alergias alimentarias son muy comunes, las reacciones anafilácticas más rápidas y mortales suelen ocurrir con sustancias que se introducen directamente en el torrente sanguíneo, como los medicamentos inyectados (p. ej., penicilina) o el veneno de insectos (p. ej., abejas, avispas), ya que la reacción sistémica es casi inmediata."
    }
]