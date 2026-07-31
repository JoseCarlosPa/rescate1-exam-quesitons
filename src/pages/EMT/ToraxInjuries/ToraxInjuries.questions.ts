import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Cuál es la diferencia entre un neumotórax abierto y un neumotórax a tensión?",
        answer: "Un neumotórax abierto ('herida torácica succionante') es una herida abierta en la pared torácica que permite que el aire entre y salga del espacio pleural. Un neumotórax a tensión es una emergencia en la que el aire entra al espacio pleural pero no puede salir, acumulando presión que colapsa el pulmón y desplaza al corazón, lo que compromete la circulación. ",
    },
    {
        question: "¿Qué es el movimiento paradójico y en qué lesión se observa?",
        answer: "El movimiento paradójico es cuando un segmento de la pared torácica se mueve en dirección opuesta al resto durante la respiración (se hunde al inhalar y sobresale al exhalar). Es el signo característico del tórax inestable (volet costal), que ocurre cuando tres o más costillas adyacentes se fracturan en dos o más lugares. ",
    },
    {
        question: "¿Cuál es el propósito de usar un apósito oclusivo sellado por tres lados?",
        answer: "Se utiliza para tratar un neumotórax abierto. El apósito sella la herida para evitar que entre más aire al espacio pleural durante la inspiración, pero el lado no sellado actúa como una válvula unidireccional, permitiendo que el aire atrapado salga durante la espiración. Esto previene la evolución hacia un neumotórax a tensión. ",
    },
    {
        question: "¿Qué es el taponamiento cardíaco y cuáles son sus signos clásicos?",
        answer: "El taponamiento cardíaco es la compresión del corazón causada por la acumulación de líquido (generalmente sangre) en el saco pericárdico. Esto impide que el corazón se llene adecuadamente. Sus signos clásicos forman la 'Tríada de Beck': 1) Ingurgitación yugular, 2) Ruidos cardíacos apagados o velados, y 3) Hipotensión con presión de pulso estrecha. ",
    },
    {
        question: "¿Qué diferencia a un hemotórax de un neumotórax en su presentación clínica?",
        answer: "Ambos pueden presentar dificultad para respirar y ruidos respiratorios disminuidos. Sin embargo, un neumotórax es aire en el espacio pleural, mientras que un hemotórax es sangre. Por lo tanto, un paciente con un hemotórax masivo presentará signos de shock hipovolémico (piel pálida, fría y húmeda; taquicardia) debido a la pérdida de sangre, lo cual no es característico de un neumotórax simple. ",
    },
    {
        question: "¿Qué es la asfixia traumática?",
        answer: "Es una condición causada por una compresión súbita y severa del tórax, que fuerza la sangre desde el corazón hacia los vasos de la cabeza y el cuello. Los signos incluyen cianosis en la cara y el cuello, ingurgitación yugular y hemorragias en los ojos. ",
    },
    {
        question: "¿Cuál es la principal amenaza para la vida en un paciente con tórax inestable (volet costal)?",
        answer: "Aunque el movimiento paradójico es el signo más visible, la principal amenaza es la lesión pulmonar subyacente (contusión pulmonar). Esta contusión afecta el intercambio de gases y puede llevar a una insuficiencia respiratoria grave. Por eso, el manejo incluye ventilación con presión positiva. ",
    },
    {
        question: "¿Qué es 'Commotio Cordis'?",
        answer: "Es un paro cardíaco súbito causado por un golpe directo, no penetrante, en el pecho, que ocurre en un momento crítico del ciclo cardíaco. No hay daño estructural al corazón, pero la arritmia resultante (generalmente fibrilación ventricular) es mortal si no se trata inmediatamente con desfibrilación. ",
    },
];


