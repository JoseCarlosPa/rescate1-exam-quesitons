import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Cuál es la diferencia entre una lesión cerebral primaria y una secundaria?",
        answer: "La lesión primaria es el daño que ocurre en el cerebro en el momento del impacto (p. ej., contusión, laceración). La lesión secundaria es el daño adicional que ocurre después del impacto inicial, debido a factores como la hipoxia (falta de oxígeno), la hipotensión (presión arterial baja) o el aumento de la presión intracraneal. El objetivo del tratamiento prehospitalario es prevenir la lesión secundaria.",
    },
    {
        question: "¿Qué es la tríada de Cushing y qué significa?",
        answer: "La tríada de Cushing es un conjunto de tres signos tardíos y graves del aumento de la presión intracraneal (PIC): \n1. Aumento de la presión arterial sistólica (con una presión de pulso amplia). \n2. Disminución de la frecuencia cardíaca (bradicardia). \n3. Respiraciones irregulares. \nSu presencia indica que el cerebro está a punto de herniarse, lo cual es una emergencia potencialmente mortal.",
    },
    {
        question: "¿Cuáles son los signos de una fractura de la base del cráneo?",
        answer: "Los signos clásicos incluyen el 'signo de Battle' (equimosis o moretones detrás de las orejas), 'ojos de mapache' (equimosis alrededor de los ojos) y la pérdida de líquido cefalorraquídeo (LCR) por la nariz o los oídos, que puede verse como un goteo claro o mezclado con sangre (signo del halo).",
    },
    {
        question: "¿Cuál es la diferencia entre un hematoma epidural y uno subdural?",
        answer: "Un hematoma epidural ocurre por sangrado entre el cráneo y la duramadre, es a menudo arterial y puede presentar un 'intervalo lúcido' antes de un rápido deterioro. Un hematoma subdural ocurre bajo la duramadre, suele ser venoso, de desarrollo más lento y es más común en ancianos y personas con alcoholismo.",
    },
    {
        question: "¿Qué es el shock neurogénico y cómo se diferencia del shock hipovolémico?",
        answer: "El shock neurogénico es causado por una lesión en la médula espinal que interrumpe las señales nerviosas a los vasos sanguíneos, provocando una vasodilatación masiva. A diferencia del shock hipovolémico (causado por pérdida de sangre), el paciente con shock neurogénico presentará hipotensión acompañada de una frecuencia cardíaca normal o lenta (bradicardia) y piel caliente y seca por debajo del nivel de la lesión.",
    },
    {
        question: "¿Cuándo se debe sospechar una lesión en la columna vertebral?",
        answer: "Se debe tener un alto índice de sospecha basado en el mecanismo de lesión (p. ej., caídas, accidentes de tráfico a alta velocidad, zambullidas en aguas poco profundas). También si el paciente se queja de dolor o sensibilidad en el cuello o espalda, tiene déficits neurológicos, un nivel de conciencia alterado o una lesión distractora significativa.",
    },
    {
        question: "¿Por qué se utiliza la maniobra de empuje mandibular (tracción mandibular) en lugar de la de inclinación de cabeza y elevación de mentón en pacientes con sospecha de lesión cervical?",
        answer: "La maniobra de empuje mandibular se utiliza para abrir la vía aérea sin mover o extender el cuello. Esto minimiza el riesgo de agravar una posible lesión inestable en la columna cervical, a diferencia de la maniobra de inclinación de cabeza, que sí mueve la columna.",
    },
    {
        question: "¿Cuál es el objetivo de la inmovilización espinal?",
        answer: "El objetivo principal de la inmovilización espinal (o restricción del movimiento espinal) es prevenir el movimiento de la columna vertebral cuando se sospecha una lesión, para evitar causar o empeorar el daño a la médula espinal.",
    },
];


