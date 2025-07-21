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