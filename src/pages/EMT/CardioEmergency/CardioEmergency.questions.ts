import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es un infarto agudo al miocardio (IAM)?",
        answer: "Es la muerte del tejido cardíaco debido a una obstrucción en una arteria coronaria.",
    },
    {
        question: "¿Qué diferencia hay entre una angina estable e inestable?",
        answer: "La angina estable ocurre de forma predecible con el esfuerzo y se alivia con reposo; la inestable puede ocurrir en reposo y es una emergencia.",
    },
    {
        question: "¿Qué se debe hacer primero si se encuentra a una persona inconsciente sin pulso?",
        answer: "Iniciar RCP con compresiones torácicas de alta calidad y utilizar un DEA lo antes posible.",
    },
    {
        question: "¿Qué es el shock cardiogénico?",
        answer: "Una condición en la que el corazón no puede bombear suficiente sangre para satisfacer las necesidades del cuerpo.",
    },
    {
        question: "¿Cuál es el papel del DEA en emergencias cardiovasculares?",
        answer: "Detecta ritmos desfibrilables y administra una descarga para intentar restablecer un ritmo cardíaco efectivo.",
    },
    {
        question: "¿Qué síntomas pueden indicar un infarto en mujeres?",
        answer: "Dolor torácico leve o ausente, fatiga, náuseas, dificultad para respirar o dolor en mandíbula o espalda.",
    },
];


