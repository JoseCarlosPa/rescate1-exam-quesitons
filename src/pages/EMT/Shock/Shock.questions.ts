import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es el shock?",
        answer: "Es un estado de hipoperfusión generalizada de los tejidos corporales, lo que significa que no llega suficiente oxígeno y nutrientes a las células para su correcto funcionamiento.",
    },
    {
        question: "¿Cuáles son los tipos principales de shock?",
        answer: "Los tipos principales son: Hipovolémico, Cardiogénico, Obstructivo y Distributivo (que incluye Séptico, Anafiláctico y Neurogénico).",
    },
    {
        question: "¿Qué signos tempranos pueden indicar shock?",
        answer: "Signos tempranos incluyen: piel fría, pálida y sudorosa; taquicardia (pulso rápido); ansiedad, agitación o confusión; y respiración rápida y superficial.",
    },
    {
        question: "¿Cuál es el tratamiento inicial prehospitalario del shock?",
        answer: "El tratamiento inicial incluye: asegurar una vía aérea permeable y administrar oxígeno de alto flujo; controlar hemorragias externas (si presentes); colocar al paciente en la posición adecuada (generalmente supina con piernas elevadas si no hay contraindicación); mantener la temperatura corporal; y realizar un transporte rápido al centro hospitalario.",
    },
    {
        question: "¿Qué causa el shock hipovolémico?",
        answer: "Es causado por una pérdida significativa de volumen sanguíneo o líquidos corporales, como hemorragias severas, quemaduras extensas o deshidratación grave.",
    },
    {
        question: "¿Qué evento puede causar shock obstructivo?",
        answer: "El shock obstructivo es causado por una barrera física al flujo sanguíneo, como un neumotórax a tensión, un taponamiento cardíaco o una embolia pulmonar masiva.",
    },
    {
        question: "¿Qué causa el shock cardiogénico?",
        answer: "Se debe a la incapacidad del corazón para bombear suficiente sangre para satisfacer las necesidades del cuerpo, comúnmente por un infarto agudo al miocardio, arritmias severas o insuficiencia cardíaca descompensada.",
    },
];

