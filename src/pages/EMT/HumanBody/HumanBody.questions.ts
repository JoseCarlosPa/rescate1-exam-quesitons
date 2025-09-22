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
        question: "¿Qué es el sistema endocrino y cu��l es su función principal?",
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
            {"letter": "a", "text": "Peroné"},
            {"letter": "b", "text": "Tibia"},
            {"letter": "c", "text": "Fémur"},
            {"letter": "d", "text": "Rótula"}
        ],
        "correctAnswer": "c",
        "explanation": "El fémur es el único hueso largo ubicado en el muslo (la porción superior de la pierna, entre la cadera y la rodilla). Es el hueso más largo y fuerte del cuerpo humano. La tibia y el peroné se encuentran en la parte inferior de la pierna."
    },
    {
        "question": "¿Cuál de las siguientes sustancias es el elemento principal que utilizan las células óseas para crear una estructura dura y resistente?",
        "options": [
            {"letter": "a", "text": "Sodio"},
            {"letter": "b", "text": "Potasio"},
            {"letter": "c", "text": "Magnesio"},
            {"letter": "d", "text": "Calcio"}
        ],
        "correctAnswer": "d",
        "explanation": "El calcio, en forma de sales de fosfato de calcio (principalmente hidroxiapatita), es el mineral que se deposita sobre la matriz de colágeno del hueso, proporcionándole su dureza característica y su resistencia a la compresión."
    },
    {
        "question": "Un paciente presenta hematomas e inestabilidad en el pómulo derecho. ¿Cuál es el nombre correcto para este hueso?",
        "options": [
            {"letter": "a", "text": "Cigoma"},
            {"letter": "b", "text": "Maxilar"},
            {"letter": "c", "text": "Esfenoides"},
            {"letter": "d", "text": "Mandíbula"}
        ],
        "correctAnswer": "a",
        "explanation": "El hueso cigomático, comúnmente conocido como pómulo, forma la prominencia de la mejilla y parte del suelo y la pared lateral de la órbita ocular. Es un hueso facial que se fractura con frecuencia en traumatismos directos."
    },
    {
        "question": "El hueso más grande del antebrazo que se articula en la muñeca es el:",
        "options": [
            {"letter": "a", "text": "Húmero"},
            {"letter": "b", "text": "Cúbito"},
            {"letter": "c", "text": "Radio"},
            {"letter": "d", "text": "Clavícula"}
        ],
        "correctAnswer": "c",
        "explanation": "El radio es el hueso del antebrazo que se encuentra en el lado del pulgar. Es más grueso en su extremo distal, donde forma la parte principal de la articulación de la muñeca. El cúbito es el otro hueso del antebrazo, ubicado en el lado del meñique."
    },
    {
        "question": "El antebrazo forma parte del codo. ¿El codo es un ejemplo de qué tipo de articulación?",
        "options": [
            {"letter": "a", "text": "Bisagra"},
            {"letter": "b", "text": "Esférica"},
            {"letter": "c", "text": "De silla"},
            {"letter": "d", "text": "Inamovible"}
        ],
        "correctAnswer": "a",
        "explanation": "El codo es una articulación de tipo bisagra (o gínglimo). Este tipo de articulación permite el movimiento en un solo plano, como una bisagra de puerta, facilitando la flexión y la extensión del antebrazo."
    },
    {
        "question": "¿Qué ocurre en el cuerpo como resultado de un compromiso respiratorio grave?",
        "options": [
            {"letter": "a", "text": "Aumento de los niveles de oxígeno en sangre."},
            {"letter": "b", "text": "Disminución de los niveles de dióxido de carbono en sangre."},
            {"letter": "c", "text": "Reducción del intercambio gaseoso, llevando a hipoxia e hipercapnia."},
            {"letter": "d", "text": "Aumento de la capacidad pulmonar vital."}
        ],
        "correctAnswer": "c",
        "explanation": "Un compromiso respiratorio grave impide el intercambio adecuado de gases en los alvéolos. Esto resulta en una disminución del oxígeno en la sangre (hipoxia) y una acumulación de dióxido de carbono (hipercapnia), lo que lleva a un estado de insuficiencia respiratoria."
    },
    {
        "question": "En un paciente con sospecha de lesión cerrada en la cabeza, ¿qué estructura del cerebro es responsable del nivel de conciencia y el mantenimiento de los signos vitales?",
        "options": [
            {"letter": "a", "text": "Corteza cerebral"},
            {"letter": "b", "text": "Cerebelo"},
            {"letter": "c", "text": "Tallo cerebral"},
            {"letter": "d", "text": "Hipotálamo"}
        ],
        "correctAnswer": "c",
        "explanation": "El tallo cerebral (o tronco encefálico) contiene centros vitales que regulan funciones autónomas esenciales como la frecuencia cardíaca, la presión arterial y la respiración. También alberga el sistema de activación reticular, que es crucial para mantener el estado de vigilia y la conciencia."
    },
    {
        "question": "¿Qué válvula separa el ventrículo izquierdo de la aorta?",
        "options": [
            {"letter": "a", "text": "Válvula tricúspide"},
            {"letter": "b", "text": "Válvula pulmonar"},
            {"letter": "c", "text": "Válvula aórtica"},
            {"letter": "d", "text": "Válvula mitral"}
        ],
        "correctAnswer": "c",
        "explanation": "La válvula aórtica se encuentra entre el ventrículo izquierdo y la aorta. Se abre durante la contracción del ventrículo para permitir que la sangre rica en oxígeno sea bombeada al resto del cuerpo y se cierra para evitar que la sangre regrese al ventrículo."
    },
    {
        "question": "¿Qué función tiene el líquido sinovial?",
        "options": [
            {"letter": "a", "text": "Regular temperatura corporal"},
            {"letter": "b", "text": "Lubricar las articulaciones"},
            {"letter": "c", "text": "Transportar nutrientes"},
            {"letter": "d", "text": "Aumentar la fuerza muscular"}
        ],
        "correctAnswer": "b",
        "explanation": "El líquido sinovial es un fluido viscoso que se encuentra en las cavidades de las articulaciones sinoviales (móviles). Su función principal es reducir la fricción entre los cartílagos articulares durante el movimiento, actuando como un lubricante."
    },
    {
        "question": "¿Qué sistema regula las respuestas de 'lucha o huida' (fight-or-flight)?",
        "options": [
            {"letter": "a", "text": "Sistema simpático"},
            {"letter": "b", "text": "Sistema somático"},
            {"letter": "c", "text": "Sistema parasimpático"},
            {"letter": "d", "text": "Sistema respiratorio"}
        ],
        "correctAnswer": "a",
        "explanation": "El sistema nervioso simpático es la parte del sistema nervioso autónomo que prepara al cuerpo para situaciones de estrés o emergencia. Activa la respuesta de 'lucha o huida', aumentando la frecuencia cardíaca, la presión arterial y desviando el flujo sanguíneo a los músculos."
    },
    {
        "question": "¿Qué tipo de articulación es la rodilla?",
        "options": [
            {"letter": "a", "text": "Esférica (enartrosis)"},
            {"letter": "b", "text": "Bisagra (gínglimo)"},
            {"letter": "c", "text": "Pivote (trocoide)"},
            {"letter": "d", "text": "Plana (artrodia)"}
        ],
        "correctAnswer": "b",
        "explanation": "La rodilla es principalmente una articulación de tipo bisagra, que permite la flexión y la extensión. Sin embargo, es una articulación de bisagra 'modificada' porque también permite un pequeño grado de rotación cuando está flexionada."
    },
    {
        "question": "¿Cuál es el componente principal del hueso que le confiere dureza y resistencia?",
        "options": [
            {"letter": "a", "text": "Colágeno"},
            {"letter": "b", "text": "Agua"},
            {"letter": "c", "text": "Sales de calcio (hidroxiapatita)"},
            {"letter": "d", "text": "Células óseas (osteocitos)"}
        ],
        "correctAnswer": "c",
        "explanation": "La matriz ósea está compuesta por una parte orgánica (principalmente colágeno, que le da flexibilidad) y una parte inorgánica. La parte inorgánica, compuesta por sales de calcio y fosfato en forma de cristales de hidroxiapatita, es la que proporciona la dureza y rigidez al hueso."
    },
    {
        "question": "¿Cuál es el propósito principal del cartílago articular en una articulación sinovial?",
        "options": [
            {"letter": "a", "text": "Producir líquido sinovial."},
            {"letter": "b", "text": "Unir los huesos de forma permanente."},
            {"letter": "c", "text": "Reducir la fricción y amortiguar el impacto entre los huesos."},
            {"letter": "d", "text": "Suministrar sangre a los huesos."}
        ],
        "correctAnswer": "c",
        "explanation": "El cartílago articular es un tejido liso, blanco y resbaladizo que recubre los extremos de los huesos en las articulaciones móviles. Su función es proporcionar una superficie de bajo rozamiento para el movimiento y ayudar a distribuir las cargas y amortiguar los impactos."
    },
    {
        "question": "¿Qué órgano es el principal responsable de la desintoxicación de la sangre y la producción de bilis?",
        "options": [
            {"letter": "a", "text": "Riñón"},
            {"letter": "b", "text": "Páncreas"},
            {"letter": "c", "text": "Bazo"},
            {"letter": "d", "text": "Hígado"}
        ],
        "correctAnswer": "d",
        "explanation": "El hígado es una 'central metabólica' del cuerpo. Entre sus más de 500 funciones se encuentran filtrar y desintoxicar la sangre de sustancias nocivas y producir bilis, que es esencial para la digestión de las grasas en el intestino delgado."
    },
    {
        "question": "¿Qué estructura del sistema respiratorio evita que los alimentos entren en la tráquea durante la deglución?",
        "options": [
            {"letter": "a", "text": "Faringe"},
            {"letter": "b", "text": "Laringe"},
            {"letter": "c", "text": "Epiglotis"},
            {"letter": "d", "text": "Bronquios"}
        ],
        "correctAnswer": "c",
        "explanation": "La epiglotis es una lengüeta de cartílago elástico situada en la base de la lengua. Durante la deglución, se pliega hacia abajo para cubrir la apertura de la laringe (la entrada a la tráquea), dirigiendo así los alimentos y líquidos hacia el esófago y evitando la aspiración."
    }
];

