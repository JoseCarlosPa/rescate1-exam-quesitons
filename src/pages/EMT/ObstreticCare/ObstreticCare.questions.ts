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
        "explanation": "El prolapso de cordón es una emergencia obstétrica crítica. La cabeza del bebé puede comprimir el cordón, cortando el suministro de oxígeno. La acción vital es levantar manually la cabeza del bebé para aliviar la presión sobre el cordón y transportar inmediatamente en esa posición. Nunca se debe intentar reintroducir el cordón."
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
];


/**
 * Preguntas de desafío sobre Cuidados Obstétricos y Neonatales.
 */
export const obstetricChallengeQuestions: Question[] = [
    {
        question: "Una paciente de 34 semanas, con historial de cesárea previa, experimenta un dolor abdominal súbito y desgarrador, seguido de la cesación de contracciones y signos de shock. Usted palpa partes fetales fácilmente sobre el abdomen. ¿Cuál es la sospecha diagnóstica más probable?",
        options: [
            {"letter": "a", "text": "Desprendimiento prematuro de placenta"},
            {"letter": "b", "text": "Ruptura uterina"},
            {"letter": "c", "text": "Placenta previa total"},
            {"letter": "d", "text": "Embolia de líquido amniótico"}
        ],
        "correctAnswer": "b",
        "explanation": "La tríada clásica de ruptura uterina (especialmente con cesárea previa) es: dolor agudo y súbito, cese de contracciones, y shock. La palpación fácil de partes fetales indica que el feto está fuera del útero, en la cavidad abdominal."
    },
    {
        question: "Durante un parto, la cabeza del bebé nace pero se retrae inmediatamente contra el perineo (signo de la tortuga). El hombro anterior está atascado. ¿Cuál es la primera maniobra de manejo prehospitalario recomendada?",
        options: [
            {"letter": "a", "text": "Maniobra de McRoberts (hiperflexión de las piernas de la madre)"},
            {"letter": "b", "text": "Aplicar presión fúndica (empujar en la parte superior del útero)"},
            {"letter": "c", "text": "Intentar rotar al bebé usando tracción de la cabeza"},
            {"letter": "d", "text": "Maniobra de Zavanelli (empujar al bebé de vuelta hacia adentro)"}
        ],
        "correctAnswer": "a",
        "explanation": "Esto es distocia de hombros. La primera maniobra es la de McRoberts (hiperflexionar las piernas de la madre hacia su abdomen), que aplana el sacro y rota la sínfisis del pubis, a menudo liberando el hombro. La presión fúndica está contraindicada; se usa la presión suprapúbica."
    },
    {
        question: "Un neonato nace a través de líquido teñido de meconio espeso. Está flácido (sin tono), apneico y su FC es de 70 lpm. ¿Cuál es la acción inicial correcta según las guías actuales de RNP?",
        options: [
            {"letter": "a", "text": "Intubar y succionar la tráquea antes de cualquier ventilación"},
            {"letter": "b", "text": "Iniciar inmediatamente la Ventilación con Presión Positiva (VPP)"},
            {"letter": "c", "text": "Dar oxígeno por soplado y estimular vigorosamente la espalda"},
            {"letter": "d", "text": "Realizar succión orofaríngea profunda y repetitiva"}
        ],
        "correctAnswer": "b",
        "explanation": "Las guías actuales de RNP/NRP han cambiado. La succión traqueal de rutina ya no se recomienda para bebés no vigorosos teñidos de meconio. La prioridad es la ventilación; se debe iniciar VPP inmediatamente si el bebé está apneico o con FC < 100 lpm."
    },
    {
        question: "Un neonato tiene una frecuencia cardíaca de 50 lpm a pesar de 30 segundos de VPP efectiva y 60 segundos de compresiones torácicas coordinadas. ¿Cuál es el siguiente paso farmacológico en la reanimación?",
        options: [
            {"letter": "a", "text": "Naloxona"},
            {"letter": "b", "text": "Bicarbonato de sodio"},
            {"letter": "c", "text": "Adrenalina (Epinefrina) IV/IO"},
            {"letter": "d", "text": "Atropina"}
        ],
        "correctAnswer": "c",
        "explanation": "Si la frecuencia cardíaca permanece por debajo de 60 lpm a pesar de VPP y compresiones efectivas, la adrenalina (epinefrina) está indicada para aumentar la frecuencia y contractilidad cardíaca, preferiblemente por vía IV o IO."
    },
    {
        question: "Acaba de asistir un parto y la placenta ha sido expulsada. La madre comienza a sangrar profusamente y usted nota que el útero se siente blando y 'pastoso' (atonía). ¿Cuál es la intervención más importante?",
        options: [
            {"letter": "a", "text": "Administrar fluidos IV en bolo"},
            {"letter": "b", "text": "Realizar un masaje fúndico vigoroso y firme"},
            {"letter": "c", "text": "Elevar las piernas de la madre"},
            {"letter": "d", "text": "Cubrir el perineo con apósitos estériles"}
        ],
        "correctAnswer": "b",
        "explanation": "La causa más común de hemorragia postparto es la atonía uterina (el útero no se contrae). El masaje fúndico estimula la contracción del miometrio, lo que comprime los vasos sanguíneos y detiene el sangrado. Es la intervención de primera línea."
    },
    {
        question: "A 1 minuto de vida, un neonato presenta: cuerpo rosado con extremidades azules, FC de 110 lpm, hace muecas al estimularlo, tiene algo de flexión en las extremidades y su llanto es débil e irregular. ¿Cuál es su puntuación de APGAR?",
        options: [
            {"letter": "a", "text": "4"},
            {"letter": "b", "text": "6"},
            {"letter": "c", "text": "8"},
            {"letter": "d", "text": "9"}
        ],
        "correctAnswer": "b",
        "explanation": "APGAR: Apariencia (Acrocianosis) = 1; Pulso (>100) = 2; Gesticulación (Muecas) = 1; Actividad (Algo de flexión) = 1; Respiración (Llanto débil) = 1. Total = 6."
    },
    {
        question: "Una paciente en su tercer trimestre, involucrada en un accidente de tráfico, presenta dolor abdominal intenso y constante, un útero 'leñoso' (rígido) y sangrado vaginal oscuro. ¿Cuál es la diferencia clave que sugiere Desprendimiento de Placenta sobre Placenta Previa?",
        options: [
            {"letter": "a", "text": "La presencia de sangrado"},
            {"letter": "b", "text": "La edad gestacional de la paciente"},
            {"letter": "c", "text": "La presencia de dolor abdominal intenso y un útero rígido"},
            {"letter": "d", "text": "El mecanismo de la lesión (trauma)"}
        ],
        "correctAnswer": "c",
        "explanation": "Mientras que el trauma puede causar ambos, el diferenciador clínico clave es el dolor. La Placenta Previa sangra (rojo brillante) pero es indolora. El Desprendimiento (Abruptio) es extremadamente doloroso, con un útero tetánico (rígido) y sangrado oscuro."
    },
    {
        question: "Asiste un parto gemelar. El primer bebé nace sin complicaciones. Las contracciones se reanudan y la presentación del segundo bebé es de nalgas. ¿Cuál es el manejo correcto?",
        options: [
            {"letter": "a", "text": "Intentar girar al bebé a una posición cefálica (versión externa)"},
            {"letter": "b", "text": "Transportar de emergencia, ya que los partos de nalgas no se pueden asistir fuera del hospital"},
            {"letter": "c", "text": "Proceder con el parto de nalgas, apoyando el cuerpo y estando preparado para la maniobra de Mauriceau si la cabeza se atasca"},
            {"letter": "d", "text": "Pinzar el cordón del primer bebé y esperar a que llegue el personal del hospital"}
        ],
        "correctAnswer": "c",
        "explanation": "En un parto gemelar, si el segundo gemelo viene de nalgas, el parto es inminente y se debe asistir. Se maneja como cualquier parto de nalgas, permitiendo que el cuerpo nazca espontáneamente y asistiendo la cabeza al final (creando una vía aérea o usando la maniobra de Mauriceau)."
    },
    {
        question: "Un neonato de 30 minutos de vida, que nació vigoroso, presenta ahora temblores (jitteriness), letargo y una pobre succión. ¿Qué condición reversible y común debe sospechar y comprobar?",
        options: [
            {"letter": "a", "text": "Hipoglucemia"},
            {"letter": "b", "text": "Sepsis"},
            {"letter": "c", "text": "Hipocalcemia"},
            {"letter": "d", "text": "Hipotermia"}
        ],
        "correctAnswer": "a",
        "explanation": "Los temblores, el letargo y la mala alimentación son signos neurológicos clásicos de hipoglucemia neonatal. Es una condición común y fácilmente tratable que debe ser evaluada rápidamente (ej. con glucómetro)."
    },
    {
        question: "Usted atiende a una paciente embarazada de 28 semanas con trauma abdominal cerrado. Está taquicárdica e hipotensa. ¿Cuál es el principio de manejo más importante?",
        options: [
            {"letter": "a", "text": "La mejor forma de reanimar al feto es reanimar agresivamente a la madre"},
            {"letter": "b", "text": "Limitar los fluidos IV para evitar sobrecargar al feto"},
            {"letter": "c", "text": "Colocarla en decúbito supino estricto para la tabla espinal"},
            {"letter": "d", "text": "Priorizar la monitorización cardíaca fetal sobre la vía aérea de la madre"}
        ],
        "correctAnswer": "a",
        "explanation": "La supervivencia fetal depende directamente de la perfusión y oxigenación materna. El manejo debe centrarse en la reanimación agresiva de la madre (ABC, fluidos, oxígeno) y el desplazamiento uterino hacia la izquierda para optimizar el retorno venoso."
    }
];