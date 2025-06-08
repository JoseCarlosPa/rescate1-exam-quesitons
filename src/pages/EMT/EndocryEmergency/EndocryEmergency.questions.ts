import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es la hipoglucemia y por qué es peligrosa?",
        answer: "La hipoglucemia es una condición donde el nivel de glucosa en sangre es anormalmente bajo. Es peligrosa porque el cerebro necesita un suministro constante de glucosa para funcionar, y una disminución severa puede llevar a un estado mental alterado, convulsiones o incluso la pérdida de conciencia si no se trata rápidamente.",
    },
    {
        question: "¿Cuáles son los signos y síntomas clave de la hiperglucemia?",
        answer: "Los signos y síntomas de la hiperglucemia incluyen sed excesiva (polidipsia), micción frecuente (poliuria), hambre excesiva (polifagia), aliento con olor afrutado (especialmente en cetoacidosis diabética), respiración rápida y profunda (Kussmaul), piel seca y caliente, y fatiga.",
    },
    {
        question: "¿Cómo debe actuar un TAMP ante un paciente con hipoglucemia que está consciente?",
        answer: "Si el paciente con hipoglucemia está consciente y es capaz de tragar, el TAMP debe administrar glucosa oral (por ejemplo, tabletas de glucosa, gel oral, jugo de frutas o bebidas azucaradas no dietéticas). Es fundamental monitorear el estado de conciencia y asegurar la vía aérea.",
    },
    {
        question: "¿Qué es la enfermedad de células falciformes y qué la causa?",
        answer: "La enfermedad de células falciformes es un trastorno genético hereditario que afecta los glóbulos rojos. En lugar de ser redondos y flexibles, los glóbulos rojos adquieren una forma de 'hoz' o 'media luna', lo que les impide fluir libremente por los vasos sanguíneos, causando obstrucciones, dolor y daño a órganos.",
    },
    {
        question: "¿Qué precauciones especiales debe tomar un TAMP con pacientes que padecen hemofilia?",
        answer: "Con pacientes hemofílicos, el TAMP debe evitar, en la medida de lo posible, procedimientos invasivos como inyecciones intramusculares. Es crucial controlar cualquier sangrado con presión directa firme y prolongada, aplicar hielo si es apropiado, y asegurar un transporte rápido al hospital para el manejo definitivo.",
    },
    {
        question: "¿Cuál es la principal diferencia entre la cetoacidosis diabética (CAD) y el estado hiperosmolar hiperglucémico (EHH)?",
        answer: "La cetoacidosis diabética (CAD) es más común en pacientes con diabetes tipo 1 y se caracteriza por hiperglucemia severa, deshidratación, y la acumulación de cetonas que llevan a acidosis metabólica. El estado hiperosmolar hiperglucémico (EHH), más frecuente en diabetes tipo 2, implica una hiperglucemia extremadamente alta y deshidratación severa sin la presencia significativa de cetonas o acidosis."
    },
    {
        question: "¿Qué papel juega el glucagón en el cuerpo y en qué situaciones médicas es relevante?",
        answer: "El glucagón es una hormona producida por el páncreas que tiene el efecto opuesto a la insulina: eleva los niveles de glucosa en la sangre al estimular al hígado para que libere glucosa almacenada. Es relevante en emergencias diabéticas, especialmente en el tratamiento de la hipoglucemia severa cuando la administración oral de glucosa no es posible o efectiva."
    }
];