export const headAndColumnInjuriesQuestions: Question[] = [
    {
        question: "Un paciente que cayó de una escalera presenta una presión arterial de 180/90 mmHg, una frecuencia cardíaca de 52 latidos/min y respiraciones irregulares. Estos hallazgos son más consistentes con:",
        options: [
            { letter: "a", text: "Shock hipovolémico" },
            { letter: "b", text: "Tríada de Cushing debido a aumento de la PIC" },
            { letter: "c", text: "Shock neurogénico" },
            { letter: "d", text: "Una conmoción cerebral simple" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Usted está evaluando a un paciente que sufrió un accidente de motocicleta. El signo más temprano y confiable de un aumento de la presión intracraneal (PIC) es:",
        options: [
            { letter: "a", text: "La aparición de la tríada de Cushing" },
            { letter: "b", text: "Una pupila dilatada y no reactiva" },
            { letter: "c", text: "Una alteración en el nivel de conciencia" },
            { letter: "d", text: "La presencia de vómito en proyectil" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Al atender a un motociclista que no llevaba casco y está inconsciente, ¿cuál es la maniobra correcta para abrir la vía aérea?",
        options: [
            { letter: "a", text: "Inclinación de la cabeza y elevación del mentón" },
            { letter: "b", text: "Maniobra de empuje mandibular (tracción mandibular)" },
            { letter: "c", text: "Girar la cabeza hacia un lado para permitir el drenaje" },
            { letter: "d", text: "Colocar los dedos en la boca para barrer la lengua" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un paciente presenta una herida por arma de fuego en la espalda media. Está hipotenso (86/54 mmHg) y su piel está caliente y seca. Su frecuencia cardíaca es de 60 latidos/min. Este cuadro clínico sugiere fuertemente:",
        options: [
            { letter: "a", text: "Shock hipovolémico por hemorragia interna" },
            { letter: "b", text: "Shock séptico por la herida" },
            { letter: "c", text: "Shock neurogénico por lesión medular" },
            { letter: "d", text: "Una reacción vasovagal por el dolor" },
        ],
        correctAnswer: "c",
    },
    {
        question: "El tratamiento prehospitalario de un paciente con una lesión cerebral traumática se enfoca principalmente en:",
        options: [
            { letter: "a", text: "Administrar analgésicos para controlar el dolor de cabeza" },
            { letter: "b", text: "Reducir la presión intracraneal retirando líquido cefalorraquídeo" },
            { letter: "c", text: "Prevenir la hipoxia y la hipotensión para evitar una lesión secundaria" },
            { letter: "d", text: "Inmovilizar la cabeza con cinta adhesiva directamente a la camilla" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un paciente involucrado en una pelea presenta una breve pérdida de conciencia, seguida de un período en el que está alerta y hablando (intervalo lúcido), y luego su estado mental se deteriora rápidamente. Este patrón es clásico de un:",
        options: [
            { letter: "a", text: "Hematoma subdural" },
            { letter: "b", text: "Hematoma epidural" },
            { letter: "c", text: "Conmoción cerebral severa" },
            { letter: "d", text: "Contusión cerebral" },
        ],
        correctAnswer: "b",
    },
    {
        question: "La inmovilización espinal estaría indicada en cuál de los siguientes pacientes:",
        options: [
            { letter: "a", text: "Un paciente con una herida aislada de cuchillo en la pierna" },
            { letter: "b", text: "Un paciente que se tropezó y tiene una abrasión en la rodilla, pero está alerta y sin dolor de cuello" },
            { letter: "c", text: "Un paciente intoxicado que fue encontrado al pie de unas escaleras" },
            { letter: "d", text: "Un paciente con dolor de pecho que niega cualquier trauma" },
        ],
        correctAnswer: "c",
    },
    {
        question: "La presencia de equimosis detrás de la oreja (signo de Battle) después de un traumatismo craneal es un indicador de:",
        options: [
            { letter: "a", text: "Laceración del cuero cabelludo" },
            { letter: "b", text: "Fractura de la base del cráneo" },
            { letter: "c", text: "Fractura mandibular" },
            { letter: "d", text: "Hematoma subdural" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Durante la ventilación de un paciente con una lesión cerebral grave, es crucial evitar la hiperventilación porque puede:",
        options: [
            { letter: "a", text: "Aumentar la presión arterial de forma peligrosa" },
            { letter: "b", text: "Causar vasoconstricción cerebral y empeorar la isquemia" },
            { letter: "c", text: "Provocar una herniación cerebral inmediata" },
            { letter: "d", text: "Aumentar el edema cerebral" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Al evaluar la función motora y sensorial en las extremidades de un paciente con sospecha de lesión espinal, el objetivo es:",
        options: [
            { letter: "a", text: "Determinar si el paciente está fingiendo sus síntomas" },
            { letter: "b", text: "Evaluar la presencia y el nivel de un posible déficit neurológico" },
            { letter: "c", text: "Descartar por completo una lesión en la columna" },
            { letter: "d", text: "Calcular la Escala de Coma de Glasgow" },
        ],
        correctAnswer: "b",
    },
];