import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Cuáles son las tres etapas del trabajo de parto?",
        answer: "1. Primera etapa (Dilatación): Comienza con las contracciones y termina cuando el cuello uterino está completamente dilatado (10 cm). \n2. Segunda etapa (Expulsión): Comienza con la dilatación completa y termina con el nacimiento del bebé. \n3. Tercera etapa (Alumbramiento): Comienza después del nacimiento del bebé y termina con la expulsión de la placenta.",
    },
    {
        question: "¿Qué preguntas son clave para determinar si un parto es inminente?",
        answer: "Preguntas clave incluyen: ¿Es su primer embarazo? ¿Qué tan seguidas son sus contracciones? ¿Ha roto fuente (se ha roto la bolsa de agua)? ¿Siente ganas de pujar o de evacuar el intestino? ¿Ve la cabeza del bebé (coronamiento)?",
    },
    {
        question: "¿Cuál es la diferencia entre placenta previa y desprendimiento prematuro de placenta?",
        answer: "La placenta previa es cuando la placenta cubre el cuello uterino, causando un sangrado vaginal de color rojo brillante y SIN dolor. El desprendimiento prematuro de placenta es la separación de la placenta de la pared uterina, causando un sangrado de color rojo oscuro CON dolor abdominal severo y constante.",
    },
    {
        question: "¿Qué es la preeclampsia y cuándo se convierte en eclampsia?",
        answer: "La preeclampsia es una condición del embarazo caracterizada por hipertensión, dolor de cabeza, visión borrosa y edema. Se convierte en eclampsia, una emergencia potencialmente mortal, cuando la paciente comienza a tener convulsiones.",
    },
    {
        question: "¿Qué es un prolapso de cordón y por qué es una emergencia crítica?",
        answer: "Es cuando el cordón umbilical sale por la vagina antes que la cabeza del bebé. Es una emergencia crítica porque la cabeza del bebé comprime el cordón, cortando el suministro de oxígeno. El manejo implica levantar la cabeza del bebé para liberar la presión sobre el cordón y transportar inmediatamente.",
    },
    {
        question: "¿Qué significa la puntuación de APGAR?",
        answer: "Es una evaluación rápida de la condición del recién nacido que se realiza al minuto 1 y a los 5 minutos de vida. Evalúa cinco áreas: Apariencia (color de la piel), Pulso (frecuencia cardíaca), Gesticulación (respuesta a estímulos), Actividad (tono muscular) y Respiración.",
    },
    {
        question: "¿Cuáles son los primeros pasos en el cuidado de un recién nacido sano?",
        answer: "Los primeros pasos son secar, abrigar y estimular al bebé (frotando su espalda o las plantas de los pies) para provocar la respiración. Se debe colocar al bebé al nivel de la vagina hasta que se pinze el cordón y succionar la boca y luego la nariz solo si es necesario.",
    },
    {
        question: "¿Cuándo se debe iniciar la ventilación con presión positiva (VPP) en un recién nacido?",
        answer: "Se debe iniciar la VPP si, después de secar y estimular, el recién nacido no respira adecuadamente o si su frecuencia cardíaca es inferior a 100 latidos por minuto.",
    },
];


