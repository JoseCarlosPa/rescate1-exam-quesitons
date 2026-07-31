import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Cuál es la regla principal de la mecánica corporal para levantar a un paciente?",
        answer: "La regla clave es mantener siempre la espalda en una posición recta y erguida (vertical) y levantar sin girar. La fuerza debe provenir de las piernas, no de la espalda. ",
    },
    {
        question: "¿Qué es el 'levantamiento de fuerza' (power lift)?",
        answer: "Es la técnica más segura y poderosa para levantar. Consiste en flexionar las piernas con la espalda recta, sujetar el peso cerca del cuerpo y extender las piernas para levantarse. ",
    },
    {
        question: "¿Cuándo se debe realizar un movimiento de emergencia?",
        answer: "Se realiza cuando hay un peligro inmediato en la escena (fuego, explosivos) que amenaza la vida del paciente o del personal de rescate, o cuando se necesita acceder a otro paciente más grave. ",
    },
    {
        question: "¿Qué dispositivo es el más adecuado para bajar a un paciente consciente por las escaleras?",
        answer: "La silla de escalera es el dispositivo ideal, ya que permite mover a un paciente sentado de forma segura por tramos de escaleras, siempre que su condición médica lo permita. ",
    },
    {
        question: "¿Cuántos proveedores se necesitan para levantar a un paciente que pesa más de 114 kg (250 lb)?",
        answer: "Se deben utilizar al menos cuatro proveedores para levantar a un paciente de más de 114 kg, para garantizar la estabilidad y seguridad durante el levantamiento. ",
    },
    {
        question: "¿Cómo se distribuye el peso de un paciente acostado en una camilla?",
        answer: "El peso no se distribuye de manera uniforme. Entre el 68% y el 78% del peso corporal se encuentra en la mitad superior del cuerpo (torso), lo que es crucial para posicionar al personal correctamente. ",
    },
];

