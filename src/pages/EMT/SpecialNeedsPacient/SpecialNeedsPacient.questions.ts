import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué define a un paciente con necesidades especiales?",
        answer: "Son aquellos pacientes que requieren consideraciones adicionales debido a condiciones físicas, mentales, emocionales o sociales que pueden afectar su capacidad para comunicarse, cooperar o recibir atención médica estándar.",
    },
    {
        question: "¿Cuáles son los principios fundamentales para atender a pacientes con necesidades especiales?",
        answer: "Los principios incluyen: respeto y dignidad, comunicación efectiva, no discriminación, adaptación de técnicas según las necesidades, trabajo con cuidadores familiares, y considerar las limitaciones específicas de cada condición.",
    },
    {
        question: "¿Cómo debo comunicarme con un paciente con discapacidad intelectual?",
        answer: "Use lenguaje simple y directo, hable despacio, dé una instrucción a la vez, permita tiempo extra para respuestas, sea paciente, y confirme comprensión. Evite hablar como si fuera un niño pequeño.",
    },
    {
        question: "¿Qué consideraciones especiales debo tener con pacientes autistas?",
        answer: "Minimice estímulos sensoriales (luces brillantes, ruidos fuertes), mantenga rutinas predecibles, evite cambios bruscos, permita que cuidadores familiares permanezcan cerca, y respete su espacio personal.",
    },
    {
        question: "¿Cómo manejo a un paciente dependiente de ventilador domiciliario?",
        answer: "Nunca desconecte sin tener BVM listo, transporte con el ventilador si es posible, conozca configuraciones básicas, tenga plan de respaldo para fallas eléctricas, y monitorice alarmas continuamente.",
    },
    {
        question: "¿Qué debo hacer si un paciente con necesidades especiales se encuentra agitado o agresivo?",
        answer: "Mantenga la calma, hable con voz suave, dé espacio personal, evite movimientos amenazantes, involucre a cuidadores familiares, ofrezca opciones cuando sea posible, y considere apoyo policial si es necesario.",
    },
    {
        question: "¿Cuándo está indicado el uso de restricciones físicas?",
        answer: "Solo cuando sea absolutamente necesario para la seguridad del paciente o personal, siguiendo protocolos locales. Debe monitorizarse continuamente la respiración y circulación, y documentar la razón médica.",
    },
    {
        question: "¿Qué consideraciones especiales tengo para el transporte de pacientes obesos mórbidos?",
        answer: "Use camilla bariátrica, solicite personal adicional, considere dispositivos de levantamiento especiales, evalúe vía aérea cuidadosamente (riesgo aumentado), y planifique rutas de acceso apropiadas.",
    },
];