export const obstetricQuestions: Question[] = [
    {
        "question": "Una mujer en su tercer trimestre de embarazo presenta sangrado vaginal de color rojo brillante, pero niega sentir dolor. Esta presentación es más característica de:",
        "options": [
            {"letter": "a", "text": "Desprendimiento prematuro de placenta"},
            {"letter": "b", "text": "Trabajo de parto activo"},
            {"letter": "c", "text": "Placenta previa"},
            {"letter": "d", "text": "Embarazo ectópico"}
        ],
        "correctAnswer": "c",
        "explanation": "La placenta previa se caracteriza por un sangrado vaginal indoloro de color rojo brillante. Ocurre cuando la placenta cubre parcial o totalmente el cuello uterino. El desprendimiento prematuro de placenta, por otro lado, suele ir acompañado de un dolor abdominal intenso y constante."
    },
    {
        "question": "Durante un parto en el campo, usted observa que el cordón umbilical sale por la vagina antes que la cabeza del bebé. ¿Cuál es su acción inmediata y más importante?",
        "options": [
            {"letter": "a", "text": "Intentar empujar el cordón de vuelta hacia adentro"},
            {
                "letter": "b",
                "text": "Colocar a la madre en posición de rodillas al pecho e insertar una mano enguantada para levantar la cabeza del bebé y liberar la presión del cordón"
            },
            {"letter": "c", "text": "Animar a la madre a pujar con más fuerza para acelerar el parto"},
            {"letter": "d", "text": "Pinzar y cortar el cordón inmediatamente"}
        ],
        "correctAnswer": "b",
        "explanation": "El prolapso de cordón es una emergencia obstétrica crítica. La cabeza del bebé puede comprimir el cordón, cortando el suministro de oxígeno. La acción vital es levantar manualmente la cabeza del bebé para aliviar la presión sobre el cordón y transportar inmediatamente en esa posición. Nunca se debe intentar reintroducir el cordón."
    },
    {
        "question": "Un recién nacido tiene una frecuencia cardíaca de 80 latidos/minuto y una respiración jadeante a pesar de haber sido secado y estimulado. ¿Cuál es el siguiente paso en su reanimación?",
        "options": [
            {"letter": "a", "text": "Iniciar compresiones torácicas"},
            {"letter": "b", "text": "Administrar oxígeno por soplado"},
            {"letter": "c", "text": "Iniciar ventilación con presión positiva (VPP)"},
            {"letter": "d", "text": "Calcular la puntuación de APGAR y esperar"}
        ],
        "correctAnswer": "c",
        "explanation": "Según las guías de reanimación neonatal, un recién nacido con una frecuencia cardíaca inferior a 100 lpm o con respiración ineficaz (jadeante) requiere ventilación con presión positiva (VPP). La VPP es la intervención más importante para mejorar la frecuencia cardíaca y la oxigenación."
    },
    {
        "question": "Una paciente embarazada de 36 semanas presenta una convulsión tónico-clónica. Su presión arterial es de 180/110 mmHg. Esta condición se conoce como:",
        "options": [
            {"letter": "a", "text": "Preeclampsia severa"},
            {"letter": "b", "text": "Eclampsia"},
            {"letter": "c", "text": "Epilepsia gestacional"},
            {"letter": "d", "text": "Síndrome de hipotensión supina"}
        ],
        "correctAnswer": "b",
        "explanation": "La eclampsia se define como la presencia de convulsiones en una mujer embarazada con hipertensión (preeclampsia). Es una emergencia potencialmente mortal tanto para la madre como para el feto, que requiere un manejo inmediato de la vía aérea y el transporte urgente."
    },
    {
        "question": "Al asistir un parto, la cabeza del bebé nace y usted nota que el cordón umbilical está enrollado alrededor del cuello (circular de cordón). ¿Cuál es la acción correcta?",
        "options": [
            {"letter": "a", "text": "Jalar el cordón para desenvolverlo"},
            {"letter": "b", "text": "Ignorarlo y proceder con el parto"},
            {
                "letter": "c",
                "text": "Intentar deslizar suavemente el cordón sobre la cabeza del bebé; si no es posible, pinzarlo y cortarlo"
            },
            {"letter": "d", "text": "Girar el cuerpo del bebé para desenredar el cordón"}
        ],
        "correctAnswer": "c",
        "explanation": "Una circular de cordón es común. El primer paso es intentar deslizar suavemente el lazo del cordón sobre la cabeza del bebé. Si está demasiado apretado para hacerlo, se debe pinzar el cordón en dos lugares y cortarlo cuidadosamente entre las pinzas para permitir que el parto continúe."
    },
    {
        "question": "Se inician compresiones torácicas en un neonato si su frecuencia cardíaca es inferior a _______ latidos/minuto a pesar de una ventilación efectiva.",
        "options": [
            {"letter": "a", "text": "120"},
            {"letter": "b", "text": "100"},
            {"letter": "c", "text": "80"},
            {"letter": "d", "text": "60"}
        ],
        "correctAnswer": "d",
        "explanation": "Las guías de reanimación neonatal indican que si la frecuencia cardíaca de un recién nacido permanece por debajo de 60 lpm después de al menos 30 segundos de VPP efectiva, se deben iniciar las compresiones torácicas coordinadas con las ventilaciones."
    },
    {
        "question": "Usted está transportando a una paciente en su tercer trimestre de embarazo. Para prevenir el síndrome de hipotensión supina, debe colocar a la paciente:",
        "options": [
            {"letter": "a", "text": "En posición de Fowler alta"},
            {"letter": "b", "text": "Acostada sobre su lado izquierdo"},
            {"letter": "c", "text": "En posición de Trendelenburg"},
            {"letter": "d", "text": "Acostada sobre su lado derecho"}
        ],
        "correctAnswer": "b",
        "explanation": "En etapas avanzadas del embarazo, el peso del útero grávido puede comprimir la vena cava inferior cuando la madre yace boca arriba, reduciendo el retorno venoso al corazón y causando hipotensión. Colocarla sobre su lado izquierdo desplaza el útero y alivia esta compresión."
    },
    {
        "question": "Una primigesta (primer embarazo) tiene contracciones cada 3 minutos que duran 60 segundos y siente una fuerte necesidad de pujar. ¿Qué debe hacer usted?",
        "options": [
            {"letter": "a", "text": "Pedirle que contenga la respiración y no puje mientras la transporta rápidamente"},
            {
                "letter": "b",
                "text": "Prepararse para un parto inminente, ya que estos son signos de la segunda etapa del trabajo de parto"
            },
            {"letter": "c", "text": "Administrarle analgésicos para detener las contracciones"},
            {"letter": "d", "text": "Asumir que es un falso trabajo de parto y transportarla sin urgencia"}
        ],
        "correctAnswer": "b",
        "explanation": "Las contracciones frecuentes, regulares y fuertes, junto con la sensación de pujo, son signos de que el parto es inminente. Indican que el cuello uterino está completamente dilatado (segunda etapa del parto). El proveedor debe prepararse para asistir el parto en el lugar si el transporte al hospital no es inmediato."
    },
    {
        "question": "En un parto de nalgas (pélvico), si la cabeza del bebé queda atrapada después de que el cuerpo ha nacido, ¿cuál es la acción prioritaria?",
        "options": [
            {"letter": "a", "text": "Aplicar tracción firme sobre el cuerpo del bebé para liberarlo"},
            {"letter": "b", "text": "Transportar inmediatamente sin intervenir"},
            {
                "letter": "c",
                "text": "Insertar una mano enguantada en la vagina para crear un espacio de aire para que el bebé respire"
            },
            {"letter": "d", "text": "Pedir a la madre que se ponga de pie para usar la gravedad"}
        ],
        "correctAnswer": "c",
        "explanation": "Si la cabeza queda atrapada, el cordón umbilical puede comprimirse, y el bebé no puede respirar. La maniobra de Mauriceau implica insertar dos dedos en la vagina para localizar la boca del bebé y presionar la pared vaginal hacia abajo, creando un pequeño túnel de aire que le permita respirar mientras se completa el parto."
    },
    {
        "question": "La tercera etapa del trabajo de parto finaliza con:",
        "options": [
            {"letter": "a", "text": "El nacimiento del bebé"},
            {"letter": "b", "text": "La dilatación completa del cuello uterino"},
            {"letter": "c", "text": "La expulsión de la placenta"},
            {"letter": "d", "text": "El pinzamiento del cordón umbilical"}
        ],
        "correctAnswer": "c",
        "explanation": "Las etapas del trabajo de parto son: 1ª) Desde el inicio de las contracciones hasta la dilatación completa. 2ª) Desde la dilatación completa hasta el nacimiento del bebé. 3ª) Desde el nacimiento del bebé hasta la expulsión de la placenta."
    }
]