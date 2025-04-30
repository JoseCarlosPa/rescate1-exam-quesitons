import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es una hemorragia?",
        answer: "Es la pérdida de sangre del sistema circulatorio, puede ser externa o interna.",
    },
    {
        question: "¿Cómo se clasifica una hemorragia según el vaso afectado?",
        answer: "Arterial, venosa o capilar.",
    },
    {
        question: "¿Cuál es el primer paso para controlar una hemorragia externa?",
        answer: "Aplicar presión directa sobre la herida.",
    },
    {
        question: "¿Qué indica una hemorragia arterial?",
        answer: "Sangre roja brillante que brota con pulsaciones.",
    },
    {
        question: "¿Cuándo se debe usar un torniquete?",
        answer: "En hemorragias extremas que no ceden con presión directa.",
    },
    {
        question: "¿Qué signos pueden indicar una hemorragia interna?",
        answer: "Palidez, taquicardia, hipotensión, dolor abdominal o torácico sin causa externa aparente.",
    },
    {
        question: "¿Qué es el shock hipovolémico?",
        answer: "Estado de perfusión inadecuada debido a pérdida de volumen sanguíneo.",
    },
    {
        question: "¿Qué se debe hacer tras colocar un torniquete?",
        answer: "Registrar hora de aplicación y no retirarlo en el ámbito prehospitalario.",
    },
    {
        question: "¿Qué indica una hemorragia capilar?",
        answer: "Sangrado lento y superficial.",
    },
    {
        question: "¿Qué es un apósito hemostático?",
        answer: "Un material diseñado para ayudar a detener el sangrado de forma rápida y eficaz.",
    },
];


