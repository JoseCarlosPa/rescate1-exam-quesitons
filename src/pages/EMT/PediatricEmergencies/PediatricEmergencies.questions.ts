import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es el Triángulo de Evaluación Pediátrica (TEP)?",
        answer: "Es una herramienta de evaluación rápida que se realiza 'desde la puerta' para formar una impresión general del niño en segundos. Evalúa tres componentes: \n1. Apariencia (tono, interactividad, consuelo, mirada, habla/llanto). \n2. Trabajo Respiratorio (sonidos anormales, retracciones, aleteo nasal). \n3. Circulación Cutánea (color de la piel: palidez, moteado, cianosis).",
    },
    {
        question: "¿Cuál es la principal diferencia anatómica en la vía aérea de un niño comparada con la de un adulto?",
        answer: "La vía aérea de un niño es más pequeña y estrecha, con forma de embudo. Tienen una lengua proporcionalmente más grande y una tráquea más flexible y blanda. Estas diferencias hacen que la vía aérea pediátrica sea mucho más fácil de obstruir.",
    },
    {
        question: "¿Cuál es la diferencia clave entre el crup y la epiglotitis?",
        answer: "El crup es una infección viral de inicio gradual con fiebre baja y una tos característica de 'foca'. La epiglotitis es una infección bacteriana de inicio súbito con fiebre alta, babeo, y el niño a menudo se sienta en posición de trípode. La epiglotitis es una emergencia que amenaza la vida de forma inmediata.",
    },
    {
        question: "¿Por qué la hipotensión es un signo tardío y ominoso de shock en los niños?",
        answer: "Los niños tienen una gran capacidad para compensar la pérdida de volumen o la mala perfusión. Pueden mantener una presión arterial normal durante mucho tiempo aumentando drásticamente su frecuencia cardíaca y contrayendo sus vasos sanguíneos. Cuando finalmente presentan hipotensión, significa que sus mecanismos de compensación han fallado y están cerca de un paro cardiopulmonar.",
    },
    {
        question: "¿Qué es una convulsión febril?",
        answer: "Es una convulsión que ocurre en lactantes o niños pequeños, causada por un aumento rápido de la temperatura corporal. Aunque son alarmantes para los padres, la mayoría de las convulsiones febriles simples son breves y no causan daño a largo plazo.",
    },
    {
        question: "¿Cuál es el manejo de un niño con sospecha de epiglotitis?",
        answer: "La prioridad es mantener la calma del niño y no hacer nada que pueda agitarlo, como inspeccionar la garganta con un abatelenguas. Se debe administrar oxígeno de la manera menos invasiva posible (por soplado) y transportarlo rápidamente en una posición cómoda, generalmente sentado.",
    },
    {
        question: "¿Cuáles son algunos signos de maltrato infantil que un paramédico debe reconocer?",
        answer: "Los signos incluyen lesiones en diferentes etapas de curación, hematomas con patrones específicos (como la forma de una mano o un cinturón), quemaduras con líneas de demarcación claras (como las de inmersión) y una historia del incidente que no coincide con las lesiones observadas.",
    },
    {
        question: "¿Cuál es la causa más común de paro cardíaco en la población pediátrica?",
        answer: "A diferencia de los adultos, donde la causa suele ser cardíaca, el paro cardíaco en los niños es más comúnmente el resultado final de una insuficiencia respiratoria o un shock progresivo.",
    },
];