export const immobilizationQuestions: Question[] = [
    {
        "question": "Al levantar a un paciente, ¿cuál es la principal razón para mantener el peso lo más cerca posible del cuerpo?",
        "options": [
            {"letter": "a", "text": "Para evitar que el paciente sienta frío"},
            {"letter": "b", "text": "Para reducir la fuerza y la tensión sobre la espalda"},
            {"letter": "c", "text": "Para poder caminar más rápido"},
            {"letter": "d", "text": "Para facilitar la comunicación con el paciente"}
        ],
        "correctAnswer": "b",
        "explanation": "Este es un principio fundamental de la mecánica corporal. Mantener la carga cerca del cuerpo reduce el brazo de palanca, lo que disminuye significativamente la fuerza que los músculos de la espalda deben ejercer para levantar el peso, previniendo así lesiones."
    },
    {
        "question": "Un equipo de dos proveedores debe mover a un paciente de 120 kg (aprox. 265 lb). Según las recomendaciones, ¿cuál es la acción más segura?",
        "options": [
            {"letter": "a", "text": "Intentar el levantamiento usando la técnica de fuerza"},
            {"letter": "b", "text": "Utilizar un arrastre de ropa para moverlo"},
            {"letter": "c", "text": "Solicitar ayuda adicional para contar con al menos cuatro proveedores"},
            {"letter": "d", "text": "Usar la camilla de cuchara para dividir el peso"}
        ],
        "correctAnswer": "c",
        "explanation": "La seguridad es lo primero. La mayoría de las directrices recomiendan no levantar más de 25 kg por persona. Para un paciente de 120 kg, se necesitarían al menos cuatro (idealmente más) proveedores para distribuir el peso de manera segura y evitar lesiones en el equipo."
    },
    {
        "question": "¿Cuál de los siguientes dispositivos NO está diseñado para ser utilizado en el transporte de pacientes por escaleras?",
        "options": [
            {"letter": "a", "text": "La camilla con ruedas de la ambulancia"},
            {"letter": "b", "text": "La silla de escalera"},
            {"letter": "c", "text": "Una tabla de inmovilización"},
            {"letter": "d", "text": "Una camilla flexible"}
        ],
        "correctAnswer": "a",
        "explanation": "La camilla principal con ruedas es pesada, voluminosa y tiene un centro de gravedad alto, lo que la hace extremadamente peligrosa e inestable para usar en escaleras. El dispositivo diseñado específicamente para esta tarea es la silla de escalera."
    },
    {
        "question": "Durante la técnica de 'extracción rápida' de un vehículo, ¿quién es el responsable de dirigir los movimientos coordinados del equipo?",
        "options": [
            {"letter": "a", "text": "El primer proveedor que mantiene el control cervical"},
            {"letter": "b", "text": "El segundo proveedor que levanta y gira el torso del paciente"},
            {"letter": "c", "text": "El tercer proveedor encargado de las piernas"},
            {"letter": "d", "text": "El proveedor que tenga más experiencia en la escena"}
        ],
        "correctAnswer": "b",
        "explanation": "En esta técnica, el proveedor a cargo de levantar y girar el torso del paciente (proveedor 2) está en la mejor posición para visualizar todo el movimiento y coordinar las acciones de los otros miembros del equipo, dando las órdenes para el giro y el levantamiento."
    },
    {
        "question": "Se debe mover a un paciente desde su cama a una camilla. El paciente no puede colaborar. Ambos dispositivos están a la misma altura. ¿Qué técnica de movimiento sin levantamiento es la más adecuada?",
        "options": [
            {"letter": "a", "text": "Levantamiento de extremidades"},
            {"letter": "b", "text": "Levantamiento directo del piso"},
            {"letter": "c", "text": "Método de movimiento con una sábana (sábana hospitalaria)"},
            {"letter": "d", "text": "Uso de una silla de escalera"}
        ],
        "correctAnswer": "c",
        "explanation": "El método de la sábana, también conocido como 'draw sheet method', es ideal para mover a un paciente de una superficie a otra a la misma altura. Reduce la fricción y permite que el equipo deslice al paciente suavemente sin necesidad de levantarlo, minimizando el riesgo de lesiones."
    },
    {
        "question": "Al realizar un 'acarreo directo' con tres proveedores para mover a un paciente de la cama a la camilla, ¿qué función realiza el segundo proveedor (el del medio)?",
        "options": [
            {"letter": "a", "text": "Sujetar la cabeza y la parte baja de la espalda"},
            {"letter": "b", "text": "Sujetar la cintura y las rodillas del paciente"},
            {"letter": "c", "text": "Sujetar las rodillas y los tobillos del paciente"},
            {"letter": "d", "text": "Sujetar únicamente las piernas del paciente"}
        ],
        "correctAnswer": "b",
        "explanation": "En esta técnica, el primer proveedor sostiene la cabeza y el torso superior. El segundo proveedor (en el medio) sostiene la cintura y la parte superior de los muslos (área de la pelvis), que es la parte más pesada del cuerpo. El tercer proveedor sostiene las piernas desde las rodillas hasta los tobillos."
    },
    {
        "question": "¿Qué característica diferencia principalmente a una camilla bariátrica de una estándar?",
        "options": [
            {"letter": "a", "text": "Es más ligera y fácil de transportar"},
            {"letter": "b", "text": "Tiene una mayor capacidad de peso y una superficie más amplia"},
            {"letter": "c", "text": "Solo puede ser utilizada por dos proveedores"},
            {"letter": "d", "text": "No incluye ruedas para facilitar su uso en terrenos difíciles"}
        ],
        "correctAnswer": "b",
        "explanation": "Las camillas bariátricas están diseñadas específicamente para pacientes con obesidad. Son más anchas, tienen una estructura reforzada para soportar un peso significativamente mayor (a menudo más de 300 kg o 650 lb) y pueden tener características adicionales como sistemas de elevación motorizados."
    },
    {
        "question": "Un paciente inconsciente sin sospecha de trauma debe ser colocado en la 'posición de recuperación'. ¿Cómo ayuda esto al paciente?",
        "options": [
            {"letter": "a", "text": "Mantiene la columna vertebral perfectamente alineada"},
            {"letter": "b", "text": "Facilita la evaluación de la presión arterial"},
            {"letter": "c", "text": "Ayuda a mantener la vía aérea permeable y permite el drenaje de fluidos"},
            {"letter": "d", "text": "Incrementa el flujo sanguíneo al cerebro"}
        ],
        "correctAnswer": "c",
        "explanation": "La posición de recuperación (decúbito lateral) utiliza la gravedad para ayudar a que la lengua no obstruya la vía aérea y para permitir que cualquier fluido (vómito, saliva, sangre) drene hacia afuera de la boca en lugar de ser aspirado hacia los pulmones."
    },
    {
        "question": "Al empujar una camilla, ¿cuál es la técnica correcta para protegerse de lesiones?",
        "options": [
            {"letter": "a", "text": "Empujar con los brazos completamente extendidos y los codos bloqueados"},
            {"letter": "b", "text": "Inclinarse desde la cintura para usar el peso del cuerpo"},
            {"letter": "c", "text": "Mantener los codos flexionados y el peso cerca del cuerpo"},
            {"letter": "d", "text": "Jalar la camilla caminando hacia atrás siempre que sea posible"}
        ],
        "correctAnswer": "c",
        "explanation": "Empujar con los codos flexionados permite usar la fuerza de los músculos del pecho y los brazos de manera más efectiva y segura. Mantener la espalda recta y el peso cerca del cuerpo reduce la tensión en la columna vertebral, previniendo lesiones."
    },
    {
        "question": "¿Para qué se utiliza principalmente una camilla de canasta (tipo Stokes)?",
        "options": [
            {"letter": "a", "text": "Para transporte estándar en una ambulancia"},
            {"letter": "b", "text": "Para mover pacientes en espacios muy estrechos"},
            {"letter": "c", "text": "Para transportar a un paciente por terreno irregular o en rescates remotos"},
            {"letter": "d", "text": "Para inmovilizar fracturas de fémur"}
        ],
        "correctAnswer": "c",
        "explanation": "La camilla de canasta está diseñada para rescates técnicos. Su estructura rígida y sus múltiples puntos de sujeción la hacen ideal para mover a un paciente de forma segura sobre terreno difícil (senderos, pendientes) o para izarlo o bajarlo verticalmente en operaciones de rescate con cuerdas."
    },
    {
        "question": "En una situación de 'movimiento de emergencia' donde debe arrastrar a un paciente solo, ¿qué principio es crucial para proteger al paciente de una lesión mayor?",
        "options": [
            {"letter": "a", "text": "Levantar completamente al paciente del suelo"},
            {"letter": "b", "text": "Arrastrarlo de lado para mayor velocidad"},
            {"letter": "c", "text": "Jalar al paciente a lo largo de su eje longitudinal (en línea recta)"},
            {"letter": "d", "text": "Utilizar las extremidades inferiores para el arrastre"}
        ],
        "correctAnswer": "c",
        "explanation": "En un movimiento de emergencia, donde puede haber una lesión espinal no detectada, arrastrar al paciente en la dirección de su eje longitudinal (cabeza, cuello y espalda en una línea) ayuda a minimizar la torsión y la flexión de la columna, reduciendo el riesgo de causar o agravar una lesión."
    },
    {
        "question": "Un paciente con una posible curvatura espinal (cifosis) debe ser inmovilizado. ¿Cuál es la mejor consideración para este paciente?",
        "options": [
            {"letter": "a", "text": "Forzar al paciente a una posición supina recta sobre la tabla"},
            {"letter": "b", "text": "Usar una camilla de cuchara para enderezar la columna"},
            {
                "letter": "c",
                "text": "Inmovilizar en su posición de lado o usar un colchón de vacío para adaptarse a la curvatura"
            },
            {"letter": "d", "text": "Transportar al paciente sin inmovilización para mayor comodidad"}
        ],
        "correctAnswer": "c",
        "explanation": "Nunca se debe forzar a un paciente a una posición anatómicamente anormal. Para pacientes con curvaturas espinales, se deben usar almohadas y mantas para rellenar los huecos y soportar la columna en su posición habitual. Un colchón de vacío es ideal porque se amolda a la forma del paciente."
    },
    {
        "question": "¿Cuál es el propósito de las correas en una camilla o tabla de inmovilización?",
        "options": [
            {"letter": "a", "text": "Mantener al paciente abrigado"},
            {"letter": "b", "text": "Sujetar al paciente para evitar movimientos o caídas durante el traslado"},
            {"letter": "c", "text": "Servir como asas adicionales para los proveedores"},
            {"letter": "d", "text": "Inmovilizar únicamente las extremidades"}
        ],
        "correctAnswer": "b",
        "explanation": "Las correas son un componente de seguridad esencial. Su función es asegurar firmemente al paciente al dispositivo de transporte para prevenir que se mueva o se caiga, especialmente al subir o bajar escaleras, en terrenos irregulares o en caso de un movimiento brusco de la ambulancia."
    },
    {
        "question": "Al levantar una tabla espinal con la 'sujeción de fuerza' (power grip), ¿cómo deben posicionarse las manos?",
        "options": [
            {"letter": "a", "text": "Con las palmas hacia abajo, sujetando el borde superior"},
            {"letter": "b", "text": "Con las palmas hacia arriba, insertando la mano debajo del mango"},
            {"letter": "c", "text": "Con una mano hacia arriba y la otra hacia abajo para equilibrar"},
            {"letter": "d", "text": "Sujetando los orificios con las puntas de los dedos"}
        ],
        "correctAnswer": "b",
        "explanation": "El agarre de fuerza o 'power grip' implica sujetar el objeto con las palmas de las manos hacia arriba. Esta posición proporciona la máxima fuerza de agarre y es mucho más segura y estable que usar las puntas de los dedos o un agarre con las palmas hacia abajo."
    },
    {
        "question": "Se debe realizar la 'técnica de extracción rápida' en un paciente en un vehículo. ¿En cuál de las siguientes situaciones está justificado este procedimiento?",
        "options": [
            {"letter": "a", "text": "El paciente está estable pero se queja de dolor leve de cuello"},
            {"letter": "b", "text": "El vehículo tiene un daño mínimo y la escena es segura"},
            {"letter": "c", "text": "El paciente bloquea el acceso a otro paciente gravemente herido"},
            {"letter": "d", "text": "El paciente desea salir del vehículo por su propio pie"}
        ],
        "correctAnswer": "c",
        "explanation": "La extracción rápida es un movimiento de emergencia que compromete la inmovilización espinal perfecta. Solo se justifica si la escena es insegura, si el paciente tiene una condición que amenaza su vida y requiere intervención inmediata (ej. paro cardíaco, obstrucción de vía aérea), o si bloquea el acceso a otro paciente más crítico."
    }
]

