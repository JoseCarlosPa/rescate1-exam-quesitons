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

export const patientAssessmentQuestions: Question[] = [
    {
        question: "Durante la evaluación primaria de un paciente traumatizado, usted nota que emite sonidos de gorgoteo con cada respiración. ¿Cuál es su acción inmediata?",
        options: [
            { letter: "a", text: "Administrar oxígeno con mascarilla no recirculante" },
            { letter: "b", text: "Aspirar la vía aérea del paciente" },
            { letter: "c", text: "Realizar una exploración rápida de cuerpo completo" },
            { letter: "d", text: "Tomar la presión arterial y la frecuencia cardíaca" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Usted está evaluando a un adulto mayor que se queja de dolor en el pecho. El paciente niega tener dificultad para respirar. ¿Cómo se clasifica este hallazgo?",
        options: [
            { letter: "a", text: "Un signo objetivo irrelevante" },
            { letter: "b", text: "Un negativo pertinente" },
            { letter: "c", text: "Parte de la evaluación secundaria" },
            { letter: "d", text: "Un síntoma contradictorio" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Al evaluar el nivel de conciencia de un paciente, este no responde cuando usted le habla, pero abre los ojos y se queja cuando le aplica un estímulo doloroso. Según la escala AVDI, ¿cuál es su nivel?",
        options: [
            { letter: "a", text: "A (Alerta)" },
            { letter: "b", text: "V (Respuesta verbal)" },
            { letter: "c", text: "D (Respuesta al dolor)" },
            { letter: "d", text: "I (Inconsciente)" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un paciente de 28 años presenta una frecuencia respiratoria de 26 respiraciones por minuto después de una reacción alérgica. ¿Qué término se usaría para describir este signo vital?",
        options: [
            { letter: "a", text: "Bradipnea" },
            { letter: "b", text: "Disnea" },
            { letter: "c", text: "Apnea" },
            { letter: "d", text: "Taquipnea" },
        ],
        correctAnswer: "d",
    },
    {
        question: "Está en la escena de una colisión vehicular con un solo paciente. ¿Cuál de las siguientes preguntas forma parte de la 'S' en la nemotecnia SAMPLE?",
        options: [
            { letter: "a", text: "¿Qué tan rápido iban los vehículos?" },
            { letter: "b", text: "¿Además del dolor, siente algo más como náuseas o mareo?" },
            { letter: "c", text: "¿Ha sido hospitalizado anteriormente por alguna razón?" },
            { letter: "d", text: "¿Es usted alérgico a algún medicamento?" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Llega a una escena donde un paciente está tendido en el suelo de una fábrica ruidosa. ¿Cuál de estos componentes de la evaluación de la escena es prioritario verificar antes de acercarse?",
        options: [
            { letter: "a", text: "La queja principal del paciente" },
            { letter: "b", text: "Posibles peligros ambientales, como maquinaria activa o derrames" },
            { letter: "c", text: "El número total de pacientes en el lugar" },
            { letter: "d", text: "Si el paciente tiene pulso" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de los siguientes es un hallazgo objetivo (un signo) durante la evaluación del paciente?",
        options: [
            { letter: "a", text: "El paciente califica su dolor de cabeza con un 7/10" },
            { letter: "b", text: "El paciente afirma sentirse muy ansioso" },
            { letter: "c", text: "La piel del paciente se siente fría y húmeda al tacto" },
            { letter: "d", text: "El familiar del paciente dice que 'no ha estado actuando normal'" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Después de completar la evaluación primaria de un paciente médico estable, ¿cuál es el siguiente paso más apropiado?",
        options: [
            { letter: "a", text: "Reevaluar los signos vitales inmediatamente" },
            { letter: "b", text: "Transportar al paciente sin más evaluación" },
            { letter: "c", text: "Realizar una evaluación enfocada en la queja principal" },
            { letter: "d", text: "Contactar a la dirección médica para recibir órdenes" },
        ],
        correctAnswer: "c",
    },
];