export const pediatricQuestions: Question[] = [
    {
        "question": "Un niño de 2 años presenta fiebre baja, tos perruna y estridor inspiratorio que empeoró durante la noche. Estos hallazgos son más consistentes con:",
        "options": [
            {"letter": "a", "text": "Asma"},
            {"letter": "b", "text": "Neumonía"},
            {"letter": "c", "text": "Crup (laringotraqueobronquitis)"},
            {"letter": "d", "text": "Epiglotitis"}
        ],
        "correctAnswer": "c",
        "explanation": "La combinación de tos 'perruna' o 'de foca', estridor (ruido agudo al inspirar) y fiebre de bajo grado es la presentación clásica del Crup, una infección viral que causa inflamación en la laringe y la tráquea. La epiglotitis, en cambio, se presenta con fiebre alta, babeo y aspecto tóxico."
    },
    {
        "question": "Al evaluar a un lactante desde la puerta, usted nota que está flácido, tiene la piel moteada y presenta un quejido espiratorio. Según el Triángulo de Evaluación Pediátrica, este niño se clasifica como:",
        "options": [
            {"letter": "a", "text": "Estable"},
            {"letter": "b", "text": "En dificultad respiratoria"},
            {"letter": "c", "text": "En shock"},
            {"letter": "d", "text": "Inestable o 'enfermo'"}
        ],
        "correctAnswer": "d",
        "explanation": "El Triángulo de Evaluación Pediátrica (TEP) valora Apariencia, Trabajo Respiratorio y Circulación cutánea. Flácido (Apariencia anormal), quejido (Trabajo respiratorio anormal) y piel moteada (Circulación anormal) indican que los tres lados del triángulo están alterados, clasificando al niño como 'enfermo' o críticamente inestable."
    },
    {
        "question": "Un niño de 4 años se presenta con inicio súbito de fiebre alta, babeo, dolor de garganta y está sentado en posición de trípode. ¿Cuál es la acción más apropiada?",
        "options": [
            {"letter": "a", "text": "Examinar la garganta con una luz y un abatelenguas"},
            {"letter": "b", "text": "Acostar al niño para evaluar sus pulmones"},
            {
                "letter": "c",
                "text": "Administrar oxígeno de forma no invasiva y transportarlo rápidamente sin agitarlo"
            },
            {"letter": "d", "text": "Inducir el vómito para despejar la vía aérea"}
        ],
        "correctAnswer": "c",
        "explanation": "Estos son los signos clásicos de la epiglotitis, una emergencia de vía aérea potencialmente mortal. Cualquier manipulación de la garganta o agitación del niño puede provocar un laringoespasmo y una obstrucción completa. La prioridad es mantener la calma, administrar oxígeno y transportar urgentemente en posición de confort."
    },
    {
        "question": "¿Cuál de los siguientes es el signo más temprano y confiable de shock compensado en un niño?",
        "options": [
            {"letter": "a", "text": "Hipotensión"},
            {"letter": "b", "text": "Bradicardia"},
            {"letter": "c", "text": "Taquicardia"},
            {"letter": "d", "text": "Ausencia de pulsos periféricos"}
        ],
        "correctAnswer": "c",
        "explanation": "Los niños tienen una gran capacidad de compensación. Su principal mecanismo para mantener el gasto cardíaco ante una pérdida de volumen es aumentar la frecuencia cardíaca. Por lo tanto, la taquicardia es el signo más temprano y sensible de shock en pediatría. La hipotensión es un signo tardío y ominoso."
    },
    {
        "question": "El tratamiento inicial para un niño de 18 meses que está teniendo una convulsión febril activa incluye:",
        "options": [
            {"letter": "a", "text": "Sumergir al niño en agua fría para bajar la fiebre rápidamente"},
            {"letter": "b", "text": "Asegurar la vía aérea, administrar oxígeno y retirar el exceso de ropa"},
            {"letter": "c", "text": "Introducir un objeto en la boca para evitar que se muerda la lengua"},
            {"letter": "d", "text": "Restringir los movimientos del niño para detener la convulsión"}
        ],
        "correctAnswer": "b",
        "explanation": "El manejo de una convulsión activa se centra en los ABC. Proteger la vía aérea (colocándolo de lado si es posible), asegurar la oxigenación y realizar un enfriamiento pasivo (retirar ropa) son las prioridades. NUNCA se debe meter nada en la boca ni restringir los movimientos."
    },
    {
        "question": "Usted es llamado a una escena por un lactante que dejó de respirar. La escena es tranquila y el lactante está en su cuna sin signos evidentes de trauma. Los padres están devastados. Usted debe:",
        "options": [
            {"letter": "a", "text": "Declarar inmediatamente al lactante fallecido y no tocar nada"},
            {
                "letter": "b",
                "text": "Iniciar la reanimación según el protocolo y proporcionar apoyo emocional a la familia"
            },
            {"letter": "c", "text": "Separar a los padres e interrogarlos sobre lo que sucedió"},
            {"letter": "d", "text": "Transportar rápidamente a los padres al hospital y dejar al lactante en la escena"}
        ],
        "correctAnswer": "b",
        "explanation": "En un caso de presunto Síndrome de Muerte Súbita del Lactante (SMSL), el niño se encuentra en paro cardiorrespiratorio. A menos que haya signos obvios de muerte irreversible, se debe iniciar una reanimación cardiopulmonar completa. A la vez, es fundamental tratar a la familia con compasión y apoyo emocional en una situación tan trágica."
    },
    {
        "question": "Un niño de 6 años fue atropellado por un coche. Está inconsciente. Para abrir su vía aérea de forma segura, usted debe usar:",
        "options": [
            {"letter": "a", "text": "La maniobra de inclinación de cabeza y elevación de mentón"},
            {"letter": "b", "text": "La maniobra de empuje mandibular (tracción mandibular)"},
            {"letter": "c", "text": "La inserción de una cánula orofaríngea sin evaluar el reflejo nauseoso"},
            {"letter": "d", "text": "Hiperextender el cuello para alinear la tráquea"}
        ],
        "correctAnswer": "b",
        "explanation": "Debido al mecanismo de lesión, se debe sospechar una lesión de la columna cervical. La maniobra de empuje mandibular (o tracción mandibular) permite abrir la vía aérea sin mover el cuello, minimizando el riesgo de agravar una posible lesión espinal."
    },
    {
        "question": "Al evaluar a un niño con sospecha de maltrato, usted observa múltiples hematomas en diferentes etapas de curación. Su responsabilidad como paramédico es:",
        "options": [
            {"letter": "a", "text": "Confrontar a los padres y exigir una explicación"},
            {
                "letter": "b",
                "text": "Documentar objetivamente sus hallazgos y reportar sus sospechas a las autoridades apropiadas"
            },
            {"letter": "c", "text": "Decidir si el maltrato ocurrió o no antes de tomar cualquier acción"},
            {"letter": "d", "text": "Ignorar los hallazgos si los padres parecen amables y cooperadores"}
        ],
        "correctAnswer": "b",
        "explanation": "Como profesional de la salud, su papel no es investigar ni acusar, sino ser un defensor del niño. La responsabilidad legal y ética es tratar las lesiones, documentar de manera objetiva y sin juicios de valor todos los hallazgos físicos y declaraciones, y reportar sus sospechas a la agencia de protección infantil o a la policía según las leyes locales."
    },
    {
        "question": "Debido a que su cabeza es proporcionalmente más grande, los niños que caen tienden a aterrizar sobre ella. Esto los pone en mayor riesgo de:",
        "options": [
            {"letter": "a", "text": "Lesiones abdominales"},
            {"letter": "b", "text": "Fracturas de extremidades inferiores"},
            {"letter": "c", "text": "Lesiones en la cabeza y la columna cervical"},
            {"letter": "d", "text": "Lesiones torácicas"}
        ],
        "correctAnswer": "c",
        "explanation": "La anatomía pediátrica se caracteriza por una cabeza grande y pesada en relación con el cuerpo y músculos del cuello poco desarrollados. Esto hace que el punto de equilibrio esté más alto, aumentando la probabilidad de que la cabeza sea el primer punto de impacto en un trauma y, por tanto, el riesgo de lesiones craneales y cervicales."
    },
    {
        "question": "Los ruidos respiratorios como el quejido, el estridor o las sibilancias en un niño son parte del componente ___________ del Triángulo de Evaluación Pediátrica.",
        "options": [
            {"letter": "a", "text": "Apariencia"},
            {"letter": "b", "text": "Circulación"},
            {"letter": "c", "text": "Trabajo Respiratorio"},
            {"letter": "d", "text": "Tono muscular"}
        ],
        "correctAnswer": "c",
        "explanation": "El lado del 'Trabajo Respiratorio' del TEP evalúa el esfuerzo que el niño está realizando para respirar. Los ruidos respiratorios audibles (como estridor, quejido, sibilancias o ronquidos) son indicadores clave de una patología y un aumento del trabajo para respirar."
    }
];


