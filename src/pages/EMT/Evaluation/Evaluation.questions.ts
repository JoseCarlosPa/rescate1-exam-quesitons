import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Cuál es el primer paso fundamental al llegar a una emergencia?",
        answer: "El primer paso es siempre la evaluación de la escena para garantizar la seguridad del personal, del paciente y de los transeúntes. Después, se determina la naturaleza de la enfermedad (NOI) o el mecanismo de la lesión (MOI) y se evalúa la necesidad de recursos adicionales.",
    },
    {
        question: "¿Qué significa el acrónimo ABC y por qué es crucial en la evaluación primaria?",
        answer: "ABC corresponde a Vía Aérea (Airway), Respiración (Breathing) y Circulación (Circulation). Es la secuencia prioritaria para identificar y tratar amenazas inmediatas para la vida durante la evaluación primaria.",
    },
    {
        question: "¿Para qué se utiliza la nemotecnia SAMPLE al obtener la historia clínica?",
        answer: "SAMPLE es una guía para obtener un historial médico completo del paciente: Signos y síntomas, Alergias, Medicamentos, Pasado médico pertinente, Última ingesta (líquidos o sólidos) y Eventos previos relacionados con la queja principal.",
    },
    {
        question: "¿Con qué frecuencia se debe reevaluar a un paciente?",
        answer: "La reevaluación es un proceso continuo. Se debe realizar a intervalos regulares (por ejemplo, cada 5 minutos en un paciente crítico y cada 15 en uno estable) y cada vez que haya un cambio en el estado del paciente.",
    },
    {
        question: "¿Cuál es la diferencia entre un hallazgo subjetivo y uno objetivo?",
        answer: "Un hallazgo subjetivo es algo que el paciente describe o siente, como el dolor o las náuseas (un síntoma). Un hallazgo objetivo es una medida o una observación que el proveedor puede detectar, como la frecuencia cardíaca, la palidez de la piel o la presión arterial (un signo).",
    },
    {
        question: "¿Cuál es el propósito principal de la evaluación secundaria?",
        answer: "Su objetivo es realizar un examen físico más detallado, ya sea enfocado en la queja principal o una exploración de cuerpo completo, para identificar lesiones o condiciones que no fueron evidentes durante la evaluación primaria.",
    },
    {
        question: "¿Qué acción se debe tomar si se encuentra un peligro en la escena?",
        answer: "Si la escena no es segura, el personal debe retirarse a un lugar seguro y solicitar el apoyo de los recursos apropiados (policía, bomberos) antes de intentar acceder al paciente.",
    },
];

