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
        question: "¿Cuál de las siguientes descripciones define mejor el shock desde una perspectiva fisiopatológica?",
        options: [
            { letter: "a", text: "Un estado de colapso emocional debido a una mala noticia." },
            { letter: "b", text: "Una respuesta del cuerpo a una descarga eléctrica." },
            { letter: "c", text: "Un estado de hipoperfusión tisular generalizada que compromete el suministro de oxígeno y nutrientes." },
            { letter: "d", text: "Una disminución transitoria de la presión arterial." },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un paciente presenta una herida por arma blanca con hemorragia severa, piel fría y pálida, pulso rápido y débil. ¿Qué tipo de shock es el más probable?",
        options: [
            { letter: "a", text: "Shock cardiogénico" },
            { letter: "b", text: "Shock hipovolémico" },
            { letter: "c", text: "Shock anafiláctico" },
            { letter: "d", text: "Shock neurogénico" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Una paciente de 65 años con antecedentes de infarto presenta dificultad respiratoria, ruidos pulmonares con crepitaciones en todos los campos y una presión arterial de 92/60 mmHg. ¿Cuál es el diagnóstico diferencial más probable?",
        options: [
            { letter: "a", text: "Shock hipovolémico" },
            { letter: "b", text: "Shock anafiláctico" },
            { letter: "c", text: "Shock cardiogénico" },
            { letter: "d", text: "Shock neurogénico" },
        ],
        correctAnswer: "c",
    },
    {
        question: "En un paciente con signos de shock, ¿qué indica una frecuencia cardíaca rápida y un llenado capilar prolongado?",
        options: [
            { letter: "a", text: "Una perfusión adecuada." },
            { letter: "b", text: "Un mecanismo compensatorio inicial del cuerpo." },
            { letter: "c", text: "Un signo de shock irreversible." },
            { letter: "d", text: "Un estado de shock psicogénico." },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la primera acción prioritaria para un paramédico al abordar a un paciente en shock?",
        options: [
            { letter: "a", text: "Administrar medicamentos intravenosos." },
            { letter: "b", text: "Realizar un historial clínico detallado." },
            { letter: "c", text: "Asegurar la vía aérea y administrar oxígeno de alto flujo." },
            { letter: "d", text: "Esperar la llegada de soporte avanzado." },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un paciente alérgico a las picaduras de abeja es picado y desarrolla rápidamente urticaria generalizada, edema facial y dificultad respiratoria severa. ¿Qué tipo de shock está experimentando?",
        options: [
            { letter: "a", text: "Shock séptico" },
            { letter: "b", text: "Shock cardiogénico" },
            { letter: "c", text: "Shock anafiláctico" },
            { letter: "d", text: "Shock neurogénico" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un pulso débil y rápido en un paciente traumatizado es un indicio clave de:",
        options: [
            { letter: "a", text: "Hipoxia leve." },
            { letter: "b", text: "Perfusión normal." },
            { letter: "c", text: "Shock hipovolémico." },
            { letter: "d", text: "Trauma aislado de extremidad." },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué acción prehospitalaria inmediata es crucial para ayudar a revertir el shock anafiláctico?",
        options: [
            { letter: "a", text: "Administrar glucosa oral." },
            { letter: "b", text: "Administrar epinefrina intramuscular." },
            { letter: "c", text: "Administrar líquidos fríos." },
            { letter: "d", text: "Administrar carbón activado." },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué debes evitar en pacientes en shock con sospecha de lesión medular?",
        options: [
            { letter: "a", text: "Inmovilización." },
            { letter: "b", text: "Movimientos bruscos del cuello o columna." },
            { letter: "c", text: "Administración de oxígeno." },
            { letter: "d", text: "Monitoreo de signos vitales." },
        ],
        correctAnswer: "b",
    },
    {
        question: "La 'pista' clave en el shock que indica que la 'bomba' (el corazón) está fallando es:",
        options: [
            { letter: "a", text: "Líquido (sangre) insuficiente." },
            { letter: "b", text: "Un contenedor (vasos) dilatado." },
            { letter: "c", text: "Crepitaciones pulmonares y dificultad para respirar." },
            { letter: "d", text: "Pérdida de control del sistema nervioso." },
        ],
        correctAnswer: "c",
    },
    {
        question: "Si un paciente en shock hipovolémico se mantiene en posición supina con las piernas elevadas, ¿cuál es el objetivo principal de esta posición?",
        options: [
            { letter: "a", text: "Facilitar la respiración." },
            { letter: "b", text: "Disminuir el retorno venoso al corazón." },
            { letter: "c", text: "Mejorar el flujo sanguíneo hacia los órganos vitales superiores." },
            { letter: "d", text: "Prevenir la hipotermia." },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de los siguientes signos vitales sería el más indicativo de un shock descompensado?",
        options: [
            { letter: "a", text: "Frecuencia cardíaca de 90 lpm." },
            { letter: "b", text: "Presión arterial de 110/70 mmHg." },
            { letter: "c", text: "Pulso rápido y débil con presión arterial en descenso." },
            { letter: "d", text: "Piel tibia y seca." },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué término describe el equilibrio y la estabilidad de todos los sistemas del cuerpo?",
        options: [
            { letter: "a", text: "Hipotermia" },
            { letter: "b", text: "Sistema nervioso autónomo" },
            { letter: "c", text: "Perfusión" },
            { letter: "d", text: "Homeostasis" },
        ],
        correctAnswer: "d",
    },
    {
        question: "Un paciente con shock neurogénico probablemente presentará:",
        options: [
            { letter: "a", text: "Piel fría y sudorosa." },
            { letter: "b", text: "Bradicardia y piel caliente y seca por debajo del nivel de la lesión." },
            { letter: "c", text: "Taquicardia severa y dificultad respiratoria." },
            { letter: "d", text: "Dolor abdominal agudo." },
        ],
        correctAnswer: "b",
    },
    {
        question: "Durante la evaluación de un paciente en shock, ¿qué signo podría alertar al paramédico de que la condición del paciente está pasando a la siguiente etapa de shock (descompensado o irreversible)?",
        options: [
            { letter: "a", text: "Aumento de la ansiedad." },
            { letter: "b", text: "Disminución de la presión arterial sistólica." },
            { letter: "c", text: "Piel más caliente y rosada." },
            { letter: "d", text: "Mejora del llenado capilar." },
        ],
        correctAnswer: "b",
    },
];