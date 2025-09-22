import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Cuál es el primer paso fundamental al llegar a una emergencia?",
        answer: "El primer paso es siempre la evaluación de la escena para garantizar la seguridad del personal, del paciente y de los transeúntes. Después, se determina la naturaleza de la enfermedad (NOI) o el mecanismo de la lesión (MOI) y se evalúa la necesidad de recursos adicionales.",
    },
    {
        question: "¿Qué significa el acrónimo ABC y por qué es crucial en la evaluación primaria?",
        answer: "ABC corresponde a Vía Aérea (Airway), Respiración (Breathing) y Circulación (Circulation). Es la secuencia prioritaria para identificar y tratar amenazas inmediatas para la vida durante la evaluación primaria.",
    },
    {
        question: "¿Para qué se utiliza la nemotecnia SAMPLE al obtener la historia clínica?",
        answer: "SAMPLE es una guía para obtener un historial médico completo del paciente: Signos y síntomas, Alergias, Medicamentos, Pasado médico pertinente, Última ingesta (líquidos o sólidos) y Eventos previos relacionados con la queja principal.",
    },
    {
        question: "¿Con qué frecuencia se debe reevaluar a un paciente?",
        answer: "La reevaluación es un proceso continuo. Se debe realizar a intervalos regulares (por ejemplo, cada 5 minutos en un paciente crítico y cada 15 en uno estable) y cada vez que haya un cambio en el estado del paciente.",
    },
    {
        question: "¿Cuál es la diferencia entre un hallazgo subjetivo y uno objetivo?",
        answer: "Un hallazgo subjetivo es algo que el paciente describe o siente, como el dolor o las náuseas (un síntoma). Un hallazgo objetivo es una medida o una observación que el proveedor puede detectar, como la frecuencia cardíaca, la palidez de la piel o la presión arterial (un signo).",
    },
    {
        question: "¿Cuál es el propósito principal de la evaluación secundaria?",
        answer: "Su objetivo es realizar un examen físico más detallado, ya sea enfocado en la queja principal o una exploración de cuerpo completo, para identificar lesiones o condiciones que no fueron evidentes durante la evaluación primaria.",
    },
    {
        question: "¿Qué acción se debe tomar si se encuentra un peligro en la escena?",
        answer: "Si la escena no es segura, el personal debe retirarse a un lugar seguro y solicitar el apoyo de los recursos apropiados (policía, bomberos) antes de intentar acceder al paciente.",
    },
];

