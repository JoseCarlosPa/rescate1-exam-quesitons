import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es la homeostasis en el cuerpo humano?",
        answer: "La homeostasis es el equilibrio interno del cuerpo que permite su funcionamiento normal. Es el proceso mediante el cual los sistemas del cuerpo mantienen condiciones estables, como la temperatura corporal y el equilibrio de líquidos, a pesar de los cambios externos."
    },
    {
        question: "¿Qué función tiene el sistema circulatorio?",
        answer: "El sistema circulatorio es responsable de transportar sangre, oxígeno, nutrientes, hormonas y productos de desecho a través del cuerpo, utilizando el corazón como bomba y una red de vasos sanguíneos (arterias, venas y capilares)."
    },
    {
        question: "¿Qué órganos conforman el sistema respiratorio?",
        answer: "El sistema respiratorio está formado por las vías respiratorias superiores (nariz, faringe, laringe), las vías respiratorias inferiores (tráquea, bronquios, bronquiolos) y los pulmones, que son los órganos principales del intercambio de gases."
    },
    {
        question: "¿Cuál es la principal función del sistema nervioso?",
        answer: "El sistema nervioso controla y coordina todas las actividades del cuerpo, incluyendo los movimientos voluntarios e involuntarios, la percepción sensorial, el pensamiento, la memoria y la respuesta a estímulos internos y externos. Se divide en sistema nervioso central y periférico."
    },
    {
        question: "¿Qué es la función del sistema muscular?",
        answer: "El sistema muscular permite el movimiento del cuerpo y sus partes (como las extremidades), mantiene la postura, estabiliza las articulaciones, produce calor y facilita funciones internas como la digestión y la circulación sanguínea."
    },
    {
        question: "¿Cuáles son las divisiones principales del sistema esquelético?",
        answer: "El sistema esquelético se divide en el esqueleto axial (cráneo, columna vertebral y caja torácica) y el esqueleto apendicular (extremidades superiores e inferiores, y las cinturas pélvica y escapular)."
    },
    {
        question: "¿Qué tipos de huesos existen en el cuerpo humano?",
        answer: "Los huesos se clasifican en cinco tipos principales: largos (ej. fémur), cortos (ej. huesos del carpo), planos (ej. esternón), irregulares (ej. vértebras) y sesamoideos (ej. rótula)."
    },
    {
        question: "¿Qué función tienen los ligamentos y los tendones?",
        answer: "Los ligamentos son bandas de tejido conectivo que unen hueso con hueso, proporcionando estabilidad a las articulaciones. Los tendones son bandas de tejido conectivo que unen músculo con hueso, transmitiendo la fuerza de contracción muscular para producir movimiento."
    },
    {
        question: "¿Qué es la articulación de bisagra y dónde se encuentra un ejemplo?",
        answer: "Una articulación de bisagra permite el movimiento en un solo plano, similar a una puerta. Ejemplos incluyen la articulación del codo y la rodilla."
    },
    {
        question: "¿Cuál es la función principal del diafragma en la respiración?",
        answer: "El diafragma es un músculo principal de la respiración. Se contrae y se aplana durante la inspiración, aumentando el volumen de la cavidad torácica y permitiendo que el aire entre a los pulmones, y se relaja durante la espiración."
    },
    {
        question: "¿Qué es la perfusión en el contexto del cuerpo humano?",
        answer: "La perfusión es el proceso mediante el cual el sistema circulatorio entrega sangre oxigenada y nutrientes a los tejidos y órganos del cuerpo, y elimina los productos de desecho. Una perfusión adecuada es vital para la función celular y orgánica."
    },
    {
        question: "¿Qué es el sistema nervioso autónomo?",
        answer: "El sistema nervioso autónomo (SNA) es una parte del sistema nervioso periférico que controla las funciones corporales involuntarias, como la frecuencia cardíaca, la digestión, la respiración y la presión arterial. Se divide en simpático y parasimpático."
    },
    {
        question: "¿Cuál es la función de los riñones en el cuerpo humano?",
        answer: "Los riñones son órganos vitales del sistema urinario que filtran la sangre para eliminar productos de desecho y exceso de agua, formando orina. También regulan la presión arterial, el equilibrio de electrolitos y la producción de glóbulos rojos."
    },
    {
        question: "¿Qué es el sistema endocrino y cuál es su función principal?",
        answer: "El sistema endocrino está compuesto por glándulas que producen y secretan hormonas, que son sustancias químicas que regulan una amplia gama de funciones corporales, incluyendo el crecimiento, el metabolismo, la reproducción y el estado de ánimo."
    },
    {
        question: "¿Qué es la anatomía topográfica?",
        answer: "La anatomía topográfica se refiere al estudio de las regiones del cuerpo y las relaciones entre las estructuras anatómicas que se encuentran en ellas. Es fundamental para la evaluación y descripción de lesiones en el ámbito prehospitalario."
    }
];

