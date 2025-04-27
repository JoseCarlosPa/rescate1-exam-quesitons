import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Por qué es importante conocer la terminología médica?",
        answer: "Conocer la terminología médica es esencial para comunicarse de manera efectiva en el entorno de atención médica, asegurando la precisión en los diagnósticos, tratamientos y en la documentación de las intervenciones."
    },
    {
        question: "¿Qué es una raíz en la terminología médica?",
        answer: "Una raíz es la base de un término médico que generalmente indica una parte del cuerpo o una función. Por ejemplo, 'cardi-' se refiere al corazón y 'dermat-' a la piel."
    },
    {
        question: "¿Qué significa el sufijo '-itis'?",
        answer: "'-itis' es un sufijo que indica inflamación de una parte del cuerpo. Ejemplo: 'gastritis', que es la inflamación del estómago."
    },
    {
        question: "¿Qué son los prefijos en la terminología médica?",
        answer: "Los prefijos se agregan al principio de una raíz para alterar su significado. Por ejemplo, 'hipo-' significa debajo o bajo, como en 'hipotensión', que es una presión arterial baja."
    },
    {
        question: "¿Cuáles son algunas abreviaturas comunes en la terminología médica?",
        answer: "Algunas abreviaturas comunes incluyen 'RCP' para reanimación cardiopulmonar, 'ECG' para electrocardiograma y 'IV' para vía intravenosa."
    },
    {
        question: "¿Por qué es importante la terminología médica en la práctica prehospitalaria?",
        answer: "Es crucial para asegurar una comunicación precisa y rápida entre los paramédicos y otros profesionales de la salud, reduciendo el riesgo de errores y mejorando los cuidados al paciente."
    },
    {
        question: "¿Cómo se estructura generalmente un término médico?",
        answer: "Un término médico generalmente está compuesto por una raíz, un prefijo y un sufijo. La raíz indica la parte del cuerpo o función, el prefijo modifica el significado, y el sufijo describe una condición o acción."
    },
    {
        question: "¿Qué significa el término 'arritmia'?",
        answer: "'Arritmia' se refiere a un trastorno del ritmo cardíaco, donde el corazón late de manera irregular, ya sea demasiado rápido, lento o con una cadencia irregular."
    },
    {
        question: "¿Qué es una 'neumonía'?",
        answer: "La neumonía es una infección pulmonar que puede causar fiebre, tos y dificultad para respirar."
    },
    {
        question: "¿Qué significa 'hipoxia'?",
        answer: "'Hipoxia' es la condición de tener niveles insuficientes de oxígeno en los tejidos del cuerpo, lo cual puede afectar seriamente la función de los órganos."
    }
];