export const immobilizationChallengeQuestions: Question[] = [
    {
        "question": "Un paciente de 28 años sufre una colisión vehicular de baja velocidad. Está alerta y orientado (GCS 15), no ha consumido alcohol ni drogas, no presenta dolor en la línea media de la columna a la palpación, no tiene déficit neurológico ni sensitivo en extremidades, y no reporta ninguna lesión distractora dolorosa (como una fractura evidente de otro segmento). Sin embargo, refiere dolor leve en el cuello que describe como 'rigidez'. Según los criterios de inmovilización espinal selectiva, ¿cuál es la conducta más apropiada?",
        "options": [
            {"letter": "a", "text": "Inmovilizar en tabla larga con collarín cervical de forma obligatoria, ya que cualquier dolor cervical, sin importar su intensidad, descarta la inmovilización selectiva"},
            {"letter": "b", "text": "No inmovilizar, ya que la ausencia de alteración del estado mental, intoxicación, déficit neurológico y lesión distractora permite omitir la inmovilización aunque exista dolor cervical leve reportado por el paciente"},
            {"letter": "c", "text": "Reevaluar cuidadosamente la presencia de dolor o sensibilidad en la línea media espinal antes de decidir; si el dolor cervical persiste incluso siendo leve, los criterios de inmovilización selectiva generalmente contraindican omitir la inmovilización y se debe proceder con precauciones espinales"},
            {"letter": "d", "text": "Dejar la decisión completamente a discreción del paciente, ya que él está alerta y puede evaluar su propio riesgo"}
        ],
        "correctAnswer": "c",
        "explanation": "Los criterios de inmovilización selectiva (NEXUS/Canadian C-Spine adaptados al ámbito prehospitalario) exigen que el paciente esté alerta, sin intoxicación, sin déficit neurológico, sin lesión distractora Y SIN dolor o sensibilidad en la línea media espinal a la palpación NI espontáneo. El dolor cervical reportado por el propio paciente, incluso si se percibe como 'leve' o como 'rigidez', constituye un hallazgo positivo de dolor en la línea media que invalida el criterio y obliga a mantener precauciones espinales (collarín y minimizar movimiento), independientemente de que los demás criterios se cumplan. Un error común es subestimar el dolor cervical autorreportado porque el paciente parece estable en otros aspectos; sin embargo, el mecanismo de lesión de columna cervical puede coexistir con una presentación clínica engañosamente benigna. La seguridad del paciente exige que cualquier duda razonable sobre la ausencia de dolor en línea media incline la decisión hacia la inmovilización, no hacia la omisión."
    },
    {
        "question": "En un accidente vehicular, un paciente permanece sentado y estable dentro del vehículo, sin compromiso inmediato de vía aérea ni de la escena, pero atrapado por las piernas debido a la deformación del tablero. El proveedor decide utilizar un dispositivo de extracción tipo chaleco (KED). Durante la aplicación, ¿cuál es el error más crítico que comprometería la efectividad del dispositivo para proteger la columna del paciente?",
        "options": [
            {"letter": "a", "text": "Aplicar el collarín cervical rígido antes de colocar el dispositivo alrededor del torso"},
            {"letter": "b", "text": "Asegurar primero las correas de las piernas y del torso, y colocar el soporte de cabeza y las correas frontales de la cabeza en último lugar, antes de retirar al paciente"},
            {"letter": "c", "text": "No ajustar completamente las correas torácicas contra la caja torácica antes de fijar la cabeza, dejando espacio entre el dispositivo y el tórax del paciente"},
            {"letter": "d", "text": "Mantener control cervical manual en línea durante todo el proceso de aplicación hasta que el dispositivo asuma esa función"}
        ],
        "correctAnswer": "c",
        "explanation": "El KED (Kendrick Extrication Device) funciona como una extensión rígida del torso que transmite el control a la cabeza y el cuello únicamente si está firmemente adherido a la caja torácica del paciente; si las correas torácicas quedan holgadas, el dispositivo puede deslizarse o pivotear durante el movimiento, permitiendo flexión, extensión o rotación no controlada de la columna cervicotorácica, justamente lo que el dispositivo busca prevenir. La secuencia correcta es: control manual en línea, aplicación del collarín, deslizar el chaleco detrás del torso, asegurar las correas torácicas apretadas de abajo hacia arriba, luego las correas de piernas, y finalmente el soporte de cabeza; esto es lo opuesto al orden descrito en la opción b, que también sería incorrecto en la práctica real pero no representa el fallo biomecánico más grave. El principio clave es que un ajuste torácico deficiente anula la función de inmovilización de todo el sistema, independientemente de qué tan bien se asegure la cabeza después."
    },
    {
        "question": "Un motociclista presenta una fractura cerrada de fémur en el tercio medio de la diáfisis, con acortamiento evidente de la extremidad y dolor intenso, pero con pulso pedio palpable y llenado capilar normal. El proveedor considera aplicar una férula de tracción. ¿En cuál de las siguientes situaciones NO estaría indicado, o incluso estaría contraindicado, el uso de este dispositivo?",
        "options": [
            {"letter": "a", "text": "Fractura aislada de fémur sin lesión articular asociada, exactamente como se describe en este caso"},
            {"letter": "b", "text": "El mismo paciente, pero con una fractura adicional de cadera del mismo lado, o con una fractura o luxación de rodilla asociada"},
            {"letter": "c", "text": "El mismo paciente, si presentara además una fractura de tibia y peroné del mismo lado sin compromiso vascular"},
            {"letter": "d", "text": "El mismo paciente, si el tiempo de traslado al hospital fuera superior a 30 minutos"}
        ],
        "correctAnswer": "b",
        "explanation": "La férula de tracción está indicada específicamente para fracturas cerradas y aisladas de la diáfisis femoral sin compromiso articular, ya que su mecanismo depende de aplicar tracción longitudinal contra un punto de apoyo en la pelvis (o el pie, según el modelo) para realinear el fémur y reducir el dolor y la hemorragia interna. Está contraindicada cuando existe una fractura o lesión de cadera, pelvis o rodilla en el mismo miembro, porque la tracción se transmitiría a través de estas estructuras lesionadas, agravando el daño articular o pélvico en lugar de estabilizar únicamente el fémur. También está contraindicada en fracturas con avulsión o amputación parcial cerca del sitio donde se aplicaría la tracción, y en fracturas de tibia/peroné aisladas sin fractura femoral (donde una férula rígida convencional es más apropiada), aunque esta última no es una contraindicación absoluta cuando coexiste con la fractura femoral. El tiempo de traslado no es un criterio de contraindicación para el uso del dispositivo."
    },
    {
        "question": "Un paciente sufre una fractura angulada de antebrazo tras una caída. Al evaluar la extremidad antes de inmovilizarla, el proveedor no palpa pulso radial distal a la fractura y la mano se encuentra pálida y fría. ¿Cuál es la conducta más apropiada según los principios de manejo de fracturas con compromiso vascular?",
        "options": [
            {"letter": "a", "text": "Inmovilizar la extremidad exactamente en la posición angulada en la que se encuentra, sin intentar realinearla, y trasladar de inmediato"},
            {"letter": "b", "text": "Aplicar tracción suave y intentar realinear la extremidad a una posición anatómica antes de entablillarla, reevaluando el pulso distal después de la maniobra, y trasladar sin demora"},
            {"letter": "c", "text": "Esperar en la escena hasta que el pulso distal reaparezca espontáneamente antes de proceder con cualquier inmovilización"},
            {"letter": "d", "text": "Aplicar un torniquete proximal a la fractura para prevenir una hemorragia antes de inmovilizar"},
        ],
        "correctAnswer": "b",
        "explanation": "Cuando existe una deformidad angulada con ausencia de pulso distal, el protocolo estándar del AAOS es intentar una realineación suave mediante tracción manual en el eje longitudinal de la extremidad, ya que la angulación severa frecuentemente comprime, acoda o distiende la arteria, y corregir la alineación puede restaurar el flujo sanguíneo antes de que se produzca isquemia irreversible. Este intento de realineación se realiza una sola vez, con tracción suave y sostenida, deteniéndose si se encuentra resistencia significativa o si el dolor aumenta desproporcionadamente; después se reevalúa el pulso, la sensibilidad y el color de la extremidad. Inmovilizar en la posición deformada perpetuaría la isquemia y aumentaría el riesgo de daño neurovascular permanente y de síndrome compartimental, mientras que esperar en la escena retrasa el tratamiento definitivo sin beneficio. Un torniquete no está indicado aquí porque no hay hemorragia externa exanguinante; el problema es isquemia por compresión, no pérdida sanguínea activa."
    },
    {
        "question": "Un paciente con fractura de tibia es inmovilizado con una férula rígida y vendaje circunferencial ajustado por otro proveedor antes de la llegada de la unidad. Treinta minutos después, durante el traslado, el paciente reporta dolor desproporcionado que ha empeorado progresivamente, la pierna distal a la férula se siente tensa 'como madera' al tacto, y aparece parestesia progresiva en los dedos del pie, aunque el pulso pedio todavía es palpable. ¿Qué proceso está ocurriendo y cuál es la acción inmediata correcta?",
        "options": [
            {"letter": "a", "text": "Es un dolor esperado por la fractura; no se requiere ninguna acción adicional mientras el pulso siga presente"},
            {"letter": "b", "text": "Es un síndrome compartimental en desarrollo, probablemente agravado por la inmovilización circunferencial ajustada; se debe aflojar o retirar el vendaje constrictivo y reevaluar, ya que la presencia de pulso distal no excluye el diagnóstico"},
            {"letter": "c", "text": "Es una reacción alérgica al material de la férula; se debe administrar difenhidramina y continuar el traslado sin modificar la inmovilización"},
            {"letter": "d", "text": "Es un signo de shock hipovolémico sistémico que requiere elevar la extremidad y administrar líquidos IV en bolo, sin modificar la férula"},
        ],
        "correctAnswer": "b",
        "explanation": "El dolor desproporcionado y progresivo, la sensación de tensión o 'leñosidad' del compartimento y la parestesia son signos tempranos clásicos de síndrome compartimental, una complicación en la que el aumento de presión dentro de un compartimento fascial cerrado compromete la perfusión capilar y nerviosa. Un vendaje o férula circunferencial demasiado ajustada puede tanto causar como enmascarar y agravar este cuadro al restringir aún más el compartimento ya edematizado. Un punto crítico de manejo prehospitalario es que la presencia de pulso distal palpable NO excluye el síndrome compartimental, ya que este se desarrolla por oclusión de la microcirculación capilar y venosa mucho antes de que la presión alcance niveles suficientes para ocluir una arteria mayor; esperar a la ausencia de pulso para actuar retrasa peligrosamente el diagnóstico. La acción inmediata correcta es aflojar cualquier vendaje, férula o vendaje elástico constrictivo, reevaluar continuamente el estado neurovascular distal y trasladar con prioridad para evaluación quirúrgica, ya que el síndrome compartimental no tratado puede producir necrosis muscular y nerviosa irreversible en pocas horas."
    },
    {
        "question": "Un paciente con trauma craneoencefálico moderado (GCS 12) y sospecha de lesión de columna cervical requiere collarín cervical rígido. El proveedor selecciona un collarín visiblemente demasiado pequeño para el cuello del paciente y lo asegura firmemente. ¿Cuál es la consecuencia clínica más peligrosa de este error de tamaño, más allá de la inmovilización espinal inadecuada?",
        "options": [
            {"letter": "a", "text": "El collarín demasiado pequeño obliga al cuello a una posición de flexión forzada, lo que puede comprometer la vía aérea y, en un paciente con lesión craneal, elevar la presión intracraneal al restringir el retorno venoso yugular"},
            {"letter": "b", "text": "El collarín demasiado pequeño no tiene ningún efecto clínico significativo siempre que esté bien sujeto con el velcro"},
            {"letter": "c", "text": "El collarín demasiado pequeño solo afecta la comodidad del paciente, sin ningún riesgo fisiológico real"},
            {"letter": "d", "text": "El collarín demasiado pequeño mejora la inmovilización porque genera mayor presión de fijación sobre la columna cervical"},
        ],
        "correctAnswer": "a",
        "explanation": "Un collarín cervical mal dimensionado (demasiado pequeño en altura) fuerza al cuello hacia una posición de flexión en lugar de mantenerlo en posición neutra alineada, lo que puede reducir el diámetro de la vía aérea superior y dificultar la ventilación, un riesgo particularmente grave en un paciente con alteración del estado de conciencia que ya tiene control disminuido de su vía aérea. Además, un collarín demasiado ajustado o mal ajustado puede comprimir las venas yugulares externas e internas, restringiendo el retorno venoso cerebral; en un paciente con trauma craneoencefálico, esto puede elevar la presión intracraneal y agravar la lesión cerebral secundaria por reducción de la presión de perfusión cerebral. Por estas razones, el tamaño correcto del collarín debe medirse individualmente (usando la distancia entre el mentón y el trapecio, o el dispositivo de medición del fabricante) y nunca asumirse ni forzarse, y el relleno con toallas o dispositivos de fijación lateral debe complementar, no sustituir, un collarín del tamaño adecuado."
    }
]