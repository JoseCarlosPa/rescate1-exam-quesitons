import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué evalúa la nemotecnia ABC?",
        answer: "Vía aérea, respiración y circulación, los elementos básicos para la vida.",
    },
    {
        question: "¿Para qué sirve la nemotecnia SAMPLE?",
        answer: "Recolectar información médica relevante sobre el paciente, como signos, alergias y antecedentes.",
    },
    {
        question: "¿Qué aspecto del dolor analiza OPQRST?",
        answer: "Explora características clave del dolor como inicio, provocación, calidad, irradiación, severidad y tiempo.",
    },
    {
        question: "¿Cómo evalúas el estado de conciencia con AVDI?",
        answer: "Determinas si el paciente está alerta, responde a voz, responde al dolor o está inconsciente.",
    },
    {
        question: "¿Qué se busca con DCAP-BTLS?",
        answer: "Lesiones visibles o palpables en un examen físico: deformidades, contusiones, abrasiones, punciones, quemaduras, sensibilidad, laceraciones e hinchazón.",
    },
    {
        question: "¿Qué indica PEARL en la evaluación ocular?",
        answer: "Que las pupilas están iguales y reactivas a la luz, lo que sugiere función neurológica normal.",
    },
    {
        question: "¿Qué condiciones explora AEIOU-TIPS?",
        answer: "Causas comunes de alteraciones del estado mental como alcoholismo, infecciones o traumatismos.",
    },
];


