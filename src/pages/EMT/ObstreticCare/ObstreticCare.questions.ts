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
        question: "Una mujer en su tercer trimestre de embarazo presenta sangrado vaginal de color rojo brillante, pero niega sentir dolor. Esta presentación es más característica de:",
        options: [
            { letter: "a", text: "Desprendimiento prematuro de placenta" },
            { letter: "b", text: "Trabajo de parto activo" },
            { letter: "c", text: "Placenta previa" },
            { letter: "d", text: "Embarazo ectópico" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Durante un parto en el campo, usted observa que el cordón umbilical sale por la vagina antes que la cabeza del bebé. ¿Cuál es su acción inmediata y más importante?",
        options: [
            { letter: "a", text: "Intentar empujar el cordón de vuelta hacia adentro" },
            { letter: "b", text: "Colocar a la madre en posición de rodillas al pecho e insertar una mano enguantada para levantar la cabeza del bebé y liberar la presión del cordón" },
            { letter: "c", text: "Animar a la madre a pujar con más fuerza para acelerar el parto" },
            { letter: "d", text: "Pinzar y cortar el cordón inmediatamente" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un recién nacido tiene una frecuencia cardíaca de 80 latidos/minuto y una respiración jadeante a pesar de haber sido secado y estimulado. ¿Cuál es el siguiente paso en su reanimación?",
        options: [
            { letter: "a", text: "Iniciar compresiones torácicas" },
            { letter: "b", text: "Administrar oxígeno por soplado" },
            { letter: "c", text: "Iniciar ventilación con presión positiva (VPP)" },
            { letter: "d", text: "Calcular la puntuación de APGAR y esperar" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Una paciente embarazada de 36 semanas presenta una convulsión tónico-clónica. Su presión arterial es de 180/110 mmHg. Esta condición se conoce como:",
        options: [
            { letter: "a", text: "Preeclampsia severa" },
            { letter: "b", text: "Eclampsia" },
            { letter: "c", text: "Epilepsia gestacional" },
            { letter: "d", text: "Síndrome de hipotensión supina" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Al asistir un parto, la cabeza del bebé nace y usted nota que el cordón umbilical está enrollado alrededor del cuello (circular de cordón). ¿Cuál es la acción correcta?",
        options: [
            { letter: "a", text: "Jalar el cordón para desenvolverlo" },
            { letter: "b", text: "Ignorarlo y proceder con el parto" },
            { letter: "c", "text": "Intentar deslizar suavemente el cordón sobre la cabeza del bebé; si no es posible, pinzarlo y cortarlo" },
            { letter: "d", text: "Girar el cuerpo del bebé para desenredar el cordón" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Se inician compresiones torácicas en un neonato si su frecuencia cardíaca es inferior a _______ latidos/minuto a pesar de una ventilación efectiva.",
        options: [
            { letter: "a", text: "120" },
            { letter: "b", text: "100" },
            { letter: "c", text: "80" },
            { letter: "d", text: "60" },
        ],
        correctAnswer: "d",
    },
    {
        question: "Usted está transportando a una paciente en su tercer trimestre de embarazo. Para prevenir el síndrome de hipotensión supina, debe colocar a la paciente:",
        options: [
            { letter: "a", text: "En posición de Fowler alta" },
            { letter: "b", text: "Acostada sobre su lado izquierdo" },
            { letter: "c", text: "En posición de Trendelenburg" },
            { letter: "d", text: "Acostada sobre su lado derecho" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Una primigesta (primer embarazo) tiene contracciones cada 3 minutos que duran 60 segundos y siente una fuerte necesidad de pujar. ¿Qué debe hacer usted?",
        options: [
            { letter: "a", text: "Pedirle que contenga la respiración y no puje mientras la transporta rápidamente" },
            { letter: "b", text: "Prepararse para un parto inminente, ya que estos son signos de la segunda etapa del trabajo de parto" },
            { letter: "c", text: "Administrarle analgésicos para detener las contracciones" },
            { letter: "d", text: "Asumir que es un falso trabajo de parto y transportarla sin urgencia" },
        ],
        correctAnswer: "b",
    },
    {
        question: "En un parto de nalgas (pélvico), si la cabeza del bebé queda atrapada después de que el cuerpo ha nacido, ¿cuál es la acción prioritaria?",
        options: [
            { letter: "a", text: "Aplicar tracción firme sobre el cuerpo del bebé para liberarlo" },
            { letter: "b", text: "Transportar inmediatamente sin intervenir" },
            { letter: "c", text: "Insertar una mano enguantada en la vagina para crear un espacio de aire para que el bebé respire" },
            { letter: "d", text: "Pedir a la madre que se ponga de pie para usar la gravedad" },
        ],
        correctAnswer: "c",
    },
    {
        question: "La tercera etapa del trabajo de parto finaliza con:",
        options: [
            { letter: "a", text: "El nacimiento del bebé" },
            { letter: "b", text: "La dilatación completa del cuello uterino" },
            { letter: "c", text: "La expulsión de la placenta" },
            { letter: "d", text: "El pinzamiento del cordón umbilical" },
        ],
        correctAnswer: "c",
    },
];