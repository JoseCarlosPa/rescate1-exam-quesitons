import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Cuál es la diferencia entre un esguince y una distensión?",
        answer: "Un esguince es una lesión de los ligamentos, que son los tejidos que conectan los huesos entre sí en una articulación.  Una distensión es un estiramiento o desgarro de un músculo o un tendón, que es el tejido que conecta el músculo con el hueso. ",
    },
    {
        question: "¿Cuál es el objetivo principal de la inmovilización (ferulización) de una fractura?",
        answer: "El objetivo principal es prevenir el movimiento del hueso fracturado para minimizar el daño adicional a los músculos, nervios o vasos sanguíneos circundantes.  También ayuda a reducir el dolor y puede disminuir la hemorragia. ",
    },
    {
        question: "¿Qué es una fractura abierta y por qué es más grave que una cerrada?",
        answer: "Una fractura abierta es aquella en la que hay una herida en la piel sobre el sitio de la fractura, comunicando el hueso con el exterior.  Es más grave debido al alto riesgo de infección por la contaminación de la herida. ",
    },
    {
        question: "¿Qué es el síndrome compartimental y cuáles son sus signos característicos?",
        answer: "Es una emergencia médica en la que la inflamación o el sangrado aumentan la presión dentro de un compartimento muscular a un nivel peligroso, lo que puede cortar el flujo sanguíneo a la extremidad.  Los signos característicos son conocidos como 'las 6 P': Dolor (Pain) desproporcionado a la lesión, Parestesia (hormigueo), Palidez, Parálisis, Ausencia de pulso (Pulselessness) y Presión. ",
    },
    {
        question: "¿Cuándo está indicado el uso de una férula de tracción?",
        answer: "Una férula de tracción está indicada específicamente para una fractura cerrada y aislada en el tercio medio del fémur.  No debe usarse si hay lesiones en la rodilla, el tobillo, el pie o la pelvis del mismo lado. ",
    },
    {
        question: "¿Por qué una fractura de pelvis se considera una lesión potencialmente mortal?",
        answer: "La pelvis alberga grandes vasos sanguíneos, y una fractura puede causar una hemorragia interna masiva en la cavidad pélvica, llevando a un shock hipovolémico grave. ",
    },
    {
        question: "¿Qué es una luxación y cómo se debe manejar?",
        answer: "Una luxación es el desplazamiento de un hueso de su posición normal en una articulación.  Se debe inmovilizar la articulación en la posición en que se encontró y nunca intentar recolocarla en el campo, ya que podría causar más daño a los nervios y vasos sanguíneos. ",
    },
    {
        question: "¿Qué significa la evaluación 'PMS' o 'CMS' y cuándo se realiza?",
        answer: "Se refiere a la evaluación de Pulso, Motricidad y Sensibilidad (o Circulación, Motricidad y Sensibilidad) en la parte distal de una extremidad lesionada.  Es crucial realizar esta evaluación antes y después de aplicar cualquier férula para asegurarse de que la inmovilización no ha comprometido la circulación o la función nerviosa. ",
    },
];


