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
        "question": "Un paciente presenta una herida en el antebrazo con sangrado de color rojo oscuro que fluye de manera constante. ¿Qué tipo de hemorragia es más probable?",
        "options": [
            {"letter": "a", "text": "Capilar"},
            {"letter": "b", "text": "Venosa"},
            {"letter": "c", "text": "Arterial"},
            {"letter": "d", "text": "Mixta"}
        ],
        "correctAnswer": "b",
        "explanation": "La sangre venosa es de color rojo oscuro porque está desoxigenada y fluye de manera constante y uniforme, ya que está bajo menor presión que la sangre arterial. La sangre arterial es de color rojo brillante y brota a borbotones, mientras que la capilar es un rezumo lento."
    },
    {
        "question": "Según el protocolo de control de hemorragia externa, si la presión directa no detiene un sangrado severo en una extremidad, ¿cuál es el siguiente paso inmediato a seguir?",
        "options": [
            {"letter": "a", "text": "Elevar la extremidad por encima del corazón"},
            {"letter": "b", "text": "Aplicar un agente hemostático"},
            {"letter": "c", "text": "Aplicar un torniquete proximal a la herida"},
            {"letter": "d", "text": "Aplicar más apósitos sobre el actual"}
        ],
        "correctAnswer": "c",
        "explanation": "Para hemorragias graves en extremidades que no se controlan con presión directa, la directriz actual (basada en protocolos como 'Stop the Bleed') es la aplicación inmediata de un torniquete. Se coloca entre 5 y 7 cm por encima de la herida para ocluir el flujo arterial y detener el sangrado de manera efectiva."
    },
    {
        "question": "Un paciente adulto de 79 kg sufre una herida y pierde aproximadamente 1.5 litros de sangre. ¿Qué condición es más probable que desarrolle?",
        "options": [
            {"letter": "a", "text": "Una respuesta compensatoria sin síntomas graves"},
            {"letter": "b", "text": "Shock hipovolémico"},
            {"letter": "c", "text": "Hemofilia aguda"},
            {"letter": "d", "text": "Hipertensión reactiva"}
        ],
        "correctAnswer": "b",
        "explanation": "Un adulto tiene aproximadamente 70 ml de sangre por kg. Un hombre de 79 kg tiene alrededor de 5.5 litros de sangre. La pérdida de 1.5 litros representa casi el 30% de su volumen sanguíneo total, lo que corresponde a un shock hipovolémico de clase III, una emergencia que amenaza la vida."
    },
    {
        "question": "¿Cuál de los siguientes grupos de signos y síntomas es más indicativo de una posible hemorragia interna en un paciente que sufrió un traumatismo contuso en el abdomen?",
        "options": [
            {"letter": "a", "text": "Piel enrojecida y caliente, pulso lento"},
            {"letter": "b", "text": "Aumento de la presión arterial y dolor de cabeza"},
            {"letter": "c", "text": "Dolor, abdomen distendido y signos de shock"},
            {"letter": "d", "text": "Fiebre y vómitos sin sangre"}
        ],
        "correctAnswer": "c",
        "explanation": "La hemorragia interna en el abdomen provoca dolor y la acumulación de sangre causa distensión. Sistémicamente, la pérdida de volumen sanguíneo desencadena los signos clásicos de shock: taquicardia, hipotensión, piel pálida, fría y pegajosa, y alteración del estado mental."
    },
    {
        "question": "Al aplicar un torniquete comercial, ¿hasta qué punto se debe apretar?",
        "options": [
            {"letter": "a", "text": "Hasta que el paciente refiera que el dolor disminuye"},
            {"letter": "b", "text": "Hasta que el sangrado se detenga o el pulso distal ya no sea palpable"},
            {"letter": "c", "text": "Hasta que el color de la extremidad se vuelva pálido"},
            {"letter": "d", "text": "Apretando solo lo suficiente para reducir el flujo, pero sin detenerlo"}
        ],
        "correctAnswer": "b",
        "explanation": "El objetivo de un torniquete es ocluir completamente el flujo de sangre arterial a la herida. El punto final para apretarlo es cuando el sangrado activo se detiene y/o el pulso distal (ej. radial o pedio) ya no es palpable. Apretarlo insuficientemente puede empeorar el sangrado venoso."
    },
    {
        "question": "Un niño de 1 año tiene un volumen sanguíneo total de aproximadamente 800 mL. ¿Qué cantidad de pérdida de sangre se consideraría suficiente para mostrar signos significativos de shock?",
        "options": [
            {"letter": "a", "text": "50 mL"},
            {"letter": "b", "text": "150 mL"},
            {"letter": "c", "text": "400 mL"},
            {"letter": "d", "text": "500 mL"}
        ],
        "correctAnswer": "b",
        "explanation": "Los niños tienen un volumen sanguíneo mucho menor que los adultos. Una pérdida de 150 mL en un niño con un volumen total de 800 mL representa casi el 20% de su sangre. Esta cantidad es suficiente para sobrepasar sus mecanismos de compensación y provocar signos evidentes de shock."
    },
    {
        "question": "Un paciente con epistaxis (sangrado nasal) debe ser manejado inicialmente con la siguiente técnica:",
        "options": [
            {"letter": "a", "text": "Inclinar la cabeza hacia atrás y aplicar presión"},
            {
                "letter": "b",
                "text": "Pinzar la parte carnosa de los orificios nasales e inclinar al paciente hacia adelante"
            },
            {"letter": "c", "text": "Introducir gasa en ambas fosas nasales tan profundo como sea posible"},
            {"letter": "d", "text": "Aplicar calor en el puente de la nariz"}
        ],
        "correctAnswer": "b",
        "explanation": "Inclinar la cabeza hacia adelante evita que la sangre sea deglutida, lo que puede causar náuseas e irritación gástrica. Pinzar la parte blanda de la nariz aplica presión directa sobre el plexo de Kiesselbach, el origen de la mayoría de las hemorragias nasales anteriores."
    },
    {
        "question": "Si un paciente con una fractura de cráneo presenta sangrado por un oído, la acción correcta es:",
        "options": [
            {"letter": "a", "text": "Taponar el oído firmemente para detener el flujo sanguíneo"},
            {"letter": "b", "text": "Cubrir holgadamente el oído con un apósito estéril para recolectar el drenaje"},
            {"letter": "c", "text": "Lavar el canal auditivo con solución salina estéril"},
            {"letter": "d", "text": "Aplicar presión directa sobre el hueso mastoideo detrás de la oreja"}
        ],
        "correctAnswer": "b",
        "explanation": "El sangrado por el oído después de un traumatismo craneoencefálico puede indicar una fractura de la base del cráneo y una posible fuga de líquido cefalorraquídeo (LCR). Taponar el oído podría aumentar la presión intracraneal. Lo correcto es colocar un apósito suelto para absorber el drenaje y minimizar el riesgo de infección."
    },
    {
        "question": "El primer signo de shock hipovolémico en un paciente traumatizado suele ser:",
        "options": [
            {"letter": "a", "text": "Disminución de la presión arterial"},
            {"letter": "b", "text": "Pérdida de la conciencia"},
            {"letter": "c", "text": "Ansiedad, inquietud o combatividad"},
            {"letter": "d", "text": "Ausencia de pulso radial"}
        ],
        "correctAnswer": "c",
        "explanation": "En las etapas iniciales del shock (fase compensada), el cuerpo libera catecolaminas (adrenalina) para mantener la perfusión. Esto se manifiesta como ansiedad, inquietud y taquicardia. La hipotensión (disminución de la presión arterial) es un signo más tardío, que indica que los mecanismos de compensación están empezando a fallar."
    },
    {
        "question": "La principal razón para inmovilizar una fractura de fémur en el contexto de una hemorragia es:",
        "options": [
            {"letter": "a", "text": "Prevenir una embolia grasa"},
            {"letter": "b", "text": "Asegurar que el paciente pueda caminar después"},
            {
                "letter": "c",
                "text": "Reducir el movimiento de los extremos del hueso para evitar más daño vascular y sangrado"
            },
            {"letter": "d", "text": "Facilitar el transporte del paciente únicamente"}
        ],
        "correctAnswer": "c",
        "explanation": "Una fractura de fémur puede causar una hemorragia interna significativa (hasta 1.5 litros). Los extremos afilados del hueso roto pueden lacerar músculos y vasos sanguíneos circundantes, incluyendo la arteria femoral. La inmovilización (con una férula de tracción) estabiliza la fractura, reduce el dolor y, lo más importante, minimiza el movimiento para prevenir más lesiones y controlar el sangrado interno."
    },
    {
        "question": "Un paciente toma anticoagulantes (p. ej., warfarina) y sufre una laceración. ¿Qué debe anticipar el proveedor de atención prehospitalaria?",
        "options": [
            {"letter": "a", "text": "La hemorragia será más fácil de controlar de lo normal"},
            {"letter": "b", "text": "El paciente desarrollará una reacción alérgica al vendaje"},
            {"letter": "c", "text": "La hemorragia puede ser más profusa y difícil de controlar"},
            {"letter": "d", "text": "La presión arterial del paciente aumentará drásticamente"}
        ],
        "correctAnswer": "c",
        "explanation": "Los medicamentos anticoagulantes interfieren con el proceso normal de coagulación de la sangre. Por lo tanto, cualquier herida en un paciente que los toma puede resultar en un sangrado más prolongado y severo de lo esperado, requiriendo un manejo más agresivo para su control."
    },
    {
        "question": "Si un apósito se empapa completamente de sangre, la acción correcta es:",
        "options": [
            {"letter": "a", "text": "Retirar el apósito y reemplazarlo por uno nuevo y limpio"},
            {"letter": "b", "text": "Aplicar un torniquete inmediatamente"},
            {"letter": "c", "text": "No retirar el apósito y aplicar uno nuevo encima, reforzando la presión"},
            {"letter": "d", "text": "Irrigar la herida con agua para limpiarla antes de aplicar otro"}
        ],
        "correctAnswer": "c",
        "explanation": "Retirar el primer apósito podría remover el coágulo que se está empezando a formar, reiniciando el sangrado. La técnica correcta es dejar el apósito inicial en su lugar y aplicar apósitos adicionales encima, manteniendo o aumentando la presión directa sobre la herida."
    }
]