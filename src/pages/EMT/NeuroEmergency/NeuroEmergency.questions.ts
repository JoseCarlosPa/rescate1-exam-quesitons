import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es un **Evento Vascular Cerebral (EVC)**?",
        answer: "Es una interrupción del flujo sanguíneo al cerebro, ya sea por oclusión de un vaso (isquémico) o por la ruptura de un vaso y hemorragia (hemorrágico).",
    },
    {
        question: "¿Qué es la **Escala de Cincinnati**?",
        answer: "Es una herramienta prehospitalaria utilizada para la detección rápida de un posible EVC, evaluando tres signos clave: caída facial (parálisis facial), debilidad en un brazo (deriva del brazo) y alteraciones en el habla (lenguaje anormal).",
    },
    {
        question: "¿Cuándo se considera un **estado epiléptico**?",
        answer: "Se define como una convulsión que dura más de 5 minutos, o la ocurrencia de convulsiones repetidas sin recuperación completa de la conciencia entre cada evento. Es una emergencia médica.",
    },
    {
        question: "¿Qué importancia tiene la **medición de glucosa** en pacientes con alteración neurológica?",
        answer: "La hipoglucemia (nivel bajo de azúcar en la sangre) puede simular los síntomas de un EVC o una convulsión, por lo que es fundamental descartarla temprano mediante un test de glucosa capilar en cualquier paciente con alteración del estado de conciencia o sospecha de emergencia neurológica.",
    },
    {
        question: "¿Qué acciones iniciales deben tomarse ante un paciente con **convulsión activa**?",
        answer: "Lo principal es asegurar la seguridad del paciente: proteger la cabeza para evitar traumatismos, mover objetos peligrosos del entorno y no intentar restringir los movimientos. No se debe introducir ningún objeto en la boca. Una vez que la convulsión cese, se debe colocar al paciente en posición de recuperación y evaluar su vía aérea y respiración.",
    },
    {
        question: "¿Qué puede causar un **síncope**?",
        answer: "El síncope, o desmayo, es una pérdida súbita y temporal de la conciencia debido a una reducción transitoria del flujo sanguíneo al cerebro. Puede ser causado por problemas cardíacos, deshidratación severa, dolor intenso, ansiedad, disautonomía o ciertas medicaciones.",
    },
    {
        question: "¿Cuáles son las **tres principales causas de cefalea** que requieren atención de emergencia?",
        answer: "Aunque la mayoría de las cefaleas son benignas, aquellas que requieren atención de emergencia incluyen la cefalea asociada a un EVC (especialmente hemorrágico), la meningitis (infección de las membranas que rodean el cerebro y la médula espinal) y la cefalea de 'trueno' (la peor cefalea de la vida, de inicio súbito, que puede indicar una hemorragia subaracnoidea).",
    },
    {
        question: "¿Cuál es la **diferencia clave entre un EVC isquémico y un EVC hemorrágico**?",
        answer: "Un EVC isquémico ocurre cuando un coágulo bloquea el flujo de sangre a una parte del cerebro. Un EVC hemorrágico ocurre cuando un vaso sanguíneo se rompe dentro o alrededor del cerebro, causando sangrado. La diferenciación es crucial para el tratamiento, ya que los tratamientos son muy diferentes.",
    },
];