export const feetInjuriesQuestions: Question[] = [
    {
        "question": "Un paciente de 25 años tiene una deformidad angular y dolor intenso en el tercio medio del fémur derecho después de un accidente de esquí. No hay heridas abiertas. ¿Qué dispositivo de inmovilización es el más apropiado?",
        "options": [
            { "letter": "a", "text": "Una férula rígida larga" },
            { "letter": "b", "text": "Una férula de vacío" },
            { "letter": "c", "text": "Una férula de tracción" },
            { "letter": "d", "text": "Inmovilizar la pierna a la otra pierna no lesionada" }
        ],
        "correctAnswer": "c",
        "explanation": "Para una fractura aislada y cerrada en el tercio medio del fémur, la férula de tracción es el dispositivo de elección. Aplica una tracción longitudinal que ayuda a realinear el hueso, reduce el dolor, alivia los espasmos musculares y, lo más importante, disminuye el espacio disponible para el sangrado interno, ayudando a controlar la hemorragia."
    },
    {
        "question": "Después de aplicar una férula en un antebrazo fracturado, usted reevalúa el pulso radial y nota que está ausente. La mano está pálida y fría. ¿Cuál es su siguiente acción?",
        "options": [
            { "letter": "a", "text": "Transportar inmediatamente al paciente sin hacer cambios" },
            { "letter": "b", "text": "Aflojar la férula, realinear la extremidad y volver a ferulizar, reevaluando el pulso" },
            { "letter": "c", "text": "Aplicar calor en la mano para mejorar la circulación" },
            { "letter": "d", "text": "Elevar la extremidad por encima del nivel del corazón" }
        ],
        "correctAnswer": "b",
        "explanation": "La pérdida del pulso distal después de la inmovilización es un signo de compromiso neurovascular, una emergencia que amenaza la extremidad. Indica que la férula puede estar demasiado apretada o que la hinchazón ha aumentado. La acción correcta es aflojar el vendaje, intentar realinear y volver a ferulizar, con el objetivo de restaurar el flujo sanguíneo."
    },
    {
        "question": "Un niño sufre una caída y presenta dolor en el antebrazo. La radiografía muestra una fractura en la que el hueso está doblado y roto solo en un lado. Este tipo de fractura se conoce como:",
        "options": [
            { "letter": "a", "text": "Conminuta" },
            { "letter": "b", "text": "Transversal" },
            { "letter": "c", "text": "En tallo verde" },
            { "letter": "d", "text": "Patológica" }
        ],
        "correctAnswer": "c",
        "explanation": "La fractura 'en tallo verde' es común en niños, cuyos huesos son más blandos y flexibles que los de los adultos. Al igual que una rama verde y joven, el hueso se dobla y se rompe por un lado, pero permanece intacto por el otro. Una fractura conminuta se rompe en múltiples fragmentos."
    },
    {
        "question": "Un paciente con una fractura de tibia se queja de un dolor 'insoportable' que no mejora con la inmovilización. La pierna se siente muy tensa al tacto. Estos signos son altamente sugestivos de:",
        "options": [
            { "letter": "a", "text": "Una infección de la herida" },
            { "letter": "b", "text": "Síndrome compartimental" },
            { "letter": "c", "text": "Una luxación de rodilla asociada" },
            { "letter": "d", "text": "Daño al nervio ciático" }
        ],
        "correctAnswer": "b",
        "explanation": "El síndrome compartimental es una emergencia quirúrgica. Ocurre cuando la presión dentro de un compartimento muscular cerrado aumenta hasta el punto de cortar el suministro de sangre a los tejidos. El dolor desproporcionado a la lesión, junto con la tensión y la hinchazón, son los signos de alarma clásicos."
    },
    {
        "question": "Al inmovilizar una fractura en el tercio medio del húmero, la regla general es inmovilizar:",
        "options": [
            { "letter": "a", "text": "Únicamente la articulación del codo" },
            { "letter": "b", "text": "Las articulaciones del hombro y el codo" },
            { "letter": "c", "text": "Únicamente la articulación del hombro" },
            { "letter": "d", "text": "La muñeca y los dedos" }
        ],
        "correctAnswer": "b",
        "explanation": "La regla fundamental para inmovilizar una fractura de un hueso largo es estabilizar la articulación por encima y la articulación por debajo del sitio de la fractura. Para el húmero, esto significa que tanto el hombro como el codo deben ser inmovilizados para prevenir el movimiento y un mayor daño."
    },
    {
        "question": "Usted atiende a un paciente con una luxación anterior del hombro, con una deformidad visible. El manejo prehospitalario adecuado incluye:",
        "options": [
            { "letter": "a", "text": "Intentar reducir la luxación con una maniobra de tracción" },
            { "letter": "b", "text": "Colocar un cabestrillo y una banda para inmovilizar la articulación en la posición encontrada" },
            { "letter": "c", "text": "Aplicar una férula de tracción al brazo" },
            { "letter": "d", "text": "Realizar ejercicios de rango de movimiento para evaluar el daño" }
        ],
        "correctAnswer": "b",
        "explanation": "El personal prehospitalario generalmente no debe intentar reducir una luxación, ya que podría causar más daño a nervios o vasos sanguíneos. El manejo correcto es 'inmovilizar en la posición encontrada', proporcionando soporte y comodidad. Un cabestrillo (sling) y una banda (swathe) son ideales para esto."
    },
    {
        "question": "Una fractura de pelvis debe sospecharse en un paciente de trauma que presenta:",
        "options": [
            { "letter": "a", "text": "Dolor en la parte baja de la espalda y dificultad para respirar" },
            { "letter": "b", "text": "Inestabilidad pélvica a la compresión y signos de shock hipovolémico" },
            { "letter": "c", "text": "Una deformidad obvia en el fémur" },
            { "letter": "d", "text": "Priapismo y déficit neurológico en las piernas" }
        ],
        "correctAnswer": "b",
        "explanation": "Las fracturas de pelvis pueden causar una hemorragia interna masiva. Por lo tanto, los signos clave son la inestabilidad mecánica del anillo pélvico (detectada con una suave compresión) y los signos sistémicos de shock por pérdida de sangre (taquicardia, hipotensión, piel pálida y fría)."
    },
    {
        "question": "Un paciente tiene una fractura abierta de tobillo con un fragmento óseo visible. ¿Cuál es el primer paso en el manejo de la herida antes de inmovilizar?",
        "options": [
            { "letter": "a", "text": "Intentar reintroducir el fragmento óseo debajo de la piel" },
            { "letter": "b", "text": "Irrigar la herida abundantemente con agua no estéril" },
            { "letter": "c", "text": "Cubrir la herida con un apósito estéril seco" },
            { "letter": "d", "text": "Aplicar un ungüento antibiótico directamente sobre el hueso" }
        ],
        "correctAnswer": "c",
        "explanation": "En una fractura abierta, la prioridad es prevenir una mayor contaminación. Nunca se debe intentar reintroducir el hueso. El paso inicial es controlar cualquier sangrado activo y luego cubrir la herida con un apósito estéril y seco para protegerla antes de proceder con la inmovilización."
    },
    {
        "question": "La lesión que ocurre cuando se tuerce una articulación, causando daño a los ligamentos, se define como:",
        "options": [
            { "letter": "a", "text": "Distensión" },
            { "letter": "b", "text": "Luxación" },
            { "letter": "c", "text": "Contusión" },
            { "letter": "d", "text": "Esguince" }
        ],
        "correctAnswer": "d",
        "explanation": "Por definición, un esguince es una lesión de los ligamentos, que son las bandas de tejido que conectan un hueso con otro en una articulación. Una distensión, por otro lado, es una lesión de un músculo o un tendón."
    },
    {
        "question": "El uso de una férula de tracción está contraindicado en un paciente con una fractura de fémur si también presenta:",
        "options": [
            { "letter": "a", "text": "Dolor intenso y espasmos musculares" },
            { "letter": "b", "text": "Una fractura en la muñeca del mismo lado" },
            { "letter": "c", "text": "Una sospecha de fractura de tobillo en la misma pierna" },
            { "letter": "d", "text": "Abrasiones en el muslo afectado" }
        ],
        "correctAnswer": "c",
        "explanation": "Una férula de tracción funciona aplicando fuerza contra el tobillo y el pie para estirar la pierna. Si hay una lesión en el tobillo o el pie de la misma extremidad, no se puede aplicar la tracción de manera segura, ya que podría empeorar la lesión distal. Es una contraindicación clave para su uso."
    }
]