export const nemotecniasQuestions: Question[] = [
    {
        question: "¿Qué representa la letra 'A' en la nemotecnia ABC?",
        options: [
            { letter: "a", text: "Airway (vía aérea)" },
            { letter: "b", text: "Arterias" },
            { letter: "c", text: "Alergias" },
            { letter: "d", text: "Actividad cerebral" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué evalúa la letra 'C' en el ABC?",
        options: [
            { letter: "a", text: "Coloración de la piel" },
            { letter: "b", text: "Conciencia" },
            { letter: "c", text: "Circulación" },
            { letter: "d", text: "Columna vertebral" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué se obtiene con SAMPLE?",
        options: [
            { letter: "a", text: "Tratamiento farmacológico" },
            { letter: "b", text: "Historial médico y eventos recientes" },
            { letter: "c", text: "Signos vitales avanzados" },
            { letter: "d", text: "Electrocardiograma" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué significa la 'P' en OPQRST?",
        options: [
            { letter: "a", text: "Palpitaciones" },
            { letter: "b", text: "Presión" },
            { letter: "c", text: "Provocación" },
            { letter: "d", text: "Pulso" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué indica 'U' en AVDI?",
        options: [
            { letter: "a", text: "Unidad de emergencia" },
            { letter: "b", text: "Unresponsive (no responde)" },
            { letter: "c", text: "Urgencia médica" },
            { letter: "d", text: "Unidad médica" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué evalúa PEARL?",
        options: [
            { letter: "a", text: "Respuesta ocular a estímulos dolorosos" },
            { letter: "b", text: "Respuesta de pupilas a la luz" },
            { letter: "c", text: "Presión intracraneal" },
            { letter: "d", text: "Rigidez de cuello" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué significa la 'D' en DCAP-BTLS?",
        options: [
            { letter: "a", text: "Deshidratación" },
            { letter: "b", text: "Deformidades" },
            { letter: "c", text: "Desviaciones" },
            { letter: "d", text: "Desplazamientos" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué ayuda a recordar AEIOU-TIPS?",
        options: [
            { letter: "a", text: "Tipos de transporte" },
            { letter: "b", text: "Causas de alteración del estado mental" },
            { letter: "c", text: "Plan de tratamiento" },
            { letter: "d", text: "Clasificación de heridas" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿En qué parte del protocolo se utiliza comúnmente OPQRST?",
        options: [
            { letter: "a", text: "Evaluación del dolor" },
            { letter: "b", text: "Evaluación respiratoria" },
            { letter: "c", text: "Revisión ocular" },
            { letter: "d", text: "Evaluación digestiva" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué representa la 'E' en SAMPLE?",
        options: [
            { letter: "a", text: "Emergencias" },
            { letter: "b", text: "Eventos previos" },
            { letter: "c", text: "Evolución clínica" },
            { letter: "d", text: "Exposición" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué representa la 'T' en DCAP-BTLS?",
        options: [
            { letter: "a", text: "Temperatura" },
            { letter: "b", text: "Tendones" },
            { letter: "c", text: "Tenderness (sensibilidad)" },
            { letter: "d", text: "Trauma" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué busca identificar la nemotecnia PEARL en los pacientes?",
        options: [
            { letter: "a", text: "Actividad pulmonar" },
            { letter: "b", text: "Respuesta pupilar" },
            { letter: "c", text: "Estado de la piel" },
            { letter: "d", text: "Movimiento torácico" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿La 'O' en OPQRST se refiere a?",
        options: [
            { letter: "a", text: "Observación" },
            { letter: "b", text: "Organización" },
            { letter: "c", text: "Onset (inicio)" },
            { letter: "d", text: "Oclusión" },
        ],
        correctAnswer: "c",
    },
    {
        question: "En AVDI, si un paciente responde al dolor pero no a la voz, se clasifica como:",
        options: [
            { letter: "a", text: "Alerta" },
            { letter: "b", text: "V" },
            { letter: "c", text: "P" },
            { letter: "d", text: "U" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el objetivo principal de utilizar nemotecnias en la atención prehospitalaria?",
        options: [
            { letter: "a", text: "Reducir el tiempo de atención médica" },
            { letter: "b", text: "Recordar de manera sistemática pasos críticos" },
            { letter: "c", text: "Optimizar reportes financieros" },
            { letter: "d", text: "Documentar datos legales" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué evalúa principalmente SAMPLE?",
        options: [
            { letter: "a", text: "La estabilidad de la escena" },
            { letter: "b", text: "La historia médica y el contexto del paciente" },
            { letter: "c", text: "El pronóstico de hospitalización" },
            { letter: "d", text: "El uso de transporte aéreo" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿En qué tipo de examen es más utilizado DCAP-BTLS?",
        options: [
            { letter: "a", text: "Examen de abdomen" },
            { letter: "b", text: "Evaluación neurológica" },
            { letter: "c", text: "Examen físico de trauma" },
            { letter: "d", text: "Revisión de medicamentos" },
        ],
        correctAnswer: "c",
    },
    {
        question: "En AEIOU-TIPS, ¿qué representa la letra 'I'?",
        options: [
            { letter: "a", text: "Infección" },
            { letter: "b", text: "Insulina" },
            { letter: "c", text: "Inmovilidad" },
            { letter: "d", text: "Irrigación" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿La 'S' en AEIOU-TIPS puede representar?",
        options: [
            { letter: "a", text: "Saturación baja" },
            { letter: "b", text: "Stroke (evento cerebrovascular)" },
            { letter: "c", text: "Sindrome coronario" },
            { letter: "d", text: "Sensibilidad" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué significa la 'B' en DCAP-BTLS?",
        options: [
            { letter: "a", text: "Broncoaspiración" },
            { letter: "b", text: "Burns (quemaduras)" },
            { letter: "c", text: "Balance de líquidos" },
            { letter: "d", text: "Bilateralidad" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuándo se aplica AVDI en la evaluación prehospitalaria?",
        options: [
            { letter: "a", text: "Durante la evaluación secundaria" },
            { letter: "b", text: "Al inicio de la evaluación primaria" },
            { letter: "c", text: "Al final del transporte" },
            { letter: "d", text: "En el hospital" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué busca principalmente evaluar OPQRST?",
        options: [
            { letter: "a", text: "La evolución de una herida" },
            { letter: "b", text: "La calidad y evolución de un dolor" },
            { letter: "c", text: "La saturación de oxígeno" },
            { letter: "d", text: "El nivel de conciencia" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿La 'E' en AEIOU-TIPS puede referirse a?",
        options: [
            { letter: "a", text: "Epilepsia" },
            { letter: "b", text: "Edema pulmonar" },
            { letter: "c", text: "Enfisema" },
            { letter: "d", text: "Eritrocitos" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué representa la 'S' final en DCAP-BTLS?",
        options: [
            { letter: "a", text: "Sangrado" },
            { letter: "b", text: "Swelling (hinchazón)" },
            { letter: "c", text: "Sensibilidad" },
            { letter: "d", text: "Sufrimiento" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué ayuda a detectar un PEARL anormal?",
        options: [
            { letter: "a", text: "Daño neurológico o trauma craneal" },
            { letter: "b", text: "Fracturas óseas" },
            { letter: "c", text: "Hemorragias internas" },
            { letter: "d", text: "Insuficiencia hepática" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué representa la 'Q' en OPQRST?",
        options: [
            { letter: "a", text: "Quality (calidad del dolor)" },
            { letter: "b", text: "Quantificación" },
            { letter: "c", text: "Quemaduras" },
            { letter: "d", text: "Quistes" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué evento puede causar un estado alterado de conciencia según AEIOU-TIPS?",
        options: [
            { letter: "a", text: "Hipoglucemia" },
            { letter: "b", text: "Presión arterial alta" },
            { letter: "c", text: "Fiebre moderada" },
            { letter: "d", text: "Dolor leve" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Cuál es el objetivo de DCAP-BTLS durante la valoración física?",
        options: [
            { letter: "a", text: "Revisión neurológica" },
            { letter: "b", text: "Identificación de lesiones traumáticas" },
            { letter: "c", text: "Evaluación respiratoria" },
            { letter: "d", text: "Monitoreo de signos vitales" },
        ],
        correctAnswer: "b",
    },
    {
        question: "En PEARL, una pupila no reactiva sugiere:",
        options: [
            { letter: "a", text: "Obstrucción de vías aéreas" },
            { letter: "b", text: "Problema neurológico" },
            { letter: "c", text: "Trauma en extremidades" },
            { letter: "d", text: "Shock hipovolémico" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué se evalúa en la letra 'R' de OPQRST?",
        options: [
            { letter: "a", text: "Respuesta a medicamentos" },
            { letter: "b", text: "Radiación del dolor" },
            { letter: "c", text: "Riesgo de infección" },
            { letter: "d", text: "Ritmo respiratorio" },
        ],
        correctAnswer: "b",
    },
];