export const cardiovascularQuestions: Question[] = [
    {
        question: "¿Cuál es la causa más común de paro cardíaco súbito en adultos?",
        options: [
            { letter: "a", text: "Taponamiento cardíaco" },
            { letter: "b", text: "Infarto agudo al miocardio" },
            { letter: "c", text: "Asfixia" },
            { letter: "d", text: "Hipoglucemia" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué ritmo cardíaco es más común durante un paro cardíaco repentino?",
        options: [
            { letter: "a", text: "Fibrilación auricular" },
            { letter: "b", text: "Taquicardia ventricular con pulso" },
            { letter: "c", text: "Fibrilación ventricular" },
            { letter: "d", text: "Bradicardia sinusal" },
        ],
        correctAnswer: "c",
    },
    {
        question: "El síntoma clásico del infarto agudo al miocardio es:",
        options: [
            { letter: "a", text: "Dolor agudo en la región lumbar" },
            { letter: "b", text: "Dolor torácico opresivo que puede irradiar al brazo izquierdo" },
            { letter: "c", text: "Dolor abdominal intenso" },
            { letter: "d", text: "Disnea súbita sin dolor" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el objetivo principal del desfibrilador externo automático (DEA)?",
        options: [
            { letter: "a", text: "Disminuir la presión arterial" },
            { letter: "b", text: "Revertir la bradicardia" },
            { letter: "c", text: "Restablecer un ritmo cardíaco organizado" },
            { letter: "d", text: "Eliminar la necesidad de compresiones" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de los siguientes es un signo clínico de insuficiencia cardíaca congestiva (ICC)?",
        options: [
            { letter: "a", text: "Pupilas dilatadas" },
            { letter: "b", text: "Tos con esputo espumoso rosado" },
            { letter: "c", text: "Hiperactividad" },
            { letter: "d", text: "Erupción cutánea" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el tratamiento más importante en la primera fase de un paro cardíaco presenciado?",
        options: [
            { letter: "a", text: "Ventilación con bolsa-válvula-mascarilla" },
            { letter: "b", text: "Compresiones torácicas de alta calidad" },
            { letter: "c", text: "Administración de adrenalina" },
            { letter: "d", text: "Colocar un acceso IV" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué representa la angina de pecho estable?",
        options: [
            { letter: "a", text: "Un infarto agudo al miocardio" },
            { letter: "b", text: "Dolor torácico que aparece en reposo" },
            { letter: "c", text: "Dolor torácico predecible al esfuerzo, que se alivia con el reposo" },
            { letter: "d", text: "Una condición que siempre requiere desfibrilación" },
        ],
        correctAnswer: "c",
    },
    {
        question: "La tríada clásica del taponamiento cardíaco incluye hipotensión, ruidos cardíacos apagados y:",
        options: [
            { letter: "a", text: "Estertores" },
            { letter: "b", text: "Ingurgitación yugular" },
            { letter: "c", text: "Cianosis periférica" },
            { letter: "d", text: "Taquipnea" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Una mujer de 56 años se queja de dolor torácico leve, náuseas y fatiga. ¿Qué deberías sospechar primero?",
        options: [
            { letter: "a", text: "Gastroenteritis" },
            { letter: "b", text: "Ansiedad" },
            { letter: "c", text: "Infarto agudo al miocardio atípico" },
            { letter: "d", text: "Reflujo gastroesofágico" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué posición suele mejorar la perfusión en pacientes con shock cardiogénico?",
        options: [
            { letter: "a", text: "Decúbito prono" },
            { letter: "b", text: "Trendelemburg completo" },
            { letter: "c", text: "Semi-Fowler o Fowler" },
            { letter: "d", text: "Decúbito lateral izquierdo" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es la causa más frecuente de shock cardiogénico?",
        options: [
            { letter: "a", text: "Taponamiento cardíaco" },
            { letter: "b", text: "Infarto agudo al miocardio" },
            { letter: "c", text: "Neumotórax a tensión" },
            { letter: "d", text: "Hipovolemia" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la acción más importante antes de aplicar una descarga con el DEA?",
        options: [
            { letter: "a", text: "Verificar que no haya personas tocando al paciente" },
            { letter: "b", text: "Iniciar ventilación con oxígeno" },
            { letter: "c", text: "Revisar el nivel de glucosa" },
            { letter: "d", text: "Administrar adrenalina" },
        ],
        correctAnswer: "a",
    },
    {
        question: "La nitroglicerina está contraindicada en pacientes con:",
        options: [
            { letter: "a", text: "Hipertensión" },
            { letter: "b", text: "Disnea" },
            { letter: "c", text: "Presión arterial sistólica menor a 90 mmHg" },
            { letter: "d", text: "Dolor torácico irradiado al cuello" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué ritmo cardíaco NO es tratable con desfibrilación?",
        options: [
            { letter: "a", text: "Fibrilación ventricular" },
            { letter: "b", text: "Taquicardia ventricular sin pulso" },
            { letter: "c", text: "Asistolia" },
            { letter: "d", text: "Taquicardia ventricular con pulso" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un paciente con edema en miembros inferiores, disnea y ortopnea probablemente tenga:",
        options: [
            { letter: "a", text: "Neumonía" },
            { letter: "b", text: "Insuficiencia cardíaca congestiva" },
            { letter: "c", text: "Embolia pulmonar" },
            { letter: "d", text: "Cetoacidosis diabética" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué maniobra puede mejorar la precarga en un paciente en shock?",
        options: [
            { letter: "a", text: "Colocar al paciente sentado" },
            { letter: "b", text: "Elevar las piernas" },
            { letter: "c", text: "Administrar broncodilatadores" },
            { letter: "d", text: "Aplicar compresas frías" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué estructura se ve más afectada en un infarto agudo al miocardio inferior?",
        options: [
            { letter: "a", text: "Ventrículo derecho" },
            { letter: "b", text: "Aurícula izquierda" },
            { letter: "c", text: "Ventrículo izquierdo" },
            { letter: "d", text: "Tabique interventricular" },
        ],
        correctAnswer: "a",
    },
    {
        question: "Un paciente con palpitaciones rápidas e irregulares puede tener:",
        options: [
            { letter: "a", text: "Fibrilación auricular" },
            { letter: "b", text: "Bradicardia sinusal" },
            { letter: "c", text: "Ritmo sinusal normal" },
            { letter: "d", text: "Asistolia" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Cuál es el objetivo del manejo prehospitalario del infarto agudo al miocardio?",
        options: [
            { letter: "a", text: "Administrar antibióticos" },
            { letter: "b", text: "Minimizar el daño miocárdico y mantener la perfusión" },
            { letter: "c", text: "Llevar al paciente a la sala de rayos X" },
            { letter: "d", text: "Reducir el nivel de ansiedad" },
        ],
        correctAnswer: "b",
    },
    {
        question: "En un paciente en paro, ¿cuándo se debe administrar adrenalina por primera vez?",
        options: [
            { letter: "a", text: "Después de dos ciclos de RCP" },
            { letter: "b", text: "Después de la primera descarga del DEA" },
            { letter: "c", text: "Antes de iniciar la RCP" },
            { letter: "d", text: "Después de comprobar ritmo no desfibrilable" },
        ],
        correctAnswer: "d",
    },
    {
        question: "¿Cuál es el ritmo cardíaco que puede parecer normal, pero el paciente no tiene pulso?",
        options: [
            { letter: "a", text: "Asistolia" },
            { letter: "b", text: "Fibrilación ventricular" },
            { letter: "c", text: "Actividad eléctrica sin pulso (AESP)" },
            { letter: "d", text: "Taquicardia supraventricular" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué tipo de pulso puede observarse en un paciente con fibrilación auricular rápida?",
        options: [
            { letter: "a", text: "Regular y lento" },
            { letter: "b", text: "Irregular e inconstante" },
            { letter: "c", text: "Fuerte y rítmico" },
            { letter: "d", text: "Ausente" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de los siguientes síntomas es más común en mujeres con infarto?",
        options: [
            { letter: "a", text: "Dolor torácico fuerte" },
            { letter: "b", text: "Dolor en brazo izquierdo" },
            { letter: "c", text: "Náusea, disnea o fatiga" },
            { letter: "d", text: "Erupción cutánea" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el tiempo objetivo para aplicar la primera descarga con DEA en un paro presenciado?",
        options: [
            { letter: "a", text: "En los primeros 10 minutos" },
            { letter: "b", text: "En los primeros 8 minutos" },
            { letter: "c", text: "En los primeros 5 minutos" },
            { letter: "d", text: "En los primeros 3 minutos" },
        ],
        correctAnswer: "d",
    },
    {
        question: "¿Qué indica una frecuencia cardíaca menor de 50 lpm con signos de hipoperfusión?",
        options: [
            { letter: "a", text: "Taquicardia supraventricular" },
            { letter: "b", text: "Fibrilación auricular" },
            { letter: "c", text: "Bradicardia sintomática" },
            { letter: "d", text: "Ritmo sinusal normal" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es la complicación más temida en las primeras horas del IAM?",
        options: [
            { letter: "a", text: "Dolor persistente" },
            { letter: "b", text: "Arritmias ventriculares malignas" },
            { letter: "c", text: "Hiperglucemia" },
            { letter: "d", text: "Fatiga" },
        ],
        correctAnswer: "b",
    },
    {
        question: "La presencia de disnea súbita, dolor torácico y hemoptisis sugiere:",
        options: [
            { letter: "a", text: "Insuficiencia renal" },
            { letter: "b", text: "Neumonía" },
            { letter: "c", text: "Embolia pulmonar" },
            { letter: "d", text: "Hipoglucemia" },
        ],
        correctAnswer: "c",
    },
    {
        question: "El uso del DEA en un niño mayor de 8 años debe realizarse:",
        options: [
            { letter: "a", text: "Solo si no responde a RCP" },
            { letter: "b", text: "Con parches pediátricos exclusivamente" },
            { letter: "c", text: "Con el mismo protocolo que en adultos" },
            { letter: "d", text: "Después de 5 minutos de ventilación" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el principal objetivo del tratamiento prehospitalario de una arritmia con pulso?",
        options: [
            { letter: "a", text: "Administrar analgésicos" },
            { letter: "b", text: "Administrar anticoagulantes" },
            { letter: "c", text: "Estabilizar al paciente y preparar traslado" },
            { letter: "d", text: "Iniciar maniobras de RCP" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es una contraindicación absoluta para la RCP?",
        options: [
            { letter: "a", text: "Paciente con rigidez cadavérica" },
            { letter: "b", text: "Edad mayor de 80 años" },
            { letter: "c", text: "Fractura de costillas previa" },
            { letter: "d", text: "Desmayo breve" },
        ],
        correctAnswer: "a",
    }
];
