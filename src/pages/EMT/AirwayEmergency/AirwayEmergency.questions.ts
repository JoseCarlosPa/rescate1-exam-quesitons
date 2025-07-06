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

export const respiratoryEmergenciesExam: Question[] =[
    {
        "question": "¿Cuál de las siguientes es una característica de la respiración adecuada en un adulto?",
        "options": [
            { "letter": "a", "text": "Uso de músculos accesorios al respirar" },
            { "letter": "b", "text": "Frecuencia respiratoria de 24 respiraciones/min" },
            { "letter": "c", "text": "Sonidos respiratorios claros y uniformes" },
            { "letter": "d", "text": "Respiración con labios fruncidos" }
        ],
        "correctAnswer": "c",
        "explanation": "La respiración adecuada (eupnea) se caracteriza por una frecuencia y profundidad normales (12-20 rpm en adultos), sin esfuerzo aparente y con sonidos pulmonares claros y presentes en ambos hemitórax. El uso de músculos accesorios, taquipnea (>20 rpm) y labios fruncidos son signos de dificultad respiratoria."
    },
    {
        "question": "Un paciente presenta cianosis perioral y un esfuerzo respiratorio notable. Estos son signos de:",
        "options": [
            { "letter": "a", "text": "Ventilación adecuada" },
            { "letter": "b", "text": "Hiperventilación efectiva" },
            { "letter": "c", "text": "Ventilación ineficaz" },
            { "letter": "d", "text": "Recuperación de la dificultad respiratoria" }
        ],
        "correctAnswer": "c",
        "explanation": "La cianosis (coloración azulada de la piel, especialmente alrededor de la boca) indica una oxigenación deficiente de la sangre. El esfuerzo respiratorio notable (uso de músculos accesorios, tiraje) muestra que el cuerpo lucha por respirar. Juntos, son signos claros de que la ventilación es ineficaz o inadecuada."
    },
    {
        "question": "¿Cuál es el objetivo principal de la evaluación respiratoria durante la valoración primaria (ABCDE)?",
        "options": [
            { "letter": "a", "text": "Detectar signos de intoxicación" },
            { "letter": "b", "text": "Determinar la necesidad de inmovilización espinal" },
            { "letter": "c", "text": "Identificar problemas que comprometen la vida inmediatamente y tratarlos" },
            { "letter": "d", "text": "Establecer un diagnóstico definitivo de la enfermedad subyacente" }
        ],
        "correctAnswer": "c",
        "explanation": "En la valoración primaria, el enfoque en la 'B' (Breathing/Respiración) es identificar y manejar de inmediato las amenazas para la vida, como apnea, obstrucción severa, neumotórax a tensión o insuficiencia respiratoria grave. El diagnóstico definitivo se busca después de estabilizar al paciente."
    },
    {
        "question": "El sonido de burbujeo o gorgoteo al respirar (roncus) puede deberse a:",
        "options": [
            { "letter": "a", "text": "Aire atrapado en el espacio pleural" },
            { "letter": "b", "text": "Líquidos o secreciones en la vía aérea superior o grandes bronquios" },
            { "letter": "c", "text": "Espasmo bronquial de las vías aéreas pequeñas" },
            { "letter": "d", "text": "Contracción excesiva del diafragma" }
        ],
        "correctAnswer": "b",
        "explanation": "Los roncus son ruidos respiratorios de baja tonalidad, similares a un ronquido, que se producen cuando el aire pasa a través de las vías aéreas más grandes (tráquea y bronquios) que están parcialmente obstruidas por moco espeso o secreciones. A menudo se pueden limpiar con la tos."
    },
    {
        "question": "Un paciente asmático presenta sibilancias audibles y dificultad para hablar en frases completas. ¿Qué indica este hallazgo?",
        "options": [
            { "letter": "a", "text": "El asma está bien controlada." },
            { "letter": "b", "text": "Hay una acumulación de líquido en los alvéolos." },
            { "letter": "c", "text": "Indica un estrechamiento significativo de las vías aéreas." },
            { "letter": "d", "text": "Se debe a una infección viral leve." }
        ],
        "correctAnswer": "c",
        "explanation": "Las sibilancias son un sonido agudo, similar a un silbido, causado por el paso de aire a través de las vías aéreas inferiores estrechadas (bronquoconstricción). La incapacidad para hablar en frases completas es un signo de dificultad respiratoria severa, ya que el paciente no puede tomar suficiente aire para sostener el habla."
    },
    {
        "question": "¿Cuál de las siguientes condiciones es MENOS probable que cause sibilancias?",
        "options": [
            { "letter": "a", "text": "Bronquitis" },
            { "letter": "b", "text": "Enfisema" },
            { "letter": "c", "text": "Epiglotitis" },
            { "letter": "d", "text": "Asma" }
        ],
        "correctAnswer": "c",
        "explanation": "Las sibilancias (wheezing) son un signo de obstrucción de las vías aéreas inferiores. La epiglotitis es una inflamación de la vía aérea superior (la epiglotis), que típicamente causa estridor, un sonido agudo y áspero durante la inspiración, no sibilancias."
    },
    {
        "question": "Durante la administración de albuterol nebulizado, ¿cuál de los siguientes NO es un efecto secundario esperado?",
        "options": [
            { "letter": "a", "text": "Aumento de la frecuencia cardíaca" },
            { "letter": "b", "text": "Nerviosismo" },
            { "letter": "c", "text": "Bradicardia severa" },
            { "letter": "d", "text": "Temblores musculares" }
        ],
        "correctAnswer": "c",
        "explanation": "El albuterol es un agonista beta-adrenérgico. Si bien su objetivo principal son los receptores beta-2 en los pulmones, también estimula los receptores beta-1 en el corazón, causando efectos secundarios como taquicardia (aumento de la frecuencia cardíaca), temblores y nerviosismo. La bradicardia (frecuencia cardíaca lenta) sería el efecto contrario."
    },
    {
        "question": "Un paciente con EPOC presenta una exacerbación. Además de la dificultad respiratoria, ¿cuál es un signo común en estos pacientes debido a la retención crónica de CO2?",
        "options": [
            { "letter": "a", "text": "Piel seca y caliente" },
            { "letter": "b", "text": "Distensión venosa yugular" },
            { "letter": "c", "text": "Dedos en palillo de tambor (acropaquia)" },
            { "letter": "d", "text": "Respiración de Cheyne-Stokes" }
        ],
        "correctAnswer": "c",
        "explanation": "La acropaquia o 'dedos en palillo de tambor' es un engrosamiento de la punta de los dedos y una curvatura de las uñas. Es un signo físico que se desarrolla con el tiempo debido a la hipoxia crónica (bajos niveles de oxígeno en la sangre), común en pacientes con enfermedades pulmonares avanzadas como la EPOC."
    },
    {
        "question": "En un paciente con posible edema pulmonar, ¿qué sonido respiratorio esperaría escuchar y cuál es su causa?",
        "options": [
            { "letter": "a", "text": "Sibilancias, por espasmo bronquial" },
            { "letter": "b", "text": "Estridor, por obstrucción de vía aérea superior" },
            { "letter": "c", "text": "Crepitantes (estertores), por líquido en los alvéolos" },
            { "letter": "d", "text": "Ronquidos, por relajación de la base de la lengua" }
        ],
        "correctAnswer": "c",
        "explanation": "Los crepitantes (o estertores) son sonidos finos, similares a un burbujeo o al crujido de celofán, que se escuchan durante la inspiración. Son causados por la apertura súbita de los alvéolos que estaban colapsados por la presencia de líquido, como ocurre en el edema pulmonar o la neumonía."
    },
    {
        "question": "¿Cuál es la velocidad de flujo de oxígeno apropiada para un paciente con dificultad respiratoria severa que necesita alto flujo?",
        "options": [
            { "letter": "a", "text": "2 L/min por cánula nasal" },
            { "letter": "b", "text": "4 L/min por mascarilla simple" },
            { "letter": "c", "text": "10-15 L/min por mascarilla con reservorio no recirculante" },
            { "letter": "d", "text": "6 L/min por cánula nasal" }
        ],
        "correctAnswer": "c",
        "explanation": "Una mascarilla con reservorio no recirculante es un dispositivo de alto flujo diseñado para administrar la mayor concentración de oxígeno posible (hasta 90-100%). Para que funcione correctamente y evitar que el paciente vuelva a inhalar su propio CO2, el flujo debe ser lo suficientemente alto (10-15 L/min) para mantener el reservorio constantemente inflado."
    },
    {
        "question": "Cuando se evalúa a un paciente con tos persistente y producción de esputo, ¿qué condición se debe considerar especialmente si hay antecedentes de tabaquismo crónico?",
        "options": [
            { "letter": "a", "text": "Neumonía aguda" },
            { "letter": "b", "text": "Asma bronquial" },
            { "letter": "c", "text": "Bronquitis crónica (parte de EPOC)" },
            { "letter": "d", "text": "Laringitis" }
        ],
        "correctAnswer": "c",
        "explanation": "La bronquitis crónica, un componente principal de la EPOC, se define clínicamente por la presencia de una tos productiva (con esputo) durante al menos 3 meses al año, por 2 años consecutivos. El tabaquismo es el principal factor de riesgo para su desarrollo."
    },
    {
        "question": "¿Cuál de las siguientes NO es una medida de manejo inicial para un paciente con dificultad respiratoria aguda?",
        "options": [
            { "letter": "a", "text": "Asegurar una vía aérea permeable" },
            { "letter": "b", "text": "Administrar oxígeno suplementario" },
            { "letter": "c", "text": "Obtener un historial médico completo detallado antes de cualquier intervención" },
            { "letter": "d", "text": "Posicionar al paciente para facilitar la respiración" }
        ],
        "correctAnswer": "c",
        "explanation": "En una emergencia respiratoria, las intervenciones que salvan vidas son la prioridad. Asegurar la vía aérea, administrar oxígeno y colocar al paciente en una posición cómoda (generalmente sentado) deben realizarse de inmediato. Obtener un historial detallado puede esperar hasta que el paciente esté estabilizado."
    },
    {
        "question": "La tos perruna (tos 'de perro') y el estridor inspiratorio en un niño son signos clásicos de:",
        "options": [
            { "letter": "a", "text": "Asma aguda" },
            { "letter": "b", "text": "Bronquiolitis" },
            { "letter": "c", "text": "Crup (laringotraqueobronquitis)" },
            { "letter": "d", "text": "Neumonía bacteriana" }
        ],
        "correctAnswer": "c",
        "explanation": "El crup es una infección viral común en niños que causa inflamación en la laringe y la tráquea (vía aérea superior). Esta inflamación produce una tos seca y resonante muy característica ('tos perruna') y un sonido agudo al inspirar (estridor) debido al estrechamiento de la vía aérea."
    },
    {
        "question": "¿Cuál de las siguientes NO es una complicación potencial de la intubación endotraqueal?",
        "options": [
            { "letter": "a", "text": "Intubación esofágica" },
            { "letter": "b", "text": "Trauma dental o de las vías aéreas" },
            { "letter": "c", "text": "Hipocapnia severa" },
            { "letter": "d", "text": "Barotrauma pulmonar" }
        ],
        "correctAnswer": "c",
        "explanation": "Las complicaciones directas de la intubación incluyen colocar el tubo en el esófago, causar trauma en dientes o tejidos, o dañar los pulmones con demasiada presión (barotrauma). La hipocapnia (niveles bajos de CO2) no es una complicación del procedimiento en sí, sino el resultado de una ventilación excesiva (demasiado rápida o profunda) después de que el paciente ha sido intubado."
    },
    {
        "question": "En un paciente con neumotórax espontáneo, ¿qué hallazgos esperaría encontrar en la evaluación primaria?",
        "options": [
            { "letter": "a", "text": "Sonidos pulmonares aumentados bilateralmente" },
            { "letter": "b", "text": "Desviación traqueal hacia el lado afectado" },
            { "letter": "c", "text": "Dolor torácico súbito y disnea, con disminución o ausencia de ruidos pulmonares en el lado afectado" },
            { "letter": "d", "text": "Crepitantes difusos en ambos campos pulmonares" }
        ],
        "correctAnswer": "c",
        "explanation": "Un neumotórax ocurre cuando el aire se acumula en el espacio pleural, causando el colapso del pulmón. Esto provoca un inicio agudo de dolor torácico y dificultad para respirar (disnea). Al auscultar, los ruidos respiratorios estarán disminuidos o ausentes en el lado afectado porque el aire no está entrando ni saliendo de ese pulmón colapsado."
    }
]