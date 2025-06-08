import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es un accidente cerebrovascular (ACV)?",
        answer: "Es una interrupción del flujo sanguíneo al cerebro, ya sea por oclusión (isquémico) o por hemorragia (hemorrágico).",
    },
    {
        question: "¿Qué es la escala de Cincinnati?",
        answer: "Es una herramienta prehospitalaria para identificar signos de ACV: caída facial, debilidad en brazo y alteración en el habla.",
    },
    {
        question: "¿Cuándo se considera un estado epiléptico?",
        answer: "Cuando una convulsión dura más de 5 minutos o hay convulsiones repetidas sin recuperación de la conciencia.",
    },
    {
        question: "¿Qué importancia tiene la glucosa en pacientes con alteración neurológica?",
        answer: "La hipoglucemia puede simular un evento neurológico grave, por lo que debe descartarse temprano.",
    },
    {
        question: "¿Qué hacer ante un paciente con convulsión activa?",
        answer: "Proteger la cabeza del paciente, no introducir objetos en la boca, mantener vía aérea y esperar a que termine para evaluar.",
    },
    {
        question: "¿Qué puede causar un síncope?",
        answer: "Problemas cardíacos, deshidratación, dolor intenso, ansiedad o disautonomía.",
    },
];


export const neurologicasQuestions: Question[] = [
    {
        question: "¿Cuál es la causa más común de accidente cerebrovascular (ACV)?",
        options: [
            { letter: "a", text: "Hemorragia cerebral" },
            { letter: "b", text: "Trombosis oclusiva" },
            { letter: "c", text: "Tumor cerebral" },
            { letter: "d", text: "Traumatismo craneal" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un síntoma común del ACV isquémico incluye:",
        options: [
            { letter: "a", text: "Dolor torácico" },
            { letter: "b", text: "Visión doble" },
            { letter: "c", text: "Pérdida súbita de fuerza en un lado del cuerpo" },
            { letter: "d", text: "Convulsiones tónico-clónicas" },
        ],
        correctAnswer: "c",
    },
    {
        question: "La escala de Cincinnati evalúa:",
        options: [
            { letter: "a", text: "La conciencia del paciente" },
            { letter: "b", text: "La probabilidad de un traumatismo craneal" },
            { letter: "c", text: "Signos de un posible ACV" },
            { letter: "d", text: "Nivel de glucosa cerebral" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Durante una convulsión generalizada activa, el primer paso del TAMP debe ser:",
        options: [
            { letter: "a", text: "Administrar glucosa oral" },
            { letter: "b", text: "Restringir los movimientos del paciente" },
            { letter: "c", text: "Proteger la cabeza del paciente y despejar el área" },
            { letter: "d", text: "Dar ventilación con bolsa-válvula-mascarilla" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué indica una puntuación AVDI de 'P'?",
        options: [
            { letter: "a", text: "El paciente está inconsciente" },
            { letter: "b", text: "El paciente responde solo al dolor" },
            { letter: "c", text: "El paciente está alerta" },
            { letter: "d", text: "El paciente responde solo a la voz" },
        ],
        correctAnswer: "b",
    },
    {
        question: "El estado epiléptico es una condición donde:",
        options: [
            { letter: "a", text: "El paciente tiene una convulsión febril" },
            { letter: "b", text: "La convulsión dura más de 5 minutos o hay múltiples sin recuperación" },
            { letter: "c", text: "Las convulsiones se presentan solo con fiebre" },
            { letter: "d", text: "El paciente está en shock hipovolémico" },
        ],
        correctAnswer: "b",
    },
    {
        question: "La hipoglucemia puede simular:",
        options: [
            { letter: "a", text: "Una reacción alérgica" },
            { letter: "b", text: "Un paro respiratorio" },
            { letter: "c", text: "Una emergencia neurológica" },
            { letter: "d", text: "Una fractura abierta" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un signo clásico del ACV en la escala de Cincinnati es:",
        options: [
            { letter: "a", text: "Movimientos respiratorios rápidos" },
            { letter: "b", text: "Parálisis facial" },
            { letter: "c", text: "Bradicardia" },
            { letter: "d", text: "Dolor en pecho" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué nivel de conciencia requiere intervención urgente?",
        options: [
            { letter: "a", text: "Alerta" },
            { letter: "b", text: "Responde a la voz" },
            { letter: "c", text: "Responde al dolor" },
            { letter: "d", text: "No responde" },
        ],
        correctAnswer: "d",
    },
    {
        question: "El síncope se define como:",
        options: [
            { letter: "a", text: "Desmayo prolongado" },
            { letter: "b", text: "Paro cardíaco reversible" },
            { letter: "c", text: "Pérdida transitoria de la conciencia por bajo flujo cerebral" },
            { letter: "d", text: "Estado epiléptico prolongado" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Una de las causas más comunes de convulsiones en pacientes diabéticos es:",
        options: [
            { letter: "a", text: "Hiperglucemia" },
            { letter: "b", text: "Hipoglucemia" },
            { letter: "c", text: "Insomnio" },
            { letter: "d", text: "Estrés emocional" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Ante un paciente con pérdida súbita de conciencia, el primer paso es:",
        options: [
            { letter: "a", text: "Administrar anticonvulsivos" },
            { letter: "b", text: "Revisar vía aérea y signos vitales" },
            { letter: "c", text: "Transportarlo de inmediato sin evaluación" },
            { letter: "d", text: "Administrar oxígeno sin evaluación previa" },
        ],
        correctAnswer: "b",
    },
    {
        question: "El trauma craneoencefálico (TCE) puede ocasionar:",
        options: [
            { letter: "a", text: "Disnea súbita" },
            { letter: "b", text: "Convulsiones, alteración del nivel de conciencia y vómitos" },
            { letter: "c", text: "Dolor abdominal severo" },
            { letter: "d", text: "Cianosis periférica" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un paciente con dificultad para hablar, parálisis facial y debilidad en un brazo probablemente sufre:",
        options: [
            { letter: "a", text: "Infarto al miocardio" },
            { letter: "b", text: "Crisis hipertensiva" },
            { letter: "c", text: "Accidente cerebrovascular" },
            { letter: "d", text: "Hipotermia severa" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de las siguientes NO es una causa común de convulsión?",
        options: [
            { letter: "a", text: "Hipoglucemia" },
            { letter: "b", text: "Fiebre en lactantes" },
            { letter: "c", text: "Hipoxia" },
            { letter: "d", text: "Hipertensión leve" },
        ],
        correctAnswer: "d",
    },
    {
        question: "La escala AVDI se utiliza para:",
        options: [
            { letter: "a", text: "Medir la presión arterial" },
            { letter: "b", text: "Evaluar la oxigenación cerebral" },
            { letter: "c", text: "Valorar el nivel de conciencia" },
            { letter: "d", text: "Diagnosticar síncope" },
        ],
        correctAnswer: "c",
    },
    {
        question: "El tratamiento prioritario en un paciente con convulsión activa es:",
        options: [
            { letter: "a", text: "Administrar medicamentos IM" },
            { letter: "b", text: "Controlar vía aérea y proteger de lesiones" },
            { letter: "c", text: "Aplicar compresas frías" },
            { letter: "d", text: "Inmovilizar en tabla rígida" },
        ],
        correctAnswer: "b",
    },
    {
        question: "El test de glucosa capilar debe realizarse en pacientes con alteración de conciencia porque:",
        options: [
            { letter: "a", text: "Es obligatorio en todo protocolo" },
            { letter: "b", text: "Puede haber hipoglucemia no diagnosticada" },
            { letter: "c", text: "Reduce la necesidad de oxígeno" },
            { letter: "d", text: "Determina el nivel de estrés del paciente" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un paciente que ha sufrido una convulsión y ahora está inconsciente pero respira, debe ser colocado en:",
        options: [
            { letter: "a", text: "Decúbito supino" },
            { letter: "b", text: "Posición de recuperación lateral" },
            { letter: "c", text: "Fowler completo" },
            { letter: "d", text: "Prono con apoyo en el pecho" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Una emergencia neurológica puede estar causada por:",
        options: [
            { letter: "a", text: "Hipoglucemia, TCE o ACV" },
            { letter: "b", text: "Broncoaspiración, fiebre o artritis" },
            { letter: "c", text: "Hipotermia, deshidratación o picaduras" },
            { letter: "d", text: "Dolor de espalda, fiebre o hiperglucemia" },
        ],
        correctAnswer: "a",
    }
];