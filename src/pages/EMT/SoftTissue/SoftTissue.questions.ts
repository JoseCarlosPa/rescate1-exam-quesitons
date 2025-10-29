import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Cuál es la diferencia entre una herida abierta y una herida cerrada?",
        answer: "Una herida cerrada es una lesión donde el tejido blando sufre daño debajo de la piel, pero la superficie de la piel permanece intacta, como en una contusión o hematoma. Una herida abierta implica una ruptura en la superficie de la piel, exponiendo los tejidos internos, como en abrasiones, laceraciones o avulsiones.",
    },
    {
        question: "¿Qué es el síndrome compartimental?",
        answer: "Es una condición grave que ocurre por inflamación o sangrado dentro de un espacio muscular confinado (compartimento), generalmente en una extremidad. La presión aumenta a niveles peligrosos, obstruyendo el flujo sanguíneo y pudiendo causar daño muscular y nervioso permanente si no se trata.",
    },
    {
        question: "¿Cómo se clasifican las quemaduras según su profundidad?",
        answer: "Se clasifican en: \n• Quemaduras superficiales (1er grado): Afectan solo la epidermis. Causan enrojecimiento y dolor, como una quemadura solar. \n• Quemaduras de espesor parcial (2do grado): Afectan la epidermis y parte de la dermis. Producen ampollas, son húmedas y muy dolorosas. \n• Quemaduras de espesor total (3er grado): Destruyen todas las capas de la piel. La piel se ve seca, correosa, blanca o carbonizada, y puede no haber dolor en el centro de la lesión.",
    },
    {
        question: "¿Para qué se utiliza la 'Regla de los Nueves'?",
        answer: "La Regla de los Nueves es un método rápido para estimar el porcentaje de la superficie corporal total (SCT) que ha sido quemada en un paciente. Es esencial para determinar la severidad de la quemadura y guiar el tratamiento, especialmente la reanimación con líquidos.",
    },
    {
        question: "¿Cuál es el manejo inicial correcto para una amputación traumática?",
        answer: "Primero, controle la hemorragia en el muñón del paciente, a menudo con un torniquete. Luego, envuelva la parte amputada en un apósito estéril seco, colóquela dentro de una bolsa de plástico y ponga esa bolsa en un recipiente con agua fría. No permita que la parte amputada entre en contacto directo con el hielo.",
    },
    {
        question: "¿Cómo se debe tratar un objeto empalado en el abdomen?",
        answer: "Nunca se debe retirar un objeto empalado. El manejo correcto consiste en controlar la hemorragia aplicando presión directa en los bordes de la herida y estabilizar el objeto en su lugar con vendajes voluminosos para evitar que se mueva durante el transporte.",
    },
    {
        question: "¿Qué es el síndrome de aplastamiento (crush syndrome)?",
        answer: "Es una condición que se desarrolla cuando una parte del cuerpo queda atrapada por más de 4 horas. Al liberarla, se liberan al torrente sanguíneo toxinas (como mioglobina) de los músculos dañados, lo que puede provocar insuficiencia renal aguda y arritmias cardíacas mortales.",
    },
    {
        question: "¿Cuál es el tratamiento para una quemadura química seca en la piel?",
        answer: "Primero, se debe cepillar la mayor cantidad posible del químico seco de la piel, evitando contaminarse o al paciente. Después de retirar el polvo, se debe irrigar la zona abundantemente con agua durante 15 a 20 minutos.",
    },
];
export const softTissueExam: Question[] = [
    {
        "question": "Un paciente adulto presenta quemaduras de espesor parcial en todo el tórax anterior y en la totalidad de su brazo derecho. Usando la Regla de los Nueves, ¿qué porcentaje de superficie corporal está quemado?",
        "options": [
            {"letter": "a", "text": "18%"},
            {"letter": "b", "text": "27%"},
            {"letter": "c", "text": "36%"},
            {"letter": "d", "text": "45%"}
        ],
        "correctAnswer": "b",
        "explanation": "Según la Regla de los Nueves para adultos, el tórax anterior completo representa el 18% de la superficie corporal total, y un brazo completo representa el 9%. Por lo tanto, el total es 18% + 9% = 27%."
    },
    {
        "question": "Un paciente ha sufrido una avulsión en la pierna, donde una gran porción de piel está desprendida pero aún unida por un borde. ¿Cuál es el manejo correcto de la herida?",
        "options": [
            {"letter": "a", "text": "Terminar de cortar la piel avulsionada para crear una herida limpia"},
            {
                "letter": "b",
                "text": "Colocar el colgajo de piel de nuevo en su posición normal y cubrir con un apósito estéril"
            },
            {"letter": "c", "text": "Enrollar el colgajo de piel sobre sí mismo y vendarlo"},
            {"letter": "d", "text": "Aplicar un vendaje compresivo apretado directamente sobre la herida expuesta"}
        ],
        "correctAnswer": "b",
        "explanation": "En una avulsión, si el colgajo de piel aún está unido, se debe intentar preservar el tejido. El manejo correcto es colocar suavemente el colgajo en su posición anatómica original y cubrirlo con un apósito estéril y húmedo para mantenerlo viable antes de la evaluación quirúrgica."
    },
    {
        "question": "Usted atiende a un paciente con una herida por mordedura humana en la mano. La principal preocupación asociada con este tipo de lesión es:",
        "options": [
            {"letter": "a", "text": "La hemorragia arterial masiva"},
            {"letter": "b", "text": "El riesgo de síndrome compartimental"},
            {"letter": "c", "text": "Un alto riesgo de infección grave"},
            {"letter": "d", "text": "La posible transmisión de la rabia"}
        ],
        "correctAnswer": "c",
        "explanation": "La boca humana contiene una gran cantidad y variedad de bacterias. Una mordedura que rompe la piel inocula estas bacterias profundamente en los tejidos, lo que conlleva un riesgo extremadamente alto de desarrollar una infección grave si no se trata adecuadamente."
    },
    {
        "question": "Un paciente presenta una quemadura de espesor total, seca y de aspecto blanquecino en la mano. El paciente niega sentir dolor en el centro de la lesión. La ausencia de dolor se debe a:",
        "options": [
            {"letter": "a", "text": "La destrucción de las terminaciones nerviosas en la dermis"},
            {"letter": "b", "text": "El efecto calmante del proceso de quemadura"},
            {"letter": "c", "text": "Una respuesta de shock que bloquea la sensación"},
            {"letter": "d", "text": "La rápida formación de una escara protectora"}
        ],
        "correctAnswer": "a",
        "explanation": "Las quemaduras de espesor total (tercer grado) destruyen todas las capas de la piel, incluyendo la epidermis y la dermis, donde se encuentran las terminaciones nerviosas sensoriales. La destrucción de estos nervios es la razón por la que la herida es insensible al tacto o al dolor en el área quemada."
    },
    {
        "question": "Un paciente que fue rescatado tras tener su brazo atrapado bajo un vehículo por 6 horas presenta dolor intenso, palidez y ausencia de pulso distal en la extremidad afectada. Estos hallazgos son más consistentes con:",
        "options": [
            {"letter": "a", "text": "Una contusión simple"},
            {"letter": "b", "text": "Síndrome compartimental"},
            {"letter": "c", "text": "Una laceración arterial"},
            {"letter": "d", "text": "Una abrasión profunda"}
        ],
        "correctAnswer": "b",
        "explanation": "La compresión prolongada puede causar una lesión por aplastamiento, que lleva a una inflamación masiva dentro de los compartimentos musculares del brazo. Este aumento de presión (síndrome compartimental) comprime los vasos sanguíneos y los nervios, causando dolor extremo, pérdida de pulso y palidez, siendo una emergencia que amenaza la extremidad."
    },
    {
        "question": "El tratamiento inicial y más importante para las quemaduras térmicas, después de asegurar la escena y evaluar el ABC, es:",
        "options": [
            {"letter": "a", "text": "Aplicar ungüentos o cremas antibióticas inmediatamente"},
            {"letter": "b", "text": "Romper las ampollas para liberar la presión"},
            {"letter": "c", "text": "Detener el proceso de quemadura y cubrir con un apósito estéril seco"},
            {"letter": "d", "text": "Envolver la zona quemada en hielo para reducir el dolor"}
        ],
        "correctAnswer": "c",
        "explanation": "La primera prioridad es detener el proceso de quemadura para prevenir un daño tisular mayor (generalmente con agua fría, no helada). Inmediatamente después, la herida debe cubrirse con un apósito estéril y seco para protegerla de la contaminación, reducir el dolor y prevenir la hipotermia."
    },
    {
        "question": "Al evaluar una quemadura eléctrica, el paramédico debe recordar siempre:",
        "options": [
            {"letter": "a", "text": "Que la quemadura superficial es siempre el daño más grave"},
            {"letter": "b", "text": "Buscar siempre una herida de entrada y una de salida"},
            {"letter": "c", "text": "Que el riesgo principal es la infección y no las arritmias"},
            {"letter": "d", "text": "Aplicar inmediatamente un desfibrilador en todos los casos"}
        ],
        "correctAnswer": "b",
        "explanation": "La corriente eléctrica viaja a través del cuerpo desde un punto de entrada hasta un punto de salida (tierra). Es crucial identificar ambas heridas, ya que el daño interno a los tejidos y órganos a lo largo de la trayectoria de la corriente suele ser mucho más severo que lo que sugieren las quemaduras superficiales."
    },
    {
        "question": "¿Cuál de las siguientes quemaduras se consideraría crítica en un adulto, independientemente de su extensión?",
        "options": [
            {"letter": "a", "text": "Una quemadura superficial en la espalda"},
            {"letter": "b", "text": "Una quemadura de espesor parcial en el pie"},
            {"letter": "c", "text": "Una quemadura de segundo grado en el antebrazo"},
            {"letter": "d", "text": "Una quemadura de primer grado en el abdomen"}
        ],
        "correctAnswer": "b",
        "explanation": "Las quemaduras en áreas funcionales críticas como las manos, los pies, la cara, los genitales o sobre articulaciones importantes se consideran graves. Una quemadura en el pie puede provocar una discapacidad significativa y complicaciones a largo plazo, por lo que requiere atención especializada."
    },
    {
        "question": "El manejo de una herida cerrada con un hematoma significativo en el muslo incluye la aplicación de RICES. ¿Qué componente de RICES ayuda a reducir la inflamación y el sangrado?",
        "options": [
            {"letter": "a", "text": "Reposo (Rest)"},
            {"letter": "b", "text": "Hielo (Ice) y Compresión (Compression)"},
            {"letter": "c", "text": "Elevación (Elevation)"},
            {"letter": "d", "text": "Inmovilización (Splinting)"}
        ],
        "correctAnswer": "b",
        "explanation": "La aplicación de hielo (crioterapia) causa vasoconstricción, lo que disminuye el flujo sanguíneo a la zona y reduce tanto el sangrado como la hinchazón. La compresión con un vendaje elástico ayuda a limitar la acumulación de sangre y líquido en los tejidos."
    },
    {
        "question": "Una laceración se diferencia de una incisión en que la laceración:",
        "options": [
            {"letter": "a", "text": "Es un corte de bordes lisos y regulares"},
            {"letter": "b", "text": "Implica una pérdida de tejido superficial"},
            {"letter": "c", "text": "Es un corte irregular y dentado"},
            {"letter": "d", "text": "Nunca sangra profusamente"}
        ],
        "correctAnswer": "c",
        "explanation": "Por definición, una laceración es un desgarro del tejido blando que produce una herida con bordes irregulares o aserrados, a menudo causada por un traumatismo contuso. Una incisión es un corte limpio con bordes lisos, típicamente hecho por un objeto afilado como un cuchillo o un bisturí."
    }
];