export const hemorragiasQuestions: Question[] = [
    {
        question: "¿Qué tipo de hemorragia se caracteriza por sangre brillante y salida pulsátil?",
        options: [
            { letter: "a", text: "Capilar" },
            { letter: "b", text: "Venosa" },
            { letter: "c", text: "Arterial" },
            { letter: "d", text: "Interna" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el primer paso para controlar una hemorragia externa?",
        options: [
            { letter: "a", text: "Aplicar torniquete" },
            { letter: "b", text: "Aplicar presión directa" },
            { letter: "c", text: "Elevar la extremidad" },
            { letter: "d", text: "Administrar oxígeno" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Una hemorragia venosa se describe como:",
        options: [
            { letter: "a", text: "Sangre brillante y pulsátil" },
            { letter: "b", text: "Sangre oscura que fluye continuamente" },
            { letter: "c", text: "Sangre que gotea lentamente" },
            { letter: "d", text: "Sangre mezclada con aire" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de los siguientes es un signo de hemorragia interna?",
        options: [
            { letter: "a", text: "Sangrado visible" },
            { letter: "b", text: "Hematomas, palidez y taquicardia" },
            { letter: "c", text: "Sangre en el suelo" },
            { letter: "d", text: "Temperatura elevada" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué indica el uso de un torniquete?",
        options: [
            { letter: "a", text: "Hemorragia leve" },
            { letter: "b", text: "Hemorragia venosa controlada" },
            { letter: "c", text: "Hemorragia grave que no responde a presión directa" },
            { letter: "d", text: "Lesión capilar" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es una complicación grave de una hemorragia no controlada?",
        options: [
            { letter: "a", text: "Hiperglucemia" },
            { letter: "b", text: "Shock hipovolémico" },
            { letter: "c", text: "Fiebre" },
            { letter: "d", text: "Hipoxia cerebral" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué debes hacer después de colocar un torniquete?",
        options: [
            { letter: "a", text: "Retirarlo en 10 minutos" },
            { letter: "b", text: "Cubrirlo con una manta" },
            { letter: "c", text: "Registrar la hora y no retirarlo" },
            { letter: "d", text: "Inyectar suero" },
        ],
        correctAnswer: "c",
    },
    {
        question: "El sangrado capilar generalmente:",
        options: [
            { letter: "a", text: "Requiere torniquete" },
            { letter: "b", text: "Se detiene con limpieza y vendaje" },
            { letter: "c", text: "Implica pérdida masiva de sangre" },
            { letter: "d", text: "Tiene pulsaciones" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el objetivo principal en el manejo de una hemorragia masiva?",
        options: [
            { letter: "a", text: "Administrar RCP" },
            { letter: "b", text: "Administrar suero intravenoso" },
            { letter: "c", text: "Detener el sangrado lo antes posible" },
            { letter: "d", text: "Solicitar apoyo logístico" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué se considera una hemorragia crítica?",
        options: [
            { letter: "a", text: "Goteo leve" },
            { letter: "b", text: "Sangrado nasal espontáneo" },
            { letter: "c", text: "Hemorragia que compromete la vida o causa shock" },
            { letter: "d", text: "Sangrado ocular" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué maniobra es más efectiva para controlar un sangrado de nariz (epistaxis)?",
        options: [
            { letter: "a", text: "Inclinar la cabeza hacia atrás" },
            { letter: "b", text: "Aplicar hielo en el abdomen" },
            { letter: "c", text: "Pinzar la nariz y inclinarse hacia adelante" },
            { letter: "d", text: "Soplar con fuerza por la nariz" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es una señal de hipoperfusión en un paciente con hemorragia interna?",
        options: [
            { letter: "a", text: "Presión arterial alta" },
            { letter: "b", text: "Temperatura corporal elevada" },
            { letter: "c", text: "Pulso débil y rápido" },
            { letter: "d", text: "Pupilas dilatadas y reactivas" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Una hemorragia en la cavidad torácica puede provocar:",
        options: [
            { letter: "a", text: "Shock séptico" },
            { letter: "b", text: "Neumotórax espontáneo" },
            { letter: "c", text: "Colapso pulmonar y shock" },
            { letter: "d", text: "Hiperventilación" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el riesgo de aplicar un torniquete durante más de 2 horas?",
        options: [
            { letter: "a", text: "Taquicardia" },
            { letter: "b", text: "Pérdida de sensibilidad" },
            { letter: "c", text: "Daño tisular irreversible" },
            { letter: "d", text: "Hipervolemia" },
        ],
        correctAnswer: "c",
    },
    {
        question: "En un paciente con shock hemorrágico, ¿qué signo puede estar ausente al inicio?",
        options: [
            { letter: "a", text: "Taquicardia" },
            { letter: "b", text: "Palidez" },
            { letter: "c", text: "Hipotensión" },
            { letter: "d", text: "Ansiedad" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué técnica es útil para controlar una hemorragia en una amputación parcial?",
        options: [
            { letter: "a", text: "Torniquete proximal al sitio" },
            { letter: "b", text: "Presión directa y vendaje compresivo" },
            { letter: "c", text: "Compresión de la arteria femoral" },
            { letter: "d", text: "Reinserción del miembro" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es una complicación de la hemorragia no tratada?",
        options: [
            { letter: "a", text: "Hipervolemia" },
            { letter: "b", text: "Shock hipovolémico" },
            { letter: "c", text: "Hipertensión súbita" },
            { letter: "d", text: "Edema cerebral" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un vendaje compresivo eficaz debe ser:",
        options: [
            { letter: "a", text: "Laxo y ligero" },
            { letter: "b", text: "Fijo pero no obstruyente" },
            { letter: "c", text: "Tan apretado que corte circulación" },
            { letter: "d", text: "Cubierto con gasas secas" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es un criterio de éxito en el control de hemorragia externa?",
        options: [
            { letter: "a", text: "Disminución de presión arterial" },
            { letter: "b", text: "Ausencia de sangrado activo" },
            { letter: "c", text: "Aumento de la frecuencia respiratoria" },
            { letter: "d", text: "Dolor creciente en el sitio" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué debes evitar al controlar una hemorragia en un ojo lesionado?",
        options: [
            { letter: "a", text: "Cubrir ambos ojos" },
            { letter: "b", text: "Presionar directamente el ojo" },
            { letter: "c", text: "Colocar al paciente semisentado" },
            { letter: "d", text: "Usar apósitos estériles" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es una ventaja del uso de apósitos hemostáticos modernos?",
        options: [
            { letter: "a", text: "Son reutilizables" },
            { letter: "b", text: "Reducen el dolor" },
            { letter: "c", text: "Aceleran la coagulación local" },
            { letter: "d", text: "Disminuyen la frecuencia respiratoria" },
        ],
        correctAnswer: "c",
    },
    {
        question: "En una hemorragia interna abdominal, el abdomen puede presentarse:",
        options: [
            { letter: "a", text: "Plano y sin sensibilidad" },
            { letter: "b", text: "Distendido, duro y doloroso" },
            { letter: "c", text: "Blando y con ruidos activos" },
            { letter: "d", text: "Frío al tacto" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué indica el signo de Morell-Lavallée?",
        options: [
            { letter: "a", text: "Hematoma subgaleal" },
            { letter: "b", text: "Despegamiento traumático de tejidos" },
            { letter: "c", text: "Hemorragia nasal intensa" },
            { letter: "d", text: "Fractura abierta con sangrado" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué indica un sangrado rectal con signos de shock?",
        options: [
            { letter: "a", text: "Infección intestinal leve" },
            { letter: "b", text: "Hemorragia gastrointestinal masiva" },
            { letter: "c", text: "Hemorragia capilar" },
            { letter: "d", text: "Deshidratación" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué estructura se comprime con torniquete en un sangrado de pierna?",
        options: [
            { letter: "a", text: "Vena cava inferior" },
            { letter: "b", text: "Arteria femoral" },
            { letter: "c", text: "Arteria poplítea" },
            { letter: "d", text: "Vena femoral" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué tipo de apósito se recomienda en heridas penetrantes con hemorragia activa?",
        options: [
            { letter: "a", text: "Gasa seca suelta" },
            { letter: "b", text: "Apósito hemostático impregnado" },
            { letter: "c", text: "Gasa húmeda" },
            { letter: "d", text: "Algodón absorbente" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué debe hacerse si el primer vendaje no detiene el sangrado?",
        options: [
            { letter: "a", text: "Retirar y aplicar otro" },
            { letter: "b", text: "Aplicar otro encima sin retirar el anterior" },
            { letter: "c", text: "Esperar y observar" },
            { letter: "d", text: "Aplicar agua oxigenada" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de los siguientes signos NO es característico de hemorragia interna?",
        options: [
            { letter: "a", text: "Ansiedad" },
            { letter: "b", text: "Hipotensión" },
            { letter: "c", text: "Pérdida de sangre visible" },
            { letter: "d", text: "Taquicardia" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el paso más importante en el tratamiento inicial del shock hemorrágico?",
        options: [
            { letter: "a", text: "Administrar oxígeno a bajo flujo" },
            { letter: "b", text: "Controlar la fuente de sangrado" },
            { letter: "c", text: "Tomar signos vitales" },
            { letter: "d", text: "Cubrir con mantas" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué puede producir un torniquete mal aplicado?",
        options: [
            { letter: "a", text: "Mayor sangrado" },
            { letter: "b", text: "Contención adecuada" },
            { letter: "c", text: "Hiperventilación" },
            { letter: "d", text: "Bradicardia refleja" },
        ],
        correctAnswer: "a",
    },
];
