import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Por qué es importante conocer la terminología médica?",
        answer: "Conocer la terminología médica es esencial para comunicarse de manera efectiva en el entorno de atención médica, asegurando la precisión en los diagnósticos, tratamientos y en la documentación de las intervenciones. Esto facilita la comprensión entre profesionales y mejora la seguridad del paciente."
    },
    {
        question: "¿Qué es una raíz en la terminología médica?",
        answer: "Una raíz es la base de un término médico que generalmente indica una parte del cuerpo, un órgano o una función. Por ejemplo, 'cardi-' se refiere al corazón y 'dermat-' a la piel."
    },
    {
        question: "¿Qué significa el sufijo '-itis'?",
        answer: "'-itis' es un sufijo que indica inflamación de una parte del cuerpo. Ejemplo: 'gastritis', que es la inflamación del estómago."
    },
    {
        question: "¿Qué son los prefijos en la terminología médica?",
        answer: "Los prefijos se agregan al principio de una raíz para alterar o especificar su significado, indicando, por ejemplo, ubicación, número o estado. Por ejemplo, 'hipo-' significa debajo o bajo, como en 'hipotensión', que es una presión arterial baja."
    },
    {
        question: "¿Cuáles son algunas abreviaturas comunes en la terminología médica?",
        answer: "Algunas abreviaturas comunes incluyen 'RCP' para reanimación cardiopulmonar, 'ECG' para electrocardiograma y 'IV' para vía intravenosa. Es crucial conocer las abreviaturas propensas a errores para evitarlos."
    },
    {
        question: "¿Cuál es el propósito principal de la terminología médica?",
        answer: "El propósito principal es proporcionar un lenguaje estandarizado y universal para la comunicación entre profesionales de la salud, asegurando la precisión y claridad en la documentación y el intercambio de información."
    },
    {
        question: "¿Cómo se desglosa el significado de un término médico?",
        answer: "El significado de un término médico se desglosa identificando sus componentes: el prefijo (si lo hay), la raíz o raíces, y el sufijo. Cada componente aporta una parte del significado total del término."
    },
    {
        question: "¿Qué significa el término 'anterior' o 'ventral' en anatomía?",
        answer: "Ambos términos se refieren a la parte frontal del cuerpo o hacia la parte delantera de una estructura."
    },
    {
        question: "¿Qué significa el término 'posterior' o 'dorsal' en anatomía?",
        answer: "Ambos términos se refieren a la parte trasera del cuerpo o hacia la parte posterior de una estructura."
    },
    {
        question: "¿Cuál es la diferencia entre 'proximal' y 'distal'?",
        answer: "'Proximal' se refiere a la parte de una extremidad o estructura que está más cerca del tronco o del punto de origen, mientras que 'distal' se refiere a la parte que está más lejos del tronco o del punto de origen."
    },
    {
        question: "¿Qué es la posición 'Fowler'?",
        answer: "La posición Fowler es una posición en la que el paciente está semisentado, con la cabeza elevada. Se utiliza comúnmente para pacientes con dificultad respiratoria."
    },
    {
        question: "¿Qué es la posición 'supina'?",
        answer: "La posición supina es cuando el paciente se encuentra acostado boca arriba."
    },
    {
        question: "¿Qué es la posición 'prona'?",
        answer: "La posición prona es cuando el paciente se encuentra acostado boca abajo."
    },
    {
        question: "¿Qué indica el término 'medial'?",
        answer: "Medial indica una estructura que está más cerca de la línea media del cuerpo."
    },
    {
        question: "¿Qué indica el término 'lateral'?",
        answer: "Lateral indica una estructura que está más lejos de la línea media del cuerpo o hacia el lado."
    }
];