/**
 * Preguntas de desafío sobre Emergencias Pediátricas
 */
export const pediatricChallengeQuestions: Question[] = [
    {
        question: "¿Cuál es la relación compresión-ventilación correcta en la RCP de un niño (no lactante) con dos reanimadores?",
        options: [
            { letter: "a", text: "30:2" },
            { letter: "b", text: "15:2" },
            { letter: "c", text: "3:1" },
            { letter: "d", text: "Compresiones continuas sin pausas" }
        ],
        correctAnswer: "b",
        explanation: "Para 2 reanimadores en niños y lactantes (excluyendo neonatos), la relación cambia a 15:2 para maximizar la perfusión y oxigenación. 30:2 se usa para 1 reanimador. 3:1 es para neonatos."
    },
    {
        question: "Un lactante presenta letargo, piel caliente y enrojecida (hiperémica), y pulsos saltones, con TA 70/30 (baja para la edad). ¿Qué tipo de shock es más probable?",
        options: [
            { letter: "a", text: "Shock Hipovolémico (frío)" },
            { letter: "b", text: "Shock Séptico (caliente/distributivo)" },
            { letter: "c", text: "Shock Cardiogénico" },
            { letter: "d", text: "Shock Neurogénico" }
        ],
        correctAnswer: "b",
        explanation: "La presentación 'caliente' (vasodilatación, piel enrojecida, pulsos saltones) es clásica del shock distributivo, comúnmente por sepsis en pediatría. El shock hipovolémico y cardiogénico suelen presentarse 'fríos' (vasoconstricción)."
    },
    {
        question: "¿Cuál es la dosis inicial de bolo de fluido (cristaloide isotónico) para un niño en shock hipovolémico?",
        options: [
            { letter: "a", text: "5 ml/kg" },
            { letter: "b", text: "10 ml/kg" },
            { letter: "c", text: "20 ml/kg" },
            { letter: "d", text: "50 ml/kg" }
        ],
        correctAnswer: "c",
        explanation: "La dosis estándar de PALS para un bolo de fluido en shock (hipovolémico o séptico) es de 20 ml/kg de peso, administrado rápidamente."
    },
    {
        question: "Un niño es encontrado jugando con frascos de pesticidas y ahora presenta salivación excesiva, lagrimeo, miosis (pupilas puntiformes) y bradicardia. ¿Qué toxíndrome sospecha?",
        options: [
            { letter: "a", text: "Colinérgico (Organofosforados)" },
            { letter: "b", text: "Anticolinérgico (Atropina)" },
            { letter: "c", text: "Simpaticomimético (Cocaína)" },
            { letter: "d", text: "Opiáceo" }
        ],
        correctAnswer: "a",
        explanation: "Estos son los signos clásicos de una sobreestimulación parasimpática (toxíndrome colinérgico), recordado por mnemotecnias como SLUDGE/DUMBELS. Es causado por organofosforados. El antídoto es Atropina."
    },
    {
        question: "Un niño con dificultad respiratoria severa que de repente deja de tener sibilancias audibles, se vuelve letárgico y su EtCO2 comienza a subir. Esto indica:",
        options: [
            { letter: "a", text: "Mejoría clínica y resolución del broncoespasmo" },
            { letter: "b", text: "Falla respiratoria inminente (fatiga y 'tórax silencioso')" },
            { letter: "c", text: "Desarrollo de un neumotórax" },
            { letter: "d", "text": "Hipoglucemia concurrente" }
        ],
        correctAnswer: "b",
        explanation: "El 'tórax silencioso' (pérdida de sibilancias) no es mejoría; significa que el niño está demasiado fatigado para mover aire. El aumento del EtCO2 confirma la hipoventilación y la falla respiratoria inminente."
    },
    {
        question: "Un niño es atropellado a baja velocidad. Presenta trauma craneal, trauma torácico y fractura de fémur del mismo lado. Esta constelación de lesiones se conoce como:",
        options: [
            { letter: "a", text: "Tríada de Beck" },
            { letter: "b", text: "Tríada de Cushing" },
            { letter: "c", text: "Tríada de Waddell" },
            { letter: "d", text: "Signo de Battle" }
        ],
        correctAnswer: "c",
        explanation: "La Tríada de Waddell describe el patrón de lesión de un peatón pediátrico: 1) Impacto de parachoques (fractura de fémur/tibia), 2) Impacto de capó (trauma torácico/abdominal), y 3) Caída (trauma craneal/cervical)."
    },
    {
        question: "¿Cuál es una fórmula comúnmente usada para estimar el tamaño (diámetro interno) de un tubo endotraqueal (TET) sin manguito en un niño mayor de 1 año?",
        options: [
            { letter: "a", text: "(Edad en años) + 16 / 4" },
            { letter: "b", text: "(Edad en años / 4) + 4" },
            { letter: "c", text: "El tamaño del dedo meñique del niño" },
            { letter: "d", text: "Peso en kg / 10" }
        ],
        correctAnswer: "b",
        explanation: "La fórmula (Edad en años / 4) + 4 da una estimación rápida del tamaño del TET sin manguito. (La fórmula (Edad+16)/4 es la misma, solo escrita diferente). El tamaño del dedo meñique es un mito poco fiable."
    },
    {
        question: "Un lactante de 10 meses presenta episodios de llanto inconsolable y súbito, seguidos de letargo. Los padres reportan heces 'en jalea de grosella'. ¿Qué sospecha?",
        options: [
            { letter: "a", text: "Apendicitis" },
            { letter: "b", text: "Intususcepción (Invaginación intestinal)" },
            { letter: "c", text: "Gastroenteritis viral" },
            { letter: "d", text: "Cólico del lactante" }
        ],
        correctAnswer: "b",
        explanation: "El llanto cíclico (por dolor cólico) y el letargo intermitente, junto con las heces en 'jalea de grosella' (sangre y moco), son la presentación clásica de la intususcepción, una emergencia abdominal."
    },
    {
        question: "Según PALS, un niño de 5 años con FC de 50 lpm, alteración mental y mala perfusión (bradicardia sintomática), ¿cuál es el tratamiento inicial después de asegurar ABC?",
        options: [
            { letter: "a", text: "Iniciar compresiones torácicas inmediatamente" },
            { letter: "b", text: "Administrar Amiodarona 150 mg" },
            { letter: "c", text: "Administrar Adrenalina 0.01 mg/kg IV/IO" },
            { letter: "d", text: "Desfibrilar a 2 J/kg" }
        ],
        correctAnswer: "c",
        explanation: "En bradicardia sintomática (FC < 60 con mala perfusión), si no responde a oxígeno y ventilación, la Adrenalina es el fármaco de elección. Las compresiones solo se inician si la FC < 60 lpm *a pesar* de oxigenación y ventilación."
    },
    {
        question: "Al calcular el área de superficie corporal quemada (SCT) en un lactante usando la Regla de los 9, ¿qué parte del cuerpo tiene una proporción porcentual MAYOR que en un adulto?",
        options: [
            { letter: "a", text: "Cada pierna" },
            { letter: "b", text: "El área genital" },
            { letter: "c", text: "La cabeza y el cuello" },
            { letter: "d", text: "Cada brazo" }
        ],
        correctAnswer: "c",
        explanation: "En lactantes y niños pequeños, la cabeza es proporcionalmente mucho más grande. En la Regla de los 9 modificada para pediatría, la cabeza y cuello cuentan como 18% (a diferencia del 9% en adultos), y las piernas cuentan menos."
    }
];