export const humanBodyQuestions: Question[] = [
    {
        question: "Al evaluar las extremidades inferiores de un paciente, observa una marcada hinchazón en el muslo derecho. ¿Qué hueso hay en esta ubicación?",
        options: [
            {letter: "a", text: "Peroné"},
            {letter: "b", text: "Tibia"},
            {letter: "c", text: "Fémur"},
            {letter: "d", text: "Rótula"},
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de las siguientes sustancias es el elemento principal que utilizan las células óseas para crear una estructura dura y resistente?",
        options: [
            {letter: "a", text: "Sodio"},
            {letter: "b", text: "Potasio"},
            {letter: "c", text: "Magnesio"},
            {letter: "d", text: "Calcio"},
        ],
        correctAnswer: "d",
    },
    {
        question: "Un paciente presenta hematomas e inestabilidad en el pómulo derecho. ¿Cuál es el nombre correcto para este hueso?",
        options: [
            {letter: "a", text: "Cigoma"},
            {letter: "b", text: "Maxilar"},
            {letter: "c", "text": "Esfenoides"},
            {letter: "d", text: "Mandíbula"},
        ],
        correctAnswer: "a",
    },
    {
        question: "El hueso más grande del antebrazo que se articula en la muñeca es el:",
        options: [
            {letter: "a", text: "Húmero"},
            {letter: "b", text: "Cúbito"},
            {letter: "c", text: "Radio"},
            {letter: "d", text: "Clavícula"},
        ],
        correctAnswer: "c",
    },
    {
        question: "El antebrazo forma parte del codo. ¿El codo es un ejemplo de qué tipo de articulación?",
        options: [
            {letter: "a", text: "Bisagra"},
            {letter: "b", text: "Esférica"},
            {letter: "c", text: "De silla"},
            {letter: "d", text: "Inamovible"},
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué ocurre en el cuerpo como resultado de un compromiso respiratorio grave?",
        options: [
            {letter: "a", text: "Aumento de los niveles de oxígeno en sangre."},
            {letter: "b", text: "Disminución de los niveles de dióxido de carbono en sangre."},
            {letter: "c", text: "Reducción del intercambio gaseoso, llevando a hipoxia e hipercapnia."},
            {letter: "d", text: "Aumento de la capacidad pulmonar vital."},
        ],
        correctAnswer: "c",
    },
    {
        question: "En un paciente con sospecha de lesión cerrada en la cabeza, ¿qué estructura del cerebro es responsable del nivel de conciencia y el mantenimiento de los signos vitales?",
        options: [
            {letter: "a", text: "Corteza cerebral"},
            {letter: "b", text: "Cerebelo"},
            {letter: "c", text: "Tallo cerebral"},
            {letter: "d", text: "Hipotálamo"},
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué válvula separa el ventrículo izquierdo de la aorta?",
        options: [
            {letter: "a", text: "Válvula tricúspide"},
            {letter: "b", text: "Válvula pulmonar"},
            {letter: "c", text: "Válvula aórtica"},
            {letter: "d", text: "Válvula mitral"},
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué función tiene el líquido sinovial?",
        options: [
            {letter: "a", text: "Regular temperatura corporal"},
            {letter: "b", text: "Lubricar las articulaciones"},
            {letter: "c", text: "Transportar nutrientes"},
            {letter: "d", text: "Aumentar la fuerza muscular"},
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué sistema regula las respuestas de 'lucha o huida' (fight-or-flight)?",
        options: [
            {letter: "a", text: "Sistema simpático"},
            {letter: "b", text: "Sistema somático"},
            {letter: "c", text: "Sistema parasimpático"},
            {letter: "d", text: "Sistema respiratorio"},
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué tipo de articulación es la rodilla?",
        options: [
            {letter: "a", text: "Esférica (enartrosis)"},
            {letter: "b", text: "Bisagra (gínglimo)"},
            {letter: "c", text: "Pivote (trocoide)"},
            {letter: "d", text: "Plana (artrodia)"},
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el componente principal del hueso que le confiere dureza y resistencia?",
        options: [
            {letter: "a", text: "Colágeno"},
            {letter: "b", text: "Agua"},
            {letter: "c", text: "Sales de calcio (hidroxiapatita)"},
            {letter: "d", text: "Células óseas (osteocitos)"},
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el propósito principal del cartílago articular en una articulación sinovial?",
        options: [
            {letter: "a", text: "Producir líquido sinovial."},
            {letter: "b", text: "Unir los huesos de forma permanente."},
            {letter: "c", text: "Reducir la fricción y amortiguar el impacto entre los huesos."},
            {letter: "d", text: "Suministrar sangre a los huesos."},
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué órgano es el principal responsable de la desintoxicación de la sangre y la producción de bilis?",
        options: [
            {letter: "a", text: "Riñón"},
            {letter: "b", text: "Páncreas"},
            {letter: "c", text: "Bazo"},
            {letter: "d", text: "Hígado"},
        ],
        correctAnswer: "d",
    },
    {
        question: "¿Qué estructura del sistema respiratorio evita que los alimentos entren en la tráquea durante la deglución?",
        options: [
            {letter: "a", text: "Faringe"},
            {letter: "b", text: "Laringe"},
            {letter: "c", text: "Epiglotis"},
            {letter: "d", text: "Bronquios"},
        ],
        correctAnswer: "c",
    }
];
