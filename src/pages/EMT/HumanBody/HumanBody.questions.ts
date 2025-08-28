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
        "question": "Al evaluar las extremidades inferiores de un paciente, observa una marcada hinchazón en el muslo derecho. ¿Qué hueso hay en esta ubicación?",
        "options": [
            { "letter": "a", "text": "Peroné" },
            { "letter": "b", "text": "Tibia" },
            { "letter": "c", "text": "Fémur" },
            { "letter": "d", "text": "Rótula" }
        ],
        "correctAnswer": "c",
        "explanation": "El fémur es el único hueso largo ubicado en el muslo (la porción superior de la pierna, entre la cadera y la rodilla). Es el hueso más largo y fuerte del cuerpo humano. La tibia y el peroné se encuentran en la parte inferior de la pierna."
    },
    {
        "question": "¿Cuál de las siguientes sustancias es el elemento principal que utilizan las células óseas para crear una estructura dura y resistente?",
        "options": [
            { "letter": "a", "text": "Sodio" },
            { "letter": "b", "text": "Potasio" },
            { "letter": "c", "text": "Magnesio" },
            { "letter": "d", "text": "Calcio" }
        ],
        "correctAnswer": "d",
        "explanation": "El calcio, en forma de sales de fosfato de calcio (principalmente hidroxiapatita), es el mineral que se deposita sobre la matriz de colágeno del hueso, proporcionándole su dureza característica y su resistencia a la compresión."
    },
    {
        "question": "Un paciente presenta hematomas e inestabilidad en el pómulo derecho. ¿Cuál es el nombre correcto para este hueso?",
        "options": [
            { "letter": "a", "text": "Cigoma" },
            { "letter": "b", "text": "Maxilar" },
            { "letter": "c", "text": "Esfenoides" },
            { "letter": "d", "text": "Mandíbula" }
        ],
        "correctAnswer": "a",
        "explanation": "El hueso cigomático, comúnmente conocido como pómulo, forma la prominencia de la mejilla y parte del suelo y la pared lateral de la órbita ocular. Es un hueso facial que se fractura con frecuencia en traumatismos directos."
    },
    {
        "question": "El hueso más grande del antebrazo que se articula en la muñeca es el:",
        "options": [
            { "letter": "a", "text": "Húmero" },
            { "letter": "b", "text": "Cúbito" },
            { "letter": "c", "text": "Radio" },
            { "letter": "d", "text": "Clavícula" }
        ],
        "correctAnswer": "c",
        "explanation": "El radio es el hueso del antebrazo que se encuentra en el lado del pulgar. Es más grueso en su extremo distal, donde forma la parte principal de la articulación de la muñeca. El cúbito es el otro hueso del antebrazo, ubicado en el lado del meñique."
    },
    {
        "question": "El antebrazo forma parte del codo. ¿El codo es un ejemplo de qué tipo de articulación?",
        "options": [
            { "letter": "a", "text": "Bisagra" },
            { "letter": "b", "text": "Esférica" },
            { "letter": "c", "text": "De silla" },
            { "letter": "d", "text": "Inamovible" }
        ],
        "correctAnswer": "a",
        "explanation": "El codo es una articulación de tipo bisagra (o gínglimo). Este tipo de articulación permite el movimiento en un solo plano, como una bisagra de puerta, facilitando la flexión y la extensión del antebrazo."
    },
    {
        "question": "¿Qué ocurre en el cuerpo como resultado de un compromiso respiratorio grave?",
        "options": [
            { "letter": "a", "text": "Aumento de los niveles de oxígeno en sangre." },
            { "letter": "b", "text": "Disminución de los niveles de dióxido de carbono en sangre." },
            { "letter": "c", "text": "Reducción del intercambio gaseoso, llevando a hipoxia e hipercapnia." },
            { "letter": "d", "text": "Aumento de la capacidad pulmonar vital." }
        ],
        "correctAnswer": "c",
        "explanation": "Un compromiso respiratorio grave impide el intercambio adecuado de gases en los alvéolos. Esto resulta en una disminución del oxígeno en la sangre (hipoxia) y una acumulación de dióxido de carbono (hipercapnia), lo que lleva a un estado de insuficiencia respiratoria."
    },
    {
        "question": "En un paciente con sospecha de lesión cerrada en la cabeza, ¿qué estructura del cerebro es responsable del nivel de conciencia y el mantenimiento de los signos vitales?",
        "options": [
            { "letter": "a", "text": "Corteza cerebral" },
            { "letter": "b", "text": "Cerebelo" },
            { "letter": "c", "text": "Tallo cerebral" },
            { "letter": "d", "text": "Hipotálamo" }
        ],
        "correctAnswer": "c",
        "explanation": "El tallo cerebral (o tronco encefálico) contiene centros vitales que regulan funciones autónomas esenciales como la frecuencia cardíaca, la presión arterial y la respiración. También alberga el sistema de activación reticular, que es crucial para mantener el estado de vigilia y la conciencia."
    },
    {
        "question": "¿Qué válvula separa el ventrículo izquierdo de la aorta?",
        "options": [
            { "letter": "a", "text": "Válvula tricúspide" },
            { "letter": "b", "text": "Válvula pulmonar" },
            { "letter": "c", "text": "Válvula aórtica" },
            { "letter": "d", "text": "Válvula mitral" }
        ],
        "correctAnswer": "c",
        "explanation": "La válvula aórtica se encuentra entre el ventrículo izquierdo y la aorta. Se abre durante la contracción del ventrículo para permitir que la sangre rica en oxígeno sea bombeada al resto del cuerpo y se cierra para evitar que la sangre regrese al ventrículo."
    },
    {
        "question": "¿Qué función tiene el líquido sinovial?",
        "options": [
            { "letter": "a", "text": "Regular temperatura corporal" },
            { "letter": "b", "text": "Lubricar las articulaciones" },
            { "letter": "c", "text": "Transportar nutrientes" },
            { "letter": "d", "text": "Aumentar la fuerza muscular" }
        ],
        "correctAnswer": "b",
        "explanation": "El líquido sinovial es un fluido viscoso que se encuentra en las cavidades de las articulaciones sinoviales (móviles). Su función principal es reducir la fricción entre los cartílagos articulares durante el movimiento, actuando como un lubricante."
    },
    {
        "question": "¿Qué sistema regula las respuestas de 'lucha o huida' (fight-or-flight)?",
        "options": [
            { "letter": "a", "text": "Sistema simpático" },
            { "letter": "b", "text": "Sistema somático" },
            { "letter": "c", "text": "Sistema parasimpático" },
            { "letter": "d", "text": "Sistema respiratorio" }
        ],
        "correctAnswer": "a",
        "explanation": "El sistema nervioso simpático es la parte del sistema nervioso autónomo que prepara al cuerpo para situaciones de estrés o emergencia. Activa la respuesta de 'lucha o huida', aumentando la frecuencia cardíaca, la presión arterial y desviando el flujo sanguíneo a los músculos."
    },
    {
        "question": "¿Qué tipo de articulación es la rodilla?",
        "options": [
            { "letter": "a", "text": "Esférica (enartrosis)" },
            { "letter": "b", "text": "Bisagra (gínglimo)" },
            { "letter": "c", "text": "Pivote (trocoide)" },
            { "letter": "d", "text": "Plana (artrodia)" }
        ],
        "correctAnswer": "b",
        "explanation": "La rodilla es principalmente una articulación de tipo bisagra, que permite la flexión y la extensión. Sin embargo, es una articulación de bisagra 'modificada' porque también permite un pequeño grado de rotación cuando está flexionada."
    },
    {
        "question": "¿Cuál es el componente principal del hueso que le confiere dureza y resistencia?",
        "options": [
            { "letter": "a", "text": "Colágeno" },
            { "letter": "b", "text": "Agua" },
            { "letter": "c", "text": "Sales de calcio (hidroxiapatita)" },
            { "letter": "d", "text": "Células óseas (osteocitos)" }
        ],
        "correctAnswer": "c",
        "explanation": "La matriz ósea está compuesta por una parte orgánica (principalmente colágeno, que le da flexibilidad) y una parte inorgánica. La parte inorgánica, compuesta por sales de calcio y fosfato en forma de cristales de hidroxiapatita, es la que proporciona la dureza y rigidez al hueso."
    },
    {
        "question": "¿Cuál es el propósito principal del cartílago articular en una articulación sinovial?",
        "options": [
            { "letter": "a", "text": "Producir líquido sinovial." },
            { "letter": "b", "text": "Unir los huesos de forma permanente." },
            { "letter": "c", "text": "Reducir la fricción y amortiguar el impacto entre los huesos." },
            { "letter": "d", "text": "Suministrar sangre a los huesos." }
        ],
        "correctAnswer": "c",
        "explanation": "El cartílago articular es un tejido liso, blanco y resbaladizo que recubre los extremos de los huesos en las articulaciones móviles. Su función es proporcionar una superficie de bajo rozamiento para el movimiento y ayudar a distribuir las cargas y amortiguar los impactos."
    },
    {
        "question": "¿Qué órgano es el principal responsable de la desintoxicación de la sangre y la producción de bilis?",
        "options": [
            { "letter": "a", "text": "Riñón" },
            { "letter": "b", "text": "Páncreas" },
            { "letter": "c", "text": "Bazo" },
            { "letter": "d", "text": "Hígado" }
        ],
        "correctAnswer": "d",
        "explanation": "El hígado es una 'central metabólica' del cuerpo. Entre sus más de 500 funciones se encuentran filtrar y desintoxicar la sangre de sustancias nocivas y producir bilis, que es esencial para la digestión de las grasas en el intestino delgado."
    },
    {
        "question": "¿Qué estructura del sistema respiratorio evita que los alimentos entren en la tráquea durante la deglución?",
        "options": [
            { "letter": "a", "text": "Faringe" },
            { "letter": "b", "text": "Laringe" },
            { "letter": "c", "text": "Epiglotis" },
            { "letter": "d", "text": "Bronquios" }
        ],
        "correctAnswer": "c",
        "explanation": "La epiglotis es una lengüeta de cartílago elástico situada en la base de la lengua. Durante la deglución, se pliega hacia abajo para cubrir la apertura de la laringe (la entrada a la tráquea), dirigiendo así los alimentos y líquidos hacia el esófago y evitando la aspiración."
    }
];

export const humanBodyChallengingQuestions: Question[] = [
    {
        question: "¿Cuál es la función principal de los huesos sesamoideos?",
        options: [
            { letter: "a", text: "Proteger órganos internos" },
            { letter: "b", text: "Facilitar el movimiento y proteger tendones" },
            { letter: "c", text: "Almacenar calcio" },
            { letter: "d", text: "Producir glóbulos rojos" }
        ],
        correctAnswer: "b",
        explanation: "Los huesos sesamoideos, como la rótula, facilitan el movimiento y protegen los tendones de fuerzas excesivas."
    },
    {
        question: "¿Qué sistema corporal regula principalmente la homeostasis?",
        options: [
            { letter: "a", text: "Sistema muscular" },
            { letter: "b", text: "Sistema nervioso y endocrino" },
            { letter: "c", text: "Sistema digestivo" },
            { letter: "d", text: "Sistema respiratorio" }
        ],
        correctAnswer: "b",
        explanation: "La homeostasis es regulada principalmente por el sistema nervioso y el endocrino, que coordinan respuestas rápidas y lentas respectivamente."
    }
];