export const medicTermsQuestions: Question[] = [
    {
        question: "¿Qué término se refiere a la inflamación del hígado?",
        options: [
            { letter: "a", text: "Hepatitis" },
            { letter: "b", text: "Gastritis" },
            { letter: "c", text: "Neumonía" },
            { letter: "d", text: "Cistitis" },
        ],
        correctAnswer: "a",
    },
    {
        question: "El sufijo '-algia' significa:",
        options: [
            { letter: "a", text: "Fiebre" },
            { letter: "b", text: "Dolor" },
            { letter: "c", text: "Inflamación" },
            { letter: "d", text: "Lesión" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué prefijo indica 'bajo' o 'por debajo de'?",
        options: [
            { letter: "a", text: "Hipo-" },
            { letter: "b", text: "Hiper-" },
            { letter: "c", text: "Hemi-" },
            { letter: "d", text: "Macro-" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué término se utiliza para describir una respiración anormalmente rápida?",
        options: [
            { letter: "a", text: "Bradipnea" },
            { letter: "b", text: "Taquipnea" },
            { letter: "c", text: "Apnea" },
            { letter: "d", text: "Eupnea" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué término se refiere a la dificultad para respirar?",
        options: [
            { letter: "a", text: "Dispnea" },
            { letter: "b", text: "Tos" },
            { letter: "c", text: "Cianosis" },
            { letter: "d", text: "Euforia" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Cuál de los siguientes términos significa 'bajo nivel de oxígeno en la sangre'?",
        options: [
            { letter: "a", text: "Hipoxia" },
            { letter: "b", text: "Acidosis" },
            { letter: "c", text: "Hipotensión" },
            { letter: "d", text: "Hipertermia" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué término describe una condición en la que los pulmones se llenan de líquido?",
        options: [
            { letter: "a", text: "Edema pulmonar" },
            { letter: "b", text: "Asma" },
            { letter: "c", text: "Neumonía" },
            { letter: "d", text: "Embolia pulmonar" },
        ],
        correctAnswer: "a",
    },
    {
        question: "El término 'cardiopatía' se refiere a:",
        options: [
            { letter: "a", text: "Enfermedad del corazón" },
            { letter: "b", text: "Inflamación del corazón" },
            { letter: "c", text: "Arritmia" },
            { letter: "d", text: "Presión arterial alta" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué término médico describe la pérdida de consciencia?",
        options: [
            { letter: "a", text: "Síncope" },
            { letter: "b", text: "Convulsión" },
            { letter: "c", text: "Fiebre" },
            { letter: "d", text: "Taquicardia" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué significa el término 'acidosis'?",
        options: [
            { letter: "a", text: "Exceso de ácido en la sangre" },
            { letter: "b", text: "Falta de oxígeno en la sangre" },
            { letter: "c", text: "Alta presión arterial" },
            { letter: "d", text: "Insuficiencia renal" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Cuál de los siguientes términos significa 'dificultad para tragar'?",
        options: [
            { letter: "a", text: "Disfagia" },
            { letter: "b", text: "Disartria" },
            { letter: "c", text: "Cianosis" },
            { letter: "d", text: "Hemorragia" },
        ],
        correctAnswer: "a",
    },
    {
        question: "El término 'hipotensión' se refiere a:",
        options: [
            { letter: "a", text: "Presión arterial baja" },
            { letter: "b", text: "Presión arterial alta" },
            { letter: "c", text: "Fiebre alta" },
            { letter: "d", text: "Insuficiencia renal" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué significa 'taquicardia'?",
        options: [
            { letter: "a", text: "Frecuencia cardíaca acelerada" },
            { letter: "b", text: "Frecuencia respiratoria baja" },
            { letter: "c", text: "Presión arterial baja" },
            { letter: "d", text: "Dolor en el pecho" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué término se refiere a la fiebre?",
        options: [
            { letter: "a", text: "Hipertermia" },
            { letter: "b", text: "Hipotermia" },
            { letter: "c", text: "Eutermia" },
            { letter: "d", text: "Hipoacusia" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué término médico describe la insuficiencia respiratoria?",
        options: [
            { letter: "a", text: "Asfixia" },
            { letter: "b", text: "Cianosis" },
            { letter: "c", text: "Apnea" },
            { letter: "d", text: "Aspiración" },
        ],
        correctAnswer: "a",
    },
    {
        question: "El término 'trombosis' se refiere a:",
        options: [
            { letter: "a", text: "Formación de un coágulo sanguíneo" },
            { letter: "b", text: "Inflamación de los pulmones" },
            { letter: "c", text: "Bloqueo de las vías respiratorias" },
            { letter: "d", text: "Aumento de la presión sanguínea" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué significa el término 'hemorragia'?",
        options: [
            { letter: "a", text: "Sangrado excesivo" },
            { letter: "b", text: "Falta de oxígeno en la sangre" },
            { letter: "c", text: "Disminución de la frecuencia cardíaca" },
            { letter: "d", text: "Infección de la piel" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué significa 'ictericia'?",
        options: [
            { letter: "a", text: "Coloración amarilla de la piel y ojos" },
            { letter: "b", text: "Falta de aire" },
            { letter: "c", text: "Dolor abdominal" },
            { letter: "d", text: "Aumento de la frecuencia respiratoria" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué término describe una condición de falta de sangre en los tejidos del cuerpo?",
        options: [
            { letter: "a", text: "Isquemia" },
            { letter: "b", text: "Hipoxia" },
            { letter: "c", text: "Hemorragia" },
            { letter: "d", text: "Cianosis" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué es la 'bradicardia'?",
        options: [
            { letter: "a", text: "Frecuencia cardíaca baja" },
            { letter: "b", text: "Fiebre alta" },
            { letter: "c", text: "Presión arterial elevada" },
            { letter: "d", text: "Dificultad respiratoria" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué significa 'hiperglucemia'?",
        options: [
            { letter: "a", text: "Alta concentración de glucosa en sangre" },
            { letter: "b", text: "Falta de oxígeno en la sangre" },
            { letter: "c", text: "Presión arterial baja" },
            { letter: "d", text: "Disminución de la frecuencia cardíaca" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué término médico se usa para describir el sangrado en los pulmones?",
        options: [
            { letter: "a", text: "Hemoptisis" },
            { letter: "b", text: "Epistaxis" },
            { letter: "c", text: "Hematoma" },
            { letter: "d", text: "Hiperemia" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué es la 'apnea'?",
        options: [
            { letter: "a", text: "Ausencia de respiración" },
            { letter: "b", text: "Frecuencia respiratoria acelerada" },
            { letter: "c", text: "Dolor en el pecho" },
            { letter: "d", text: "Dificultad para respirar" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué significa el término 'anemia'?",
        options: [
            { letter: "a", text: "Bajo nivel de glóbulos rojos en la sangre" },
            { letter: "b", text: "Bajo nivel de oxígeno en la sangre" },
            { letter: "c", text: "Alta presión arterial" },
            { letter: "d", text: "Fiebre" },
        ],
        correctAnswer: "a",
    },
    {
        question: "El término 'epistaxis' se refiere a:",
        options: [
            { letter: "a", text: "Sangrado de la nariz" },
            { letter: "b", text: "Sangrado de los pulmones" },
            { letter: "c", text: "Sangrado del estómago" },
            { letter: "d", text: "Sangrado vaginal" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué significa 'hipertermia'?",
        options: [
            { letter: "a", text: "Temperatura corporal elevada" },
            { letter: "b", text: "Temperatura corporal baja" },
            { letter: "c", text: "Falta de aire" },
            { letter: "d", text: "Falta de agua en el cuerpo" },
        ],
        correctAnswer: "a",
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
    },
    {
        question: "¿Qué término se refiere a la presión arterial elevada?",
        options: [
            { letter: "a", text: "Hipertensión" },
            { letter: "b", text: "Hipotensión" },
            { letter: "c", text: "Taquicardia" },
            { letter: "d", text: "Arritmia" },
        ],
        correctAnswer: "a",
    },
];