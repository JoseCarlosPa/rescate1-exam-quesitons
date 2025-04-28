import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es el shock?",
        answer: "Es un estado de perfusión inadecuada de oxígeno y nutrientes a los tejidos corporales.",
    },
    {
        question: "¿Cuáles son los tipos principales de shock?",
        answer: "Hipovolémico, cardiogénico, obstructivo y distributivo.",
    },
    {
        question: "¿Qué signos tempranos pueden indicar shock?",
        answer: "Piel fría y sudorosa, taquicardia, ansiedad o confusión, respiración rápida.",
    },
    {
        question: "¿Cuál es el tratamiento inicial prehospitalario del shock?",
        answer: "Controlar hemorragias, administrar oxígeno, posición adecuada, mantener temperatura y transporte rápido.",
    },
    {
        question: "¿Qué causa el shock hipovolémico?",
        answer: "Pérdida de volumen sanguíneo o líquidos corporales.",
    },
    {
        question: "¿Qué evento puede causar shock obstructivo?",
        answer: "Neumotórax a tensión o embolia pulmonar.",
    },
    {
        question: "¿Qué causa el shock cardiogénico?",
        answer: "Fallo de la función de bombeo del corazón, generalmente por infarto agudo al miocardio.",
    },
];

export const shockQuestions: Question[] = [
    {
        question: "¿Qué describe mejor al shock?",
        options: [
            { letter: "a", text: "Presión arterial elevada" },
            { letter: "b", text: "Perfusión inadecuada de tejidos" },
            { letter: "c", text: "Hiperventilación leve" },
            { letter: "d", text: "Hipotermia moderada" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de los siguientes es un signo temprano de shock?",
        options: [
            { letter: "a", text: "Bradicardia" },
            { letter: "b", text: "Hipotermia" },
            { letter: "c", text: "Ansiedad" },
            { letter: "d", text: "Piel caliente" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué tipo de shock es causado por sangrado severo?",
        options: [
            { letter: "a", text: "Distributivo" },
            { letter: "b", text: "Hipovolémico" },
            { letter: "c", text: "Obstructivo" },
            { letter: "d", text: "Cardiogénico" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es un ejemplo de shock obstructivo?",
        options: [
            { letter: "a", text: "Infarto al miocardio" },
            { letter: "b", text: "Neumotórax a tensión" },
            { letter: "c", text: "Pérdida de sangre" },
            { letter: "d", text: "Shock séptico" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué evento puede causar shock cardiogénico?",
        options: [
            { letter: "a", text: "Infección sistémica" },
            { letter: "b", text: "Pérdida de sangre severa" },
            { letter: "c", text: "Infarto agudo de miocardio" },
            { letter: "d", text: "Anafilaxia" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué medida inicial se debe tomar ante signos de shock?",
        options: [
            { letter: "a", text: "Administrar glucosa oral" },
            { letter: "b", text: "Administrar oxígeno" },
            { letter: "c", text: "Aplicar compresas frías" },
            { letter: "d", text: "Colocar en posición sentada" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué tipo de shock está relacionado a reacciones alérgicas graves?",
        options: [
            { letter: "a", text: "Hipovolémico" },
            { letter: "b", text: "Cardiogénico" },
            { letter: "c", text: "Anafiláctico (distributivo)" },
            { letter: "d", text: "Obstructivo" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué signo es consistente con shock compensado?",
        options: [
            { letter: "a", text: "Hipotensión severa" },
            { letter: "b", text: "Piel fría y sudorosa" },
            { letter: "c", text: "Pérdida completa de conciencia" },
            { letter: "d", text: "Bradipnea" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la posición ideal para un paciente en shock, si no hay contraindicaciones?",
        options: [
            { letter: "a", text: "Decúbito prono" },
            { letter: "b", text: "Posición de Fowler" },
            { letter: "c", text: "Supino" },
            { letter: "d", text: "De pie" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué medida ayuda a prevenir la hipotermia en un paciente en shock?",
        options: [
            { letter: "a", text: "Administrar líquidos fríos" },
            { letter: "b", text: "Cubrir al paciente con mantas" },
            { letter: "c", text: "Mantener al paciente mojado" },
            { letter: "d", text: "Retirar toda la ropa" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué factor puede empeorar un estado de shock?",
        options: [
            { letter: "a", text: "Aplicar oxígeno suplementario" },
            { letter: "b", text: "Permitir que el paciente se enfríe" },
            { letter: "c", text: "Colocar al paciente en posición supina" },
            { letter: "d", text: "Controlar la hemorragia" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué tipo de shock puede resultar de una infección grave?",
        options: [
            { letter: "a", text: "Anafiláctico" },
            { letter: "b", text: "Séptico (distributivo)" },
            { letter: "c", text: "Obstructivo" },
            { letter: "d", text: "Cardiogénico" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es una causa común de shock hipovolémico?",
        options: [
            { letter: "a", text: "Infarto" },
            { letter: "b", text: "Trauma con hemorragia" },
            { letter: "c", text: "Anafilaxia" },
            { letter: "d", text: "Embolia pulmonar" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué cambio en el pulso puede sugerir un inicio de shock?",
        options: [
            { letter: "a", text: "Bradicardia" },
            { letter: "b", text: "Taquicardia" },
            { letter: "c", text: "Pulso irregular" },
            { letter: "d", text: "Pulso desaparecido" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué indica un llenado capilar mayor a 2 segundos en un adulto?",
        options: [
            { letter: "a", text: "Perfusión adecuada" },
            { letter: "b", text: "Posible shock" },
            { letter: "c", text: "Hipotermia grave" },
            { letter: "d", text: "Hipertensión" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué signo clínico diferencia un shock descompensado de uno compensado?",
        options: [
            { letter: "a", text: "Taquicardia" },
            { letter: "b", text: "Hipotensión" },
            { letter: "c", text: "Piel fría" },
            { letter: "d", text: "Ansiedad" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la causa principal del shock anafiláctico?",
        options: [
            { letter: "a", text: "Hemorragia" },
            { letter: "b", text: "Infarto de miocardio" },
            { letter: "c", text: "Reacción alérgica severa" },
            { letter: "d", text: "Obstrucción pulmonar" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué prioridad tiene un paciente en shock para el transporte?",
        options: [
            { letter: "a", text: "Emergente (inmediato)" },
            { letter: "b", text: "No urgente" },
            { letter: "c", text: "De rutina" },
            { letter: "d", text: "Programada" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué intervención es crítica para un paciente con shock hipovolémico?",
        options: [
            { letter: "a", text: "Administrar alimentos" },
            { letter: "b", text: "Controlar la hemorragia" },
            { letter: "c", text: "Colocar en posición de Trendelenburg extrema" },
            { letter: "d", text: "Administrar glucosa oral" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué sucede en el shock cardiogénico?",
        options: [
            { letter: "a", text: "El corazón no puede bombear suficiente sangre" },
            { letter: "b", text: "Se produce pérdida masiva de sangre" },
            { letter: "c", text: "Se produce reacción alérgica severa" },
            { letter: "d", text: "El sistema nervioso se deprime" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué es fundamental para la oxigenación adecuada en pacientes en shock?",
        options: [
            { letter: "a", text: "Administrar glucosa" },
            { letter: "b", text: "Asegurar la vía aérea y proporcionar oxígeno" },
            { letter: "c", text: "Rehidratar vía oral" },
            { letter: "d", text: "Colocar frío en las extremidades" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué otro nombre recibe el shock distributivo debido a lesiones medulares?",
        options: [
            { letter: "a", text: "Shock séptico" },
            { letter: "b", text: "Shock neurogénico" },
            { letter: "c", text: "Shock anafiláctico" },
            { letter: "d", text: "Shock hipovolémico" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué signo es característico en shock neurogénico?",
        options: [
            { letter: "a", text: "Piel caliente y seca" },
            { letter: "b", text: "Taquicardia" },
            { letter: "c", text: "Extremidades frías y húmedas" },
            { letter: "d", text: "Bradipnea" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué es una embolia pulmonar?",
        options: [
            { letter: "a", text: "Bloqueo de una arteria en los pulmones" },
            { letter: "b", text: "Inflamación de los pulmones" },
            { letter: "c", text: "Infección viral pulmonar" },
            { letter: "d", text: "Dilatación bronquial" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué tipo de shock puede seguir a una lesión medular cervical alta?",
        options: [
            { letter: "a", text: "Obstructivo" },
            { letter: "b", text: "Distributivo (neurogénico)" },
            { letter: "c", text: "Cardiogénico" },
            { letter: "d", text: "Hipovolémico" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué ayuda a mantener la perfusión en un paciente con shock compensado?",
        options: [
            { letter: "a", text: "Bradicardia" },
            { letter: "b", text: "Vasoconstricción periférica" },
            { letter: "c", text: "Hiperventilación" },
            { letter: "d", text: "Vasodilatación" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué manifestación clínica es indicativa de shock anafiláctico severo?",
        options: [
            { letter: "a", text: "Bradicardia" },
            { letter: "b", text: "Angioedema y dificultad respiratoria" },
            { letter: "c", text: "Dolor abdominal leve" },
            { letter: "d", text: "Hipotermia leve" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué indica un pulso débil y rápido en un paciente traumatizado?",
        options: [
            { letter: "a", text: "Hipoxia leve" },
            { letter: "b", text: "Perfusión normal" },
            { letter: "c", text: "Shock hipovolémico" },
            { letter: "d", text: "Trauma aislado de extremidad" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué acción prehospitalaria inmediata puede ayudar a revertir el shock anafiláctico?",
        options: [
            { letter: "a", text: "Administrar glucosa oral" },
            { letter: "b", text: "Administrar epinefrina intramuscular" },
            { letter: "c", text: "Administrar líquidos fríos" },
            { letter: "d", text: "Administrar carbón activado" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué debes evitar en pacientes en shock con sospecha de lesión medular?",
        options: [
            { letter: "a", text: "Inmovilización" },
            { letter: "b", text: "Movimiento excesivo" },
            { letter: "c", text: "Administración de oxígeno" },
            { letter: "d", text: "Aplicar mantas térmicas" },
        ],
        correctAnswer: "b",
    },
];