export const toraxInjuriesQuestions: Question[] = [
    {
        "question": "Un paciente apuñalado en el tórax presenta disnea severa, ingurgitación yugular, hipotensión y ausencia de ruidos respiratorios en el lado izquierdo. ¿Qué condición potencialmente mortal es más probable?",
        "options": [
            {"letter": "a", "text": "Hemotórax masivo"},
            {"letter": "b", "text": "Neumotórax a tensión"},
            {"letter": "c", "text": "Taponamiento cardíaco"},
            {"letter": "d", "text": "Tórax inestable"}
        ],
        "correctAnswer": "b",
        "explanation": "Esta es la presentación clásica del neumotórax a tensión. El aire se acumula en el espacio pleural y no puede escapar, lo que colapsa el pulmón y desplaza el mediastino. Este desplazamiento comprime el corazón y los grandes vasos, causando ingurgitación yugular e hipotensión (shock obstructivo)."
    },
    {
        "question": "Usted está tratando a un paciente con una herida succionante en el pecho. ¿Cuál es el manejo inicial correcto para esta herida?",
        "options": [
            {"letter": "a", "text": "Introducir un apósito dentro de la herida para taponarla"},
            {"letter": "b", "text": "Aplicar un apósito oclusivo sellado por sus cuatro lados"},
            {"letter": "c", "text": "Dejar la herida abierta al aire para que la presión se iguale"},
            {"letter": "d", "text": "Aplicar un apósito oclusivo sellado por tres de sus lados"}
        ],
        "correctAnswer": "d",
        "explanation": "Para una herida succionante (neumotórax abierto), se debe aplicar un apósito oclusivo sellado en tres lados. Esto crea una válvula unidireccional que permite que el aire atrapado en el tórax salga durante la espiración, pero impide que entre más aire durante la inspiración."
    },
    {
        "question": "Un paciente involucrado en un accidente vehicular presenta un segmento de su pared torácica que se hunde durante la inspiración. El manejo más apropiado para esta condición es:",
        "options": [
            {"letter": "a", "text": "Aplicar un vendaje circular apretado alrededor de todo el tórax"},
            {"letter": "b", "text": "Colocar al paciente sobre el lado lesionado para limitar el movimiento"},
            {
                "letter": "c",
                "text": "Estabilizar el segmento con un apósito voluminoso y considerar la ventilación con presión positiva"
            },
            {"letter": "d", "text": "Ignorar el movimiento y concentrarse únicamente en la administración de oxígeno"}
        ],
        "correctAnswer": "c",
        "explanation": "Este movimiento paradójico define un tórax inestable. La principal complicación es la contusión pulmonar subyacente. El manejo incluye estabilizar el segmento flotante con un apósito grande y voluminoso (no de forma circular) y, lo más importante, dar soporte ventilatorio, a menudo con VPP, que actúa como un 'entablillado' interno."
    },
    {
        "question": "La tríada de Beck, un indicador de taponamiento cardíaco, consiste en:",
        "options": [
            {"letter": "a", "text": "Hipertensión, bradicardia y respiración irregular"},
            {"letter": "b", "text": "Ingurgitación yugular, ruidos cardíacos apagados e hipotensión"},
            {"letter": "c", "text": "Movimiento paradójico, crepitación y disnea"},
            {"letter": "d", "text": "Fiebre, taquicardia y dolor torácico pleurítico"}
        ],
        "correctAnswer": "b",
        "explanation": "La Tríada de Beck es el conjunto de signos clásicos del taponamiento cardíaco: 1) Ingurgitación yugular (debido al aumento de la presión venosa), 2) Ruidos cardíacos apagados o lejanos (por el líquido en el saco pericárdico), y 3) Hipotensión (por la disminución del llenado y gasto cardíaco)."
    },
    {
        "question": "Un paciente con una contusión pulmonar severa está en riesgo de desarrollar insuficiencia respiratoria debido a:",
        "options": [
            {"letter": "a", "text": "La fractura de las costillas que causa dolor"},
            {"letter": "b", "text": "El sangrado y edema en el tejido pulmonar que afecta el intercambio de gases"},
            {"letter": "c", "text": "El colapso del diafragma por el impacto"},
            {"letter": "d", "text": "Una infección bacteriana que se desarrolla rápidamente"}
        ],
        "correctAnswer": "b",
        "explanation": "Una contusión pulmonar es una 'magulladura' del pulmón. El trauma daña los capilares y alvéolos, provocando sangrado y acumulación de líquido en el tejido pulmonar. Esto interfiere directamente con el intercambio de oxígeno y dióxido de carbono, pudiendo llevar a una hipoxia severa."
    },
    {
        "question": "Un paciente con un hemotórax masivo presentará signos de shock de tipo:",
        "options": [
            {"letter": "a", "text": "Obstructivo"},
            {"letter": "b", "text": "Distributivo"},
            {"letter": "c", "text": "Cardiogénico"},
            {"letter": "d", "text": "Hipovolémico"}
        ],
        "correctAnswer": "d",
        "explanation": "Un hemotórax masivo implica una pérdida de sangre superior a 1,500 ml en la cavidad torácica. La causa principal del shock en esta condición es la pérdida masiva de volumen sanguíneo circulante, lo que lo clasifica como shock hipovolémico (hemorrágico)."
    },
    {
        "question": "La desviación de la tráquea en un paciente con trauma torácico es un signo tardío y ominoso de:",
        "options": [
            {"letter": "a", "text": "Neumotórax simple"},
            {"letter": "b", "text": "Contusión cardíaca"},
            {"letter": "c", "text": "Neumotórax a tensión"},
            {"letter": "d", "text": "Fractura esternal"}
        ],
        "correctAnswer": "c",
        "explanation": "La desviación traqueal lejos del lado lesionado es un signo muy tardío y grave de un neumotórax a tensión. Indica que la presión en el hemitórax afectado es tan alta que está desplazando todo el mediastino (corazón, grandes vasos y tráquea) hacia el lado opuesto."
    },
    {
        "question": "Un joven jugador de béisbol recibe un pelotazo en el centro del pecho y colapsa inmediatamente. No tiene pulso. ¿Cuál es la causa más probable de su paro cardíaco?",
        "options": [
            {"letter": "a", "text": "Asfixia traumática"},
            {"letter": "b", "text": "Taponamiento cardíaco"},
            {"letter": "c", "text": "Commotio cordis"},
            {"letter": "d", "text": "Ruptura aórtica"}
        ],
        "correctAnswer": "c",
        "explanation": "Commotio cordis es un paro cardíaco súbito causado por un golpe contuso no penetrante en el pecho, directamente sobre el corazón, durante una fase vulnerable del ciclo eléctrico cardíaco. Esto induce una arritmia maligna (generalmente Fibrilación Ventricular) sin daño estructural al corazón."
    },
    {
        "question": "Usted atiende a un paciente con una herida de bala en el tórax. Durante la evaluación, ausculta los ruidos respiratorios y nota que están disminuidos en el lado derecho. Esta información es crucial para:",
        "options": [
            {"letter": "a", "text": "Determinar la presión arterial del paciente"},
            {"letter": "b", "text": "Descartar una lesión abdominal"},
            {"letter": "c", "text": "Sospechar un neumotórax o hemotórax en ese lado"},
            {"letter": "d", "text": "Decidir si el paciente necesita analgésicos"}
        ],
        "correctAnswer": "c",
        "explanation": "La auscultación de los campos pulmonares es una parte vital de la evaluación respiratoria. La disminución o ausencia de ruidos respiratorios en un lado del tórax sugiere que el pulmón de ese lado no se está expandiendo correctamente, muy probablemente debido a la presencia de aire (neumotórax) o sangre (hemotórax) en el espacio pleural."
    },
    {
        "question": "Un paciente fue aplastado por una máquina pesada y presenta una marcada cianosis en la cara y el cuello, junto con ojos enrojecidos. Estos hallazgos son característicos de:",
        "options": [
            {"letter": "a", "text": "Shock neurogénico"},
            {"letter": "b", "text": "Asfixia traumática"},
            {"letter": "c", "text": "Lesión cerebral anóxica"},
            {"letter": "d", "text": "Tórax inestable severo"}
        ],
        "correctAnswer": "b",
        "explanation": "La asfixia traumática ocurre por una compresión súbita y severa del tórax, que fuerza la sangre de forma retrógrada desde el corazón derecho hacia las venas de la parte superior del cuerpo. Esto causa la cianosis característica en la cabeza y el cuello, hemorragias conjuntivales y petequias."
    }
]

