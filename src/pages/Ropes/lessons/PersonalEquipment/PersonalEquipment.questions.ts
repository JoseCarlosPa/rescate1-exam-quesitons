import { Question } from "../../../../question";

export const personalEquipmentFaqData = [
    {
        question: "¿Por qué los cascos de bomberos tradicionales a menudo no son ideales para rescate con cuerdas?",
        answer: "Aunque ofrecen excelente protección para incendios, los cascos de bomberos suelen ser demasiado pesados, calurosos, y su gran tamaño o alas anchas pueden reducir la visibilidad y dificultar el trabajo en espacios confinados típicos del rescate con cuerdas. Se prefieren los cascos de rescate o escalada de perfil bajo.",
    },
    {
        question: "¿Cuál es el problema de depender de un cinturón (como el swami belt o cinturón pompier) para protección contra caídas?",
        answer: "Los cinturones ya no se consideran aceptables como plataformas de trabajo o arresto de caídas. Si el peso debe ser soportado por un cinturón, la caja torácica y el diafragma se comprimen, restringiendo la capacidad de respirar. Un arnés tipo asiento distribuye la fuerza en áreas que pueden absorber mejor el impacto, como los glúteos y piernas.",
    },
    {
        question: "¿Cuál es la diferencia entre un arnés Clase II y Clase III según NFPA 1983?",
        answer: "Un arnés Clase II es un arnés de asiento (pélvico) diseñado para rescate que transfiere el peso a las piernas y mantiene al rescatista sentado. Un arnés Clase III es un arnés de cuerpo completo que ofrece más puntos de conexión y correas en los hombros para disminuir la probabilidad de caer invertido.",
    },
    {
        question: "¿Por qué el punto de conexión esternal (pecho) es a menudo preferido en rescate sobre el dorsal (espalda)?",
        answer: "El punto esternal deja al rescatista en una posición sentada más adecuada para un auto-rescate, y al escalar escaleras o estructuras evita que la cabeza rote y golpee la estructura durante una caída. El punto dorsal es común en la industria para colgar pasivamente hasta ser rescatado, pero es incómodo para el auto-rescate.",
    },
    {
        question: "¿Por qué las tijeras de trauma o utilitarias son a menudo preferidas sobre las navajas al trabajar alrededor de cuerdas?",
        answer: "Una navaja afilada puede cortar accidentalmente una cuerda cargada (la cual se corta muy fácilmente) con solo un roce. Las tijeras de trauma son más seguras porque no tienen puntas agudas, pero pueden cortar una cuerda de 7/16 (11.1 mm) en un solo corte deliberado si es necesario, sin el riesgo de dañar otras líneas accidentalmente.",
    },
    {
        question: "¿Por qué es importante tener una lámpara frontal (headlamp) con niveles de brillo ajustables?",
        answer: "El brillo ajustable permite balancear la visibilidad con la vida útil de la batería. En espacios cerrados o cuevas se necesita menos brillo debido a la luz reflejada, mientras que en exteriores oscuros se puede requerir máxima potencia. Además, usar niveles bajos ahorra batería en rescates largos.",
    },
    {
        question: "¿Qué piezas de equipo personal se recomienda llevar siempre extra en el rescate?",
        answer: "Se recomienda llevar siempre cordines Prusik extra (y uno largo de 10 pies), un mosquetón adicional y tijeras de trauma. Los Prusiks se desgastan y tener extras permite improvisar un auto-aseguramiento, pedal, o amarrar cargas.",
    }
];