export const patientAssessmentQuestions: Question[] = [
    {
        "question": "Durante la evaluación primaria de un paciente traumatizado, usted nota que emite sonidos de gorgoteo con cada respiración. ¿Cuál es su acción inmediata?",
        "options": [
            {"letter": "a", "text": "Administrar oxígeno con mascarilla no recirculante"},
            {"letter": "b", "text": "Aspirar la vía aérea del paciente"},
            {"letter": "c", "text": "Realizar una exploración rápida de cuerpo completo"},
            {"letter": "d", "text": "Tomar la presión arterial y la frecuencia cardíaca"}
        ],
        "correctAnswer": "b",
        "explanation": "Los sonidos de gorgoteo (gurgling) indican la presencia de líquido (sangre, vómito, secreciones) en la vía aérea. En la evaluación primaria (ABCDE), una vía aérea comprometida es la máxima prioridad. La acción inmediata y que salva la vida es aspirar para despejar la vía aérea."
    },
    {
        "question": "Usted está evaluando a un adulto mayor que se queja de dolor en el pecho. El paciente niega tener dificultad para respirar. ¿Cómo se clasifica este hallazgo?",
        "options": [
            {"letter": "a", "text": "Un signo objetivo irrelevante"},
            {"letter": "b", "text": "Un negativo pertinente"},
            {"letter": "c", "text": "Parte de la evaluación secundaria"},
            {"letter": "d", "text": "Un síntoma contradictorio"}
        ],
        "correctAnswer": "b",
        "explanation": "Un negativo pertinente es la ausencia de un síntoma que normalmente se esperaría que acompañara a una queja principal. En un paciente con dolor torácico (posible evento cardíaco), la ausencia de disnea es una información clínica muy relevante que debe ser documentada."
    },
    {
        "question": "Al evaluar el nivel de conciencia de un paciente, este no responde cuando usted le habla, pero abre los ojos y se queja cuando le aplica un estímulo doloroso. Según la escala AVDI, ¿cuál es su nivel?",
        "options": [
            {"letter": "a", "text": "A (Alerta)"},
            {"letter": "b", "text": "V (Respuesta verbal)"},
            {"letter": "c", "text": "D (Respuesta al dolor)"},
            {"letter": "d", "text": "I (Inconsciente)"}
        ],
        "correctAnswer": "c",
        "explanation": "La escala AVDI (equivalente a AVPU en inglés) evalúa el nivel de conciencia. D (Dolor) se asigna cuando el paciente no responde a la voz pero sí reacciona de alguna manera (movimiento, gemido, apertura ocular) a un estímulo doloroso, como un pellizco o presión en el lecho ungueal."
    },
    {
        "question": "Un paciente de 28 años presenta una frecuencia respiratoria de 26 respiraciones por minuto después de una reacción alérgica. ¿Qué término se usaría para describir este signo vital?",
        "options": [
            {"letter": "a", "text": "Bradipnea"},
            {"letter": "b", "text": "Disnea"},
            {"letter": "c", "text": "Apnea"},
            {"letter": "d", "text": "Taquipnea"}
        ],
        "correctAnswer": "d",
        "explanation": "El rango normal de la frecuencia respiratoria en un adulto es de 12 a 20 respiraciones por minuto. Una frecuencia superior a 20 se denomina taquipnea. Bradipnea es una frecuencia lenta (menor a 12), y apnea es la ausencia de respiración."
    },
    {
        "question": "Está en la escena de una colisión vehicular con un solo paciente. ¿Cuál de las siguientes preguntas forma parte de la 'S' en la nemotecnia SAMPLE?",
        "options": [
            {"letter": "a", "text": "¿Qué tan rápido iban los vehículos?"},
            {"letter": "b", "text": "¿Además del dolor, siente algo más como náuseas o mareo?"},
            {"letter": "c", "text": "¿Ha sido hospitalizado anteriormente por alguna razón?"},
            {"letter": "d", "text": "¿Es usted alérgico a algún medicamento?"}
        ],
        "correctAnswer": "b",
        "explanation": "SAMPLE es una nemotecnia para recabar el historial del paciente. La 'S' corresponde a Signos y Síntomas. La pregunta busca indagar sobre síntomas asociados a la queja principal (el dolor), lo cual es una parte fundamental de la evaluación de los síntomas."
    },
    {
        "question": "Llega a una escena donde un paciente está tendido en el suelo de una fábrica ruidosa. ¿Cuál de estos componentes de la evaluación de la escena es prioritario verificar antes de acercarse?",
        "options": [
            {"letter": "a", "text": "La queja principal del paciente"},
            {"letter": "b", "text": "Posibles peligros ambientales, como maquinaria activa o derrames"},
            {"letter": "c", "text": "El número total de pacientes en el lugar"},
            {"letter": "d", "text": "Si el paciente tiene pulso"}
        ],
        "correctAnswer": "b",
        "explanation": "La seguridad de la escena es la primera y más importante prioridad en cualquier llamada. Antes de hacer contacto con el paciente, el reanimador debe identificar y mitigar cualquier peligro para garantizar su propia seguridad, la de su equipo y la del paciente."
    },
    {
        "question": "¿Cuál de los siguientes es un hallazgo objetivo (un signo) durante la evaluación del paciente?",
        "options": [
            {"letter": "a", "text": "El paciente califica su dolor de cabeza con un 7/10"},
            {"letter": "b", "text": "El paciente afirma sentirse muy ansioso"},
            {"letter": "c", "text": "La piel del paciente se siente fría y húmeda al tacto"},
            {"letter": "d", "text": "El familiar del paciente dice que 'no ha estado actuando normal'"}
        ],
        "correctAnswer": "c",
        "explanation": "Un signo es un hallazgo objetivo que el proveedor puede ver, oír, sentir o medir. La condición de la piel (fría y húmeda) es algo que el TAMP puede sentir directamente. Las otras opciones son síntomas (lo que el paciente siente) o información de terceros."
    },
    {
        "question": "Después de completar la evaluación primaria de un paciente médico estable, ¿cuál es el siguiente paso más apropiado?",
        "options": [
            {"letter": "a", "text": "Reevaluar los signos vitales inmediatamente"},
            {"letter": "b", "text": "Transportar al paciente sin más evaluación"},
            {"letter": "c", "text": "Realizar una evaluación enfocada en la queja principal"},
            {"letter": "d", "text": "Contactar a la dirección médica para recibir órdenes"}
        ],
        "correctAnswer": "c",
        "explanation": "En un paciente considerado estable después de la evaluación primaria (ABCDE), el siguiente paso es realizar una evaluación secundaria. Esta consiste en obtener un historial médico (SAMPLE, OPQRST) y realizar un examen físico enfocado en la queja principal para obtener más detalles sobre la condición."
    }
];