export const toraxInjuriesChallengeQuestions: Question[] = [
    {
        "question": "Un paciente de 34 años sufre una herida por arma blanca en el quinto espacio intercostal izquierdo, línea paraesternal. A los 10 minutos presenta PA 80/60, FC 128, ingurgitación yugular marcada y ansiedad extrema. A la auscultación, los ruidos respiratorios son claros y simétricos en ambos campos pulmonares, y la percusión torácica es normal. ¿Cuál es la interpretación más precisa de estos hallazgos?",
        "options": [
            {"letter": "a", "text": "Neumotórax a tensión izquierdo, ya que la ingurgitación yugular y la hipotensión son suficientes para el diagnóstico sin necesidad de hallazgos pulmonares"},
            {"letter": "b", "text": "Taponamiento cardíaco, porque la localización de la herida sobre el área precordial junto con ruidos respiratorios bilaterales normales descarta un problema pleural y apunta a compresión del corazón por líquido pericárdico"},
            {"letter": "c", "text": "Hemotórax masivo izquierdo, dado que la pérdida de sangre explica tanto la hipotensión como la ingurgitación yugular"},
            {"letter": "d", "text": "Contusión miocárdica simple, que no requiere manejo prehospitalario distinto al de un trauma torácico cerrado"}
        ],
        "correctAnswer": "b",
        "explanation": "La clave para diferenciar el taponamiento cardíaco del neumotórax a tensión es que ambos comparten shock obstructivo con ingurgitación yugular e hipotensión, pero el taponamiento no altera la entrada de aire a los pulmones. Aquí los ruidos respiratorios son claros y simétricos y la percusión es normal, lo que descarta aire (neumotórax) o sangre (hemotórax masivo) en el espacio pleural como causa del shock. La ubicación de la herida directamente sobre el área precordial es altamente sugestiva de lesión cardíaca. Fisiológicamente, la sangre que se acumula en el saco pericárdico rígido comprime las cámaras cardíacas, especialmente el ventrículo derecho de baja presión, impidiendo el llenado diastólico adecuado. Esto reduce el volumen sistólico y el gasto cardíaco, generando hipotensión, mientras la presión venosa se eleva de forma retrógrada produciendo la ingurgitación yugular. El hemotórax masivo produciría matidez a la percusión y ruidos disminuidos en el lado afectado, algo ausente en este caso."
    },
    {
        "question": "Un paciente con múltiples fracturas costales bilaterales por impacto directo del volante presenta un segmento de la pared torácica anterior que se mueve de forma paradójica. Usted decide asistir la ventilación con dispositivo bolsa-mascarilla. ¿Cuál es el fundamento fisiopatológico principal para esta intervención, más allá de simplemente estabilizar el segmento óseo inestable?",
        "options": [
            {"letter": "a", "text": "La ventilación con presión positiva reduce el dolor de las fracturas costales al inmovilizar mecánicamente la caja torácica"},
            {"letter": "b", "text": "La verdadera amenaza para la vida es la contusión pulmonar subyacente que altera el intercambio gaseoso, y la presión positiva mejora la oxigenación al vencer el colapso alveolar y actuar como un entablillado neumático interno del segmento inestable"},
            {"letter": "c", "text": "La ventilación con presión positiva previene exclusivamente la aparición de un neumotórax simple asociado a las fracturas costales"},
            {"letter": "d", "text": "El objetivo principal es aumentar la frecuencia respiratoria del paciente para compensar la hipoventilación mecánica del segmento flotante"}
        ],
        "correctAnswer": "b",
        "explanation": "Aunque el movimiento paradójico es el hallazgo más visible del tórax inestable, la amenaza real para la vida casi siempre es la contusión pulmonar subyacente, resultado de la misma fuerza que fracturó las costillas. El parénquima pulmonar contundido sangra y se edematiza, reduciendo el área de superficie disponible para el intercambio de oxígeno y dióxido de carbono, lo que puede progresar rápidamente a insuficiencia respiratoria hipóxica. La ventilación con presión positiva ayuda en dos frentes simultáneos: mejora la oxigenación al reclutar alvéolos colapsados por la contusión y, mecánicamente, empuja el segmento inestable desde adentro, reduciendo el movimiento paradójico sin necesidad de vendajes circunferenciales que restringirían aún más la expansión torácica. Por eso el manejo del tórax inestable no se limita a estabilizar el segmento óseo con un apósito voluminoso; requiere vigilancia estrecha de la oxigenación y disposición para ventilar de forma asistida."
    },
    {
        "question": "Usted colocó correctamente un apósito oclusivo sellado por tres lados sobre una herida torácica succionante y el paciente mejoró inicialmente. Minutos después, un compañero, pensando que ayudaba, sella también el cuarto lado del apósito con cinta adicional. Poco después el paciente empeora: se torna más disneico, taquicárdico, hipotenso y las venas del cuello se distienden. ¿Qué explica este deterioro y cuál es la acción correcta inmediata?",
        "options": [
            {"letter": "a", "text": "El paciente está sufriendo una reacción alérgica al material del apósito; se debe retirar todo el vendaje y administrar epinefrina"},
            {"letter": "b", "text": "Al sellar el cuarto lado se eliminó la válvula unidireccional que permitía la salida del aire durante la espiración, convirtiendo el neumotórax abierto en un neumotórax a tensión; se debe levantar o retirar un borde del apósito para liberar el aire atrapado"},
            {"letter": "c", "text": "El deterioro se debe a una hemorragia interna no relacionada con el apósito, por lo que se debe iniciar reanimación con líquidos sin modificar el vendaje"},
            {"letter": "d", "text": "El apósito de tres lados nunca debió aplicarse; ahora que está sellado en los cuatro lados el manejo es correcto y se debe continuar sin cambios"}
        ],
        "correctAnswer": "b",
        "explanation": "El propósito del apósito sellado en tres lados es crear una válvula unidireccional (flutter valve): el lado abierto permite que el aire que entra al espacio pleural durante la inspiración escape durante la espiración, evitando su acumulación. Al sellar el cuarto lado, se elimina esa vía de escape y cada respiración añade aire al espacio pleural sin posibilidad de salida, recreando exactamente la fisiología de un neumotórax a tensión: colapso pulmonar progresivo, desplazamiento mediastínico y compresión de las venas cavas y el corazón. Los signos descritos (disnea progresiva, taquicardia, hipotensión e ingurgitación yugular) son consistentes con esa conversión. La acción correcta inmediata es levantar o retirar temporalmente un borde del apósito para descomprimir el espacio pleural y restaurar la vía de escape del aire, revirtiendo así el mecanismo de tensión antes de volver a sellar de forma adecuada."
    },
    {
        "question": "Dos pacientes de un mismo accidente de tránsito presentan disnea, taquicardia e hipotensión tras trauma torácico cerrado. El paciente A tiene el hemitórax derecho hiperresonante a la percusión con ausencia de ruidos respiratorios y desviación traqueal hacia la izquierda. El paciente B tiene el hemitórax izquierdo mate a la percusión, con ruidos respiratorios disminuidos pero sin desviación traqueal, y presenta piel pálida, fría y diaforética. ¿Cómo se diferencian fisiopatológicamente estas dos presentaciones?",
        "options": [
            {"letter": "a", "text": "Ambos pacientes tienen la misma condición (neumotórax a tensión) en distintos grados de severidad, por lo que el manejo debe ser idéntico"},
            {"letter": "b", "text": "El paciente A tiene un neumotórax a tensión, en el que aire atrapado bajo presión colapsa el pulmón y desplaza el mediastino generando shock obstructivo; el paciente B tiene un hemotórax masivo, en el que la sangre acumulada ocupa espacio pleural sin generar presión suficiente para desviar la tráquea, y el shock es de origen hipovolémico por pérdida sanguínea"},
            {"letter": "c", "text": "El paciente B tiene un neumotórax a tensión porque la matidez indica mayor presión intrapleural que la hiperresonancia del paciente A"},
            {"letter": "d", "text": "La diferencia de percusión no tiene valor clínico prehospitalario y ambos pacientes deben ser tratados como taponamiento cardíaco"}
        ],
        "correctAnswer": "b",
        "explanation": "La percusión ayuda a diferenciar el contenido del espacio pleural: el aire atrapado bajo presión en un neumotórax a tensión produce hiperresonancia (sonido timpánico) y, al acumular suficiente presión, desplaza el mediastino completo generando la desviación traqueal, un signo tardío y ominoso de shock obstructivo por compresión de las venas cavas y el corazón. En cambio, la sangre en el espacio pleural de un hemotórax masivo produce matidez a la percusión, y aunque comprime el pulmón, rara vez alcanza la presión necesaria para desviar la tráquea de forma significativa. El shock del paciente B es hipovolémico, reflejado en la piel pálida, fría y diaforética, consecuencia directa de la pérdida de hasta 1500 ml o más de sangre hacia la cavidad torácica. Aunque ambas condiciones requieren transporte rápido y soporte de vía aérea y ventilación, el hemotórax masivo también exige un alto índice de sospecha de hemorragia continua y manejo orientado a shock hemorrágico, mientras que el neumotórax a tensión requiere descompresión de la presión pleural."
    },
    {
        "question": "Un paciente con taponamiento cardíaco por herida penetrante presenta la tríada de Beck. Un estudiante pregunta por qué, si el corazón está siendo comprimido y el gasto cardíaco disminuye, la presión venosa yugular está elevada en lugar de baja como se esperaría en otros estados de shock. ¿Cuál es la explicación fisiológica correcta?",
        "options": [
            {"letter": "a", "text": "La presión venosa yugular elevada se debe a una sobrecarga de líquidos administrada durante la reanimación prehospitalaria"},
            {"letter": "b", "text": "El líquido en el saco pericárdico comprime externamente las cámaras cardíacas, especialmente las de baja presión como el ventrículo derecho, impidiendo el retorno venoso normal; la sangre se acumula retrógradamente en el sistema venoso sistémico, elevando la presión venosa yugular a pesar del bajo gasto cardíaco"},
            {"letter": "c", "text": "La ingurgitación yugular en el taponamiento cardíaco es un hallazgo falso y no tiene relación con la fisiopatología de la compresión cardíaca"},
            {"letter": "d", "text": "El taponamiento cardíaco causa vasodilatación venosa generalizada que aumenta pasivamente el volumen sanguíneo visible en el cuello"},
        ],
        "correctAnswer": "b",
        "explanation": "En el taponamiento cardíaco, el saco pericárdico es una estructura relativamente rígida y no distensible; cuando se acumula sangre o líquido dentro de él, la presión externa resultante comprime las cámaras cardíacas de menor presión, en particular las aurículas y el ventrículo derecho, antes de afectar al lado izquierdo de mayor presión. Esta compresión impide que la sangre que regresa desde el sistema venoso sistémico entre eficientemente al corazón durante la diástole, es decir, reduce la precarga. Como consecuencia, la sangre se represa en el sistema venoso, elevando la presión venosa central y produciendo la ingurgitación yugular característica, mientras que el volumen sistólico y el gasto cardíaco caen, generando hipotensión con presión de pulso estrecha. Este mecanismo es exactamente lo opuesto al del shock hipovolémico, donde la precarga disminuye porque el volumen circulante se ha perdido, y por eso el taponamiento se clasifica como un shock de tipo obstructivo, no hipovolémico. Comprender esta diferencia es esencial para no confundir la ingurgitación yugular del taponamiento con signos de sobrecarga de volumen."
    },
    {
        "question": "Un paciente con tórax inestable severo y contusión pulmonar está siendo ventilado con presión positiva mediante bolsa-mascarilla. Después de varios minutos de ventilación, el paciente desarrolla súbitamente hipotensión progresiva, ingurgitación yugular y ausencia unilateral de ruidos respiratorios en el lado previamente afectado, con resistencia creciente a la ventilación. ¿Qué complicación debe sospechar y por qué la ventilación con presión positiva es un factor de riesgo directo para ella?",
        "options": [
            {"letter": "a", "text": "Una reacción vasovagal simple que se resuelve espontáneamente sin intervención"},
            {"letter": "b", "text": "Un neumotórax simple que no requiere ninguna modificación en la técnica ventilatoria"},
            {"letter": "c", "text": "El desarrollo de un neumotórax a tensión secundario, ya que la presión positiva puede forzar aire a través de una lesión pulmonar o pleural preexistente hacia el espacio pleural, donde se acumula progresivamente sin poder escapar, comprometiendo el retorno venoso y el gasto cardíaco"},
            {"letter": "d", "text": "Un taponamiento cardíaco causado directamente por la presión de la bolsa-mascarilla sobre el tórax"}
        ],
        "correctAnswer": "c",
        "explanation": "La contusión pulmonar y las fracturas costales asociadas al tórax inestable pueden lacerar el parénquima pulmonar o la pleura visceral, creando una vía potencial para que el aire escape hacia el espacio pleural. La ventilación con presión positiva, aunque necesaria para sostener la oxigenación en estos pacientes, aumenta la presión intratorácica de forma artificial y puede forzar aire a través de esa lesión hacia el espacio pleural con cada insuflación, sin que exista una vía de salida natural. Esto genera un neumotórax a tensión iatrogénico que se manifiesta con los mismos signos de shock obstructivo ya conocidos: ausencia unilateral de ruidos respiratorios, ingurgitación yugular e hipotensión progresiva, además de una resistencia notablemente mayor a la ventilación con bolsa debido al aumento de la presión intrapleural. Este escenario obliga a mantener una vigilancia continua durante la ventilación asistida de cualquier paciente con trauma torácico significativo, reconociendo que la propia intervención terapéutica puede precipitar una nueva emergencia que amenaza la vida y que requiere manejo inmediato (por ejemplo, descompresión torácica según el protocolo local) en lugar de simplemente continuar ventilando."
    }
];