export const medicTermsQuestions: Question[] = [
    {
        "question": "¿Cuál es el término para la posición en la que el paciente se encuentra acostado boca arriba?",
        "options": [
            { "letter": "a", "text": "Prona" },
            { "letter": "b", "text": "Fowler" },
            { "letter": "c", "text": "Supina" },
            { "letter": "d", "text": "Decúbito lateral" }
        ],
        "correctAnswer": "c",
        "explanation": "La posición supina describe al paciente acostado sobre su espalda, con la cara hacia arriba. La posición prona es boca abajo, y la posición de Fowler es semisentado."
    },
    {
        "question": "Al documentar una llamada, usted nota que el paciente está sufriendo. ¿Cuál es la palabra raíz para dolor?",
        "options": [
            { "letter": "a", "text": "alges" },
            { "letter": "b", "text": "angi" },
            { "letter": "c", "text": "asten" },
            { "letter": "d", "text": "centesis" }
        ],
        "correctAnswer": "a",
        "explanation": "La raíz 'alges' o el sufijo '-algia' se refieren al dolor. Por ejemplo, un 'analgésico' es un medicamento que quita el dolor. 'Angi' se refiere a los vasos, 'asten' a la debilidad y '-centesis' a una punción."
    },
    {
        "question": "Usted observa que el paciente reporta debilidad. ¿Cuál es la palabra raíz para debilidad?",
        "options": [
            { "letter": "a", "text": "alges" },
            { "letter": "b", "text": "angi" },
            { "letter": "c", "text": "asten" },
            { "letter": "d", "text": "centesis" }
        ],
        "correctAnswer": "c",
        "explanation": "La raíz 'asten' se refiere a la debilidad. El término médico para la debilidad generalizada es 'astenia'. 'Alges' es dolor, 'angi' es vaso, y '-centesis' es punción."
    },
    {
        "question": "El paciente reporta debilidad en un lado. ¿Cuál es el término para 'en un lado'?",
        "options": [
            { "letter": "a", "text": "bilateral" },
            { "letter": "b", "text": "hemilateral" },
            { "letter": "c", "text": "lateral" },
            { "letter": "d", "text": "unilateral" }
        ],
        "correctAnswer": "d",
        "explanation": "Aunque 'hemi-' significa 'mitad' (como en hemiplejia), el término estándar y más preciso para describir algo que afecta a un solo lado del cuerpo es 'unilateral' ('uni-' significa uno). 'Bilateral' significa ambos lados."
    },
    {
        "question": "El paciente no parece tener alergias. ¿Cuál es el acrónimo para esto según el capítulo?",
        "options": [
            { "letter": "a", "text": "NA" },
            { "letter": "b", "text": "ANK" },
            { "letter": "c", "text": "NAC" },
            { "letter": "d", "text": "ANN" }
        ],
        "correctAnswer": "a",
        "explanation": "En muchos contextos de documentación, 'NA' puede usarse como abreviatura de 'No Aplica' o, como en este caso, 'No Alergias'. Es importante conocer las abreviaturas estandarizadas de su servicio."
    },
    {
        "question": "El paciente ve doble. ¿Qué término médico significa visión doble?",
        "options": [
            { "letter": "a", "text": "Biocular" },
            { "letter": "b", "text": "Bióptico" },
            { "letter": "c", "text": "Diocular" },
            { "letter": "d", "text": "Diplopía" }
        ],
        "correctAnswer": "d",
        "explanation": "El término 'diplopía' se compone del prefijo 'diplo-', que significa doble, y el sufijo '-opía', que se refiere a la visión. Por lo tanto, diplopía es la percepción de dos imágenes de un solo objeto."
    },
    {
        "question": "El paciente tose sangre. ¿Cuál es el término médico para toser sangre?",
        "options": [
            { "letter": "a", "text": "Hemogastritis" },
            { "letter": "b", "text": "Hematuria" },
            { "letter": "c", "text": "Hematemesis" },
            { "letter": "d", "text": "Hemoptisis" }
        ],
        "correctAnswer": "d",
        "explanation": "Hemoptisis es el término específico para la expectoración o tos con sangre proveniente de los pulmones o el tracto respiratorio. 'Hematemesis' es vomitar sangre y 'hematuria' es sangre en la orina."
    },
    {
        "question": "¿Qué término describe la acumulación de líquido en los tejidos?",
        "options": [
            { "letter": "a", "text": "Edema" },
            { "letter": "b", "text": "Hematoma" },
            { "letter": "c", "text": "Infección" },
            { "letter": "d", "text": "Cianosis" }
        ],
        "correctAnswer": "a",
        "explanation": "El edema es la hinchazón causada por el exceso de líquido atrapado en los tejidos del cuerpo, específicamente en el espacio intersticial. Un hematoma es una acumulación de sangre."
    },
    {
        "question": "¿Qué significa el término 'gastroenteritis'?",
        "options": [
            { "letter": "a", "text": "Inflamación del estómago y los intestinos" },
            { "letter": "b", "text": "Inflamación de los pulmones" },
            { "letter": "c", "text": "Dolor en el pecho" },
            { "letter": "d", "text": "Infección de la piel" }
        ],
        "correctAnswer": "a",
        "explanation": "Este término se descompone en: 'gastro-' (estómago), 'entero-' (intestinos) e '-itis' (inflamación). Literalmente significa inflamación del estómago y los intestinos."
    },
    {
        "question": "¿Qué significa el término 'hepatomegalia'?",
        "options": [
            { "letter": "a", "text": "Aumento del tamaño del hígado" },
            { "letter": "b", "text": "Falta de oxígeno en la sangre" },
            { "letter": "c", "text": "Insuficiencia renal" },
            { "letter": "d", "text": "Aumento de la presión arterial" }
        ],
        "correctAnswer": "a",
        "explanation": "Este término se descompone en: 'hepato-' (relacionado con el hígado) y '-megalia' (agrandamiento o aumento de tamaño). Por lo tanto, significa un hígado anormalmente grande."
    },
    {
        "question": "¿Qué término se refiere a la presión arterial elevada?",
        "options": [
            { "letter": "a", "text": "Hipotensión" },
            { "letter": "b", "text": "Taquicardia" },
            { "letter": "c", "text": "Hipertensión" },
            { "letter": "d", "text": "Bradicardia" }
        ],
        "correctAnswer": "c",
        "explanation": "'Hiper-' es un prefijo que significa alto o excesivo. 'Tensión' se refiere a la presión. Por lo tanto, hipertensión es el término médico para la presión arterial alta. 'Hipotensión' es presión baja."
    },
    {
        "question": "¿Cuál es el término para el sangrado excesivo?",
        "options": [
            { "letter": "a", "text": "Isquemia" },
            { "letter": "b", "text": "Hemorragia" },
            { "letter": "c", "text": "Trombosis" },
            { "letter": "d", "text": "Embolia" }
        ],
        "correctAnswer": "b",
        "explanation": "Hemorragia es el término médico que describe la pérdida de sangre desde el sistema circulatorio, especialmente cuando es profusa o incontrolada."
    },
    {
        "question": "¿Qué significa el prefijo 'taqui-'?",
        "options": [
            { "letter": "a", "text": "Lento" },
            { "letter": "b", "text": "Rápido" },
            { "letter": "c", "text": "Grande" },
            { "letter": "d", "text": "Pequeño" }
        ],
        "correctAnswer": "b",
        "explanation": "El prefijo 'taqui-' proviene del griego y significa rápido o veloz. Se usa en términos como 'taquicardia' (frecuencia cardíaca rápida) y 'taquipnea' (frecuencia respiratoria rápida)."
    },
    {
        "question": "¿Qué significa el prefijo 'bradi-'?",
        "options": [
            { "letter": "a", "text": "Lento" },
            { "letter": "b", "text": "Rápido" },
            { "letter": "c", "text": "Mucho" },
            { "letter": "d", "text": "Poco" }
        ],
        "correctAnswer": "a",
        "explanation": "El prefijo 'bradi-' proviene del griego y significa lento. Se usa en términos como 'bradicardia' (frecuencia cardíaca lenta) y 'bradipnea' (frecuencia respiratoria lenta)."
    },
    {
        "question": "¿Qué término describe la inflamación de las articulaciones?",
        "options": [
            { "letter": "a", "text": "Osteoporosis" },
            { "letter": "b", "text": "Artritis" },
            { "letter": "c", "text": "Mialgia" },
            { "letter": "d", "text": "Esclerosis" }
        ],
        "correctAnswer": "b",
        "explanation": "El término 'artritis' se compone de 'artro-', que significa articulación, y el sufijo '-itis', que significa inflamación. Por lo tanto, es la inflamación de una o más articulaciones."
    },
    {
        "question": "¿Qué significa el sufijo '-algia'?",
        "options": [
            { "letter": "a", "text": "Inflamación" },
            { "letter": "b", "text": "Dolor" },
            { "letter": "c", "text": "Hinchazón" },
            { "letter": "d", "text": "Debilidad" }
        ],
        "correctAnswer": "b",
        "explanation": "El sufijo '-algia' indica dolor. Por ejemplo, 'mialgia' es dolor muscular ('mio-' = músculo) y 'neuralgia' es dolor en un nervio ('neuro-' = nervio)."
    },
    {
        "question": "¿Qué término se refiere a la falta de oxígeno en los tejidos?",
        "options": [
            { "letter": "a", "text": "Hiperoxia" },
            { "letter": "b", "text": "Anoxia" },
            { "letter": "c", "text": "Hipoxia" },
            { "letter": "d", "text": "Apnea" }
        ],
        "correctAnswer": "c",
        "explanation": "Hipoxia ('hipo-' = bajo, 'oxia' = oxígeno) es el término que describe un suministro inadecuado de oxígeno a los tejidos del cuerpo. 'Anoxia' se refiere a la ausencia total de oxígeno, que es una condición más extrema y rara."
    },
    {
        "question": "¿Cuál de los siguientes términos describe una estructura más cercana al tronco?",
        "options": [
            { "letter": "a", "text": "Distal" },
            { "letter": "b", "text": "Lateral" },
            { "letter": "c", "text": "Proximal" },
            { "letter": "d", "text": "Superficial" }
        ],
        "correctAnswer": "c",
        "explanation": "Proximal es un término direccional que significa más cerca del punto de origen o del tronco del cuerpo. Por ejemplo, el hombro es proximal a la muñeca. 'Distal' significa más lejos del tronco."
    },
    {
        "question": "¿Qué posición corporal se describe cuando el paciente se encuentra semisentado, con la parte superior del cuerpo elevada?",
        "options": [
            { "letter": "a", "text": "Decúbito supino" },
            { "letter": "b", "text": "Trendelenburg" },
            { "letter": "c", "text": "Fowler" },
            { "letter": "d", "text": "Prona" }
        ],
        "correctAnswer": "c",
        "explanation": "La posición de Fowler implica sentar al paciente con la cabeza y el torso elevados, generalmente entre 45 y 60 grados. Es una posición común para pacientes con dificultad respiratoria o problemas cardíacos."
    },
    {
        "question": "¿Cuál es el término para 'hacia el frente del cuerpo'?",
        "options": [
            { "letter": "a", "text": "Posterior" },
            { "letter": "b", "text": "Dorsal" },
            { "letter": "c", "text": "Ventral" },
            { "letter": "d", "text": "Caudal" }
        ],
        "correctAnswer": "c",
        "explanation": "Ventral y anterior son términos sinónimos que se refieren a la parte frontal o delantera del cuerpo. 'Dorsal' o 'posterior' se refieren a la parte de la espalda."
    },
    {
        "question": "¿Qué abreviatura se utiliza comúnmente para 'sin antecedentes conocidos de alergias'?",
        "options": [
            { "letter": "a", "text": "SAMA" },
            { "letter": "b", "text": "NKA" },
            { "letter": "c", "text": "NOAL" },
            { "letter": "d", "text": "SNA" }
        ],
        "correctAnswer": "b",
        "explanation": "NKA es la abreviatura estándar en inglés para 'No Known Allergies' (Sin Alergias Conocidas). Es ampliamente reconocida internacionalmente en la documentación médica para indicar rápidamente la ausencia de alergias."
    },
    {
        "question": "¿Qué significa el sufijo '-ectomía'?",
        "options": [
            { "letter": "a", "text": "Inflamación" },
            { "letter": "b", "text": "Extirpación quirúrgica" },
            { "letter": "c", "text": "Estudio de" },
            { "letter": "d", "text": "Registro" }
        ],
        "correctAnswer": "b",
        "explanation": "El sufijo '-ectomía' se refiere a la extirpación o remoción quirúrgica de una parte del cuerpo. Por ejemplo, una 'apendicectomía' es la extirpación del apéndice."
    },
    {
        "question": "¿Qué término describe una estructura que está más cerca de la superficie del cuerpo?",
        "options": [
            { "letter": "a", "text": "Profundo" },
            { "letter": "b", "text": "Interno" },
            { "letter": "c", "text": "Superficial" },
            { "letter": "d", "text": "Medial" }
        ],
        "correctAnswer": "c",
        "explanation": "Superficial es el término anatómico direccional que se usa para describir algo que está más cerca de la superficie exterior del cuerpo. Por ejemplo, la piel es superficial a los músculos. Lo opuesto es 'profundo'."
    },
    {
        "question": "¿Cuál es el término médico para la 'inflamación del hígado'?",
        "options": [
            { "letter": "a", "text": "Nefritis" },
            { "letter": "b", "text": "Hepatitis" },
            { "letter": "c", "text": "Gastritis" },
            { "letter": "d", "text": "Colitis" }
        ],
        "correctAnswer": "b",
        "explanation": "Este término se compone de 'hepato-', que se refiere al hígado, y el sufijo '-itis', que significa inflamación. Por lo tanto, hepatitis es la inflamación del hígado."
    }
]