export const humanBodyChallengingQuestions: Question[] = [
    {
        question: "Un paciente de 45 años sufre un traumatismo torácico cerrado y presenta disnea severa, desviación traqueal hacia la izquierda, ausencia de ruidos respiratorios derechos, e hipotensión progresiva. Considerando la anatomía de la cavidad pleural y la fisiología cardiovascular, ¿cuál es el mecanismo fisiopatológico que mejor explica esta presentación clínica?",
        options: [
            {letter: "a", text: "El neumotórax simple causa colapso pulmonar sin afectar el retorno venoso"},
            {
                letter: "b",
                text: "El neumotórax a tensión aumenta la presión intratorácica, comprime el mediastino, desplaza estructuras y compromete el retorno venoso al corazón"
            },
            {letter: "c", text: "La contusión pulmonar causa inflamación que bloquea el intercambio gaseoso"},
            {letter: "d", text: "El hemotórax masivo causa únicamente pérdida de volumen sanguíneo"}
        ],
        correctAnswer: "b",
        explanation: "El neumotórax a tensión es una emergencia que involucra múltiples sistemas. La acumulación progresiva de aire en el espacio pleural aumenta la presión intratorácica, causando: 1) colapso pulmonar ipsilateral (ausencia de ruidos respiratorios), 2) desplazamiento del mediastino hacia el lado contralateral (desviación traqueal), 3) compresión de las venas cavas y corazón, reduciendo el retorno venoso y el gasto cardíaco (hipotensión). Esta comprensión anatómica y fisiológica es crucial para reconocer la necesidad de descompresión inmediata."
    },
    {
        question: "Durante la evaluación de un paciente inconsciente, observa que las pupilas son puntiformes (miosis extrema), la respiración es superficial a 8 por minuto, y hay cianosis perioral. Al aplicar estímulos dolorosos, hay respuesta mínima. ¿Qué sistema neurológico está principalmente comprometido y cuál es la base anatómica de estos hallazgos?",
        options: [
            {letter: "a", text: "El sistema nervioso simpático está hiperactivado causando vasoconstricción"},
            {
                letter: "b",
                text: "El tronco encefálico está deprimido, afectando los centros respiratorio y autonómico, mientras el sistema parasimpático predomina"
            },
            {
                letter: "c",
                text: "El córtex cerebral está lesionado causando pérdida de funciones superiores únicamente"
            },
            {letter: "d", text: "El sistema nervioso periférico está inflamado causando disfunción motora"}
        ],
        correctAnswer: "b",
        explanation: "Esta constelación de signos indica depresión del tronco encefálico, específicamente: 1) la miosis extrema sugiere pérdida del tono simpático en las pupilas con predominio parasimpático, 2) la bradipnea indica depresión del centro respiratorio en el bulbo raquídeo, 3) la respuesta disminuida al dolor indica compromiso de la formación reticular activadora ascendente. Esta comprensión anatómica es esencial porque el tronco encefálico controla funciones vitales automáticas, y su compromiso requiere soporte respiratorio inmediato."
    },
    {
        question: "Un paciente politraumatizado presenta fractura de fémur con deformidad evidente, pulso femoral débil ipsilateral, y pie frío y pálido del mismo lado. ¿Cuál es la correlación anatómica más importante entre el sistema vascular y óseo que explica esta complicación?",
        options: [
            {letter: "a", text: "La arteria femoral transcurre superficialmente y no se relaciona con el hueso"},
            {
                letter: "b",
                text: "La arteria femoral profunda pasa cerca del tercio medio del fémur y puede lesionarse por fragmentos óseos o compresión por hematoma"
            },
            {letter: "c", text: "El sistema venoso es el único comprometido en fracturas femorales"},
            {letter: "d", text: "La circulación colateral siempre compensa las lesiones arteriales femorales"}
        ],
        correctAnswer: "b",
        explanation: "La anatomía vascular del muslo es crucial en traumatología: la arteria femoral se divide en femoral superficial y femoral profunda (arteria femoris profunda). La arteria femoral profunda y sus ramas perforantes irrigan los músculos del muslo y están en íntima relación con el fémur. Las fracturas del tercio medio y distal del fémur pueden lesionar estas arterias directamente por fragmentos óseos, o indirectamente por compresión debido a hematomas en compartimentos musculares. La isquemia resultante (pie frío y pálido, pulso débil) requiere evaluación vascular urgente y posible intervención quirúrgica."
    },
    {
        question: "Un paciente de 70 años presenta disnea súbita, dolor torácico pleurítico, y cianosis. Sus signos vitales muestran taquicardia, hipotensión, y distensión de venas yugulares. ¿Qué concepto fisiopatológico integra mejor la función cardiopulmonar comprometida?",
        options: [
            {letter: "a", text: "El problema es puramente pulmonar sin afectación cardíaca"},
            {
                letter: "b",
                text: "La obstrucción vascular pulmonar aumenta la resistencia pulmonar, sobrecarga el ventrículo derecho, y compromete el llenado del ventrículo izquierdo"
            },
            {letter: "c", text: "La disfunción es únicamente del lado izquierdo del corazón"},
            {letter: "d", text: "El sistema nervioso autonómico está desregulado sin causa orgánica"}
        ],
        correctAnswer: "b",
        explanation: "Este cuadro sugiere embolia pulmonar, que demuestra la integración cardiopulmonar: 1) la obstrucción de arterias pulmonares aumenta la resistencia vascular pulmonar, 2) esto sobrecarga agudamente el ventrículo derecho (cor pulmonale agudo), evidenciado por distensión yugular, 3) el ventrículo derecho dilatado desplaza el tabique interventricular, comprometiendo el llenado del ventrículo izquierdo, 4) resulta en disminución del gasto cardíaco (hipotensión) y congestión venosa sistémica. Esta comprensión fisiopatológica explica por qué una patología 'pulmonar' causa síntomas cardiovasculares sistémicos."
    },
    {
        question: "Durante la intubación de un paciente, identifica que la epiglotis está inflamada y edematosa, obstruyendo parcialmente la visualización de las cuerdas vocales. ¿Cuál es la importancia anatómica crítica de la epiglotis en la fisiología respiratoria y digestiva?",
        options: [
            {letter: "a", text: "La epiglotis solo tiene función en la producción de voz"},
            {
                letter: "b",
                text: "La epiglotis actúa como válvula protectora que dirige el flujo hacia la tráquea durante respiración y hacia el esófago durante deglución, previniendo aspiración"
            },
            {letter: "c", text: "La epiglotis no tiene función fisiológica importante"},
            {letter: "d", text: "La epiglotis solo funciona durante el sueño"}
        ],
        correctAnswer: "b",
        explanation: "La epiglotis es una estructura crítica con función dual: 1) Durante la respiración normal, permanece erecta permitiendo el flujo libre de aire hacia la laringe y tráquea, 2) Durante la deglución, se inclina posteroinferormente para cubrir la entrada laríngea (aditus laríngeo), desviando alimentos y líquidos hacia el esófago y previniendo aspiración. Su inflamación (epiglotitis) es peligrosa porque puede obstruir la vía aérea y comprometer tanto la respiración como la protección contra aspiración. En el contexto prehospitalario, la epiglotitis puede requerir manejo avanzado de vía aérea, incluyendo cricotirotomía si la intubación es imposible."
    },
    {
        question: "Un paciente presenta debilidad del lado derecho del cuerpo, dificultad para hablar (disartria), y desviación de la lengua hacia la derecha al protruirla. ¿Qué principio neuroanatómico explica esta distribución de déficits?",
        options: [
            {
                letter: "a",
                text: "Todos los nervios craneales se cruzan, por lo que una lesión derecha causa síntomas derechos"
            },
            {
                letter: "b",
                text: "Una lesión del hemisferio cerebral izquierdo causa déficits contralaterales motores, pero el nervio hipogloso se cruza causando desviación ipsilateral de la lengua"
            },
            {letter: "c", text: "El problema es únicamente de nervios periféricos sin compromiso central"},
            {letter: "d", text: "Todos los síntomas son del mismo lado de la lesión"}
        ],
        correctAnswer: "b",
        explanation: "Este caso ilustra principios neuroanatómicos complejos: 1) La debilidad del lado derecho indica lesión del hemisferio cerebral izquierdo, ya que las vías motoras (tracto corticoespinal) se cruzan en la decusación piramidal, 2) La disartria puede originarse por compromiso de áreas motoras del habla o núcleos de nervios craneales, 3) Crucialmente, cuando se lesiona el nervio hipogloso (XII) unilateralmente, la lengua se desvía HACIA el lado de la lesión al protruirla, porque los músculos contralaterales (intactos) empujan la lengua hacia el lado paralizado. Esta comprensión anatómica ayuda a localizar lesiones neurológicas con precisión."
    },
    {
        question: "En un paciente con trauma abdominal cerrado que presenta dolor en el hombro izquierdo (signo de Kehr), distensión abdominal, e hipotensión, ¿cuál es la base anatómica que explica el dolor referido?",
        options: [
            {
                letter: "a",
                text: "El diafragma y el hombro comparten inervación común a través del nervio frénico (C3-C5)"
            },
            {letter: "b", text: "El dolor se debe únicamente a lesión muscular del hombro"},
            {letter: "c", text: "El dolor referido no tiene base anatómica real"},
            {letter: "d", text: "Todos los órganos abdominales refieren dolor al hombro"}
        ],
        correctAnswer: "a",
        explanation: "El signo de Kehr demuestra un principio fundamental de neuroanatomía del dolor referido: 1) El diafragma está inervado por el nervio frénico, que se origina de las raíces nerviosas C3, C4, y C5, 2) Estas mismas raíces nerviosas contribuyen a la inervación sensitiva del hombro (a través de nervios supraclaviculares), 3) Cuando la sangre irrita el diafragma (como en ruptura esplénica), el dolor es interpretado por el sistema nervioso central como originado en el hombro izquierdo. Este conocimiento es crucial porque el dolor de hombro en trauma abdominal puede ser el único signo temprano de hemorragia intraabdominal significativa, especialmente ruptura esplénica."
    },
    {
        question: "Un paciente joven atleta colapsa durante ejercicio intenso, presenta taquicardia extrema (>180 lpm), sudoración profusa, temperatura corporal elevada (40°C), y alteración del estado de conciencia. ¿Qué sistema fisiológico está fallando y cuáles son las consecuencias multisistémicas?",
        options: [
            {letter: "a", text: "Solo el sistema cardiovascular está afectado"},
            {
                letter: "b",
                text: "El sistema de termorregulación hipotalámico está comprometido, causando falla multisistémica: cardiovascular (taquicardia, colapso), neurológica (alteración mental), y celular (desnaturalización proteica)"
            },
            {letter: "c", text: "El problema es únicamente de deshidratación"},
            {letter: "d", text: "Solo hay fatiga muscular sin compromiso sistémico"}
        ],
        correctAnswer: "b",
        explanation: "El golpe de calor representa falla del sistema de termorregulación hipotalámico con consecuencias multisistémicas: 1) Neurológicamente: el hipotálamo pierde capacidad de regular temperatura, causando alteración mental y eventualmente coma, 2) Cardiovascularmente: vasodilatación periférica masiva y pérdida de volumen causan taquicardia compensatoria e hipotensión, 3) Celularmente: temperaturas >40°C causan desnaturalización proteica y disfunción enzimática, 4) Hemostáticamente: se activa coagulación intravascular diseminada. Esta comprensión fisiopatológica es crucial porque el enfriamiento agresivo inmediato es la única intervención que puede prevenir daño irreversible multiorgánico."
    },
    {
        question: "Un paciente diabético presenta respiración profunda y rápida (Kussmaul), aliento con olor a frutas, y alteración progresiva del estado de conciencia. ¿Cuál es el mecanismo fisiopatológico que integra el sistema endocrino, metabólico y respiratorio?",
        options: [
            {letter: "a", text: "La hiperglucemia causa únicamente deshidratación"},
            {
                letter: "b",
                text: "La deficiencia de insulina causa cetogénesis, acidosis metabólica, y compensación respiratoria a través de hiperventilación para eliminar CO2"
            },
            {letter: "c", text: "El problema es únicamente respiratorio sin componente metabólico"},
            {letter: "d", text: "La alteración mental es independiente de los cambios metabólicos"}
        ],
        correctAnswer: "b",
        explanation: "La cetoacidosis diabética demuestra integración de múltiples sistemas: 1) Endocrinológicamente: la deficiencia de insulina impide la utilización de glucosa, forzando el metabolismo de ácidos grasos, 2) Metabólicamente: la beta-oxidación produce cuerpos cetónicos (acetoacetato, beta-hidroxibutirato) que son ácidos fuertes, causando acidosis metabólica, 3) Respiratoriamente: el centro respiratorio responde a la acidosis con hiperventilación (respiración de Kussmaul) para eliminar CO2 y compensar la acidosis, 4) Neurológicamente: la acidosis y deshidratación causan alteración mental progresiva. El olor a frutas proviene de la acetona (producto de descarboxilación de acetoacetato). Esta comprensión guía el tratamiento: insulina, fluidos y corrección electrolítica."
    },
    {
        question: "En un paciente con sospecha de lesión de médula espinal cervical alta (C3-C5), observa que puede mover los brazos pero presenta respiración paradójica y uso predominante de músculos accesorios del cuello. ¿Cuál es la base neuroanatómica de este patrón respiratorio?",
        options: [
            {letter: "a", text: "Los músculos intercostales y el diafragma tienen la misma inervación"},
            {
                letter: "b",
                text: "La lesión cervical alta compromete la inervación del diafragma (nervio frénico C3-C5) manteniendo músculos intercostales, causando respiración predominantemente intercostal"
            },
            {letter: "c", text: "Todos los músculos respiratorios están igualmente afectados"},
            {letter: "d", text: "La respiración paradójica es normal en trauma cervical"}
        ],
        correctAnswer: "b",
        explanation: "La neuroanatomía respiratoria es crítica en trauma cervical: 1) El diafragma está inervado por el nervio frénico (C3-C5), por lo que lesiones en estos niveles pueden comprometerlo, 2) Los músculos intercostales están inervados por nervios intercostales (T1-T12), que pueden estar preservados en lesiones cervicales altas, 3) Los músculos accesorios (esternocleidomastoideo, escalenos) tienen inervación cervical alta y del XI par craneal, 4) La 'respiración paradójica' describe el movimiento hacia adentro del abdomen durante inspiración (por diafragma paralizado) mientras el tórax se expande (por intercostales intactos). Esta comprensión es vital porque estos pacientes pueden requerir ventilación asistida inmediata, especialmente si la lesión progresa o se fatigan."
    }
];