export const shockQuestions: Question[] = [
    {
        "question": "¿Cuál de las siguientes descripciones define mejor el shock desde una perspectiva fisiopatológica?",
        "options": [
            {"letter": "a", "text": "Un estado de colapso emocional debido a una mala noticia."},
            {"letter": "b", "text": "Una respuesta del cuerpo a una descarga eléctrica."},
            {
                "letter": "c",
                "text": "Un estado de hipoperfusión tisular generalizada que compromete el suministro de oxígeno y nutrientes."
            },
            {"letter": "d", "text": "Una disminución transitoria de la presión arterial."}
        ],
        "correctAnswer": "c",
        "explanation": "El shock, en términos médicos, es fundamentalmente un fallo circulatorio. Se define como la incapacidad del sistema circulatorio para suministrar suficiente sangre oxigenada y nutrientes a los tejidos para satisfacer sus demandas metabólicas, lo que lleva a la disfunción celular y, finalmente, a la falla de órganos."
    },
    {
        "question": "Un paciente presenta una herida por arma blanca con hemorragia severa, piel fría y pálida, pulso rápido y débil. ¿Qué tipo de shock es el más probable?",
        "options": [
            {"letter": "a", "text": "Shock cardiogénico"},
            {"letter": "b", "text": "Shock hipovolémico"},
            {"letter": "c", "text": "Shock anafiláctico"},
            {"letter": "d", "text": "Shock neurogénico"}
        ],
        "correctAnswer": "b",
        "explanation": "Este es el cuadro clásico del shock hipovolémico (bajo volumen). La pérdida de sangre conduce a una disminución del volumen circulatorio. El cuerpo compensa aumentando la frecuencia cardíaca (pulso rápido) y desviando la sangre de la piel a los órganos vitales (piel fría y pálida)."
    },
    {
        "question": "Una paciente de 65 años con antecedentes de infarto presenta dificultad respiratoria, ruidos pulmonares con crepitaciones en todos los campos y una presión arterial de 92/60 mmHg. ¿Cuál es el diagnóstico diferencial más probable?",
        "options": [
            {"letter": "a", "text": "Shock hipovolémico"},
            {"letter": "b", "text": "Shock anafiláctico"},
            {"letter": "c", "text": "Shock cardiogénico"},
            {"letter": "d", "text": "Shock neurogénico"}
        ],
        "correctAnswer": "c",
        "explanation": "El shock cardiogénico es un shock por 'falla de la bomba'. Un antecedente de infarto sugiere un corazón dañado. Las crepitaciones pulmonares indican edema pulmonar, que ocurre cuando el corazón no puede bombear la sangre eficazmente y esta se acumula en los pulmones."
    },
    {
        "question": "En un paciente con signos de shock, ¿qué indica una frecuencia cardíaca rápida y un llenado capilar prolongado?",
        "options": [
            {"letter": "a", "text": "Una perfusión adecuada."},
            {"letter": "b", "text": "Un mecanismo compensatorio inicial del cuerpo."},
            {"letter": "c", "text": "Un signo de shock irreversible."},
            {"letter": "d", "text": "Un estado de shock psicogénico."}
        ],
        "correctAnswer": "b",
        "explanation": "Estos son signos de la etapa de shock compensado. El cuerpo intenta mantener la perfusión de los órganos vitales aumentando la frecuencia cardíaca (taquicardia) y contrayendo los vasos sanguíneos periféricos (lo que prolonga el llenado capilar) para desviar la sangre hacia el centro del cuerpo."
    },
    {
        "question": "¿Cuál es la primera acción prioritaria para un paramédico al abordar a un paciente en shock?",
        "options": [
            {"letter": "a", "text": "Administrar medicamentos intravenosos."},
            {"letter": "b", "text": "Realizar un historial clínico detallado."},
            {"letter": "c", "text": "Asegurar la vía aérea y administrar oxígeno de alto flujo."},
            {"letter": "d", "text": "Esperar la llegada de soporte avanzado."}
        ],
        "correctAnswer": "c",
        "explanation": "La prioridad siempre sigue el ABC (Vía Aérea, Respiración, Circulación). Dado que el shock es un estado de privación de oxígeno a nivel celular, asegurar una vía aérea permeable y maximizar la oxigenación con oxígeno de alto flujo es el primer paso crítico en el manejo."
    },
    {
        "question": "Un paciente alérgico a las picaduras de abeja es picado y desarrolla rápidamente urticaria generalizada, edema facial y dificultad respiratoria severa. ¿Qué tipo de shock está experimentando?",
        "options": [
            {"letter": "a", "text": "Shock séptico"},
            {"letter": "b", "text": "Shock cardiogénico"},
            {"letter": "c", "text": "Shock anafiláctico"},
            {"letter": "d", "text": "Shock neurogénico"}
        ],
        "correctAnswer": "c",
        "explanation": "El shock anafiláctico es una reacción alérgica grave y sistémica. La exposición a un alérgeno desencadena una liberación masiva de histamina, causando vasodilatación generalizada (shock), urticaria y broncoconstricción (dificultad respiratoria)."
    },
    {
        "question": "Un pulso débil y rápido en un paciente traumatizado es un indicio clave de:",
        "options": [
            {"letter": "a", "text": "Hipoxia leve."},
            {"letter": "b", "text": "Perfusión normal."},
            {"letter": "c", "text": "Shock hipovolémico."},
            {"letter": "d", "text": "Trauma aislado de extremidad."}
        ],
        "correctAnswer": "c",
        "explanation": "Un pulso débil (filiforme) indica un bajo volumen sistólico (poca sangre bombeada con cada latido), y un pulso rápido (taquicardia) es la respuesta compensatoria del corazón para tratar de mantener el gasto cardíaco. Juntos, son un signo clásico de shock hipovolémico."
    },
    {
        "question": "¿Qué acción prehospitalaria inmediata es crucial para ayudar a revertir el shock anafiláctico?",
        "options": [
            {"letter": "a", "text": "Administrar glucosa oral."},
            {"letter": "b", "text": "Administrar epinefrina intramuscular."},
            {"letter": "c", "text": "Administrar líquidos fríos."},
            {"letter": "d", "text": "Administrar carbón activado."}
        ],
        "correctAnswer": "b",
        "explanation": "La epinefrina es el tratamiento de primera línea que salva la vida en la anafilaxia. Sus efectos de vasoconstricción y broncodilatación revierten directamente los efectos potencialmente mortales de la reacción alérgica (hipotensión y dificultad para respirar)."
    },
    {
        "question": "¿Qué debes evitar en pacientes en shock con sospecha de lesión medular?",
        "options": [
            {"letter": "a", "text": "Inmovilización."},
            {"letter": "b", "text": "Movimientos bruscos del cuello o columna."},
            {"letter": "c", "text": "Administración de oxígeno."},
            {"letter": "d", "text": "Monitoreo de signos vitales."}
        ],
        "correctAnswer": "b",
        "explanation": "En cualquier paciente traumatizado con sospecha de lesión en la columna vertebral, es fundamental minimizar cualquier movimiento del cuello y la espalda para evitar causar o empeorar un daño neurológico en la médula espinal. La inmovilización espinal es una prioridad."
    },
    {
        "question": "La 'pista' clave en el shock que indica que la 'bomba' (el corazón) está fallando es:",
        "options": [
            {"letter": "a", "text": "Líquido (sangre) insuficiente."},
            {"letter": "b", "text": "Un contenedor (vasos) dilatado."},
            {"letter": "c", "text": "Crepitaciones pulmonares y dificultad para respirar."},
            {"letter": "d", "text": "Pérdida de control del sistema nervioso."}
        ],
        "correctAnswer": "c",
        "explanation": "Cuando el corazón (la bomba) falla, no puede impulsar la sangre hacia adelante de manera efectiva. Esto provoca que la sangre se acumule retrógradamente en los pulmones, causando edema pulmonar, que se ausculta como crepitaciones (estertores)."
    },
    {
        "question": "Si un paciente en shock hipovolémico se mantiene en posición supina con las piernas elevadas, ¿cuál es el objetivo principal de esta posición?",
        "options": [
            {"letter": "a", "text": "Facilitar la respiración."},
            {"letter": "b", "text": "Disminuir el retorno venoso al corazón."},
            {"letter": "c", "text": "Mejorar el flujo sanguíneo hacia los órganos vitales superiores."},
            {"letter": "d", "text": "Prevenir la hipotermia."}
        ],
        "correctAnswer": "c",
        "explanation": "Elevar las piernas (posición de Trendelenburg modificada) utiliza la gravedad para ayudar a que la sangre de las extremidades inferiores regrese a la circulación central. Esto aumenta temporalmente el volumen de sangre disponible para el corazón (precarga), mejorando la perfusión del cerebro y otros órganos vitales."
    },
    {
        "question": "¿Cuál de los siguientes signos vitales sería el más indicativo de un shock descompensado?",
        "options": [
            {"letter": "a", "text": "Frecuencia cardíaca de 90 lpm."},
            {"letter": "b", "text": "Presión arterial de 110/70 mmHg."},
            {"letter": "c", "text": "Pulso rápido y débil con presión arterial en descenso."},
            {"letter": "d", "text": "Piel tibia y seca."}
        ],
        "correctAnswer": "c",
        "explanation": "El shock descompensado ocurre cuando los mecanismos compensatorios del cuerpo fallan. El signo clave de esta transición es la hipotensión (presi��n arterial en descenso), a pesar de que el corazón sigue intentando compensar (pulso rápido)."
    },
    {
        "question": "¿Qué término describe el equilibrio y la estabilidad de todos los sistemas del cuerpo?",
        "options": [
            {"letter": "a", "text": "Hipotermia"},
            {"letter": "b", "text": "Sistema nervioso autónomo"},
            {"letter": "c", "text": "Perfusión"},
            {"letter": "d", "text": "Homeostasis"}
        ],
        "correctAnswer": "d",
        "explanation": "La homeostasis es la capacidad del cuerpo para mantener un ambiente interno estable y constante (como la temperatura, el pH, la presión arterial) a pesar de los cambios en el entorno externo. El shock es un estado de fallo de la homeostasis."
    },
    {
        "question": "Un paciente con shock neurogénico probablemente presentará:",
        "options": [
            {"letter": "a", "text": "Piel fría y sudorosa."},
            {"letter": "b", "text": "Bradicardia y piel caliente y seca por debajo del nivel de la lesión."},
            {"letter": "c", "text": "Taquicardia severa y dificultad respiratoria."},
            {"letter": "d", "text": "Dolor abdominal agudo."}
        ],
        "correctAnswer": "b",
        "explanation": "El shock neurogénico es causado por una lesión en la médula espinal que interrumpe las señales nerviosas simpáticas. Esto provoca una vasodilatación masiva por debajo del nivel de la lesión (piel caliente y seca) y una incapacidad para aumentar la frecuencia cardíaca (bradicardia o frecuencia normal) a pesar de la hipotensión."
    },
    {
        "question": "Durante la evaluación de un paciente en shock, ¿qué signo podría alertar al paramédico de que la condición del paciente está pasando a la siguiente etapa de shock (descompensado o irreversible)?",
        "options": [
            {"letter": "a", "text": "Aumento de la ansiedad."},
            {"letter": "b", "text": "Disminución de la presión arterial sistólica."},
            {"letter": "c", "text": "Piel más caliente y rosada."},
            {"letter": "d", "text": "Mejora del llenado capilar."}
        ],
        "correctAnswer": "b",
        "explanation": "La caída de la presión arterial sistólica es el signo distintivo que marca la transición del shock compensado al descompensado. Indica que los mecanismos del cuerpo para mantener la perfusión (como la taquicardia y la vasoconstricción) ya no son suficientes."
    }
]

