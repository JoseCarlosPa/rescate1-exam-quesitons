import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es una emergencia respiratoria?",
        answer: "Es una situación donde el paciente no respira adecuadamente o no obtiene suficiente oxígeno para satisfacer las necesidades de su cuerpo.",
    },
    {
        question: "¿Qué signos clave indican una obstrucción de la vía aérea en un paciente consciente?",
        answer: "Ronquidos, estridor (sonido agudo al inhalar), sibilancias (silbido al exhalar), tos débil o ausente, dificultad para hablar y cianosis (coloración azulada de piel/mucosas).",
    },
    {
        question: "¿Cuál es la primera acción ante una obstrucción completa de la vía aérea en un paciente consciente y adulto?",
        answer: "Realizar compresiones abdominales, comúnmente conocidas como la maniobra de Heimlich, de manera enérgica y repetitiva hasta que el objeto sea expulsado o el paciente pierda el conocimiento.",
    },
    {
        question: "¿Qué significa EPOC y cuáles son sus características principales?",
        answer: "EPOC significa Enfermedad Pulmonar Obstructiva Crónica. Se caracteriza por una obstrucción persistente del flujo de aire en los pulmones, generalmente progresiva y asociada a una respuesta inflamatoria crónica de las vías respiratorias y el parénquima pulmonar, causada por la exposición significativa a partículas o gases nocivos (ej., tabaquismo).",
    },
    {
        question: "¿Qué equipo puede utilizar el Técnico en Atención Médica Prehospitalaria (TAMP) para asistir la ventilación?",
        answer: "Principalmente, la bolsa-válvula-mascarilla (BVM) con reservorio de oxígeno. Otros equipos incluyen cánulas orofaríngeas (OPA) o nasofaríngeas (NPA) para mantener la vía aérea permeable.",
    },
    {
        question: "¿Cuándo se administra oxígeno a alto flujo?",
        answer: "Se administra oxígeno a alto flujo en casos de dificultad respiratoria severa, hipoxia evidente (SpO2 < 94%), trauma mayor, shock o cualquier condición que comprometa gravemente la oxigenación del paciente.",
    },
    {
        question: "¿Cuáles son las diferencias clave entre el asma y la EPOC en cuanto a su fisiopatología?",
        answer: "El asma es una enfermedad inflamatoria crónica de las vías respiratorias caracterizada por hiperreactividad bronquial y obstrucción reversible del flujo de aire. La EPOC implica una obstrucción progresiva y generalmente irreversible del flujo de aire, con destrucción del parénquima pulmonar (enfisema) y/o inflamación crónica de los bronquios (bronquitis crónica).",
    },
    {
        question: "¿Qué consideraciones especiales se deben tener al evaluar y manejar a pacientes geriátricos con dificultad respiratoria?",
        answer: "Los pacientes geriátricos pueden presentar síntomas atípicos, tener múltiples comorbilidades que complican el cuadro, una menor reserva fisiológica y una respuesta disminuida a hipoxia. La evaluación debe ser minuciosa y el manejo cuidadoso, prestando atención a la hidratación y a los efectos secundarios de los medicamentos.",
    },
];