export const specialNeedsPacientQuestions: Question[] = [
    {
        "question": "¿Cuál es el principio más importante al atender a un paciente con necesidades especiales?",
        "options": [
            {"letter": "a", "text": "Completar la evaluación lo más rápido posible"},
            {"letter": "b", "text": "Hablar únicamente con el cuidador familiar"},
            {"letter": "c", "text": "Tratar al paciente con respeto y dignidad"},
            {"letter": "d", "text": "Aplicar restricciones físicas preventivamente"}
        ],
        "correctAnswer": "c",
        "explanation": "El respeto y la dignidad son la base de toda atención médica. Independientemente de la condición del paciente, se le debe tratar como a una persona, comunicándose con él de la manera más apropiada posible y respetando su autonomía."
    },
    {
        "question": "Al comunicarse con un paciente con discapacidad auditiva, la estrategia MÁS apropiada es:",
        "options": [
            {"letter": "a", "text": "Hablar muy fuerte y lentamente"},
            {"letter": "b", "text": "Dirigirse únicamente al intérprete"},
            {"letter": "c", "text": "Usar gestos simples y contacto visual directo"},
            {"letter": "d", "text": "Evitar cualquier contacto visual"}
        ],
        "correctAnswer": "c",
        "explanation": "El contacto visual directo permite al paciente leer los labios y las expresiones faciales. Hablar fuerte puede distorsionar el sonido. El uso de gestos claros o la escritura puede facilitar enormemente la comunicación."
    },
    {
        "question": "Un paciente con trastorno del espectro autista se encuentra agitado durante la evaluación. ¿Cuál es la intervención inicial más apropiada?",
        "options": [
            {"letter": "a", "text": "Aplicar restricciones físicas inmediatamente"},
            {"letter": "b", "text": "Minimizar estímulos sensoriales en el ambiente"},
            {"letter": "c", "text": "Aumentar la velocidad de la evaluación"},
            {"letter": "d", "text": "Separar al paciente de sus cuidadores"}
        ],
        "correctAnswer": "b",
        "explanation": "Las personas con autismo a menudo experimentan sobrecarga sensorial. Reducir los estímulos como luces brillantes, sirenas, ruidos fuertes y el número de personas puede ayudar a calmar al paciente y facilitar la evaluación y el tratamiento."
    },
    {
        "question": "Al encontrar un paciente dependiente de ventilador domiciliario con falla del equipo, la acción INMEDIATA es:",
        "options": [
            {"letter": "a", "text": "Intentar reparar el ventilador"},
            {"letter": "b", "text": "Desconectar al paciente y llamar al hospital"},
            {"letter": "c", "text": "Conectar BVM y ventilar manualmente"},
            {"letter": "d", "text": "Esperar a que llegue personal técnico especializado"}
        ],
        "correctAnswer": "c",
        "explanation": "La falla del ventilador es una emergencia de vía aérea que amenaza la vida. La prioridad es asegurar la ventilación del paciente. El paramédico debe desconectar inmediatamente el ventilador defectuoso y comenzar la ventilación manual con una bolsa-válvula-mascarilla (BVM) conectada a oxígeno."
    },
    {
        "question": "¿Cuál de las siguientes NO es una consideración apropiada para pacientes con discapacidad intelectual?",
        "options": [
            {"letter": "a", "text": "Usar lenguaje simple y directo"},
            {"letter": "b", "text": "Permitir tiempo extra para respuestas"},
            {"letter": "c", "text": "Hablar como si fuera un niño pequeño"},
            {"letter": "d", "text": "Confirmar comprensión frecuentemente"}
        ],
        "correctAnswer": "c",
        "explanation": "Hablarle a un adulto con discapacidad intelectual en un tono infantil es condescendiente y una falta de respeto. Se debe utilizar un lenguaje claro y sencillo, pero siempre dirigiéndose al paciente de una manera apropiada para su edad."
    },
    {
        "question": "Las restricciones físicas en pacientes con necesidades especiales están indicadas:",
        "options": [
            {"letter": "a", "text": "En todos los casos para facilitar el examen"},
            {"letter": "b", "text": "Solo cuando sea absolutamente necesario para la seguridad"},
            {"letter": "c", "text": "Cuando el paciente tiene discapacidad intelectual"},
            {"letter": "d", "text": "Como medida preventiva estándar"}
        ],
        "correctAnswer": "b",
        "explanation": "Las restricciones son una medida de último recurso. Solo deben usarse cuando el comportamiento del paciente representa un peligro inminente para sí mismo o para los demás, y todas las técnicas de desescalada verbal han fallado."
    },
    {
        "question": "Al evaluar a un paciente con síndrome de Down que presenta dolor abdominal, es importante considerar:",
        "options": [
            {"letter": "a", "text": "Que no puede sentir dolor debido a su condición"},
            {"letter": "b", "text": "Condiciones médicas asociadas comunes en este síndrome"},
            {"letter": "c", "text": "Que siempre requiere sedación"},
            {"letter": "d", "text": "Que no puede dar consentimiento informado"}
        ],
        "correctAnswer": "b",
        "explanation": "Las personas con síndrome de Down tienen una mayor incidencia de ciertas condiciones médicas, como malformaciones cardíacas, problemas gastrointestinales (obstrucción) e inestabilidad atlantoaxial. Es crucial tener un alto índice de sospecha para estas comorbilidades."
    },
    {
        "question": "¿Cuál es la consideración MÁS importante al transportar a un paciente obeso mórbido?",
        "options": [
            {"letter": "a", "text": "Usar la camilla estándar con correas adicionales"},
            {"letter": "b", "text": "Solicitar personal adicional y equipo bariátrico"},
            {"letter": "c", "text": "Evitar el transporte y tratar en el lugar"},
            {"letter": "d", "text": "Trasladar únicamente en posición supina"}
        ],
        "correctAnswer": "b",
        "explanation": "La seguridad tanto del paciente como del personal es primordial. Mover a un paciente bariátrico requiere un número adecuado de personas y el uso de equipo especializado (camillas bariátricas, dispositivos de traslado) para prevenir lesiones en los proveedores y garantizar un transporte digno y seguro."
    },
    {
        "question": "Al atender a un paciente con discapacidad visual, es apropiado:",
        "options": [
            {"letter": "a", "text": "Mover su bastón blanco sin avisar"},
            {"letter": "b", "text": "Describir verbalmente las acciones que va a realizar"},
            {"letter": "c", "text": "Hablar más fuerte de lo normal"},
            {"letter": "d", "text": "Evitar mencionar palabras como 'ver' o 'mirar'"}
        ],
        "correctAnswer": "b",
        "explanation": "La comunicación verbal es clave. Anunciar su presencia, explicar quién es usted y describir cada paso de la evaluación y el tratamiento antes de hacerlo ayuda a reducir la ansiedad del paciente, fomenta la confianza y le permite participar en su propio cuidado."
    },
    {
        "question": "Un paciente con traqueostomía presenta secreciones abundantes. La acción prioritaria es:",
        "options": [
            {"letter": "a", "text": "Administrar oxígeno por mascarilla facial"},
            {"letter": "b", "text": "Aspirar secreciones del estoma de traqueostomía"},
            {"letter": "c", "text": "Posicionar al paciente en decúbito supino"},
            {"letter": "d", "text": "Cambiar la cánula de traqueostomía inmediatamente"}
        ],
        "correctAnswer": "b",
        "explanation": "La vía aérea del paciente es a través del estoma en el cuello. La acumulación de secreciones puede causar una obstrucción potencialmente mortal. La prioridad es despejar la vía aérea aspirando el tubo de traqueostomía con un catéter de succión de tamaño adecuado."
    }
];


