import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es la hemorragia?",
        answer: "La hemorragia es la pérdida de sangre, comúnmente llamada sangrado.  Puede ser externa (visible) o interna (oculta dentro del cuerpo).  La hemorragia no controlada es una causa principal de shock (hipoperfusión) después de un trauma. ",
    },
    {
        question: "¿Cómo se clasifica la hemorragia según el tipo de vaso sanguíneo afectado?",
        answer: "Se clasifica en: \n • Hemorragia arterial: Sangre de color rojo brillante que brota en sincronía con el pulso.  \n • Hemorragia venosa: Sangre de color más oscuro que la arterial, con un flujo continuo y más manejable.  \n • Hemorragia capilar: Sangre de color rojo oscuro que rezuma de la herida de forma lenta y constante. ",
    },
    {
        question: "¿Cuál es el método principal y más efectivo para controlar una hemorragia externa?",
        answer: "La aplicación de presión directa sobre el sitio del sangrado con un apósito estéril es el método más efectivo.  Si el sangrado no se detiene, se debe aplicar un apósito compresivo. ",
    },
    {
        question: "¿Cuándo se debe utilizar un torniquete?",
        answer: "Se debe usar un torniquete si la presión directa no es efectiva para controlar una hemorragia severa en una extremidad,  o si la herida se encuentra en un lugar donde la presión directa no es práctica. ",
    },
    {
        question: "¿Qué signos y síntomas sugieren una hemorragia interna?",
        answer: "Los signos incluyen dolor, sensibilidad o inflamación en el área de la lesión.  Los signos de shock hipovolémico son clave: ansiedad, inquietud, piel pálida, fría y pegajosa, taquicardia, y en etapas tardías, hipotensión.  También pueden presentarse hematomas, abdomen distendido, vómito con sangre (hematemesis) o heces negras (melena). ",
    },
    {
        question: "¿Qué es el shock hipovolémico?",
        answer: "Es una condición que resulta de un bajo volumen sanguíneo, ya sea por una hemorragia masiva (interna o externa) o por una pérdida significativa de otros fluidos corporales.  Esto lleva a una perfusión inadecuada, donde el sistema circulatorio no logra suministrar suficiente sangre a los tejidos para mantener las funciones celulares normales. ",
    },
    {
        question: "¿Qué se debe hacer tras colocar un torniquete?",
        answer: "Se debe asegurar que esté lo suficientemente apretado para detener el sangrado y el pulso distal.  Es crucial registrar la hora exacta de la aplicación en una cinta y pegarla en la frente del paciente.  El torniquete no debe aflojarse ni retirarse fuera del hospital. ",
    },
    {
        question: "¿Qué es un agente hemostático?",
        answer: "Es un compuesto químico, usualmente en forma de polvo o gasa impregnada, que ayuda a detener la hemorragia al acelerar la formación de coágulos.  Se usa cuando la presión directa no es suficiente y no es posible colocar un torniquete. ",
    },
];