export const respiratoryEmergenciesExam: Question[] = [
    {
        "question": "¿Cuál de las siguientes es una característica de la respiración adecuada en un adulto?",
        "options": [
            {"letter": "a", "text": "Uso de músculos accesorios al respirar"},
            {"letter": "b", "text": "Frecuencia respiratoria de 24 respiraciones/min"},
            {"letter": "c", "text": "Sonidos respiratorios claros y uniformes"},
            {"letter": "d", "text": "Respiración con labios fruncidos"}
        ],
        "correctAnswer": "c",
        "explanation": "La respiración adecuada (eupnea) se caracteriza por una frecuencia y profundidad normales (12-20 rpm en adultos), sin esfuerzo aparente y con sonidos pulmonares claros y presentes en ambos hemitórax. El uso de músculos accesorios, taquipnea (>20 rpm) y labios fruncidos son signos de dificultad respiratoria."
    },
    {
        "question": "Un paciente presenta cianosis perioral y un esfuerzo respiratorio notable. Estos son signos de:",
        "options": [
            {"letter": "a", "text": "Ventilación adecuada"},
            {"letter": "b", "text": "Hiperventilación efectiva"},
            {"letter": "c", "text": "Ventilación ineficaz"},
            {"letter": "d", "text": "Recuperación de la dificultad respiratoria"}
        ],
        "correctAnswer": "c",
        "explanation": "La cianosis (coloración azulada de la piel, especialmente alrededor de la boca) indica una oxigenación deficiente de la sangre. El esfuerzo respiratorio notable (uso de músculos accesorios, tiraje) muestra que el cuerpo lucha por respirar. Juntos, son signos claros de que la ventilación es ineficaz o inadecuada."
    },
    {
        "question": "¿Cuál es el objetivo principal de la evaluación respiratoria durante la valoración primaria (ABCDE)?",
        "options": [
            {"letter": "a", "text": "Detectar signos de intoxicación"},
            {"letter": "b", "text": "Determinar la necesidad de inmovilización espinal"},
            {"letter": "c", "text": "Identificar problemas que comprometen la vida inmediatamente y tratarlos"},
            {"letter": "d", "text": "Establecer un diagnóstico definitivo de la enfermedad subyacente"}
        ],
        "correctAnswer": "c",
        "explanation": "En la valoración primaria, el enfoque en la 'B' (Breathing/Respiración) es identificar y manejar de inmediato las amenazas para la vida, como apnea, obstrucción severa, neumotórax a tensión o insuficiencia respiratoria grave. El diagnóstico definitivo se busca después de estabilizar al paciente."
    },
    {
        "question": "El sonido de burbujeo o gorgoteo al respirar (roncus) puede deberse a:",
        "options": [
            {"letter": "a", "text": "Aire atrapado en el espacio pleural"},
            {"letter": "b", "text": "Líquidos o secreciones en la vía aérea superior o grandes bronquios"},
            {"letter": "c", "text": "Espasmo bronquial de las vías aéreas pequeñas"},
            {"letter": "d", "text": "Contracción excesiva del diafragma"}
        ],
        "correctAnswer": "b",
        "explanation": "Los roncus son ruidos respiratorios de baja tonalidad, similares a un ronquido, que se producen cuando el aire pasa a través de las vías aéreas más grandes (tráquea y bronquios) que están parcialmente obstruidas por moco espeso o secreciones. A menudo se pueden limpiar con la tos."
    },
    {
        "question": "Un paciente asmático presenta sibilancias audibles y dificultad para hablar en frases completas. ¿Qué indica este hallazgo?",
        "options": [
            {"letter": "a", "text": "El asma está bien controlada."},
            {"letter": "b", "text": "Hay una acumulación de líquido en los alvéolos."},
            {"letter": "c", "text": "Indica un estrechamiento significativo de las vías aéreas."},
            {"letter": "d", "text": "Se debe a una infección viral leve."}
        ],
        "correctAnswer": "c",
        "explanation": "Las sibilancias son un sonido agudo, similar a un silbido, causado por el paso de aire a través de las vías aéreas inferiores estrechadas (bronquoconstricción). La incapacidad para hablar en frases completas es un signo de dificultad respiratoria severa, ya que el paciente no puede tomar suficiente aire para sostener el habla."
    },
    {
        "question": "¿Cuál de las siguientes condiciones es MENOS probable que cause sibilancias?",
        "options": [
            {"letter": "a", "text": "Bronquitis"},
            {"letter": "b", "text": "Enfisema"},
            {"letter": "c", "text": "Epiglotitis"},
            {"letter": "d", "text": "Asma"}
        ],
        "correctAnswer": "c",
        "explanation": "Las sibilancias (wheezing) son un signo de obstrucción de las vías aéreas inferiores. La epiglotitis es una inflamación de la vía aérea superior (la epiglotis), que típicamente causa estridor, un sonido agudo y áspero durante la inspiración, no sibilancias."
    },
    {
        "question": "Durante la administración de albuterol nebulizado, ¿cuál de los siguientes NO es un efecto secundario esperado?",
        "options": [
            {"letter": "a", "text": "Aumento de la frecuencia cardíaca"},
            {"letter": "b", "text": "Nerviosismo"},
            {"letter": "c", "text": "Bradicardia severa"},
            {"letter": "d", "text": "Temblores musculares"}
        ],
        "correctAnswer": "c",
        "explanation": "El albuterol es un agonista beta-adrenérgico. Si bien su objetivo principal son los receptores beta-2 en los pulmones, también estimula los receptores beta-1 en el corazón, causando efectos secundarios como taquicardia (aumento de la frecuencia cardíaca), temblores y nerviosismo. La bradicardia (frecuencia cardíaca lenta) sería el efecto contrario."
    },
    {
        "question": "Un paciente con EPOC presenta una exacerbación. Además de la dificultad respiratoria, ¿cuál es un signo común en estos pacientes debido a la retención crónica de CO2?",
        "options": [
            {"letter": "a", "text": "Piel seca y caliente"},
            {"letter": "b", "text": "Distensión venosa yugular"},
            {"letter": "c", "text": "Dedos en palillo de tambor (acropaquia)"},
            {"letter": "d", "text": "Respiración de Cheyne-Stokes"}
        ],
        "correctAnswer": "c",
        "explanation": "La acropaquia o 'dedos en palillo de tambor' es un engrosamiento de la punta de los dedos y una curvatura de las uñas. Es un signo físico que se desarrolla con el tiempo debido a la hipoxia crónica (bajos niveles de oxígeno en la sangre), común en pacientes con enfermedades pulmonares avanzadas como la EPOC."
    },
    {
        "question": "En un paciente con posible edema pulmonar, ¿qué sonido respiratorio esperaría escuchar y cuál es su causa?",
        "options": [
            {"letter": "a", "text": "Sibilancias, por espasmo bronquial"},
            {"letter": "b", "text": "Estridor, por obstrucción de vía aérea superior"},
            {"letter": "c", "text": "Crepitantes (estertores), por líquido en los alvéolos"},
            {"letter": "d", "text": "Ronquidos, por relajación de la base de la lengua"}
        ],
        "correctAnswer": "c",
        "explanation": "Los crepitantes (o estertores) son sonidos finos, similares a un burbujeo o al crujido de celofán, que se escuchan durante la inspiración. Son causados por la apertura súbita de los alvéolos que estaban colapsados por la presencia de líquido, como ocurre en el edema pulmonar o la neumonía."
    },
    {
        "question": "¿Cuál es la velocidad de flujo de oxígeno apropiada para un paciente con dificultad respiratoria severa que necesita alto flujo?",
        "options": [
            {"letter": "a", "text": "2 L/min por cánula nasal"},
            {"letter": "b", "text": "4 L/min por mascarilla simple"},
            {"letter": "c", "text": "10-15 L/min por mascarilla con reservorio no recirculante"},
            {"letter": "d", "text": "6 L/min por cánula nasal"}
        ],
        "correctAnswer": "c",
        "explanation": "Una mascarilla con reservorio no recirculante es un dispositivo de alto flujo diseñado para administrar la mayor concentración de oxígeno posible (hasta 90-100%). Para que funcione correctamente y evitar que el paciente vuelva a inhalar su propio CO2, el flujo debe ser lo suficientemente alto (10-15 L/min) para mantener el reservorio constantemente inflado."
    },
    {
        "question": "Cuando se evalúa a un paciente con tos persistente y producción de esputo, ¿qué condición se debe considerar especialmente si hay antecedentes de tabaquismo crónico?",
        "options": [
            {"letter": "a", "text": "Neumonía aguda"},
            {"letter": "b", "text": "Asma bronquial"},
            {"letter": "c", "text": "Bronquitis crónica (parte de EPOC)"},
            {"letter": "d", "text": "Laringitis"}
        ],
        "correctAnswer": "c",
        "explanation": "La bronquitis crónica, un componente principal de la EPOC, se define clínicamente por la presencia de una tos productiva (con esputo) durante al menos 3 meses al año, por 2 años consecutivos. El tabaquismo es el principal factor de riesgo para su desarrollo."
    },
    {
        "question": "¿Cuál de las siguientes NO es una medida de manejo inicial para un paciente con dificultad respiratoria aguda?",
        "options": [
            {"letter": "a", "text": "Asegurar una vía aérea permeable"},
            {"letter": "b", "text": "Administrar oxígeno suplementario"},
            {"letter": "c", "text": "Obtener un historial médico completo detallado antes de cualquier intervención"},
            {"letter": "d", "text": "Posicionar al paciente para facilitar la respiración"}
        ],
        "correctAnswer": "c",
        "explanation": "En una emergencia respiratoria, las intervenciones que salvan vidas son la prioridad. Asegurar la vía aérea, administrar oxígeno y colocar al paciente en una posición cómoda (generalmente sentado) deben realizarse de inmediato. Obtener un historial detallado puede esperar hasta que el paciente esté estabilizado."
    },
    {
        "question": "La tos perruna (tos 'de perro') y el estridor inspiratorio en un niño son signos clásicos de:",
        "options": [
            {"letter": "a", "text": "Asma aguda"},
            {"letter": "b", "text": "Bronquiolitis"},
            {"letter": "c", "text": "Crup (laringotraqueobronquitis)"},
            {"letter": "d", "text": "Neumonía bacteriana"}
        ],
        "correctAnswer": "c",
        "explanation": "El crup es una infección viral común en niños que causa inflamación en la laringe y la tráquea (vía aérea superior). Esta inflamación produce una tos seca y resonante muy característica ('tos perruna') y un sonido agudo al inspirar (estridor) debido al estrechamiento de la vía aérea."
    },
    {
        "question": "¿Cuál de las siguientes NO es una complicación potencial de la intubación endotraqueal?",
        "options": [
            {"letter": "a", "text": "Intubación esofágica"},
            {"letter": "b", "text": "Trauma dental o de las vías aéreas"},
            {"letter": "c", "text": "Hipocapnia severa"},
            {"letter": "d", "text": "Barotrauma pulmonar"}
        ],
        "correctAnswer": "c",
        "explanation": "Las complicaciones directas de la intubación incluyen colocar el tubo en el esófago, causar trauma en dientes o tejidos, o dañar los pulmones con demasiada presión (barotrauma). La hipocapnia (niveles bajos de CO2) no es una complicación del procedimiento en sí, sino el resultado de una ventilación excesiva (demasiado rápida o profunda) después de que el paciente ha sido intubado."
    },
    {
        "question": "En un paciente con neumotórax espontáneo, ¿qué hallazgos esperaría encontrar en la evaluación primaria?",
        "options": [
            {"letter": "a", "text": "Sonidos pulmonares aumentados bilateralmente"},
            {"letter": "b", "text": "Desviación traqueal hacia el lado afectado"},
            {
                "letter": "c",
                "text": "Dolor torácico súbito y disnea, con disminución o ausencia de ruidos pulmonares en el lado afectado"
            },
            {"letter": "d", "text": "Crepitantes difusos en ambos campos pulmonares"}
        ],
        "correctAnswer": "c",
        "explanation": "Un neumotórax ocurre cuando el aire se acumula en el espacio pleural, causando el colapso del pulmón. Esto provoca un inicio agudo de dolor torácico y dificultad para respirar (disnea). Al auscultar, los ruidos respiratorios estarán disminuidos o ausentes en el lado afectado porque el aire no está entrando ni saliendo de ese pulmón colapsado."
    }
]