export const personalEquipmentQuestions: Question[] = [
    {
        question: "¿Por qué es fundamental que un casco de rescate tenga un barboquejo (chin strap) de tres o cuatro puntos?",
        options: [
            { letter: "a", text: "Para permitir acoplar sistemas de comunicación por radio" },
            { letter: "b", text: "Para cumplir con la norma de protección eléctrica ANSI Z89.1 E" },
            { letter: "c", text: "Para asegurar que el casco se mantenga en su lugar durante una caída o impacto" },
            { letter: "d", text: "Para distribuir el peso del casco de manera más uniforme en el cuello" }
        ],
        correctAnswer: "c",
        explanation: "Un casco de rescate debe permanecer en la cabeza durante el impacto o caída para ser útil; un barboquejo bien ajustado (de tres o cuatro puntos) evita que el casco se salga en el peor momento."
    },
    {
        question: "¿Qué ventaja tienen los cascos tipo escalada/rescate sobre los cascos de bomberos tradicionales en operaciones verticales?",
        options: [
            { letter: "a", text: "Tienen una clasificación de resistencia al fuego superior" },
            { letter: "b", text: "Son de bajo perfil, livianos y caben en áreas estrechas como espacios confinados" },
            { letter: "c", text: "No requieren el uso de barboquejos" },
            { letter: "d", text: "Tienen mayor capacidad para absorber impactos directos de herramientas pesadas" }
        ],
        correctAnswer: "b",
        explanation: "Los cascos de rescate y escalada son livianos, compactos y tienen un perfil bajo, lo que les permite adaptarse a áreas estrechas en espacios confinados y no obstaculizar la visión, a diferencia de los cascos de bombero que pueden ser grandes y calurosos."
    },
    {
        question: "Según la categorización NFPA 1983, ¿qué caracteriza a un arnés Clase II?",
        options: [
            { letter: "a", text: "Es un arnés de cuerpo completo con correas en los hombros" },
            { letter: "b", text: "Es un cinturón simple diseñado exclusivamente para el escape de emergencia" },
            { letter: "c", text: "Es un arnés de asiento (pélvico) diseñado para el rescate que transfiere el peso a las piernas" },
            { letter: "d", text: "Es un arnés de pecho utilizado para mantener el cuerpo en posición vertical" }
        ],
        correctAnswer: "c",
        explanation: "El arnés Clase II (sit harness o arnés de asiento) está diseñado para transferir el peso a las piernas y mantener a la persona sentada. La Clase III corresponde a arneses de cuerpo completo."
    },
    {
        question: "En una caída suspendida de un arnés tipo cinturón (como el swami o cinturón pompier), ¿cuál es el peligro principal para el usuario?",
        options: [
            { letter: "a", text: "Deslizamiento del nudo que asegura el cinturón" },
            { letter: "b", text: "Compresión de la caja torácica y el diafragma, restringiendo la capacidad de respirar" },
            { letter: "c", text: "Fricción y quemaduras en el área de la cintura" },
            { letter: "d", text: "Pérdida de circulación hacia las extremidades superiores" }
        ],
        correctAnswer: "b",
        explanation: "Si el peso es soportado únicamente por un cinturón en la cintura, este comprimirá la caja torácica y el diafragma, dificultando enormemente o impidiendo la respiración. Por eso ya no se consideran aceptables para rescate."
    },
    {
        question: "¿Qué es un arnés 'Swiss seat' o 'hasty harness'?",
        options: [
            { letter: "a", text: "Un arnés de cuerpo completo diseñado en Suiza para rescate alpino" },
            { letter: "b", text: "Un arnés prefabricado de Clase III para evacuaciones aéreas" },
            { letter: "c", text: "Un arnés rápido improvisado típicamente con cuerda o webbing de 1 pulgada para situaciones de emergencia" },
            { letter: "d", text: "Un tipo de arnés de pecho que se conecta al cinturón del pantalón" }
        ],
        correctAnswer: "c",
        explanation: "El 'Swiss seat' o hasty harness es un arnés improvisado con webbing o cuerda, útil para rapeles de emergencia o cuando no hay un arnés manufacturado disponible."
    },
    {
        question: "¿Para qué sirve un arnés de pecho (chest harness) en operaciones de rescate?",
        options: [
            { letter: "a", text: "Como único medio de soporte en lugares confinados" },
            { letter: "b", text: "Como punto principal para detener una caída" },
            { letter: "c", text: "Para mantener el cuerpo en posición vertical, pero nunca como único medio de soporte" },
            { letter: "d", text: "Para distribuir la carga del equipo transportado por el rescatista" }
        ],
        correctAnswer: "c",
        explanation: "El arnés de pecho debe usarse exclusivamente para mantener el cuerpo erguido (vertical) en combinación con un arnés de asiento, nunca como único medio de soporte."
    },
    {
        question: "Al comparar un arnés de caída industrial con un arnés de rescate, ¿qué problema presenta comúnmente el punto de anclaje dorsal (espalda) de la industria para los rescatistas?",
        options: [
            { letter: "a", text: "No es lo suficientemente fuerte para arrestar una caída" },
            { letter: "b", text: "Deja al usuario en una posición incómoda donde el auto-rescate es casi imposible" },
            { letter: "c", text: "Interfiere con el uso de sistemas de protección respiratoria" },
            { letter: "d", text: "Aumenta la fuerza de impacto transmitida al usuario" }
        ],
        correctAnswer: "b",
        explanation: "El anclaje dorsal industrial detiene la caída con eficacia pero deja a la persona colgada pasivamente por la espalda. Esto dificulta enormemente que la persona pueda alcanzar la cuerda o la estructura para realizar un auto-rescate, a diferencia de la conexión esternal o pélvica."
    },
    {
        question: "¿Qué indica que un punto de conexión en un arnés sea designado como 'positioning' (posicionamiento) según NFPA?",
        options: [
            { letter: "a", text: "Que está diseñado para soportar las fuerzas máximas de una caída (fall arrest)" },
            { letter: "b", text: "Que solo debe usarse para anclar herramientas" },
            { letter: "c", text: "Que es lo suficientemente fuerte para soportar al usuario trabajando, pero no está destinado a recibir el alto impacto de una caída libre" },
            { letter: "d", text: "Que permite rotar al usuario en un ángulo de 360 grados" }
        ],
        correctAnswer: "c",
        explanation: "Los puntos de posicionamiento están diseñados para mantener al trabajador en posición (trabajando en tensión), pero no para absorber y detener una gran carga de choque o impacto originada por una caída libre."
    },
    {
        question: "Al inspeccionar un arnés, ¿cuál de los siguientes hallazgos requiere retirarlo de servicio inmediatamente?",
        options: [
            { letter: "a", text: "La presencia del indicador de caída (fall arrest indicator) desplegado o que el arnés haya sufrido una carga de choque (shock load)" },
            { letter: "b", text: "Un poco de suciedad por lodo seco en el webbing" },
            { letter: "c", text: "Etiquetas del fabricante descoloridas pero legibles" },
            { letter: "d", text: "Ligeros rasguños en la superficie de la hebilla que no afectan su cierre" }
        ],
        correctAnswer: "a",
        explanation: "Cualquier daño estructural como cortes, hilos deshilachados, exposición a químicos, carga de choque, o indicadores de caída desplegados, obliga al retiro inmediato del arnés."
    },
    {
        question: "¿Qué característica específica suele diferenciar a los guantes para rapel y rescate de los guantes comunes de ferretería?",
        options: [
            { letter: "a", text: "Son impermeables al 100%" },
            { letter: "b", text: "Tienen doble capa de cuero en la palma y zonas de alta fricción para resistir el calor y desgaste" },
            { letter: "c", text: "Están fabricados exclusivamente de materiales sintéticos" },
            { letter: "d", text: "Poseen protección de acero en los nudillos" }
        ],
        correctAnswer: "b",
        explanation: "Los guantes de rescate suelen tener una doble capa de cuero en la palma (y a menudo entre el pulgar y el índice) para proteger contra la fricción intensa y el calor generado por el paso de la cuerda."
    },
    {
        question: "¿Qué ventaja encontró la CMC al fabricar guantes cosidos con hilo de Kevlar?",
        options: [
            { letter: "a", text: "El hilo aumenta el agarre de la cuerda" },
            { letter: "b", text: "Evita que los guantes se desarmen por las costuras antes de que el cuero se gaste, especialmente cuando están húmedos" },
            { letter: "c", text: "Hace a los guantes ignífugos en su totalidad" },
            { letter: "d", text: "Permite usar los guantes en dispositivos táctiles como teléfonos" }
        ],
        correctAnswer: "b",
        explanation: "Las costuras regulares tendían a fallar por la humedad y la tensión en los rapeles antes de que el cuero en sí se gastara. El uso de hilo de Kevlar soluciona esto, logrando que las costuras superen en vida útil al cuero."
    },
    {
        question: "¿Por qué el calzado tipo bota de montañismo (stiff, narrow sole) es a menudo recomendado para rescate agreste (rough terrain)?",
        options: [
            { letter: "a", text: "Porque tienen un peso menor que los zapatos deportivos" },
            { letter: "b", text: "Porque su suela rígida ayuda a subir laderas empinadas, protege al cargar una camilla pesada y permite patear pasos en nieve o grava" },
            { letter: "c", text: "Porque carecen de cordones y evitan enredos con la cuerda" },
            { letter: "d", text: "Porque tienen suelas que deslizan más fácilmente en el lodo" }
        ],
        correctAnswer: "b",
        explanation: "Una bota firme protege el pie de manera significativa cuando se carga el peso extra de una camilla, y su rigidez proporciona un soporte crucial al escalar o al afirmar los pies en superficies sueltas y empinadas."
    },
    {
        question: "¿Qué regla de oro sobre herramientas de corte debe tener todo el que trabaje alrededor de cuerdas?",
        options: [
            { letter: "a", text: "Debe estar atada permanentemente al arnés para no perderla" },
            { letter: "b", text: "Nunca debe ser de acero inoxidable" },
            { letter: "c", text: "Debe tener una herramienta cortante siempre consigo, pero debe usarla con extremo cuidado para no cortar la cuerda cargada accidentalmente" },
            { letter: "d", text: "Solo el líder del equipo tiene permitido portar herramientas de corte" }
        ],
        correctAnswer: "c",
        explanation: "La regla es: Cualquiera que trabaje cerca de cuerdas debe llevar un cuchillo/tijeras. Y debe recordar que una cuerda bajo carga se corta con muchísima facilidad, por lo que una hoja descubierta presenta un riesgo inmenso si se roza la línea equivocada."
    },
    {
        question: "¿Por qué las luces químicas (light sticks) son un respaldo secundario útil, aunque no sean una fuente primaria ideal?",
        options: [
            { letter: "a", text: "Porque su batería dura más de 48 horas" },
            { letter: "b", text: "Porque iluminan espacios tan bien como una linterna de 500 lúmenes" },
            { letter: "c", text: "Porque son seguras en ambientes inflamables y excelentes para marcar equipo o rutas de salida" },
            { letter: "d", text: "Porque repelen insectos durante la noche" }
        ],
        correctAnswer: "c",
        explanation: "Las luces químicas no dan luz direccional fuerte para trabajar, pero son valiosas porque son intrínsecamente seguras alrededor de combustibles y son perfectas para señalización, marcado de equipo y marcado de rutas de escape."
    },
    {
        question: "Sobre la luz estroboscópica pequeña (personal strobe), ¿en qué situación ha probado ser muy valiosa para los rescatistas?",
        options: [
            { letter: "a", text: "Para realizar inspecciones detalladas del desgaste de los mosquetones" },
            { letter: "b", text: "Para localizar equipos en el campo en condiciones de baja visibilidad (niebla, humo espeso, noche)" },
            { letter: "c", text: "Para medir la elongación de la cuerda" },
            { letter: "d", text: "Para iluminar espacios confinados donde no hay reflejos" }
        ],
        correctAnswer: "b",
        explanation: "Las luces estroboscópicas son extremadamente visibles y han demostrado su valor permitiendo ubicar rescatistas en ambientes de visibilidad reducida como lluvia, oscuridad extrema en matorrales densos, o incluso en áreas con humo de incendios."
    }
];