/**
 * Preguntas de desafío sobre Pacientes con Necesidades Especiales
 */
export const specialNeedsChallengeQuestions: Question[] = [
    {
        question: "Un paciente con traqueostomía se desatura. Usted intenta ventilar con BVM (conectado al estoma) pero encuentra resistencia extrema y no hay elevación torácica. ¿Cuál es la causa más probable y la acción inmediata?",
        options: [
            { letter: "a", text: "Falla del BVM; debe cambiar el dispositivo" },
            { letter: "b", text: "Un neumotórax; debe realizar descompresión torácica" },
            { letter: "c", text: "Obstrucción por tapón mucoso; debe intentar aspirar la cánula" },
            { letter: "d", text: "El paciente está intubado esofágicamente" }
        ],
        correctAnswer: "c",
        explanation: "En un paciente con vía aérea artificial, la resistencia súbita a la ventilación es frecuentemente causada por una obstrucción. La causa más común y reversible en el campo es un tapón mucoso espeso. La aspiración (succión) es la intervención inmediata."
    },
    {
        question: "Al inmovilizar a un paciente con Síndrome de Down después de una caída, se debe tener especial precaución con la vía aérea y el cuello debido al alto riesgo de:",
        options: [
            { letter: "a", text: "Respuesta vagal exagerada" },
            { letter: "b", text: "Inestabilidad Atlantoaxial (AAI)" },
            { letter: "c", text: "Alergia al material del collarín" },
            { letter: "d", text: "Osificación prematura de las vértebras" }
        ],
        correctAnswer: "b",
        explanation: "Un porcentaje significativo de personas con Síndrome de Down tiene Inestabilidad Atlantoaxial (un movimiento anormal entre las vértebras C1 y C2). Una hiperextensión o flexión forzada (como en una intubación o trauma) puede causar una lesión medular grave."
    },
    {
        question: "Para optimizar la vía aérea y la ventilación en un paciente bariátrico (obeso mórbido) en paro respiratorio, la mejor posición es:",
        options: [
            { letter: "a", text: "Supina estricta (plana)" },
            { letter: "b", text: "Trendelenburg (cabeza abajo)" },
            { letter: "c", text: "Posición de 'rampa' (RAMP) o 'con oreja al nivel del esternón'" },
            { letter: "d", text: "Decúbito lateral izquierdo" }
        ],
        correctAnswer: "c",
        explanation: "La posición de 'rampa', lograda elevando la cabeza, hombros y torso del paciente, alinea el conducto auditivo externo con el hueco esternal. Esto alinea los ejes de la vía aérea y aleja el tejido blando (peso del tórax y abdomen) de los pulmones, facilitando la ventilación y la intubación."
    },
    {
        question: "¿Cuál es el indicador más fiable de dolor en un paciente adulto no verbal con una discapacidad intelectual severa?",
        options: [
            { letter: "a", text: "Un aumento en la presión arterial" },
            { letter: "b", text: "El informe del cuidador sobre la ausencia de dolor" },
            { letter: "c", text: "Cambios en su comportamiento basal (gemidos, agitación, rigidez)" },
            { letter: "d", text: "La falta de respuesta a un estímulo doloroso (pellizco)" }
        ],
        correctAnswer: "c",
        explanation: "Los pacientes no verbales a menudo expresan el dolor a través de cambios en su comportamiento habitual. El personal debe buscar un aumento en la agitación, vocalizaciones (gemidos), rigidez, protección de un área (guarding) o rechazo al movimiento."
    },
    {
        question: "Un cuidador llama porque la sonda de gastrostomía (G-tube) de un paciente se salió. La principal preocupación y por la que debe ser visto en el hospital es:",
        options: [
            { letter: "a", text: "El riesgo de hemorragia masiva por el estoma" },
            { letter: "b", text: "El estoma (orificio) puede cerrarse rápidamente (en horas)" },
            { letter: "c", text: "El riesgo de que el paciente desarrolle hambre" },
            { letter: "d", text: "La sonda ya no puede ser reutilizada" }
        ],
        correctAnswer: "b",
        explanation: "Los estomas de los tubos de gastrostomía, especialmente los que no están maduros, pueden comenzar a cerrarse en cuestión de horas. El paciente necesita una evaluación hospitalaria para reemplazar la sonda antes de que el tracto se cierre por completo."
    },
    {
        question: "Los pacientes con espina bífida (mielomeningocele) tienen una incidencia extremadamente alta de una alergia potencialmente mortal. ¿Cuál es?",
        options: [
            { letter: "a", text: "Penicilina" },
            { letter: "b", text: "Látex" },
            { letter: "c", text: "Aspirina" },
            { letter: "d", text: "Mariscos" }
        ],
        correctAnswer: "b",
        explanation: "Debido a la exposición repetida a productos médicos de látex (guantes, catéteres) desde el nacimiento, los pacientes con espina bífida tienen un riesgo muy elevado de desarrollar una alergia grave al látex, que puede llevar a la anafilaxia."
    },
    {
        question: "Al evaluar a un paciente con parálisis cerebral (PC) que presenta espasticidad severa y dificultades del habla, ¿qué debe asumir el paramédico sobre su estado cognitivo?",
        options: [
            { letter: "a", text: "Que su nivel cognitivo está severamente afectado" },
            { letter: "b", text: "Que su nivel cognitivo es independiente de su discapacidad física; puede estar intacto" },
            { letter: "c", text: "Que no puede entender lo que se le dice" },
            { letter: "d", text: "Que no puede sentir dolor" }
        ],
        correctAnswer: "b",
        explanation: "La parálisis cerebral es un trastorno del movimiento y el tono muscular. No predice el nivel de inteligencia. Muchos pacientes con discapacidades físicas severas tienen una función cognitiva completamente intacta. Siempre asuma capacidad cognitiva hasta que se demuestre lo contrario."
    },
    {
        question: "Usted atiende a un paciente con un Dispositivo de Asistencia Ventricular (LVAD) que está inconsciente. No se palpa pulso. ¿Cuál es la acción correcta?",
        options: [
            { letter: "a", text: "Declarar al paciente fallecido ya que no tiene pulso" },
            { letter: "b", text: "Auscultar el tórax para oír el 'zumbido' del motor y usar un Doppler para la PAM" },
            { letter: "c", text: "La RCP y la desfibrilación están contraindicadas en estos pacientes" },
            { letter: "d", text: "Administrar un golpe precordial para reiniciar el dispositivo" }
        ],
        correctAnswer: "b",
        explanation: "Los LVAD (bombas de flujo continuo) a menudo no generan un pulso palpable. La evaluación de la perfusión se realiza escuchando el 'zumbido' del motor de la bomba y midiendo la Presión Arterial Media (PAM) con un manguito manual y un Doppler. La RCP solo se inicia si el dispositivo ha fallado y el paciente no responde."
    },
    {
        question: "Un paciente de 80 años con Alzheimer (demencia) presenta un empeoramiento AGUDO de la confusión y agitación en las últimas 24 horas. ¿Qué debe sospecharse primero?",
        options: [
            { letter: "a", text: "Progresión natural de la demencia" },
            { letter: "b", text: "Delirio, probablemente secundario a una infección (ej. ITU, neumonía)" },
            { letter: "c", text: "Un evento psiquiátrico (psicosis)" },
            { letter: "d", text: "Simulación para llamar la atención" }
        ],
        correctAnswer: "b",
        explanation: "La demencia es crónica y progresiva (lenta). Un cambio agudo (súbito) en el estado mental se define como Delirio. El delirio es un síntoma de una causa médica subyacente, siendo las infecciones (como ITU o neumonía) las más comunes en los ancianos."
    },
    {
        question: "Un paciente bariátrico y agitado es restringido en posición prona (boca abajo) por 4 personas y de repente deja de luchar y se queda callado. ¿Qué complicación letal debe sospecharse de inmediato?",
        options: [
            { letter: "a", text: "Resolución súbita de la agitación" },
            { letter: "b", text: "Asfixia posicional (compresión respiratoria)" },
            { letter: "c", text: "Hipoglucemia severa" },
            { letter: "d", text: "Síncope vasovagal" }
        ],
        correctAnswer: "b",
        explanation: "La posición prona, especialmente en un paciente bariátrico o agitado (que respira con dificultad), puede impedir el movimiento del diafragma y el tórax, llevando a una asfixia posicional. Este 'cese súbito de la lucha' es un signo ominoso de paro respiratorio o cardíaco."
    }
];