export const endocrineHematologicQuestions: Question[] = [
    {
        question: "¿Cuál de las siguientes hormonas es responsable de reducir los niveles de glucosa en la sangre?",
        options: [
            { letter: "a", text: "Glucagón" },
            { letter: "b", text: "Epinefrina" },
            { letter: "c", text: "Insulina" },
            { letter: "d", "text": "Cortisol" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un paciente diabético que ha estado haciendo ejercicio intenso y no ha comido en varias horas, ¿cuál de los siguientes es el riesgo más inminente?",
        options: [
            { letter: "a", text: "Hiperglucemia grave" },
            { letter: "b", "text": "Cetoacidosis diabética" },
            { letter: "c", "text": "Hipoglucemia" },
            { letter: "d", "text": "Estado hiperosmolar hiperglucémico" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de los siguientes órganos es más vulnerable a sufrir daño permanente y rápido por niveles de glucosa extremadamente bajos?",
        options: [
            { letter: "a", text: "Corazón" },
            { letter: "b", text: "Riñones" },
            { letter: "c", text: "Hígado" },
            { letter: "d", text: "Cerebro" },
        ],
        correctAnswer: "d",
    },
    {
        question: "Un TAMP evalúa a un paciente diabético con alteración del estado mental. ¿Cuál sería la primera pregunta vital a hacer para orientar el manejo inicial?",
        options: [
            { letter: "a", text: "¿Ha tomado sus medicamentos hoy?" },
            { letter: "b", text: "¿Cuándo fue la última vez que comió o ingirió líquidos azucarados?" },
            { letter: "c", text: "¿Tiene antecedentes de problemas cardíacos?" },
            { letter: "d", text: "¿Siente algún dolor en el pecho?" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un nivel normal de glucosa en sangre en ayunas se considera típicamente dentro del rango de:",
        options: [
            { letter: "a", text: "Menos de 60 mg/dL" },
            { letter: "b", text: "70-110 mg/dL" },
            { letter: "c", text: "120-180 mg/dL" },
            { letter: "d", text: "Más de 200 mg/dL" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es un signo y síntoma temprano común en la hipoglucemia?",
        options: [
            { letter: "a", text: "Aliento afrutado" },
            { letter: "b", text: "Piel seca y caliente" },
            { letter: "c", text: "Sudoración profusa y piel fría/húmeda" },
            { letter: "d", text: "Micción frecuente" },
        ],
        correctAnswer: "c",
    },
    {
        question: "En un paciente con diabetes, la respiración de Kussmaul (profunda y rápida) es un signo clásico de:",
        options: [
            { letter: "a", text: "Hipoglucemia severa" },
            { letter: "b", text: "Reacción alérgica a la insulina" },
            { letter: "c", text: "Cetoacidosis diabética" },
            { letter: "d", text: "Estado hiperosmolar no cetósico" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Si un paciente diabético inconsciente es encontrado, y no se tiene un glucómetro disponible, ¿cuál es la acción más apropiada para un TAMP basada en la alta mortalidad de una condición específica?",
        options: [
            { letter: "a", text: "Asumir hiperglucemia y esperar los paramédicos avanzados." },
            { letter: "b", text: "Asumir hipoglucemia y administrar glucosa oral si es posible." },
            { letter: "c", text: "Asumir hipoglucemia y no administrar nada oralmente por riesgo de aspiración." },
            { letter: "d", text: "Administrar glucagón si está autorizado o transportar rápidamente." },
        ],
        correctAnswer: "d", // Se prioriza el tratamiento de la hipoglucemia por su rápida progresión y riesgo vital.
    },
    {
        question: "¿Cuál de las siguientes NO es una característica de la enfermedad de células falciformes?",
        options: [
            { letter: "a", text: "Glóbulos rojos con forma de hoz" },
            { letter: "b", text: "Riesgo de oclusiones vasculares" },
            { letter: "c", text: "Aumento de la capacidad de transporte de oxígeno de la sangre" },
            { letter: "d", text: "Episodios de dolor agudo (crisis vaso-oclusivas)" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un paciente con hemofilia sufre un traumatismo menor y empieza a sangrar. ¿Cuál es la prioridad inmediata del TAMP?",
        options: [
            { letter: "a", text: "Administrar aspirina para el dolor." },
            { letter: "b", text: "Controlar el sangrado con presión directa y transportar rápidamente." },
            { letter: "c", text: "Aplicar un torniquete de inmediato." },
            { letter: "d", text: "Esperar a que el sangrado se detenga por sí solo." },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de los siguientes es un factor de riesgo para el desarrollo de un estado hiperosmolar hiperglucémico (EHH) en un paciente diabético tipo 2?",
        options: [
            { letter: "a", text: "Omisión de dosis de insulina" },
            { letter: "b", text: "Infección o enfermedad aguda" },
            { letter: "c", text: "Ejercicio extenuante sin ingesta de alimentos" },
            { letter: "d", text: "Consumo excesivo de alcohol" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un TAMP se encuentra con un paciente diabético que presenta un estado mental alterado, piel caliente y seca, y aliento con olor afrutado. ¿Cuál es la condición más probable?",
        options: [
            { letter: "a", text: "Hipoglucemia" },
            { letter: "b", text: "Cetoacidosis diabética" },
            { letter: "c", text: "Reacción insulínica" },
            { letter: "d", text: "Accidente cerebrovascular" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué tipo de diabetes mellitus generalmente se desarrolla en la infancia y requiere insulina exógena para su manejo?",
        options: [
            { letter: "a", text: "Diabetes gestacional" },
            { letter: "b", text: "Diabetes tipo 2" },
            { letter: "c", text: "Diabetes insípida" },
            { letter: "d", text: "Diabetes tipo 1" },
        ],
        correctAnswer: "d",
    },
    {
        question: "Cuando un TAMP evalúa el nivel de glucosa en sangre de un paciente diabético inconsciente y el resultado es de 45 mg/dL, esto indica:",
        options: [
            { letter: "a", text: "Hiperglucemia leve" },
            { letter: "b", text: "Nivel de glucosa normal" },
            { letter: "c", text: "Hipoglucemia severa" },
            { letter: "d", text: "Cetoacidosis diabética" },
        ],
        correctAnswer: "c",
    },
    {
        question: "La 'crisis vaso-oclusiva' es el síntoma más común y distintivo de cuál de las siguientes condiciones:",
        options: [
            { letter: "a", text: "Hemofilia" },
            { letter: "b", text: "Anemia aplásica" },
            { letter: "c", text: "Enfermedad de células falciformes" },
            { letter: "d", text: "Leucemia" },
        ],
        correctAnswer: "c",
    }
];