export const hemorragiasQuestions: Question[] = [
    {
        question: "Un paciente presenta una herida en el antebrazo con sangrado de color rojo oscuro que fluye de manera constante. ¿Qué tipo de hemorragia es más probable?",
        options: [
            { letter: "a", text: "Capilar" },
            { letter: "b", text: "Venosa" },
            { letter: "c", text: "Arterial" },
            { letter: "d", text: "Mixta" },
        ],
        correctAnswer: "b", // Based on
    },
    {
        question: "Según el protocolo de control de hemorragia externa, si la presión directa no detiene un sangrado severo en una extremidad, ¿cuál es el siguiente paso inmediato a seguir?",
        options: [
            { letter: "a", text: "Elevar la extremidad por encima del corazón" },
            { letter: "b", text: "Aplicar un agente hemostático" },
            { letter: "c", text: "Aplicar un torniquete proximal a la herida" },
            { letter: "d", text: "Aplicar más apósitos sobre el actual" },
        ],
        correctAnswer: "c", // Based on
    },
    {
        question: "Un paciente adulto de 79 kg sufre una herida y pierde aproximadamente 1.5 litros de sangre. ¿Qué condición es más probable que desarrolle?",
        options: [
            { letter: "a", text: "Una respuesta compensatoria sin síntomas graves" },
            { letter: "b", text: "Shock hipovolémico" },
            { letter: "c", text: "Hemofilia aguda" },
            { letter: "d", text: "Hipertensión reactiva" },
        ],
        correctAnswer: "b", // Based on, an adult male of 79kg has ~5.5L of blood. 1.5L is >20%, leading to shock.
    },
    {
        question: "¿Cuál de los siguientes grupos de signos y síntomas es más indicativo de una posible hemorragia interna en un paciente que sufrió un traumatismo contuso en el abdomen?",
        options: [
            { letter: "a", text: "Piel enrojecida y caliente, pulso lento" },
            { letter: "b", text: "Aumento de la presión arterial y dolor de cabeza" },
            { letter: "c", text: "Dolor, abdomen distendido y signos de shock" },
            { letter: "d", text: "Fiebre y vómitos sin sangre" },
        ],
        correctAnswer: "c", // Based on
    },
    {
        question: "Al aplicar un torniquete comercial, ¿hasta qué punto se debe apretar?",
        options: [
            { letter: "a", text: "Hasta que el paciente refiera que el dolor disminuye" },
            { letter: "b", text: "Hasta que el sangrado se detenga o el pulso distal ya no sea palpable" },
            { letter: "c", text: "Hasta que el color de la extremidad se vuelva pálido" },
            { letter: "d", text: "Apretando solo lo suficiente para reducir el flujo, pero sin detenerlo" },
        ],
        correctAnswer: "b", // Based on
    },
    {
        question: "Un niño de 1 año tiene un volumen sanguíneo total de aproximadamente 800 mL. ¿Qué cantidad de pérdida de sangre se consideraría suficiente para mostrar signos significativos de shock?",
        options: [
            { letter: "a", text: "50 mL" },
            { letter: "b", text: "150 mL" },
            { letter: "c", text: "400 mL" },
            { letter: "d", text: "500 mL" },
        ],
        correctAnswer: "b", // Based on
    },
    {
        question: "Un paciente con epistaxis (sangrado nasal) debe ser manejado inicialmente con la siguiente técnica:",
        options: [
            { letter: "a", text: "Inclinar la cabeza hacia atrás y aplicar presión" },
            { letter: "b", text: "Pinzar la parte carnosa de los orificios nasales e inclinar al paciente hacia adelante" },
            { letter: "c", text: "Introducir gasa en ambas fosas nasales tan profundo como sea posible" },
            { letter: "d", text: "Aplicar calor en el puente de la nariz" },
        ],
        correctAnswer: "b", // Based on
    },
    {
        question: "Si un paciente con una fractura de cráneo presenta sangrado por un oído, la acción correcta es:",
        options: [
            { letter: "a", text: "Taponar el oído firmemente para detener el flujo sanguíneo" },
            { letter: "b", text: "Cubrir holgadamente el oído con un apósito estéril para recolectar el drenaje" },
            { letter: "c", "text": "Lavar el canal auditivo con solución salina estéril" },
            { letter: "d", text: "Aplicar presión directa sobre el hueso mastoideo detrás de la oreja" },
        ],
        correctAnswer: "b", // Based on
    },
    {
        question: "El primer signo de shock hipovolémico en un paciente traumatizado suele ser:",
        options: [
            { letter: "a", text: "Disminución de la presión arterial" },
            { letter: "b", text: "Pérdida de la conciencia" },
            { letter: "c", text: "Ansiedad, inquietud o combatividad" },
            { letter: "d", text: "Ausencia de pulso radial" },
        ],
        correctAnswer: "c", // Based on
    },
    {
        question: "La principal razón para inmovilizar una fractura de fémur en el contexto de una hemorragia es:",
        options: [
            { letter: "a", text: "Prevenir una embolia grasa" },
            { letter: "b", text: "Asegurar que el paciente pueda caminar después" },
            { letter: "c", text: "Reducir el movimiento de los extremos del hueso para evitar más daño vascular y sangrado" },
            { letter: "d", text: "Facilitar el transporte del paciente únicamente" },
        ],
        correctAnswer: "c", // Based on
    },
    {
        question: "Un paciente toma anticoagulantes (p. ej., warfarina) y sufre una laceración. ¿Qué debe anticipar el proveedor de atención prehospitalaria?",
        options: [
            { letter: "a", text: "La hemorragia será más fácil de controlar de lo normal" },
            { letter: "b", text: "El paciente desarrollará una reacción alérgica al vendaje" },
            { letter: "c", text: "La hemorragia puede ser más profusa y difícil de controlar" },
            { letter: "d", text: "La presión arterial del paciente aumentará drásticamente" },
        ],
        correctAnswer: "c", // Based on
    },
    {
        question: "Si un apósito se empapa completamente de sangre, la acción correcta es:",
        options: [
            { letter: "a", text: "Retirar el apósito y reemplazarlo por uno nuevo y limpio" },
            { letter: "b", text: "Aplicar un torniquete inmediatamente" },
            { letter: "c", text: "No retirar el apósito y aplicar uno nuevo encima, reforzando la presión" },
            { letter: "d", text: "Irrigar la herida con agua para limpiarla antes de aplicar otro" },
        ],
        correctAnswer: "c", // Based on
    },
];