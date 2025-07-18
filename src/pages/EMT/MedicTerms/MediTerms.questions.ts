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
        question: "¿Cuál es el término para la posición en la que el paciente se encuentra acostado boca arriba?",
        options: [
            { letter: "a", text: "Prona" },
            { letter: "b", text: "Fowler" },
            { letter: "c", text: "Supina" },
            { letter: "d", text: "Decúbito lateral" },
        ],
        correctAnswer: "c",
        explanation: "La posición supina es cuando el paciente está acostado boca arriba. Es fundamental para la evaluación inicial y el traslado seguro, según la AAOS."
    },
    {
        question: "Al documentar una llamada, usted nota que el paciente está sufriendo. ¿Cuál es la palabra raíz para dolor?",
        options: [
            { letter: "a", text: "alges" },
            { letter: "b", text: "angi" },
            { letter: "c", text: "asten" },
            { letter: "d", text: "centesis" },
        ],
        correctAnswer: "a",
        explanation: "'Alges' es la raíz que significa dolor, utilizada en términos como 'analgesia' o 'algesia'."
    },
    {
        question: "Usted observa que el paciente reporta debilidad. ¿Cuál es la palabra raíz para debilidad?",
        options: [
            { letter: "a", text: "alges" },
            { letter: "b", text: "angi" },
            { letter: "c", text: "asten" },
            { letter: "d", text: "centesis" },
        ],
        correctAnswer: "c",
        explanation: "'Asten' es la raíz que significa debilidad, como en 'astenia', que se refiere a debilidad generalizada."
    },
    {
        question: "El paciente reporta debilidad en un lado. ¿Cuál es el término para 'en un lado'?",
        options: [
            { letter: "a", text: "bilateral" },
            { letter: "b", text: "hemilateral" },
            { letter: "c", text: "lateral" },
            { letter: "d", text: "unilateral" },
        ],
        correctAnswer: "b",
        explanation: "'Hemilateral' significa que afecta un solo lado del cuerpo. Es importante para describir síntomas neurológicos o musculares."
    },
    {
        question: "El paciente no parece tener alergias. ¿Cuál es el acrónimo para esto según el capítulo?",
        options: [
            { letter: "a", text: "NA" },
            { letter: "b", text: "ANK" },
            { letter: "c", text: "NAC" },
            { letter: "d", text: "ANN" },
        ],
        correctAnswer: "a",
        explanation: "'NA' significa 'No Alergias', utilizado en la documentación para indicar que el paciente no reporta alergias conocidas."
    },
    {
        question: "El paciente ve doble. ¿Qué término médico significa visión doble?",
        options: [
            { letter: "a", text: "Biocular" },
            { letter: "b", text: "Bióptico" },
            { letter: "c", text: "Diocular" },
            { letter: "d", text: "Diplopía" },
        ],
        correctAnswer: "d",
        explanation: "'Diplopía' es el término médico para visión doble, síntoma relevante en alteraciones neurológicas o traumatismos."
    },
    {
        question: "El paciente tose sangre. ¿Cuál es el término médico para toser sangre?",
        options: [
            { letter: "a", text: "Hemogastritis" },
            { letter: "b", text: "Hematuria" },
            { letter: "c", text: "Hematemesis" },
            { letter: "d", text: "Hemoptisis" },
        ],
        correctAnswer: "d",
        explanation: "'Hemoptisis' es el término para la expulsión de sangre al toser, importante en el diagnóstico de patologías respiratorias graves."
    },
    {
        question: "¿Qué término describe la acumulación de líquido en los tejidos?",
        options: [
            { letter: "a", text: "Edema" },
            { letter: "b", text: "Hematoma" },
            { letter: "c", text: "Infección" },
            { letter: "d", text: "Cianosis" },
        ],
        correctAnswer: "a",
        explanation: "'Edema' es la acumulación anormal de líquido en los tejidos, signo común en insuficiencia cardíaca, renal o lesiones."
    },
    {
        question: "¿Qué significa el término 'gastroenteritis'?",
        options: [
            { letter: "a", text: "Inflamación del estómago y los intestinos" },
            { letter: "b", text: "Inflamación de los pulmones" },
            { letter: "c", text: "Dolor en el pecho" },
            { letter: "d", text: "Infección de la piel" },
        ],
        correctAnswer: "a",
        explanation: "'Gastroenteritis' es la inflamación del estómago y los intestinos, generalmente causada por infecciones o intoxicaciones alimentarias."
    },
    {
        question: "¿Qué significa el término 'hepatomegalia'?",
        options: [
            { letter: "a", text: "Aumento del tamaño del hígado" },
            { letter: "b", text: "Falta de oxígeno en la sangre" },
            { letter: "c", text: "Insuficiencia renal" },
            { letter: "d", text: "Aumento de la presión arterial" },
        ],
        correctAnswer: "a",
        explanation: "'Hepatomegalia' significa agrandamiento del hígado, hallazgo relevante en enfermedades hepáticas."
    },
    {
        question: "¿Qué término se refiere a la presión arterial elevada?",
        options: [
            { letter: "a", text: "Hipotensión" },
            { letter: "b", text: "Taquicardia" },
            { letter: "c", text: "Hipertensión" },
            { letter: "d", text: "Bradicardia" },
        ],
        correctAnswer: "c",
        explanation: "'Hipertensión' es el término para presión arterial elevada, un factor de riesgo importante para enfermedades cardiovasculares."
    },
    {
        question: "¿Cuál es el término para el sangrado excesivo?",
        options: [
            { letter: "a", text: "Isquemia" },
            { letter: "b", text: "Hemorragia" },
            { letter: "c", text: "Trombosis" },
            { letter: "d", text: "Embolia" },
        ],
        correctAnswer: "b",
        explanation: "'Hemorragia' es el sangrado excesivo, situación crítica que requiere intervención rápida en el entorno prehospitalario."
    },
    {
        question: "¿Qué significa el prefijo 'taqui-'?",
        options: [
            { letter: "a", text: "Lento" },
            { letter: "b", text: "Rápido" },
            { letter: "c", text: "Grande" },
            { letter: "d", text: "Pequeño" },
        ],
        correctAnswer: "b",
        explanation: "El prefijo 'taqui-' significa rápido, como en 'taquicardia' (latido rápido del corazón)."
    },
    {
        question: "¿Qué significa el prefijo 'bradi-'?",
        options: [
            { letter: "a", text: "Lento" },
            { letter: "b", text: "Rápido" },
            { letter: "c", text: "Mucho" },
            { letter: "d", text: "Poco" },
        ],
        correctAnswer: "a",
        explanation: "El prefijo 'bradi-' significa lento, como en 'bradicardia' (latido lento del corazón)."
    },
    {
        question: "¿Qué término describe la inflamación de las articulaciones?",
        options: [
            { letter: "a", text: "Osteoporosis" },
            { letter: "b", text: "Artritis" },
            { letter: "c", text: "Mialgia" },
            { letter: "d", text: "Esclerosis" },
        ],
        correctAnswer: "b",
        explanation: "'Artritis' es la inflamación de las articulaciones, frecuente en pacientes geriátricos y con enfermedades autoinmunes."
    },
    {
        question: "¿Qué significa el sufijo '-algia'?",
        options: [
            { letter: "a", text: "Inflamación" },
            { letter: "b", text: "Dolor" },
            { letter: "c", text: "Hinchazón" },
            { letter: "d", text: "Debilidad" },
        ],
        correctAnswer: "b",
        explanation: "El sufijo '-algia' significa dolor, como en 'mialgia' (dolor muscular)."
    },
    {
        question: "¿Qué término se refiere a la falta de oxígeno en los tejidos?",
        options: [
            { letter: "a", text: "Hiperoxia" },
            { letter: "b", text: "Anoxia" },
            { letter: "c", text: "Hipoxia" },
            { letter: "d", text: "Apnea" },
        ],
        correctAnswer: "c",
        explanation: "'Hipoxia' es la disminución de oxígeno en los tejidos, condición crítica en emergencias respiratorias."
    },
    {
        question: "¿Cuál de los siguientes términos describe una estructura más cercana al tronco?",
        options: [
            { letter: "a", text: "Distal" },
            { letter: "b", text: "Lateral" },
            { letter: "c", text: "Proximal" },
            { letter: "d", text: "Superficial" },
        ],
        correctAnswer: "c",
        explanation: "'Proximal' indica que una estructura está más cerca del tronco o del punto de origen, útil para describir lesiones o localización anatómica."
    },
    {
        question: "¿Qué posición corporal se describe cuando el paciente se encuentra semisentado, con la parte superior del cuerpo elevada?",
        options: [
            { letter: "a", text: "Decúbito supino" },
            { letter: "b", text: "Trendelenburg" },
            { letter: "c", text: "Fowler" },
            { letter: "d", text: "Prona" },
        ],
        correctAnswer: "c",
        explanation: "La posición Fowler es cuando el paciente está semisentado, recomendada para pacientes con dificultad respiratoria."
    },
    {
        question: "¿Cuál es el término para 'hacia el frente del cuerpo'?",
        options: [
            { letter: "a", text: "Posterior" },
            { letter: "b", text: "Dorsal" },
            { letter: "c", text: "Ventral" },
            { letter: "d", text: "Caudal" },
        ],
        correctAnswer: "c",
        explanation: "'Ventral' significa hacia el frente del cuerpo, opuesto a 'dorsal' que es hacia la espalda."
    },
    {
        question: "¿Qué abreviatura se utiliza comúnmente para 'sin antecedentes conocidos de alergias'?",
        options: [
            { letter: "a", text: "SAMA" },
            { letter: "b", text: "NKA" },
            { letter: "c", text: "NOAL" },
            { letter: "d", text: "SNA" },
        ],
        correctAnswer: "b",
        explanation: "'NKA' significa 'No Known Allergies', abreviatura común en la documentación médica internacional."
    },
    {
        question: "¿Qué significa el sufijo '-ectomía'?",
        options: [
            { letter: "a", text: "Inflamación" },
            { letter: "b", text: "Extirpación quirúrgica" },
            { letter: "c", text: "Estudio de" },
            { letter: "d", text: "Registro" },
        ],
        correctAnswer: "b",
        explanation: "El sufijo '-ectomía' indica extirpación quirúrgica de un órgano o tejido, como en 'apendicectomía'."
    },
    {
        question: "¿Qué término describe una estructura que está más cerca de la superficie del cuerpo?",
        options: [
            { letter: "a", text: "Profundo" },
            { letter: "b", text: "Interno" },
            { letter: "c", text: "Superficial" },
            { letter: "d", text: "Medial" },
        ],
        correctAnswer: "c",
        explanation: "'Superficial' indica que una estructura está cerca de la superficie corporal, útil para describir heridas o lesiones."
    },
    {
        question: "¿Cuál es el término médico para la 'inflamación del hígado'?",
        options: [
            { letter: "a", text: "Nefritis" },
            { letter: "b", text: "Hepatitis" },
            { letter: "c", text: "Gastritis" },
            { letter: "d", text: "Colitis" },
        ],
        correctAnswer: "b",
        explanation: "'Hepatitis' es la inflamación del hígado, condición que puede ser causada por infecciones, toxinas o enfermedades autoinmunes."
    },
];