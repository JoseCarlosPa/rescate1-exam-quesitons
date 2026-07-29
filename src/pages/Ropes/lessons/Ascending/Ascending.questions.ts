import { Question } from "../../../../question";

export const ascendingFaqData = [
    {
        question: "¿Por qué los pedales (foot loops) no cuentan como un punto de anclaje de seguridad?",
        answer: "Porque un pedal solo sirve para pisarlo; si resbalas, te volteas o quedas inconsciente, el pedal no te sostendrá. Siempre debes tener dos puntos de unión directa entre tu ARNÉS y la cuerda principal."
    },
    {
        question: "¿Qué es el 'Texas System'?",
        answer: "Es un sistema de ascenso muy popular en rescate donde el rescatista hace movimientos de sentarse y pararse (sit-stand). Se usa un bloqueador superior anclado al arnés para descansar el peso sentado, y un bloqueador inferior conectado al pedal y también al arnés por seguridad."
    },
    {
        question: "¿Qué ventaja tiene el 'Frog System' sobre los demás?",
        answer: "El sistema Rana (Frog System) utiliza un bloqueador de pecho (ej. CROLL) que captura el progreso automáticamente cada vez que el rescatista se pone de pie, ahorrando muchísima energía de la parte superior del cuerpo. Es el estándar en acceso por cuerdas (Rope Access)."
    },
    {
        question: "¿Cómo se puede usar un dispositivo tipo CLUTCH/MPD para subir por la cuerda?",
        answer: "El CLUTCH se ancla directo al arnés frontal. Arriba del CLUTCH se instala un bloqueador de mano (Handled Ascender) con su pedal. Al pararte en el pedal, jalas la cuerda suelta por debajo del CLUTCH para capturar el progreso."
    },
    {
        question: "¿Qué es el sistema 'Tender' (Litter Tender)?",
        answer: "Es un sistema ineficiente para subir muchos metros, pero muy rápido de armar para el rescatista que va cuidando la camilla (Litter Tender), permitiéndole cambiar rápidamente entre rapel y ascenso para ajustar su altura respecto al paciente."
    }
];