export const patientAssessmentQuestions: Question[] =[
    {
        "question": "Durante la evaluación primaria de un paciente traumatizado, usted nota que emite sonidos de gorgoteo con cada respiración. ¿Cuál es su acción inmediata?",
        "options": [
            { "letter": "a", "text": "Administrar oxígeno con mascarilla no recirculante" },
            { "letter": "b", "text": "Aspirar la vía aérea del paciente" },
            { "letter": "c", "text": "Realizar una exploración rápida de cuerpo completo" },
            { "letter": "d", "text": "Tomar la presión arterial y la frecuencia cardíaca" }
        ],
        "correctAnswer": "b",
        "explanation": "Los sonidos de gorgoteo (gurgling) indican la presencia de líquido (sangre, vómito, secreciones) en la vía aérea. En la evaluación primaria (ABCDE), una vía aérea comprometida es la máxima prioridad. La acción inmediata y que salva la vida es aspirar para despejar la vía aérea."
    },
    {
        "question": "Usted está evaluando a un adulto mayor que se queja de dolor en el pecho. El paciente niega tener dificultad para respirar. ¿Cómo se clasifica este hallazgo?",
        "options": [
            { "letter": "a", "text": "Un signo objetivo irrelevante" },
            { "letter": "b", "text": "Un negativo pertinente" },
            { "letter": "c", "text": "Parte de la evaluación secundaria" },
            { "letter": "d", "text": "Un síntoma contradictorio" }
        ],
        "correctAnswer": "b",
        "explanation": "Un negativo pertinente es la ausencia de un síntoma que normalmente se esperaría que acompañara a una queja principal. En un paciente con dolor torácico (posible evento cardíaco), la ausencia de disnea es una información clínica muy relevante que debe ser documentada."
    },
    {
        "question": "Al evaluar el nivel de conciencia de un paciente, este no responde cuando usted le habla, pero abre los ojos y se queja cuando le aplica un estímulo doloroso. Según la escala AVDI, ¿cuál es su nivel?",
        "options": [
            { "letter": "a", "text": "A (Alerta)" },
            { "letter": "b", "text": "V (Respuesta verbal)" },
            { "letter": "c", "text": "D (Respuesta al dolor)" },
            { "letter": "d", "text": "I (Inconsciente)" }
        ],
        "correctAnswer": "c",
        "explanation": "La escala AVDI (equivalente a AVPU en inglés) evalúa el nivel de conciencia. D (Dolor) se asigna cuando el paciente no responde a la voz pero sí reacciona de alguna manera (movimiento, gemido, apertura ocular) a un estímulo doloroso, como un pellizco o presión en el lecho ungueal."
    },
    {
        "question": "Un paciente de 28 años presenta una frecuencia respiratoria de 26 respiraciones por minuto después de una reacción alérgica. ¿Qué término se usaría para describir este signo vital?",
        "options": [
            { "letter": "a", "text": "Bradipnea" },
            { "letter": "b", "text": "Disnea" },
            { "letter": "c", "text": "Apnea" },
            { "letter": "d", "text": "Taquipnea" }
        ],
        "correctAnswer": "d",
        "explanation": "El rango normal de la frecuencia respiratoria en un adulto es de 12 a 20 respiraciones por minuto. Una frecuencia superior a 20 se denomina taquipnea. Bradipnea es una frecuencia lenta (menor a 12), y apnea es la ausencia de respiración."
    },
    {
        "question": "Está en la escena de una colisión vehicular con un solo paciente. ¿Cuál de las siguientes preguntas forma parte de la 'S' en la nemotecnia SAMPLE?",
        "options": [
            { "letter": "a", "text": "¿Qué tan rápido iban los vehículos?" },
            { "letter": "b", "text": "¿Además del dolor, siente algo más como náuseas o mareo?" },
            { "letter": "c", "text": "¿Ha sido hospitalizado anteriormente por alguna razón?" },
            { "letter": "d", "text": "¿Es usted alérgico a algún medicamento?" }
        ],
        "correctAnswer": "b",
        "explanation": "SAMPLE es una nemotecnia para recabar el historial del paciente. La 'S' corresponde a Signos y Síntomas. La pregunta busca indagar sobre síntomas asociados a la queja principal (el dolor), lo cual es una parte fundamental de la evaluación de los síntomas."
    },
    {
        "question": "Llega a una escena donde un paciente está tendido en el suelo de una fábrica ruidosa. ¿Cuál de estos componentes de la evaluación de la escena es prioritario verificar antes de acercarse?",
        "options": [
            { "letter": "a", "text": "La queja principal del paciente" },
            { "letter": "b", "text": "Posibles peligros ambientales, como maquinaria activa o derrames" },
            { "letter": "c", "text": "El número total de pacientes en el lugar" },
            { "letter": "d", "text": "Si el paciente tiene pulso" }
        ],
        "correctAnswer": "b",
        "explanation": "La seguridad de la escena es la primera y más importante prioridad en cualquier llamada. Antes de hacer contacto con el paciente, el reanimador debe identificar y mitigar cualquier peligro para garantizar su propia seguridad, la de su equipo y la del paciente."
    },
    {
        "question": "¿Cuál de los siguientes es un hallazgo objetivo (un signo) durante la evaluación del paciente?",
        "options": [
            { "letter": "a", "text": "El paciente califica su dolor de cabeza con un 7/10" },
            { "letter": "b", "text": "El paciente afirma sentirse muy ansioso" },
            { "letter": "c", "text": "La piel del paciente se siente fría y húmeda al tacto" },
            { "letter": "d", "text": "El familiar del paciente dice que 'no ha estado actuando normal'" }
        ],
        "correctAnswer": "c",
        "explanation": "Un signo es un hallazgo objetivo que el proveedor puede ver, oír, sentir o medir. La condición de la piel (fría y húmeda) es algo que el TAMP puede sentir directamente. Las otras opciones son síntomas (lo que el paciente siente) o información de terceros."
    },
    {
        "question": "Después de completar la evaluación primaria de un paciente médico estable, ¿cuál es el siguiente paso más apropiado?",
        "options": [
            { "letter": "a", "text": "Reevaluar los signos vitales inmediatamente" },
            { "letter": "b", "text": "Transportar al paciente sin más evaluación" },
            { "letter": "c", "text": "Realizar una evaluación enfocada en la queja principal" },
            { "letter": "d", "text": "Contactar a la dirección médica para recibir órdenes" }
        ],
        "correctAnswer": "c",
        "explanation": "En un paciente considerado estable después de la evaluación primaria (ABCDE), el siguiente paso es realizar una evaluación secundaria. Esta consiste en obtener un historial médico (SAMPLE, OPQRST) y realizar un examen físico enfocado en la queja principal para obtener más detalles sobre la condición."
    }
]