export const patientAssessmentChallengingQuestions: Question[] = [
    {
        question: "Durante la evaluación primaria de un paciente politraumatizado consciente, identifica compromiso de vía aérea con estridor, taquipnea severa, y cianosis perioral progresiva. El paciente puede hablar pero con voz ronca y esfuerzo. ¿Cuál es la prioridad de evaluación y manejo que integra el ABCDE con toma de decisiones críticas?",
        options: [
            {letter: "a", text: "Continuar con la evaluación completa de respiración y circulación antes de actuar"},
            {
                letter: "b",
                text: "El compromiso progresivo de vía aérea es una amenaza inmediata que requiere preparación para manejo avanzado mientras se optimiza posición y oxigenación"
            },
            {letter: "c", text: "Esperar hasta completar la evaluación secundaria para determinar causa"},
            {letter: "d", text: "Proceder inmediatamente con intubación sin más evaluación"}
        ],
        correctAnswer: "b",
        explanation: "El ABCDE prioriza amenazas por severidad: el compromiso progresivo de vía aérea (estridor + cianosis + voz ronca) indica edema laríngeo o hematoma que puede causar obstrucción completa rápidamente. La evaluación primaria identifica esta amenaza inmediata, pero el manejo requiere: 1) Optimizar posición (Fowler o trípode), 2) Oxígeno de alta concentración, 3) Preparaci��n inmediata para manejo avanzado de vía aérea, 4) Evaluación rápida de causa (trauma cervical, quemadura por inhalación). La 'B' del ABCDE no se completa hasta asegurar vía aérea permeable."
    },
    {
        question: "Un paciente de 65 años presenta dolor torácico con signos vitales aparentemente normales: PA 130/80, FC 88, FR 18. Sin embargo, durante la evaluación, nota sudoración diaforética, palidez, y el paciente menciona que 'siente como si fuera a desmayar'. ¿Qué principio de evaluación clínica es más relevante para interpretar esta discrepancia?",
        options: [
            {letter: "a", text: "Los signos vitales normales descartan patología significativa"},
            {
                letter: "b",
                text: "Los signos vitales pueden ser normales inicialmente debido a mecanismos compensatorios, pero los signos clínicos (diaforesis, palidez) pueden indicar compromiso cardiovascular significativo"
            },
            {letter: "c", text: "La sudoración es únicamente por ansiedad sin significado clínico"},
            {letter: "d", text: "Solo la presión arterial es relevante para evaluar estado cardiovascular"}
        ],
        correctAnswer: "b",
        explanation: "Esta situación ilustra que la evaluación clínica integral supera los signos vitales aislados: 1) Los mecanismos compensatorios cardiovasculares pueden mantener presión arterial y frecuencia cardíaca normales inicialmente, 2) Los signos autonómicos (diaforesis, palidez) indican activación simpática por compromiso hemodinámico, 3) El pre-síncope sugiere hipoperfusión cerebral incipiente, 4) Esta constelación en contexto de dolor torácico sugiere síndrome coronario agudo con compromiso hemodinámico inicial. La evaluación debe incluir: ECG inmediato, monitoreo continuo, preparación para deterioro, y transporte prioritario."
    },
    {
        question: "Durante la evaluación de un paciente con alteración del estado mental, su esposa proporciona información contradictoria sobre la historia: primero dice que 'está normal', luego menciona que 'se golpeó la cabeza ayer' y finalmente admite que 'ha estado bebiendo más últimamente'. ¿Cuál es la estrategia de evaluación más efectiva para obtener información precisa?",
        options: [
            {letter: "a", text: "Confiar únicamente en la información inicial para evitar confusión"},
            {
                letter: "b",
                text: "Utilizar técnicas de entrevista empáticas, preguntas abiertas seguidas de específicas, y correlacionar información con hallazgos físicos objetivos"
            },
            {letter: "c", text: "Ignorar la información de la esposa por ser contradictoria"},
            {letter: "d", text: "Confrontar directamente las contradicciones para obtener la verdad"}
        ],
        correctAnswer: "b",
        explanation: "La obtención de historia precisa requiere técnicas comunicativas sofisticadas: 1) Las contradicciones pueden reflejar ansiedad, negación, o protección del paciente, 2) Las preguntas abiertas ('¿Qué pasó?') seguidas de específicas ('¿Cuándo fue el golpe exactamente?') obtienen más información, 3) El abordaje empático y no-confrontativo reduce defensividad, 4) La correlación con hallazgos físicos objetivos (signos de trauma, signos de intoxicación) ayuda a clarificar la historia. En este caso: evaluar signos neurológicos focales, signos de trauma craneal, signos de intoxicación alcohólica, y establecer línea temporal clara de eventos."
    },
    {
        question: "Un paciente inconsciente no responde a estímulos verbales, pero al aplicar presión en el lecho ungueal responde retirando la extremidad y emitiendo gemidos. Su evaluación neurológica muestra pupilas de 3mm bilaterales reactivas. ¿Qué nivel de consciencia describe esto según la Escala de Coma de Glasgow y qué implicaciones tiene?",
        options: [
            {letter: "a", text: "GCS 15 - paciente normal que simula inconsciencia"},
            {
                letter: "b",
                text: "GCS aproximadamente 8-9 (M4-5, V2, O1) sugiriendo compromiso neurológico significativo pero con funciones del tronco encefálico preservadas"
            },
            {letter: "c", text: "GCS 3 - coma profundo sin respuesta"},
            {letter: "d", text: "La escala de Glasgow no es aplicable sin respuesta verbal"}
        ],
        correctAnswer: "b",
        explanation: "La evaluación neurológica sistemática es crucial: 1) Respuesta motora: retirada al dolor (M4) o localización del dolor (M5), 2) Respuesta verbal: gemidos (V2), 3) Apertura ocular: solo al dolor (O2) o ninguna mencionada (O1), 4) GCS total ~8-9, indicando compromiso neurológico significativo pero no coma profundo, 5) Pupilas reactivas sugieren función del tronco encefálico preservada. Las implicaciones incluyen: necesidad de protección de vía aérea (GCS<8), evaluación de causas (trauma, tóxicos, metabólicas), monitoreo neurológico frecuente, y consideración de hipertensión intracraneal."
    },
    {
        question: "Durante la evaluación secundaria de un paciente con dolor abdominal, palpa una masa pulsátil en mesogastrio de un hombre de 70 años hipertenso. El dolor es severo, de inicio súbito, e irradia a la espalda. Sus signos vitales muestran taquicardia e hipotensión leve. ¿Cuál es la consideración más crítica en la evaluación y manejo?",
        options: [
            {letter: "a", text: "Continuar con palpación profunda para caracterizar mejor la masa"},
            {
                letter: "b",
                text: "Esta presentación sugiere aneurisma aórtico abdominal roto o en ruptura inminente; se debe evitar palpación adicional, establecer acceso IV, y transportar urgentemente"
            },
            {letter: "c", text: "Solicitar estudios de imagen antes del transporte"},
            {letter: "d", text: "Administrar analgésicos potentes para el dolor severo"}
        ],
        correctAnswer: "b",
        explanation: "Esta presentación clásica requiere reconocimiento inmediato y manejo apropiado: 1) La tríada de dolor abdominal/dorsal, masa pulsátil, e hipotensión sugiere aneurisma aórtico abdominal (AAA) roto, 2) La palpación adicional puede precipitar ruptura completa y exanguinación, 3) La mortalidad es >90% sin cirugía urgente, 4) El manejo prehospitalario incluye: acceso IV de gran calibre (evitar sobrecarga de fluidos que puede aumentar presión y favorecer sangrado), monitoreo estricto, transporte inmediato a centro con cirugía vascular, y preparación para deterioro súbito. Los analgésicos potentes pueden enmascarar signos de deterioro."
    },
    {
        question: "Un paciente joven atleta colapsa durante competencia y presenta pulso irregular con episodios de taquicardia seguidos de bradicardia severa. Durante la evaluación, alterna entre estar consciente y confundido. Su ECG muestra ritmo variable. ¿Qué enfoque de evaluación es más apropiado para esta arritmia compleja?",
        options: [
            {letter: "a", text: "Enfocarse únicamente en la frecuencia cardíaca promedio"},
            {
                letter: "b",
                text: "Evaluación continua del ritmo con correlación clínica: monitoreo de perfusión cerebral durante episodios, evaluación de signos de compromiso hemodinámico, y preparación para intervenciones según severidad"
            },
            {letter: "c", text: "Esperar hasta llegar al hospital para evaluación cardíaca"},
            {letter: "d", text: "Administrar medicamentos antiarrítmicos inmediatamente"}
        ],
        correctAnswer: "b",
        explanation: "Las arritmias complejas requieren evaluación dinámica: 1) La evaluación debe correlacionar cambios del ritmo con síntomas (confusión durante bradicardia sugiere hipoperfusión cerebral), 2) Los signos de compromiso incluyen: alteración mental, dolor torácico, disnea, hipotensión, 3) En atletas jóvenes considerar: cardiomiopatía hipertrófica, displasia arritmogénica, o síndrome de Brugada, 4) El manejo incluye monitoreo continuo, preparación para marcapaso transcutáneo si bradicardia sintomática, desfibrilación si taquicardia inestable, y transporte a centro cardíaco especializado. La edad y contexto (colapso durante ejercicio) aumentan sospecha de patología cardíaca estructural."
    },
    {
        question: "Durante la evaluación de una mujer de 28 años con disnea severa y ansiedad, identifica taquipnea (32/min), taquicardia (130 lpm), y saturación de oxígeno del 92%. Ella insiste que es 'solo un ataque de pánico' como los anteriores. ¿Cuál es el principio de evaluación diferencial más importante?",
        options: [
            {letter: "a", text: "Aceptar el autodiagnóstico del paciente si tiene historia de ataques de pánico"},
            {
                letter: "b",
                text: "Los síntomas orgánicos (hipoxemia, taquipnea severa) requieren descarte de causas físicas graves (embolia pulmonar, neumotórax, crisis asmática) antes de atribuir a ansiedad"
            },
            {letter: "c", text: "Administrar ansiolíticos inmediatamente para tratar el pánico"},
            {letter: "d", text: "La edad joven descarta patología pulmonar grave"}
        ],
        correctAnswer: "b",
        explanation: "La evaluación diferencial en pacientes con síntomas psicosomáticos requiere rigor clínico: 1) Los ataques de pánico raramente causan hipoxemia (SatO2 <95%), 2) La taquipnea severa (>30/min) sugiere compromiso respiratorio real, 3) Las mujeres jóvenes tienen riesgo de embolia pulmonar (anticonceptivos orales, embarazo, viajes largos), 4) El diagnóstico de exclusión requiere descartar causas orgánicas primero. La evaluación incluye: auscultación pulmonar detallada, evaluación de dolor torácico pleurítico, signos de TVP, factores de riesgo de TEP, y considerar otras causas (asma, neumotórax). El tratamiento inicial debe ser médico, no psiquiátrico."
    },
    {
        question: "Un paciente de 55 años con diabetes presenta confusión gradual a lo largo de 2 horas. Su glucemia capilar es 45 mg/dL, pero responde apropiadamente a órdenes simples y puede deglutir. Su esposa menciona que 'tomó su insulina pero no desayunó por una cita médica'. ¿Cuál es la evaluación más completa para determinar el manejo apropiado?",
        options: [
            {letter: "a", text: "Administrar glucosa IV inmediatamente sin más evaluación"},
            {
                letter: "b",
                text: "Evaluar nivel de conciencia preciso (GCS), capacidad de deglución segura, tiempo de evolución, tipo de insulina administrada, y función renal para determinar riesgo de hipoglucemia recurrente"
            },
            {letter: "c", text: "Solo administrar glucagón por vía intramuscular"},
            {letter: "d", text: "Esperar hasta que pierda completamente la conciencia para intervenir"}
        ],
        correctAnswer: "b",
        explanation: "La hipoglucemia en diabéticos requiere evaluación integral: 1) El GCS preciso determina si puede recibir glucosa oral (más fisiológica y duradera), 2) La capacidad de deglución segura evita aspiración, 3) El tipo de insulina (rápida vs prolongada) predice duración de hipoglucemia, 4) La función renal afecta eliminación de insulina y riesgo de recurrencia, 5) La evaluación de causas precipitantes (ayuno, ejercicio, error de dosis) informa el manejo. El tratamiento escalonado incluye: glucosa oral si consciente y puede deglutir, dextrosa IV si inconsciente o no puede deglutir, glucagón si no hay acceso IV. El monitoreo post-tratamiento es crucial por riesgo de hipoglucemia recurrente."
    },
    {
        question: "Durante la evaluación de un traumatismo múltiple, aplica la regla de los 9 para calcular extensión de quemaduras en un paciente adulto que presenta quemaduras en cara, cuello, tórax anterior completo, y brazo derecho completo. Simultáneamente, tiene fractura expuesta de tibia con sangrado moderado. ¿Cómo debe integrar la evaluación de quemaduras con otras lesiones para priorización de tratamiento?",
        options: [
            {letter: "a", text: "Tratar únicamente las quemaduras por ser más visibles"},
            {
                letter: "b",
                text: "Las quemaduras (aproximadamente 22.5% según regla de 9) combinadas con trauma requieren manejo integrado: vía aérea prioritaria por quemaduras faciales, control de hemorragia de fractura, reanimación con fluidos por quemaduras, y consideración de síndrome compartamental"
            },
            {letter: "c", text: "La fractura es la única prioridad por el sangrado"},
            {letter: "d", text: "Esperar hasta llegar al hospital para calcular extensión de quemaduras"}
        ],
        correctAnswer: "b",
        explanation: "El politraumatismo con quemaduras requiere evaluación y manejo integrado: 1) Cálculo de quemaduras: cara/cuello (4.5%) + tórax anterior (9%) + brazo derecho (9%) = 22.5%, 2) Las prioridades incluyen: vía aérea (quemaduras faciales sugieren inhalación), respiración (compromiso torácico), circulación (pérdida de fluidos por quemaduras + sangrado de fractura), 3) El manejo específico incluye: oxígeno humidificado, control de hemorragia con presión directa/torniquete, reanimación con fluidos (fórmula de Parkland para quemaduras + reemplazo por sangrado), 4) Monitoreo de síndrome compartamental por edema post-quemadura. El transporte debe ser a centro de trauma con unidad de quemados."
    },
    {
        question: "Un paciente de 32 años presenta síncope recurrente con episodios de 'desconexión' de 30 segundos seguidos de confusión prolongada. Los testigos describen movimientos rítmicos de extremidades durante los episodios. Entre episodios está completamente normal. ¿Cuál es la estrategia de evaluación más apropiada para distinguir entre síncope cardiovascular y actividad convulsiva?",
        options: [
            {letter: "a", text: "Asumir que es síncope si no hay convulsiones tonicoclónicas generalizadas"},
            {
                letter: "b",
                text: "Evaluación diferencial sistemática: duración del episodio, tipo de movimientos, período post-ictal, desencadenantes, historia cardíaca y neurológica, con enfoque en características que distingan etiología"
            },
            {letter: "c", text: "Solo considerar causas cardíacas si hay dolor torácico"},
            {letter: "d", text: "Administrar anticonvulsivantes profilácticamente"}
        ],
        correctAnswer: "b",
        explanation: "La evaluación diferencial entre síncope y convulsiones requiere análisis detallado: 1) Características de convulsiones: duración >2-3 minutos, movimientos tónicoclónicos, período post-ictal prolongado (confusión, somnolencia), 2) Características de síncope: duración breve (<1 minuto), recuperación rápida, posible mioclonias breves por hipoxia cerebral, 3) La evaluación incluye: factores desencadenantes (ejercicio sugiere cardíaco, privación de sueño sugiere neurológico), historia familiar, medicamentos, 4) El ECG puede revelar arritmias, QT prolongado, o signos de cardiomiopatía. Esta presentación (movimientos rítmicos + confusión prolongada) sugiere más actividad convulsiva, requiriendo evaluación neurológica especializada."
    }
];