export const neurologicasQuestions: Question[] = [
    {
        question: "¿Cuál de los siguientes trastornos ocurre cuando el flujo sanguíneo a una parte particular del cerebro se corta por un bloqueo que daña el tejido?",
        options: [
            { letter: "a", text: "Evento vascular cerebral hemorrágico" },
            { letter: "b", text: "Evento vascular cerebral isquémico" },
            { letter: "c", text: "Convulsiones" },
            { letter: "d", text: "Estado epiléptico" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el nombre de la condición cuando hay debilidad en un lado del cuerpo después de un EVC?",
        options: [
            { letter: "a", text: "Afasia" },
            { letter: "b", text: "Ataxia" },
            { letter: "c", text: "Hemiparesia" },
            { letter: "d", text: "Negligencia" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un paciente experimentó una convulsión. ¿Qué criterios se deben cumplir para que este paciente tenga estado epiléptico?",
        options: [
            { letter: "a", text: "Una convulsión de más de 30 minutos" },
            { letter: "b", text: "Una convulsión que fue precedida por un aura" },
            { letter: "c", text: "Múltiples convulsiones con conciencia normal entre cada evento" },
            { letter: "d", text: "Una convulsión que dura más de 5 minutos o convulsiones repetidas sin recuperación de la conciencia" },
        ],
        correctAnswer: "d",
    },
    {
        question: "¿Cuál de las siguientes es una causa metabólica de una convulsión?",
        options: [
            { letter: "a", text: "Tumor cerebral" },
            { letter: "b", text: "Traumatismo craneoencefálico" },
            { letter: "c", text: "Hipoglucemia" },
            { letter: "d", text: "Absceso cerebral" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Este paciente parece estar sufriendo un EVC y una convulsión. ¿Qué condición se asemeja a un EVC y también puede causar convulsiones?",
        options: [
            { letter: "a", text: "Meningitis" },
            { letter: "b", text: "Estado posictal" },
            { letter: "c", text: "Hipoglucemia" },
            { letter: "d", text: "Migraña" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el primer paso en la evaluación de un paciente con sospecha de emergencia neurológica en el entorno prehospitalario?",
        options: [
            { letter: "a", text: "Realizar una tomografía computarizada" },
            { letter: "b", text: "Establecer la vía aérea y asegurar la ventilación" },
            { letter: "c", text: "Administrar medicamentos anticonvulsivos" },
            { letter: "d", text: "Obtener un historial clínico completo" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un paciente con un EVC agudo debe ser transportado preferentemente a un centro médico que tenga la capacidad de ofrecer:",
        options: [
            { letter: "a", text: "Fisioterapia a largo plazo" },
            { letter: "b", text: "Unidad de cuidados paliativos" },
            { letter: "c", text: "Capacidades de tomografía y consulta neurológica especializada" },
            { letter: "d", text: "Servicios de rehabilitación ocupacional" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de los siguientes no es un signo primario evaluado en la escala prehospitalaria de Cincinnati para EVC?",
        options: [
            { letter: "a", text: "Caída facial" },
            { letter: "b", text: "Debilidad de la pierna" },
            { letter: "c", text: "Debilidad del brazo" },
            { letter: "d", text: "Alteración del habla" },
        ],
        correctAnswer: "b",
    },
    {
        question: "En un paciente con cefalea severa, ¿cuál de los siguientes hallazgos sugiere una condición potencialmente mortal como meningitis?",
        options: [
            { letter: "a", text: "Sensibilidad a la luz" },
            { letter: "b", text: "Náuseas y vómitos" },
            { letter: "c", text: "Rigidez de nuca y fiebre" },
            { letter: "d", text: "Dolor pulsátil en un lado de la cabeza" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Después de una convulsión, un paciente se encuentra en un estado de confusión y somnolencia. ¿Cómo se denomina este periodo?",
        options: [
            { letter: "a", text: "Periodo tónico" },
            { letter: "b", text: "Fase clónica" },
            { letter: "c", text: "Estado de ausencia" },
            { letter: "d", text: "Estado posictal" },
        ],
        correctAnswer: "d",
    },
    {
        question: "El test de glucosa capilar debe realizarse en pacientes con alteración de conciencia porque:",
        options: [
            { letter: "a", text: "Es obligatorio en todo protocolo." },
            { letter: "b", text: "Puede haber hipoglucemia no diagnosticada que simule una emergencia neurológica." },
            { letter: "c", text: "Reduce la necesidad de oxígeno." },
            { letter: "d", text: "Determina el nivel de estrés del paciente." },
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
            { letter: "c", text: "Fractura de fémur, apendicitis o otitis" },
            { letter: "d", text: "Hipertensión controlada, alergias estacionales o gripe común" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué tipo de EVC se caracteriza por la ruptura de un vaso sanguíneo en el cerebro?",
        options: [
            { letter: "a", text: "EVC isquémico" },
            { letter: "b", text: "Ataque isquémico transitorio (AIT)" },
            { letter: "c", text: "EVC hemorrágico" },
            { letter: "d", text: "Convulsión" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de los siguientes es un objetivo clave en el manejo prehospitalario de un paciente con sospecha de EVC?",
        options: [
            { letter: "a", text: "Administrar aspirina inmediatamente a todos los pacientes." },
            { letter: "b", text: "Retrasar el transporte para realizar una evaluación exhaustiva en el lugar." },
            { letter: "c", text: "Identificar rápidamente los signos y síntomas y transportar a un centro adecuado." },
            { letter: "d", text: "Inducir el vómito para reducir la presión intracraneal." },
        ],
        correctAnswer: "c",
    },
];