export const medicTermsChallengingQuestions: Question[] = [
    {
        question: "Un paciente de 65 años presenta disnea paroxística nocturna, ortopnea, y edema bilateral en miembros inferiores. Al auscultar, escucha crepitantes bibasales y un soplo holosistólico en el ápex. Estos hallazgos sugieren una condición que involucra el término 'insuficiencia'. ¿Cuál es la interpretación más precisa de esta terminología en el contexto clínico?",
        options: [
            { letter: "a", text: "Insuficiencia se refiere únicamente a la incapacidad del corazón para contraerse" },
            { letter: "b", text: "Insuficiencia cardíaca significa la incapacidad del corazón para mantener un gasto cardíaco adecuado para las demandas metabólicas del cuerpo" },
            { letter: "c", text: "El término insuficiencia siempre indica una condición irreversible" },
            { letter: "d", text: "Insuficiencia se refiere solo a problemas con las válvulas cardíacas" }
        ],
        correctAnswer: "b",
        explanation: "La 'insuficiencia cardíaca' es un síndrome clínico donde el corazón no puede bombear suficiente sangre para satisfacer las demandas metabólicas del cuerpo. Los síntomas descritos (disnea paroxística nocturna, ortopnea, edema) son manifestaciones clásicas. El término 'insuficiencia' en medicina indica incapacidad funcional, no necesariamente estructural, y puede ser aguda o crónica, reversible o irreversible dependiendo de la etiología."
    },
    {
        question: "Durante la evaluación de un politraumatizado, documenta 'contusiones en región torácica anterior con posible neumotórax a tensión'. Un médico de emergencias cuestiona el uso del término 'posible' en su reporte. Considerando la precisión terminológica en documentación médica, ¿cómo debería interpretar y usar términos de certeza diagnóstica?",
        options: [
            { letter: "a", text: "Los términos como 'posible', 'probable' y 'sugestivo' deben evitarse completamente en reportes médicos" },
            { letter: "b", text: "Los calificadores de certeza ('posible', 'probable', 'compatible con') reflejan el nivel de confianza diagnóstica basado en hallazgos clínicos disponibles" },
            { letter: "c", text: "Solo los médicos pueden usar términos de incertidumbre diagnóstica" },
            { letter: "d", text: "Todos los diagnósticos prehospitalarios deben presentarse como definitivos" }
        ],
        correctAnswer: "b",
        explanation: "Los calificadores de certeza son herramientas lingüísticas esenciales en medicina que reflejan honestamente el nivel de confianza diagnóstica. 'Posible' indica sospecha clínica con evidencia limitada, 'probable' sugiere alta probabilidad con evidencia sustancial, y 'compatible con' indica que los hallazgos concuerdan con una condición específica. Esta precisión terminológica es crucial para comunicar apropiadamente la incertidumbre inherente en la medicina de emergencia."
    },
    {
        question: "Un paciente presenta 'dolor epigástrico irradiado a hipocondrio derecho, acompañado de náuseas, vómitos y signo de Murphy positivo'. Al explicar esto al personal hospitalario, necesita demostrar comprensión profunda de la terminología anatómica y semiológica. ¿Cuál es la interpretación más completa de esta descripción?",
        options: [
            { letter: "a", text: "El dolor está en el estómago y se extiende hacia el hígado" },
            { letter: "b", text: "El dolor origina en la región superior del abdomen (epigastrio) y se irradia hacia el cuadrante superior derecho (hipocondrio derecho), con signos que sugieren patología de la vesícula biliar" },
            { letter: "c", text: "Todos los términos se refieren al mismo lugar del abdomen" },
            { letter: "d", text: "La descripción solo indica problemas digestivos generales" }
        ],
        correctAnswer: "b",
        explanation: "Esta descripción utiliza terminología anatómica precisa: 'epigastrio' se refiere a la región superior central del abdomen, 'hipocondrio derecho' al cuadrante superior derecho bajo las costillas. La 'irradiación' describe la propagación del dolor desde el punto de origen. El 'signo de Murphy' es una maniobra semiológica específica para detectar inflamación de la vesícula biliar. Esta constelación de términos y hallazgos sugiere colecistitis aguda, demostrando cómo la terminología médica precisa guía el razonamiento clínico."
    },
    {
        question: "Al documentar el estado neurológico de un paciente con trauma craneoencefálico, escribe: 'paciente presenta estupor, con respuesta solo a estímulos dolorosos, pupilas anisocóricas con midriasis derecha'. El neurólogo solicita clarificación sobre el uso de 'estupor' versus otros términos de alteración de conciencia. ¿Cuál es la distinción terminológica más precisa?",
        options: [
            { letter: "a", text: "Estupor, obnubilación, y coma son sinónimos intercambiables" },
            { letter: "b", text: "Estupor indica un estado de reducción marcada de la actividad mental con respuesta mínima al entorno, distinto de obnubilación (reducción leve) y coma (ausencia de respuesta)" },
            { letter: "c", text: "Estupor solo se usa en pacientes psiquiátricos" },
            { letter: "d", text: "El término estupor es obsoleto y no debe usarse" }
        ],
        correctAnswer: "b",
        explanation: "La terminología de alteración de conciencia forma un espectro específico: 'obnubilación' indica reducción leve de la conciencia con respuesta disminuida; 'estupor' implica reducción marcada con respuesta mínima pero preservada a estímulos intensos; 'coma' representa ausencia de respuesta a estímulos. 'Anisocoria' significa pupilas de diferente tamaño, y 'midriasis' dilatación pupilar. Esta precisión terminológica es crucial para comunicar el grado exacto de compromiso neurológico y guiar decisiones terapéuticas."
    },
    {
        question: "Durante el manejo de una emergencia respiratoria, identifica 'taquipnea con tiraje intercostal, uso de músculos accesorios y sibilancias espiratorias difusas'. Al comunicarse con control médico, debe demostrar comprensión de estos términos fisiopatológicos. ¿Cuál es la interpretación más completa de esta terminología?",
        options: [
            { letter: "a", text: "Todos los términos simplemente indican que el paciente tiene dificultad para respirar" },
            { letter: "b", text: "Cada término describe un aspecto específico del compromiso respiratorio: frecuencia aumentada, signos de esfuerzo respiratorio, y obstrucción del flujo aéreo" },
            { letter: "c", text: "Los términos médicos solo complican la descripción de síntomas simples" },
            { letter: "d", text: "Solo 'taquipnea' es un término médico válido, los otros son descriptivos" }
        ],
        correctAnswer: "b",
        explanation: "'Taquipnea' especifica frecuencia respiratoria aumentada (>20/min en adultos); 'tiraje intercostal' indica retracción de espacios entre costillas durante inspiración, signo de aumento del esfuerzo respiratorio; 'músculos accesorios' se refiere al uso de músculos no habituales para respirar (esternocleidomastoideo, escalenos); 'sibilancias espiratorias' describe sonidos agudos durante espiración por obstrucción del flujo aéreo. Esta terminología precisa permite comunicar la severidad y mecanismo fisiopatológico específico del compromiso respiratorio."
    },
    {
        question: "Al evaluar un paciente con dolor abdominal, documenta: 'abdomen distendido con dolor difuso, timpanismo a la percusión, ruidos hidroaéreos disminuidos y signo de rebote positivo en fosa ilíaca derecha'. Un cirujano pregunta sobre la especificidad de su uso terminológico. ¿Cuál es la importancia de cada término en el contexto semiológico?",
        options: [
            { letter: "a", text: "Todos los términos significan lo mismo: dolor abdominal severo" },
            { letter: "b", text: "Cada término aporta información específica sobre diferentes aspectos de la patología abdominal: distensión, contenido intestinal, motilidad y signos de irritación peritoneal" },
            { letter: "c", text: "Los términos técnicos son innecesarios para la comunicación efectiva" },
            { letter: "d", text: "Solo el signo de rebote es clínicamente relevante" }
        ],
        correctAnswer: "b",
        explanation: "'Timpanismo' a la percusión indica presencia de gas (versus matidez por líquido o masa); 'ruidos hidroaéreos disminuidos' sugiere reducción de la motilidad intestinal; 'signo de rebote' (Blumberg) evalúa irritación peritoneal mediante dolor al retirar bruscamente la mano tras palpación profunda; 'fosa ilíaca derecha' especifica la localización anatómica. Esta terminología semiológica permite diferenciar entre obstrucción intestinal, íleo paralítico, y peritonitis, guiando decisiones sobre urgencia quirúrgica."
    },
    {
        question: "En un caso de emergencia cardiológica, reporta: 'paciente con disnea de esfuerzo progresiva, ortopnea de tres almohadas, edema con fóvea en miembros inferiores y hepatomegalia dolorosa'. El cardiólogo elogia su uso preciso de terminología. ¿Qué demuestra esta precisión terminológica sobre su comprensión fisiopatológica?",
        options: [
            { letter: "a", text: "Conocimiento memorístico de términos médicos sin comprensión clínica" },
            { letter: "b", text: "Comprensión de la fisiopatología de la insuficiencia cardíaca y sus manifestaciones específicas en diferentes sistemas orgánicos" },
            { letter: "c", text: "Capacidad para usar palabras complicadas innecesariamente" },
            { letter: "d", text: "Solo describe síntomas obvios que cualquiera puede identificar" }
        ],
        correctAnswer: "b",
        explanation: "'Disnea de esfuerzo progresiva' indica deterioro gradual de la capacidad funcional; 'ortopnea de tres almohadas' cuantifica la severidad de la congestión pulmonar; 'edema con fóvea' describe edema que deja huella al presionar, indicando retención de líquidos; 'hepatomegalia dolorosa' sugiere congestión hepática por falla cardíaca derecha. Esta terminología precisa demuestra comprensión de cómo la insuficiencia cardíaca afecta diferentes sistemas: pulmonar (ortopnea), periférico (edema) y hepato-esplácnico (hepatomegalia)."
    },
    {
        question: "Durante la evaluación neurológica de un paciente post-convulsivo, documenta: 'período post-ictal con confusión, afasia expresiva transitoria, paresia del hemicuerpo derecho y signo de Babinski positivo izquierdo'. ¿Qué nivel de comprensión neurológica demuestra esta documentación terminológica?",
        options: [
            { letter: "a", text: "Uso correcto de terminología neurológica específica que localiza la disfunción en el hemisferio cerebral izquierdo" },
            { letter: "b", text: "Descripción confusa que mezcla términos sin relación" },
            { letter: "c", text: "Terminología innecesariamente complicada para síntomas simples" },
            { letter: "d", text: "Documentación incompleta que no aporta información útil" }
        ],
        correctAnswer: "a",
        explanation: "'Post-ictal' se refiere al período después de una convulsión; 'afasia expresiva' indica dificultad para producir lenguaje con comprensión preservada; 'paresia' significa debilidad parcial (versus parálisis = pérdida completa); 'hemicuerpo derecho' especifica lateralidad; 'signo de Babinski positivo' indica respuesta anormal plantar (extensión del dedo gordo). Esta constelación sugiere lesión del hemisferio cerebral izquierdo, específicamente áreas de Broca (afasia expresiva) y tracto corticoespinal (paresia contralateral), demostrando correlación anatomo-clínica precisa."
    },
    {
        question: "Al comunicar sobre un paciente con emergencia toxicológica, informa: 'paciente con miosis, bradicardia, hipotermia, depresión respiratoria y fasciculaciones musculares tras exposición a organofosforados'. ¿Qué demuestra el uso preciso de esta terminología sobre su comprensión toxicológica?",
        options: [
            { letter: "a", text: "Memorización de síntomas sin comprensión del mecanismo" },
            { letter: "b", text: "Comprensión del síndrome colinérgico y su fisiopatología específica" },
            { letter: "c", text: "Confusión entre diferentes tipos de intoxicaciones" },
            { letter: "d", text: "Uso innecesario de terminología médica compleja" }
        ],
        correctAnswer: "b",
        explanation: "'Miosis' (contracción pupilar), 'bradicardia' (frecuencia cardíaca lenta), 'fasciculaciones' (contracciones musculares involuntarias) son componentes del síndrome colinérgico por inhibición de la acetilcolinesterasa. Los organofosforados causan acumulación de acetilcolina en sinapsis colinérgicas, produciendo efectos muscarínicos (miosis, bradicardia, hipersecreciones) y nicotínicos (fasciculaciones). Esta terminología precisa demuestra comprensión de la fisiopatología específica y guía el tratamiento antidótico apropiado (atropina, pralidoxima)."
    },
    {
        question: "En un reporte de trauma grave, escribe: 'paciente con politrauma, presenta shock hipovolémico clase III, hemotórax masivo derecho, fractura expuesta de fémur con hemorragia activa, y signos de coagulopatía traumática temprana'. ¿Qué nivel de comprensión multisistémica demuestra esta documentación?",
        options: [
            { letter: "a", text: "Uso apropiado de terminología que integra conceptos de trauma, hematología y fisiología" },
            { letter: "b", text: "Terminología exagerada para impresionar al personal hospitalario" },
            { letter: "c", text: "Diagnósticos que exceden el alcance prehospitalario" },
            { letter: "d", text: "Documentación incompleta de un paciente traumatizado" }
        ],
        correctAnswer: "a",
        explanation: "'Politrauma' indica lesiones múltiples con riesgo vital; 'shock hipovolémico clase III' especifica pérdida de 30-40% del volumen sanguíneo con compromiso hemodinámico significativo; 'hemotórax masivo' define acumulación >1500ml de sangre en cavidad pleural; 'fractura expuesta' indica comunicación del foco fracturario con el exterior; 'coagulopatía traumática temprana' reconoce la alteración precoz de la hemostasia en trauma severo. Esta terminología integra conceptos fisiopatológicos complejos, demostrando comprensión de la cascada del shock traumático y sus manifestaciones sistémicas."
    }
];