export const respiratoryEmergenciesChallengingExam: Question[] = [
    {
        question: "Un paciente de 60 años con antecedentes de EPOC presenta disnea severa. La evaluación muestra piel pálida y diaforética, uso de músculos accesorios y sibilancias espiratorias. Su SpO2 es de 85% con aire ambiente. ¿Cuál es el manejo inicial más apropiado para la oxigenoterapia?",
        options: [
            {letter: "a", text: "Oxígeno a 15 L/min con mascarilla con reservorio"},
            {letter: "b", text: "Oxígeno a 2-4 L/min por cánula nasal"},
            {letter: "c", text: "Ventilación con BVM inmediatamente"},
            {letter: "d", text: "Esperar a obtener gasometría arterial antes de administrar oxígeno"}
        ],
        correctAnswer: "b",
        explanation: "En pacientes con EPOC, se debe administrar oxígeno controlado (2-4 L/min) para evitar la supresión del estímulo respiratorio hipóxico. Aunque el SpO2 está bajo, el alto flujo puede causar retención de CO2 y depresión respiratoria. Se debe monitorizar constantemente y titular según respuesta."
    },
    {
        question: "Responde a un llamado por dificultad respiratoria. Encuentras una mujer de 28 años consciente, sentada en posición de trípode, con estridor inspiratorio y disfagia. Niega fiebre pero refiere dolor de garganta que empeoró rápidamente en las últimas 4 horas. ¿Cuál es tu prioridad inmediata?",
        options: [
            {letter: "a", text: "Examinar la garganta con laringoscopio"},
            {letter: "b", text: "Administrar albuterol nebulizado"},
            {
                letter: "c",
                text: "Mantener al paciente calmado y en posición cómoda, preparar para manejo avanzado de vía aérea"
            },
            {letter: "d", text: "Colocar cánula orofaríngea inmediatamente"}
        ],
        correctAnswer: "c",
        explanation: "Este cuadro sugiere epiglotitis aguda. La manipulación de la vía aérea puede precipitar obstrucción completa. La prioridad es mantener al paciente calmado, en posición cómoda, y preparar equipo para cricotiroidotomía de emergencia si es necesario. Evitar cualquier maniobra que pueda agravar la obstrucción."
    },
    {
        question: "Un hombre de 45 años presenta súbitamente dolor torácico agudo y disnea después de toser violentamente. Al examen: taquipnea (32/min), taquicardia (110 lpm), hipertimpanismo y ausencia de ruidos respiratorios en hemitórax derecho. Su TA es 90/60 mmHg. ¿Cuál es la intervención más urgente?",
        options: [
            {letter: "a", text: "Administrar analgésicos para el dolor torácico"},
            {letter: "b", text: "Descompresión inmediata con aguja en 2° espacio intercostal, línea medioclavicular"},
            {letter: "c", text: "Oxígeno por mascarilla y transporte inmediato"},
            {letter: "d", text: "Colocar acceso IV y administrar cristaloides"}
        ],
        correctAnswer: "b",
        explanation: "Los hallazgos sugieren neumotórax a tensión: hipertimpanismo, ausencia de ruidos respiratorios y compromiso hemodinámico (hipotensión). La descompresión inmediata con aguja es vital para salvar la vida antes de que progrese a paro cardíaco."
    },
    {
        question: "Una niña de 6 años presenta tos metálica, fiebre de 38.5°C y estridor inspiratorio que empeora con la agitación. Los padres reportan que los síntomas comenzaron gradualmente hace 2 días. Al examen se observa retracción supraesternal leve. ¿Cuál es el manejo más apropiado?",
        options: [
            {letter: "a", text: "Intubación inmediata"},
            {letter: "b", text: "Posición cómoda, oxígeno humidificado, evitar procedimientos que causen estrés"},
            {letter: "c", text: "Examen de garganta con depresor lingual"},
            {letter: "d", text: "Administrar adrenalina subcutánea"}
        ],
        correctAnswer: "b",
        explanation: "El cuadro sugiere crup (laringotraqueobronquitis viral). El manejo incluye mantener al niño calmado, oxígeno humidificado si tolera, y evitar procedimientos invasivos que puedan empeorar el estridor. El examen de garganta está contraindicado ya que puede precipitar obstrucción completa."
    },
    {
        question: "Atiende a un paciente de 70 años con disnea progresiva, ortopnea y crepitantes bibasales. Presenta edema en extremidades inferiores y distensión venosa yugular. Su SpO2 es 88% y la TA es 160/95 mmHg. ¿Cuál es la intervención prioritaria en el manejo prehospitalario?",
        options: [
            {letter: "a", text: "Posición supina con piernas elevadas"},
            {letter: "b", text: "Posición semisentada, oxígeno de alto flujo y preparar para CPAP"},
            {letter: "c", text: "Broncodilatadores nebulizados"},
            {letter: "d", text: "Líquidos intravenosos para mejorar la precarga"}
        ],
        correctAnswer: "b",
        explanation: "Los síntomas indican edema agudo de pulmón. La posición semisentada reduce el retorno venoso, el oxígeno de alto flujo mejora la oxigenación y el CPAP puede reducir la postcarga y mejorar el intercambio gaseoso. Los líquidos están contraindicados."
    },
    {
        question: "Un paciente asmático de 25 años llega en ambulancia con disnea extrema. No puede hablar frases completas, presenta cianosis perioral, y al auscultar no se escuchan sibilancias pero hay muy poco movimiento de aire. Su FC es 140 lpm y SpO2 82%. ¿Qué indica la ausencia de sibilancias en este contexto?",
        options: [
            {letter: "a", text: "El asma está mejorando"},
            {letter: "b", text: "Necesita más broncodilatadores"},
            {letter: "c", text: "Indica obstrucción crítica y riesgo de paro respiratorio inminente"},
            {letter: "d", text: "El paciente está simulando"}
        ],
        correctAnswer: "c",
        explanation: "La ausencia de sibilancias en un paciente con asma severa indica 'pulmón silente' - obstrucción tan severa que no hay suficiente flujo de aire para generar sonidos. Es un signo ominoso que precede al paro respiratorio y requiere manejo agresivo inmediato."
    },
    {
        question: "Durante el transporte de un paciente intubado y ventilado, notas súbitamente desaturación (SpO2 75%), taquicardia (130 lpm) e hipotensión (85/50 mmHg). La ventilación se siente más difícil. ¿Cuál es tu primera acción utilizando el mnemónico DOPE?",
        options: [
            {letter: "a", text: "Aumentar la FiO2 al 100%"},
            {letter: "b", text: "Desconectar el tubo y ventilar con BVM mientras verificas la posición del tubo"},
            {letter: "c", text: "Administrar adrenalina IV"},
            {letter: "d", text: "Realizar cricotiroidotomía de emergencia"}
        ],
        correctAnswer: "b",
        explanation: "DOPE: Desplazamiento, Obstrucción, Neumotórax, Equipo. Ante deterioro súbito, primero desconectar y ventilar manualmente con BVM para estabilizar mientras se identifica la causa. Esto permite verificar si hay desplazamiento del tubo o obstrucción."
    },
    {
        question: "Un trabajador de construcción de 35 años fue encontrado inconsciente en un espacio confinado. Sus compañeros lo sacaron y ahora está consciente pero confuso, con disnea, cefalea y náuseas. Su SpO2 es 98% con aire ambiente pero su piel está color rojo cereza. ¿Cuál es la causa más probable y el tratamiento?",
        options: [
            {letter: "a", text: "Hipoxia; administrar oxígeno a bajo flujo"},
            {letter: "b", text: "Intoxicación por monóxido de carbono; oxígeno al 100% con mascarilla reservorio"},
            {letter: "c", text: "Golpe de calor; enfriamiento y líquidos"},
            {letter: "d", text: "Hipoglucemia; dextrosa IV"}
        ],
        correctAnswer: "b",
        explanation: "La coloración rojo cereza, SpO2 normal paradójicamente, y el contexto de espacio confinado sugieren intoxicación por CO. El oxígeno al 100% es vital para desplazar el CO de la hemoglobina (vida media de COHb se reduce de 4-6 horas a 30-90 minutos con O2 al 100%)."
    },
    {
        question: "Una mujer embarazada de 32 semanas presenta disnea súbita, dolor torácico pleurítico y taquicardia (115 lpm) después de un vuelo largo. Niega tos o fiebre. Su SpO2 es 91% y presenta taquipnea (28/min). ¿Cuál es la consideración más importante en su manejo prehospitalario?",
        options: [
            {letter: "a", text: "Posición supina para mejorar el retorno venoso"},
            {letter: "b", text: "Posición en decúbito lateral izquierdo, oxígeno suplementario y transporte urgente"},
            {letter: "c", text: "Broncodilatadores por posible asma del embarazo"},
            {letter: "d", text: "Restricción de oxígeno por riesgo teratogénico"}
        ],
        correctAnswer: "b",
        explanation: "El cuadro sugiere embolia pulmonar (factor de riesgo: embarazo + vuelo largo). La posición en decúbito lateral izquierdo previene la compresión aortocava, el oxígeno mejora la oxigenación materno-fetal, y requiere transporte urgente para anticoagulación hospitalaria."
    },
    {
        question: "Atiende a un hombre de 55 años que presenta dificultad respiratoria progresiva. Al examen: uso de músculos accesorios, cianosis central, crepitantes gruesos bilaterales, y expectoración espumosa rosada. Su TA es 180/110 mmHg y FC 105 lpm. Refiere despertar en la noche con disnea. ¿Cuál es la fisiopatología más probable y el tratamiento inicial?",
        options: [
            {letter: "a", text: "Asma nocturna; broncodilatadores nebulizados"},
            {letter: "b", text: "Edema pulmonar cardiogénico; posición semisentada, oxígeno de alto flujo y CPAP"},
            {letter: "c", text: "Neumonía bilateral; antibióticos y oxígeno"},
            {letter: "d", text: "EPOC exacerbado; oxígeno controlado"}
        ],
        correctAnswer: "b",
        explanation: "La disnea paroxística nocturna, esputo espumoso rosado (hemoptisis por ruptura capilar), hipertensión y crepitantes indican edema pulmonar cardiogénico. El CPAP reduce la postcarga cardíaca y mejora el intercambio gaseoso."
    }
];