export const ascendingQuestions: Question[] = [
    {
        question: "Al trabajar suspendido o ascendiendo por una sola cuerda (single rope technique), ¿cuál es la regla de oro inquebrantable de seguridad respecto a las conexiones?",
        options: [
            { letter: "a", text: "Usar siempre cuerdas dinámicas." },
            { letter: "b", text: "Mantener siempre y en todo momento al menos DOS puntos de conexión independientes desde el ARNÉS hacia la cuerda." },
            { letter: "c", text: "Tener siempre tres Prusiks instalados." },
            { letter: "d", text: "Conectar el bloqueador directo al casco." }
        ],
        correctAnswer: "b",
        explanation: "Si confías tu vida a una sola cuerda (sin línea de belay separada), la única redundancia que te queda son tus conectores. Si falla un ascendedor o cordín, el otro punto de conexión directo de tu arnés a la cuerda salvará tu vida."
    },
    {
        question: "¿Por qué un pedal o estribo (foot loop) anclado a un bloqueador superior no se considera un punto de conexión válido para la seguridad?",
        options: [
            { letter: "a", text: "Porque se rompen fácil." },
            { letter: "b", text: "Porque el peso del rescatista no descansa sobre él; si resbala del pedal o pierde el conocimiento, el rescatista caerá hacia atrás sin que el pedal lo sostenga." },
            { letter: "c", text: "Porque estorba en la medición." },
            { letter: "d", text: "Porque no están normados por NFPA." }
        ],
        correctAnswer: "b",
        explanation: "Un punto de conexión de seguridad (life safety connection) debe anclar la cuerda directamente al arnés del rescatista para que lo sostenga en caso de inconsciencia o pérdida de equilibrio."
    },
    {
        question: "Si estás ascendiendo usando un dispositivo como el CLUTCH atado directo a tu arnés y un bloqueador de mano (ascender) arriba con un pedal, ¿cómo realizas el progreso hacia arriba?",
        options: [
            { letter: "a", text: "Giras la manija del CLUTCH repetidamente." },
            { letter: "b", text: "Pones el CLUTCH en 'Stand By', te paras sobre el pedal del ascendedor superior, y simultáneamente jalas la cola de la cuerda que sale del CLUTCH para quitar la holgura (slack) y capturar ese avance." },
            { letter: "c", text: "Quitas el CLUTCH de la cuerda y te jalas con los brazos." },
            { letter: "d", text: "Pides que te icen desde arriba." }
        ],
        correctAnswer: "b",
        explanation: "El CLUTCH en tu arnés funciona como un Prusik que captura el progreso. Al pararte en el pedal, te elevas, aflojando la cuerda bajo el CLUTCH, la cual debes jalar rápido para no volver a bajar al sentarte."
    },
    {
        question: "¿Qué característica de diseño del Sistema 'Rana' (Frog System) lo hace el método menos fatigante y el preferido para técnicos de acceso por cuerdas (SPRAT/IRATA)?",
        options: [
            { letter: "a", text: "Usa motores eléctricos." },
            { letter: "b", text: "Usa un bloqueador de pecho (Croll) pegado al torso que captura automáticamente la holgura de la cuerda conforme el técnico empuja con ambas piernas simultáneamente, liberando los brazos del esfuerzo de sostenerse." },
            { letter: "c", text: "Permite usar patinetas aéreas." },
            { letter: "d", text: "Se apoya en la espalda." }
        ],
        correctAnswer: "b",
        explanation: "Al tener un bloqueador fijo en el pecho (Chest Ascender), tu centro de masa se pega a la cuerda y el progreso se captura sin intervención manual. La fuerza bruta la hacen las piernas, no los bíceps."
    },
    {
        question: "En el Sistema Texas (Texas System), el rescatista usa dos bloqueadores. ¿En qué orden se realiza el movimiento de ascenso?",
        options: [
            { letter: "a", text: "Subes ambos a la vez y brincas." },
            { letter: "b", text: "Empujas el bloqueador superior tan alto como puedas y luego TE SIENTAS descansando tu peso en el arnés. Con la pierna sin peso, subes el bloqueador inferior. Finalmente TE PARAS empujando ese pedal para repetir." },
            { letter: "c", text: "Empujas el inferior primero y luego te cuelgas de una mano." },
            { letter: "d", text: "Bajas en rapel." }
        ],
        correctAnswer: "b",
        explanation: "El Texas es un sistema 'Sit-Stand'. El trabajo se divide: te cuelgas del superior (descanso), flexionas rodilla para subir el inferior, te pones de pie sobre el inferior (esfuerzo), empujas el superior."
    },
    {
        question: "Durante un ascenso con el sistema 'Tender', muy usado por los enfermeros de camilla (Litter Tenders) para subir la línea principal tras haber bajado con ella. ¿Cómo logran el segundo punto de unión al arnés si usan un estribo conectado al bloqueador superior?",
        options: [
            { letter: "a", text: "No lo usan, el tender no necesita seguridad." },
            { letter: "b", text: "El bloqueador que tiene el estribo, ADEMÁS del estribo, debe tener atada una cinta separada o anillo de sujeción (tie-in) que conecte el cuerpo del bloqueador directamente al anillo D del arnés del tender." },
            { letter: "c", text: "Conectan el estribo a la rodilla." },
            { letter: "d", text: "Se abrazan a la camilla." }
        ],
        correctAnswer: "b",
        explanation: "El bloqueador superior tiene el pedal para la fuerza motriz (el pie), pero para cumplir la regla de oro, de ese mismo bloqueador debe salir una línea de vida/cinta que abroche directo al arnés del rescatista."
    },
    {
        question: "En la técnica clásica de 'Escalada con Estribos' (Ascending with Etriers / Jumaring) usada por alpinistas, donde se tiene un estribo para el pie derecho y uno para el izquierdo, ¿cuál es el factor limitante principal para rescates largos?",
        options: [
            { letter: "a", text: "Las cuerdas no resisten." },
            { letter: "b", text: "La extrema fuerza y resistencia que exige a la parte superior del cuerpo y brazos (bíceps) para mantener el torso pegado a la cuerda y balanceado mientras caminas 'en el aire'." },
            { letter: "c", text: "Que los estribos se rompen." },
            { letter: "d", text: "Que es demasiado rápido." }
        ],
        correctAnswer: "b",
        explanation: "Sin un arnés de pecho o un Croll que te mantenga pegado al eje vertical (como hace el sistema rana), la técnica de dos pedales exige que tus brazos hagan la fuerza estabilizadora constante, agotándote rápido."
    },
    {
        question: "De acuerdo con las recomendaciones de la escuela CMC y la ITRA (International Technical Rescue Association), al ENTRENAR técnicas de ascenso de cuerda simple (SRT) los alumnos SIEMPRE deben:",
        options: [
            { letter: "a", text: "Hacerlo de noche para evitar pánico." },
            { letter: "b", text: "Usar casco sin barboquejo." },
            { letter: "c", text: "Estar asegurados por una cuerda de Belay independiente operada por alguien más (Top Belay) o un dispositivo de auto-belay independiente para prevenir caídas catastróficas por error de estudiante." },
            { letter: "d", text: "Llevar mochilas de 20kg para mayor realismo." }
        ],
        correctAnswer: "c",
        explanation: "El ascenso por cuerdas involucra desconectar, ajustar e interactuar con levas mecánicas; un error o apertura accidental de un bloqueador por parte de un novato puede ser mortal sin un Belay secundario."
    },
    {
        question: "Cuando usas el Sistema 'Frog' (Rana), ¿dónde y cómo se conecta el bloqueador de pecho (Chest Ascender)?",
        options: [
            { letter: "a", text: "Suelto en el cinturón porta-equipo." },
            { letter: "b", text: "Queda tenso e inamovible entre el D-Ring frontal de la cintura (waist D-ring) y el D-Ring del pecho (sternal D-ring) de un arnés de cuerpo completo (o usando un arnés de pecho dedicado)." },
            { letter: "c", text: "Colgando de una cinta larga al hombro." },
            { letter: "d", text: "En la parte trasera de la nuca." }
        ],
        correctAnswer: "b",
        explanation: "La magia del sistema Frog es mantener el Croll pegado estrictamente al centro del pecho sin holguras. Esto capta mágicamente cada milímetro que subes sin desperdiciar esfuerzo."
    },
    {
        question: "Si estás usando el 'Texas System' y configuras los bloqueadores muy espaciados (por ejemplo, empujas el superior tan alto que tu brazo queda completamente estirado), ¿cuál será el resultado?",
        options: [
            { letter: "a", text: "Subirás mucho más rápido y sin esfuerzo." },
            { letter: "b", text: "Agotarás rápidamente los músculos del brazo al estar estirado al límite; además el 'paso' necesario será tan grande que será muy difícil ponerte de pie con una sola pierna (ineficiente)." },
            { letter: "c", text: "Romperás el bloqueador." },
            { letter: "d", text: "Girarás de cabeza." }
        ],
        correctAnswer: "b",
        explanation: "Dar pasos demasiado grandes es un error clásico. Requiere demasiada fuerza de cuádriceps de una sola pierna y quema los hombros. Un bloqueador a nivel de la cara y el otro a medio pecho dictan el 'paso' ergonómico perfecto."
    }
];