export const shockChallengeQuestions: Question[] = [
    {
        question: "Un paciente de 45 años presenta trauma abdominal cerrado tras accidente vehicular. Sus signos vitales iniciales son: PA 110/70, FC 95, FR 20. Después de 20 minutos muestra: PA 95/65, FC 120, piel pálida y fría, tiempo de llenado capilar 4 segundos, pero se mantiene alerta y orientado. ¿Cuál es la interpretación fisiopatológica más crítica de esta evolución?",
        options: [
            {letter: "a", text: "El paciente está estable ya que mantiene presión arterial normal"},
            {
                letter: "b",
                text: "Presenta shock compensado con activación simpática inicial; la progresión de signos indica hemorragia interna continua y riesgo inminente de descompensación"
            },
            {letter: "c", text: "Los cambios son secundarios únicamente al dolor y ansiedad"},
            {letter: "d", text: "La presión arterial normal descarta shock significativo"}
        ],
        correctAnswer: "b",
        explanation: "Esta presentación ejemplifica shock hemorrágico compensado: 1) La respuesta simpática inicial mantiene presión arterial mediante vasoconstricción y taquicardia, 2) Los signos tempranos (taquicardia, vasoconstricción periférica, llenado capilar prolongado) indican pérdida del 15-30% del volumen sanguíneo, 3) La progresión de síntomas sugiere hemorragia continua, 4) El estado mental alerta es típico del shock compensado, pero puede cambiar rápidamente. La ventana de intervención es crítica antes de la descompensación cardiovascular completa."
    },
    {
        question: "Un paciente de 28 años presenta shock séptico con PA 75/40, FC 140, temperatura 39.8°C, y piel caliente y enrojecida. Después de administrar 2 litros de cristaloides, la presión mejora mínimamente a 85/45. ¿Cuál es la consideración fisiopatológica más importante para el manejo subsecuente?",
        options: [
            {letter: "a", text: "Continuar administrando fluidos hasta normalizar la presión arterial"},
            {
                letter: "b",
                text: "El shock séptico involucra vasodilatación masiva refractaria a fluidos; puede requerir vasopresores temprano, y la sobrecarga de fluidos puede causar edema pulmonar"
            },
            {letter: "c", text: "La hipotensión se debe únicamente a deshidratación"},
            {letter: "d", text: "Los antibióticos resolverán inmediatamente el shock"}
        ],
        correctAnswer: "b",
        explanation: "El shock séptico tiene fisiopatología compleja: 1) La vasodilatación masiva por mediadores inflamatorios causa 'shock distributivo', 2) La permeabilidad capilar aumentada resulta en fuga de fluidos al tercer espacio, 3) Los fluidos pueden mejorar parcialmente la precarga, pero no corrigen la vasodilatación fundamental, 4) La administración excesiva puede causar edema pulmonar sin beneficio hemodinámico. El manejo puede requerir vasopresores (norepinefrina) tempranamente para restaurar tono vascular, combinado con antibióticos de amplio espectro."
    },
    {
        question: "Un paciente con IAM inferior desarrolla hipotensión súbita (PA 70/40), bradicardia (45 lpm), pero mantiene piel tibia y perfusión adecuada. Los pulmones están claros y no hay signos de insuficiencia cardíaca. ¿Cuál es el mecanismo de shock más probable y el manejo inicial?",
        options: [
            {letter: "a", text: "Shock cardiogénico por falla de bomba - administrar diuréticos"},
            {
                letter: "b",
                text: "Shock neurogénico por estimulación vagal (reflejo de Bezold-Jarisch); manejo incluye atropina, fluidos, y elevación de miembros inferiores"
            },
            {letter: "c", text: "Shock hipovolémico - requiere fluidos masivos"},
            {letter: "d", text: "Shock obstructivo por taponamiento cardíaco"}
        ],
        correctAnswer: "b",
        explanation: "El IAM inferior (cara diafragmática) puede activar el reflejo de Bezold-Jarisch: 1) Mecanismo: isquemia de receptores mecanosensibles en ventrículo inferior estimula nervio vago, 2) Resulta en bradicardia, hipotensión, y vasodilatación (shock 'neurogénico' de origen cardíaco), 3) La perfusión periférica se mantiene relativamente buena (piel tibia), 4) El manejo incluye: atropina 0.5-1 mg IV para contrarrestar estimulación vagal, fluidos para optimizar precarga, elevación de piernas para mejorar retorno venoso. Diferente del shock cardiogénico verdadero que presenta signos congestivos."
    },
    {
        question: "Una mujer de 32 años presenta anafilaxia severa. Después de epinefrina IM y fluidos IV, su presión mejora de 60/30 a 90/50, pero desarrolla estridor progresivo y dificultad respiratoria severa. ¿Cuál es la consideración fisiopatológica más crítica?",
        options: [
            {letter: "a", text: "El shock está completamente resuelto y solo necesita observación"},
            {
                letter: "b",
                text: "La anafilaxia causa shock distributivo multifásico; el edema laríngeo puede progresar independientemente de la mejora hemodinámica, requiriendo manejo agresivo de vía aérea"
            },
            {letter: "c", text: "La epinefrina ha causado los síntomas respiratorios"},
            {letter: "d", text: "Solo se necesita más epinefrina"}
        ],
        correctAnswer: "b",
        explanation: "La anafilaxia presenta fisiopatología multisistémica: 1) Shock distributivo por vasodilatación masiva y aumento de permeabilidad capilar, 2) Edema de vía aérea por extravasación de fluidos que puede progresar independientemente de la estabilización hemodinámica, 3) La mejoría de presión arterial no garantiza resolución del edema laríngeo, 4) El manejo requiere: epinefrina repetida, corticosteroides, antihistamínicos, preparación para manejo avanzado de vía aérea (intubación temprana o cricotirotomía), monitoreo continuo ya que puede haber reacciones bifásicas."
    },
    {
        question: "Un paciente de 70 años con fibrilación auricular presenta shock súbito con dolor torácico severo y ausencia de pulsos en miembro inferior derecho. PA 80/50, FC 110 (irregular). ¿Cuál es el mecanismo de shock más probable?",
        options: [
            {letter: "a", text: "Shock cardiogénico por IAM"},
            {
                letter: "b",
                text: "Shock obstructivo por embolia pulmonar masiva - la obstrucción del flujo pulmonar causa falla del ventrículo derecho y compromete llenado del ventrículo izquierdo"
            },
            {letter: "c", text: "Shock hipovolémico por hemorragia interna"},
            {letter: "d", text: "Shock séptico por endocarditis"}
        ],
        correctAnswer: "b",
        explanation: "Esta presentación sugiere embolia pulmonar masiva: 1) La fibrilación auricular predispone a formación de trombos, 2) El shock obstructivo ocurre cuando >50% de la circulación pulmonar está obstruida, 3) Fisiopatología: aumento súbito de resistencia pulmonar → falla aguda de ventrículo derecho → desplazamiento del tabique interventricular → compromiso de llenado de ventrículo izquierdo → shock, 4) La ausencia de pulso en miembro inferior sugiere embolia arterial simultánea (émbolos múltiples). El manejo puede requerir trombolíticos o embolectomía urgente."
    },
    {
        question: "Un motociclista presenta fractura pélvica abierta con hemorragia visible y shock clase III. Después de control de hemorragia externa y 2 litros de cristaloides, permanece hipotenso (PA 85/45). ¿Cuál es la consideración más crítica sobre reanimación con fluidos?",
        options: [
            {letter: "a", text: "Continuar fluidos hasta normalizar completamente la presión arterial"},
            {
                letter: "b",
                text: "Aplicar reanimación controlada con hipotensión permisiva (PA sistólica 80-90 mmHg) para evitar dilución de factores de coagulación y re-sangrado por aumento de presión"
            },
            {letter: "c", text: "Cambiar inmediatamente a coloides en lugar de cristaloides"},
            {letter: "d", text: "Suspender todos los fluidos hasta llegar al hospital"}
        ],
        correctAnswer: "b",
        explanation: "El concepto de reanimación con hipotensión permisiva es crucial en trauma hemorrágico: 1) La sobre-reanimación puede causar: dilución de factores de coagulación, disrupción de coágulos formados, hipotermia, acidosis, 2) La 'tríada letal' (acidosis, coagulopatía, hipotermia) aumenta mortalidad, 3) El objetivo es mantener perfusión de órganos vitales (PA sistólica 80-90 mmHg) sin exacerbar sangrado, 4) Principios: transfusión masiva temprana (sangre completa o ratio 1:1:1), control definitivo de sangrado quirúrgico urgente, evitar cristaloides excesivos. Balancear perfusión vs hemostasia."
    },
    {
        question: "Un paciente diabético presenta shock con glucemia de 450 mg/dL, cetosis severa, deshidratación, y respiración de Kussmaul. PA 90/50, FC 130. ¿Cuál es el mecanismo fisiopatológico específico de este tipo de shock?",
        options: [
            {letter: "a", text: "Shock cardiogénico por miocardiopatía diabética"},
            {
                letter: "b",
                text: "Shock hipovolémico por diuresis osmótica masiva, pérdida de electrolitos, y deshidratación severa con compromiso de la contractilidad miocárdica por acidosis"
            },
            {letter: "c", text: "Shock séptico por infección subyacente únicamente"},
            {letter: "d", text: "Shock neurogénico por neuropatía diabética"}
        ],
        correctAnswer: "b",
        explanation: "La cetoacidosis diabética causa shock hipovolémico complejo: 1) Hiperglucemia causa diuresis osmótica masiva con pérdida de agua y electrolitos, 2) La cetogénesis produce acidosis metabólica severa, 3) La acidosis compromete contractilidad miocárdica y respuesta a catecolaminas, 4) La deshidratación puede alcanzar 10-15% del peso corporal. El manejo incluye: reposición cuidadosa de fluidos (evitar edema cerebral), insulina IV, corrección de electrolitos (especialmente potasio), corrección gradual de acidosis. La rehidratación demasiado rápida puede causar edema cerebral fatal."
    },
    {
        question: "Un paciente con trauma espinal cervical alto (C3-C4) presenta PA 80/50, FC 55, piel tibia y seca por debajo de la lesión, pero fría por encima. ¿Cuál es la fisiopatología específica y la consideración de manejo más importante?",
        options: [
            {letter: "a", text: "Shock hipovolémico por hemorragia espinal interna"},
            {
                letter: "b",
                text: "Shock neurogénico por interrupción del control simpático: vasodilatación masiva distal, pérdida de cronotropismo, compromiso respiratorio por parálisis diafragmática"
            },
            {letter: "c", text: "Shock cardiogénico por contusión miocárdica"},
            {letter: "d", text: "La presentación es normal en lesiones espinales"}
        ],
        correctAnswer: "b",
        explanation: "El shock neurogénico por lesión espinal alta presenta fisiopatología única: 1) Interrupción de vías simpáticas descendentes causa vasodilatación masiva distal con 'pooling' venoso, 2) Pérdida de inervación cardíaca simpática impide taquicardia compensatoria (bradicardia paradójica), 3) Lesiones C3-C4 comprometen inervación frénica causando insuficiencia respiratoria, 4) El manejo incluye: fluidos cuidadosos (evitar sobrecarga), vasopresores (norepinefrina), atropina para bradicardia severa, soporte ventilatorio, evitar hipotermia. La combinación de shock + insuficiencia respiratoria es letal sin manejo agresivo."
    },
    {
        question: "Una paciente embarazada de 35 semanas presenta sangrado vaginal masivo y shock. PA 70/40, FC 150, palidez extrema. Al colocarla en posición supina, la hipotensión empeora. ¿Cuál es la consideración obstétrica más crítica?",
        options: [
            {letter: "a", text: "El embarazo no afecta la presentación del shock"},
            {
                letter: "b",
                text: "Síndrome de hipotensión supina por compresión aortocava; el útero grávido comprime vasos principales, agravando el shock hipovolémico. Requiere posición lateral izquierda y manejo agresivo de hemorragia"
            },
            {letter: "c", text: "La hipotensión es normal en el embarazo"},
            {letter: "d", text: "Solo se necesita reposición de fluidos"}
        ],
        correctAnswer: "b",
        explanation: "El shock en embarazadas presenta complejidades adicionales: 1) El útero grávido puede comprimir vena cava inferior y aorta en posición supina, reduciendo retorno venoso y gasto cardíaco, 2) El volumen sanguíneo aumenta 40-50% en embarazo, permitiendo pérdidas mayores antes de mostrar signos, 3) La placenta no tiene autorregulación; el flujo fetal se compromete tempranamente con vasoconstricción materna, 4) El manejo incluye: posición lateral izquierda (desplazamiento uterino), reanimación agresiva, evaluación obstétrica urgente, preparación para cesárea emergente si hay compromiso fetal."
    },
    {
        question: "Un paciente de 85 años presenta shock séptico pero su frecuencia cardíaca es solo 95 lpm a pesar de hipotensión severa (PA 60/35). ¿Cuál es la consideración geriátrica más importante en la respuesta al shock?",
        options: [
            {letter: "a", text: "Los adultos mayores siempre presentan taquicardia en shock"},
            {
                letter: "b",
                text: "Los adultos mayores pueden tener respuesta cronotrópica limitada por: medicamentos (beta-bloqueadores), enfermedad cardíaca, envejecimiento del nódulo SA, requiriendo evaluación diferente del estado de shock"
            },
            {letter: "c", text: "La edad no afecta la respuesta fisiológica al shock"},
            {letter: "d", text: "Solo la presión arterial es importante en adultos mayores"}
        ],
        correctAnswer: "b",
        explanation: "Los adultos mayores presentan respuestas atípicas al shock: 1) Medicamentos comunes (beta-bloqueadores, digoxina) limitan taquicardia compensatoria, 2) La enfermedad del nódulo SA y fibrosis cardíaca relacionada con edad reducen respuesta cronotrópica, 3) La reserva cardiovascular disminuida significa descompensación más rápida, 4) Otros signos (perfusión periférica, estado mental, diuresis) pueden ser más útiles que frecuencia cardíaca, 5) El manejo debe considerar comorbilidades, polifarmacia, y menor tolerancia a fluidos por función cardíaca comprometida."
    }
];