/**
 * Preguntas de desafío sobre Lesiones al Tejido Blando
 */
export const softTissueChallengeQuestions: Question[] = [
    {
        question: "Un paciente tiene una hemorragia arterial exanguinante en el antebrazo que no se controla con presión directa. ¿Cuál es la acción correcta al aplicar un torniquete?",
        options: [
            {letter: "a", text: "Aflojarlo cada 5 minutos para permitir la perfusión"},
            {letter: "b", text: "Colocarlo directamente sobre la articulación del codo"},
            {letter: "c", text: "Apretarlo solo hasta que el sangrado venoso se detenga"},
            {letter: "d", text: "Apretarlo hasta que cese el sangrado arterial y el pulso distal desaparezca"}
        ],
        correctAnswer: "d",
        explanation: "Un torniquete es un dispositivo de 'todo o nada'. Debe apretarse lo suficiente para ocluir el flujo arterial, lo que se confirma por el cese del sangrado y la ausencia de pulso distal. Nunca debe aflojarse en el entorno prehospitalario."
    },
    {
        question: "Un paciente presenta una quemadura por un químico en polvo seco (como cal viva). ¿Cuál es el paso inicial en el manejo de esta quemadura?",
        options: [
            {letter: "a", text: "Irrigar inmediatamente con abundante agua"},
            {letter: "b", text: "Cepillar el polvo químico seco de la piel antes de irrigar"},
            {letter: "c", text: "Neutralizar el químico con un ácido débil (vinagre)"},
            {letter: "d", text: "Cubrir la quemadura con un apósito oclusivo"}
        ],
        correctAnswer: "b",
        explanation: "Los químicos en polvo seco deben ser cepillados de la piel ANTES de irrigar. Añadir agua a ciertos químicos secos (como la cal) puede crear una reacción exotérmica que empeora la quemadura."
    },
    {
        question: "La principal complicación sistémica que se debe anticipar en una quemadura eléctrica de alto voltaje, independientemente del tamaño de la quemadura cutánea, es:",
        options: [
            {letter: "a", text: "Infección bacteriana severa"},
            {letter: "b", text: "Hipotermia por pérdida de piel"},
            {letter: "c", text: "Arritmias cardíacas letales y Rabdomiólisis"},
            {letter: "d", text: "Deshidratación por pérdida de líquidos"}
        ],
        correctAnswer: "c",
        explanation: "La corriente eléctrica altera la conducción cardíaca, pudiendo causar arritmias (FV, asistolia). Además, la electroporación destruye masivamente las células musculares, liberando mioglobina (Rabdomiólisis) que daña los riñones."
    },
    {
        question: "¿Cuál es el método correcto para preservar una parte amputada (ej. un dedo) para su transporte al hospital?",
        options: [
            {letter: "a", text: "Colocar el dedo directamente en hielo"},
            {letter: "b", text: "Sumergir el dedo en solución salina estéril"},
            {letter: "c", text: "Envolver en gasa seca y ponerlo en una bolsa de plástico"},
            {letter: "d", text: "Envolver en gasa húmeda, poner en bolsa sellada, y colocar esa bolsa en hielo/agua"}
        ],
        correctAnswer: "d",
        explanation: "La parte amputada debe mantenerse fría pero no congelada. El contacto directo con el hielo causa congelación. Debe envolverse en gasa estéril (ligeramente húmeda), sellarse en una bolsa, y colocar esa bolsa en un recipiente con hielo y agua."
    },
    {
        question: "Un paciente ha estado atrapado bajo un pilar de concreto por 4 horas. Antes de liberarlo, el equipo de SVA debe prepararse para tratar el 'Síndrome de Aplastamiento' (Crush Syndrome), que incluye:",
        options: [
            {letter: "a", text: "Hipertensión severa por la liberación de adrenalina"},
            {letter: "b", text: "Alcalosis respiratoria por el pánico"},
            {letter: "c", text: "Hiperkalemia y Rabdomiólisis por la lisis celular"},
            {letter: "d", text: "Hipoglucemia por el gasto de energía"}
        ],
        correctAnswer: "c",
        explanation: "La destrucción de las células musculares (Rabdomiólisis) libera su contenido al torrente sanguíneo. Esto incluye grandes cantidades de potasio (Hiperkalemia) y mioglobina. Al liberar la presión, estas sustancias inundan la circulación sistémica, causando arritmias letales e insuficiencia renal."
    },
    {
        question: "En las primeras 24 horas de una quemadura mayor (>20% SCT), ¿cuál es la causa fisiopatológica principal del shock?",
        options: [
            {letter: "a", text: "Shock cardiogénico por daño al miocardio"},
            {letter: "b", text: "Shock neurogénico por el dolor intenso"},
            {letter: "c", "text": "Shock hipovolémico por la pérdida de sangre en la herida"},
            {letter: "d", text: "Shock hipovolémico (distributivo) por fuga masiva de plasma al tercer espacio"}
        ],
        correctAnswer: "d",
        explanation: "Las quemaduras mayores causan una respuesta inflamatoria sistémica que aumenta masivamente la permeabilidad capilar. Esto hace que el plasma (la parte líquida de la sangre) se fugue de los vasos al espacio intersticial (tercer espacio), causando hipovolemia severa."
    },
    {
        question: "Un paciente presenta una herida punzante en el cuello (Zona II) que succiona aire con cada inspiración. ¿Cuál es la complicación inmediata más peligrosa?",
        options: [
            {letter: "a", text: "Embolia aérea venosa"},
            {letter: "b", text: "Infección de la herida"},
            {letter: "c", text: "Lesión de la médula espinal"},
            {letter: "d", "text": "Hemorragia arterial"}
        ],
        correctAnswer: "a",
        explanation: "Una lesión en una vena grande del cuello (como la yugular) puede aspirar aire hacia la circulación venosa debido a la presión negativa durante la inspiración. Este aire puede viajar al corazón y los pulmones, creando una embolia aérea masiva y fatal."
    },
    {
        question: "De las '6 P' del Síndrome Compartimental, ¿cuál es considerado el signo más TEMPRANO y sensible?",
        options: [
            {letter: "a", text: "Ausencia de Pulso (Pulselessness)"},
            {letter: "b", text: "Palidez (Pallor)"},
            {letter: "c", text: "Dolor desproporcionado a la lesión (Pain)"},
            {letter: "d", text: "Parálisis (Paralysis)"}
        ],
        correctAnswer: "c",
        explanation: "El dolor severo, especialmente cuando es desproporcionado al hallazgo físico (ej. dolor extremo al estirar pasivamente los dedos), es el síntoma cardinal y más temprano. La pérdida de pulso y la parálisis son signos muy tardíos e indican muerte tisular inminente."
    },
    {
        question: "Un paciente con una laceración profunda en la muñeca sangra profusamente. La sangre es de un rojo brillante y sale a chorros. Esto indica una lesión:",
        options: [
            {letter: "a", text: "Arterial"},
            {letter: "b", text: "Venosa"},
            {letter: "c", text: "Capilar"},
            {letter: "d", "text": "Linfática"}
        ],
        correctAnswer: "a",
        explanation: "El sangrado arterial se caracteriza por sangre de color rojo brillante (rica en oxígeno) que sale de forma pulsátil o 'a chorros', sincronizada con el latido del corazón, debido a la alta presión del sistema arterial."
    },
    {
        question: "En una lesión por explosión (blast), las lesiones 'Terciarias' se refieren a:",
        options: [
            {letter: "a", text: "El daño por la onda de presión (ej. ruptura de pulmón)"},
            {letter: "b", text: "El daño por fragmentos y escombros (ej. laceraciones)"},
            {letter: "c", text: "El daño por ser lanzado contra un objeto (ej. fracturas)"},
            {letter: "d", text: "El daño por quemaduras, inhalación de gases o radiación"}
        ],
        correctAnswer: "c",
        explanation: "Lesión Primaria = Onda de presión. Lesión Secundaria = Fragmentos. Lesión Terciaria = Impacto del cuerpo al ser lanzado. Lesión Cuaternaria/Quinaria = Quemaduras, tóxicos, radiación."
    }
];