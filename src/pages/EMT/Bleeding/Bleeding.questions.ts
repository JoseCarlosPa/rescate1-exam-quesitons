import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es la hemorragia?",
        answer: "La hemorragia es la pérdida de sangre, comúnmente llamada sangrado.  Puede ser externa (visible) o interna (oculta dentro del cuerpo).  La hemorragia no controlada es una causa principal de shock (hipoperfusión) después de un trauma. ",
    },
    {
        question: "¿Cómo se clasifica la hemorragia según el tipo de vaso sanguíneo afectado?",
        answer: "Se clasifica en: \n • Hemorragia arterial: Sangre de color rojo brillante que brota en sincronía con el pulso.  \n • Hemorragia venosa: Sangre de color más oscuro que la arterial, con un flujo continuo y más manejable.  \n • Hemorragia capilar: Sangre de color rojo oscuro que rezuma de la herida de forma lenta y constante. ",
    },
    {
        question: "¿Cuál es el método principal y más efectivo para controlar una hemorragia externa?",
        answer: "La aplicación de presión directa sobre el sitio del sangrado con un apósito estéril es el método más efectivo.  Si el sangrado no se detiene, se debe aplicar un apósito compresivo. ",
    },
    {
        question: "¿Cuándo se debe utilizar un torniquete?",
        answer: "Se debe usar un torniquete si la presión directa no es efectiva para controlar una hemorragia severa en una extremidad,  o si la herida se encuentra en un lugar donde la presión directa no es práctica. ",
    },
    {
        question: "¿Qué signos y síntomas sugieren una hemorragia interna?",
        answer: "Los signos incluyen dolor, sensibilidad o inflamación en el área de la lesión.  Los signos de shock hipovolémico son clave: ansiedad, inquietud, piel pálida, fría y pegajosa, taquicardia, y en etapas tardías, hipotensión.  También pueden presentarse hematomas, abdomen distendido, vómito con sangre (hematemesis) o heces negras (melena). ",
    },
    {
        question: "¿Qué es el shock hipovolémico?",
        answer: "Es una condición que resulta de un bajo volumen sanguíneo, ya sea por una hemorragia masiva (interna o externa) o por una pérdida significativa de otros fluidos corporales.  Esto lleva a una perfusión inadecuada, donde el sistema circulatorio no logra suministrar suficiente sangre a los tejidos para mantener las funciones celulares normales. ",
    },
    {
        question: "¿Qué se debe hacer tras colocar un torniquete?",
        answer: "Se debe asegurar que esté lo suficientemente apretado para detener el sangrado y el pulso distal.  Es crucial registrar la hora exacta de la aplicación en una cinta y pegarla en la frente del paciente.  El torniquete no debe aflojarse ni retirarse fuera del hospital. ",
    },
    {
        question: "¿Qué es un agente hemostático?",
        answer: "Es un compuesto químico, usualmente en forma de polvo o gasa impregnada, que ayuda a detener la hemorragia al acelerar la formación de coágulos.  Se usa cuando la presión directa no es suficiente y no es posible colocar un torniquete. ",
    },
];


export const hemorragiasQuestions: Question[] = [
    {
        "question": "Un paciente presenta una herida en el antebrazo con sangrado de color rojo oscuro que fluye de manera constante. ¿Qué tipo de hemorragia es más probable?",
        "options": [
            {"letter": "a", "text": "Capilar"},
            {"letter": "b", "text": "Venosa"},
            {"letter": "c", "text": "Arterial"},
            {"letter": "d", "text": "Mixta"}
        ],
        "correctAnswer": "b",
        "explanation": "La sangre venosa es de color rojo oscuro porque está desoxigenada y fluye de manera constante y uniforme, ya que está bajo menor presión que la sangre arterial. La sangre arterial es de color rojo brillante y brota a borbotones, mientras que la capilar es un rezumo lento."
    },
    {
        "question": "Según el protocolo de control de hemorragia externa, si la presión directa no detiene un sangrado severo en una extremidad, ¿cuál es el siguiente paso inmediato a seguir?",
        "options": [
            {"letter": "a", "text": "Elevar la extremidad por encima del corazón"},
            {"letter": "b", "text": "Aplicar un agente hemostático"},
            {"letter": "c", "text": "Aplicar un torniquete proximal a la herida"},
            {"letter": "d", "text": "Aplicar más apósitos sobre el actual"}
        ],
        "correctAnswer": "c",
        "explanation": "Para hemorragias graves en extremidades que no se controlan con presión directa, la directriz actual (basada en protocolos como 'Stop the Bleed') es la aplicación inmediata de un torniquete. Se coloca entre 5 y 7 cm por encima de la herida para ocluir el flujo arterial y detener el sangrado de manera efectiva."
    },
    {
        "question": "Un paciente adulto de 79 kg sufre una herida y pierde aproximadamente 1.5 litros de sangre. ¿Qué condición es más probable que desarrolle?",
        "options": [
            {"letter": "a", "text": "Una respuesta compensatoria sin síntomas graves"},
            {"letter": "b", "text": "Shock hipovolémico"},
            {"letter": "c", "text": "Hemofilia aguda"},
            {"letter": "d", "text": "Hipertensión reactiva"}
        ],
        "correctAnswer": "b",
        "explanation": "Un adulto tiene aproximadamente 70 ml de sangre por kg. Un hombre de 79 kg tiene alrededor de 5.5 litros de sangre. La pérdida de 1.5 litros representa casi el 30% de su volumen sanguíneo total, lo que corresponde a un shock hipovolémico de clase III, una emergencia que amenaza la vida."
    },
    {
        "question": "¿Cuál de los siguientes grupos de signos y síntomas es más indicativo de una posible hemorragia interna en un paciente que sufrió un traumatismo contuso en el abdomen?",
        "options": [
            {"letter": "a", "text": "Piel enrojecida y caliente, pulso lento"},
            {"letter": "b", "text": "Aumento de la presión arterial y dolor de cabeza"},
            {"letter": "c", "text": "Dolor, abdomen distendido y signos de shock"},
            {"letter": "d", "text": "Fiebre y vómitos sin sangre"}
        ],
        "correctAnswer": "c",
        "explanation": "La hemorragia interna en el abdomen provoca dolor y la acumulación de sangre causa distensión. Sistémicamente, la pérdida de volumen sanguíneo desencadena los signos clásicos de shock: taquicardia, hipotensión, piel pálida, fría y pegajosa, y alteración del estado mental."
    },
    {
        "question": "Al aplicar un torniquete comercial, ¿hasta qué punto se debe apretar?",
        "options": [
            {"letter": "a", "text": "Hasta que el paciente refiera que el dolor disminuye"},
            {"letter": "b", "text": "Hasta que el sangrado se detenga o el pulso distal ya no sea palpable"},
            {"letter": "c", "text": "Hasta que el color de la extremidad se vuelva pálido"},
            {"letter": "d", "text": "Apretando solo lo suficiente para reducir el flujo, pero sin detenerlo"}
        ],
        "correctAnswer": "b",
        "explanation": "El objetivo de un torniquete es ocluir completamente el flujo de sangre arterial a la herida. El punto final para apretarlo es cuando el sangrado activo se detiene y/o el pulso distal (ej. radial o pedio) ya no es palpable. Apretarlo insuficientemente puede empeorar el sangrado venoso."
    },
    {
        "question": "Un niño de 1 año tiene un volumen sanguíneo total de aproximadamente 800 mL. ¿Qué cantidad de pérdida de sangre se consideraría suficiente para mostrar signos significativos de shock?",
        "options": [
            {"letter": "a", "text": "50 mL"},
            {"letter": "b", "text": "150 mL"},
            {"letter": "c", "text": "400 mL"},
            {"letter": "d", "text": "500 mL"}
        ],
        "correctAnswer": "b",
        "explanation": "Los niños tienen un volumen sanguíneo mucho menor que los adultos. Una pérdida de 150 mL en un niño con un volumen total de 800 mL representa casi el 20% de su sangre. Esta cantidad es suficiente para sobrepasar sus mecanismos de compensación y provocar signos evidentes de shock."
    },
    {
        "question": "Un paciente con epistaxis (sangrado nasal) debe ser manejado inicialmente con la siguiente técnica:",
        "options": [
            {"letter": "a", "text": "Inclinar la cabeza hacia atrás y aplicar presión"},
            {
                "letter": "b",
                "text": "Pinzar la parte carnosa de los orificios nasales e inclinar al paciente hacia adelante"
            },
            {"letter": "c", "text": "Introducir gasa en ambas fosas nasales tan profundo como sea posible"},
            {"letter": "d", "text": "Aplicar calor en el puente de la nariz"}
        ],
        "correctAnswer": "b",
        "explanation": "Inclinar la cabeza hacia adelante evita que la sangre sea deglutida, lo que puede causar náuseas e irritación gástrica. Pinzar la parte blanda de la nariz aplica presión directa sobre el plexo de Kiesselbach, el origen de la mayoría de las hemorragias nasales anteriores."
    },
    {
        "question": "Si un paciente con una fractura de cráneo presenta sangrado por un oído, la acción correcta es:",
        "options": [
            {"letter": "a", "text": "Taponar el oído firmemente para detener el flujo sanguíneo"},
            {"letter": "b", "text": "Cubrir holgadamente el oído con un apósito estéril para recolectar el drenaje"},
            {"letter": "c", "text": "Lavar el canal auditivo con solución salina estéril"},
            {"letter": "d", "text": "Aplicar presión directa sobre el hueso mastoideo detrás de la oreja"}
        ],
        "correctAnswer": "b",
        "explanation": "El sangrado por el oído después de un traumatismo craneoencefálico puede indicar una fractura de la base del cráneo y una posible fuga de líquido cefalorraquídeo (LCR). Taponar el oído podría aumentar la presión intracraneal. Lo correcto es colocar un apósito suelto para absorber el drenaje y minimizar el riesgo de infección."
    },
    {
        "question": "El primer signo de shock hipovolémico en un paciente traumatizado suele ser:",
        "options": [
            {"letter": "a", "text": "Disminución de la presión arterial"},
            {"letter": "b", "text": "Pérdida de la conciencia"},
            {"letter": "c", "text": "Ansiedad, inquietud o combatividad"},
            {"letter": "d", "text": "Ausencia de pulso radial"}
        ],
        "correctAnswer": "c",
        "explanation": "En las etapas iniciales del shock (fase compensada), el cuerpo libera catecolaminas (adrenalina) para mantener la perfusión. Esto se manifiesta como ansiedad, inquietud y taquicardia. La hipotensión (disminución de la presión arterial) es un signo más tardío, que indica que los mecanismos de compensación están empezando a fallar."
    },
    {
        "question": "La principal razón para inmovilizar una fractura de fémur en el contexto de una hemorragia es:",
        "options": [
            {"letter": "a", "text": "Prevenir una embolia grasa"},
            {"letter": "b", "text": "Asegurar que el paciente pueda caminar después"},
            {
                "letter": "c",
                "text": "Reducir el movimiento de los extremos del hueso para evitar más daño vascular y sangrado"
            },
            {"letter": "d", "text": "Facilitar el transporte del paciente únicamente"}
        ],
        "correctAnswer": "c",
        "explanation": "Una fractura de fémur puede causar una hemorragia interna significativa (hasta 1.5 litros). Los extremos afilados del hueso roto pueden lacerar músculos y vasos sanguíneos circundantes, incluyendo la arteria femoral. La inmovilización (con una férula de tracción) estabiliza la fractura, reduce el dolor y, lo más importante, minimiza el movimiento para prevenir más lesiones y controlar el sangrado interno."
    },
    {
        "question": "Un paciente toma anticoagulantes (p. ej., warfarina) y sufre una laceración. ¿Qué debe anticipar el proveedor de atención prehospitalaria?",
        "options": [
            {"letter": "a", "text": "La hemorragia será más fácil de controlar de lo normal"},
            {"letter": "b", "text": "El paciente desarrollará una reacción alérgica al vendaje"},
            {"letter": "c", "text": "La hemorragia puede ser más profusa y difícil de controlar"},
            {"letter": "d", "text": "La presión arterial del paciente aumentará drásticamente"}
        ],
        "correctAnswer": "c",
        "explanation": "Los medicamentos anticoagulantes interfieren con el proceso normal de coagulación de la sangre. Por lo tanto, cualquier herida en un paciente que los toma puede resultar en un sangrado más prolongado y severo de lo esperado, requiriendo un manejo más agresivo para su control."
    },
    {
        "question": "Si un apósito se empapa completamente de sangre, la acción correcta es:",
        "options": [
            {"letter": "a", "text": "Retirar el apósito y reemplazarlo por uno nuevo y limpio"},
            {"letter": "b", "text": "Aplicar un torniquete inmediatamente"},
            {"letter": "c", "text": "No retirar el apósito y aplicar uno nuevo encima, reforzando la presión"},
            {"letter": "d", "text": "Irrigar la herida con agua para limpiarla antes de aplicar otro"}
        ],
        "correctAnswer": "c",
        "explanation": "Retirar el primer apósito podría remover el coágulo que se está empezando a formar, reiniciando el sangrado. La técnica correcta es dejar el apósito inicial en su lugar y aplicar apósitos adicionales encima, manteniendo o aumentando la presión directa sobre la herida."
    }
]

export const hemorragiasChallengeQuestions: Question[] = [
    {
        "question": "Un hombre de 34 años sufre una herida por arma blanca en el muslo. A su llegada, usted encuentra sangrado activo de color rojo brillante que brota de forma pulsátil. El paciente está alerta, PA 118/76, FC 92, y le dice que 'se siente bien'. Aplica presión directa durante dos minutos sin éxito y decide colocar un torniquete. Un compañero le sugiere esperar porque 'los signos vitales están normales'. ¿Cuál es la justificación fisiológica más correcta para no esperar y proceder con el torniquete de inmediato?",
        "options": [
            {"letter": "a", "text": "Los signos vitales normales confirman que no hay riesgo de shock, pero el torniquete se coloca de todas formas por protocolo"},
            {
                "letter": "b",
                "text": "El shock hemorrágico temprano es compensado: la vasoconstricción periférica y la taquicardia leve mantienen la presión arterial dentro de rango normal a pesar de una pérdida sanguínea significativa, por lo que signos vitales normales no excluyen una hemorragia arterial que amenaza la vida y que ya falló al tratamiento con presión directa"
            },
            {"letter": "c", "text": "Debe esperar porque los torniquetes solo están indicados cuando el paciente ya presenta hipotensión franca"},
            {"letter": "d", "text": "La presión directa nunca falla en hemorragias arteriales de muslo, por lo que se debe reintentar antes de escalar"}
        ],
        "correctAnswer": "b",
        "explanation": "En las etapas iniciales del shock hemorrágico (shock compensado, hasta aproximadamente 15-30% de pérdida de volumen sanguíneo), los mecanismos neurohormonales —liberación de catecolaminas, vasoconstricción periférica selectiva y aumento de la frecuencia cardíaca— logran mantener la presión arterial sistólica dentro de rangos aparentemente normales al redirigir el flujo sanguíneo hacia órganos vitales (cerebro, corazón). Esto significa que la presión arterial es un indicador tardío y poco sensible de hemorragia significativa; el paciente puede colapsar súbitamente (shock descompensado) una vez que se agotan estas reservas compensatorias. Dado que ya existe una hemorragia arterial identificada que no respondió a presión directa, el criterio correcto no es esperar a que aparezcan signos vitales anormales, sino controlar la fuente del sangrado de inmediato mediante torniquete, ya que retrasar la intervención basándose en signos vitales normales puede permitir que la pérdida de sangre continúe hasta el punto de descompensación súbita."
    },
    {
        "question": "Durante el manejo de una hemorragia masiva en la unión de la ingle (zona no compresible con torniquete convencional) en un paciente con trauma penetrante, usted aplica un agente hemostático en gasa impregnada junto con presión directa sostenida durante tres minutos. El sangrado disminuye pero no se detiene por completo. ¿Cuál es la acción MÁS apropiada según el razonamiento fisiopatológico del uso de hemostáticos?",
        "options": [
            {"letter": "a", "text": "Retirar la gasa hemostática, limpiar la herida e intentar con una gasa nueva desde cero"},
            {
                "letter": "b",
                "text": "Mantener la gasa hemostática en su lugar, reempacar la herida con gasa adicional si es necesario y continuar aplicando presión directa firme y sostenida, ya que estos agentes requieren presión mecánica constante para activar y concentrar los factores de coagulación en el sitio de la lesión"
            },
            {"letter": "c", "text": "Suspender el uso del agente hemostático porque su falla en 3 minutos indica que está contraindicado en heridas de la unión"},
            {"letter": "d", "text": "Irrigar la herida con solución salina para diluir el agente y favorecer su distribución"}
        ],
        "correctAnswer": "b",
        "explanation": "Los agentes hemostáticos modernos (como los que contienen caolín o quitosano) no forman un coágulo instantáneo por sí solos; funcionan concentrando y acelerando la cascada de coagulación local, pero requieren presión mecánica directa y sostenida (generalmente 3 minutos o más) para que el coágulo se estabilice y se adhiera al tejido lesionado, especialmente en heridas de la unión (ingle, axila, cuello) donde no puede aplicarse un torniquete de extremidad. Retirar la gasa prematuramente interrumpe el coágulo en formación y reinicia el sangrado. Irrigar con solución salina diluiría el agente activo y sus factores procoagulantes, siendo contraproducente. La conducta correcta es reempacar la herida manteniendo la gasa original, aplicar más gasa hemostática si es necesario y sostener presión directa continua, reevaluando cada pocos minutos antes de concluir que la técnica ha fallado."
    },
    {
        "question": "Un paciente de 58 años sufre un traumatismo cerrado de abdomen tras una colisión vehicular. Al examen inicial está alerta, orientado, PA 132/84, FC 88, sin dolor abdominal significativo a la palpación superficial. Usted decide no transportarlo con prioridad alta. Diez minutos después, durante el transporte, el paciente se torna ansioso, taquicárdico (FC 128) e hipotenso (PA 84/50), con abdomen ahora distendido y rígido. ¿Qué explica MEJOR esta evolución y qué debió haber alertado sobre el riesgo desde el inicio?",
        "options": [
            {"letter": "a", "text": "El paciente sufrió una crisis de ansiedad no relacionada al trauma; la exploración inicial normal descarta lesión intraabdominal"},
            {
                "letter": "b",
                "text": "El mecanismo de trauma cerrado de alta energía por sí solo debió generar alta sospecha de hemorragia intraabdominal oculta, independientemente de la exploración física inicial normal, ya que la sangre libre en cavidad peritoneal puede acumularse silenciosamente antes de que la distensión, el dolor o el shock se hagan clínicamente evidentes"
            },
            {"letter": "c", "text": "La hipotensión tardía se debe únicamente al dolor y la ansiedad del transporte, no a pérdida de volumen"},
            {"letter": "d", "text": "El deterioro indica una lesión de la médula espinal que apareció de forma retardada"}
        ],
        "correctAnswer": "b",
        "explanation": "La hemorragia intraabdominal tras trauma cerrado (por ejemplo, laceración esplénica o hepática) puede ser clínicamente silente en su fase temprana porque la cavidad peritoneal puede acomodar un volumen considerable de sangre antes de que la distensión sea palpable, y porque el shock compensado enmascara los signos vitales durante los primeros minutos. El mecanismo de lesión (colisión de alta energía) es, por sí solo, un criterio suficiente para sospechar lesión de órgano sólido y hemorragia interna, incluso con una exploración física inicial tranquilizadora, ya que esta exploración no tiene sensibilidad suficiente para excluir sangrado activo en curso. La reevaluación continua de signos vitales durante el transporte es esencial precisamente porque estos pacientes pueden progresar rápidamente de shock compensado a descompensado a medida que se agota el volumen circulante efectivo."
    },
    {
        "question": "Un paciente politraumatizado permanece expuesto al ambiente frío durante una extracción prolongada, con hemorragia externa e interna significativa. Al llegar al hospital presenta temperatura corporal de 34.5°C, acidosis metabólica en gasometría y sangrado difuso en los sitios de punción venosa, sin que exista una lesión vascular adicional que lo explique. ¿Qué proceso fisiopatológico explica este patrón de sangrado difuso y por qué es tan importante prevenirlo desde la atención prehospitalaria?",
        "options": [
            {"letter": "a", "text": "El paciente desarrolló una reacción alérgica a los líquidos IV administrados"},
            {
                "letter": "b",
                "text": "El paciente entró en el 'triángulo letal' del trauma: la hipotermia altera la función enzimática de los factores de coagulación y la agregación plaquetaria, la acidosis metabólica (por hipoperfusión e hipoxia tisular) inhibe aún más la cascada de coagulación, y esta coagulopatía resultante perpetúa la hemorragia, creando un ciclo que se autoalimenta y que debe romperse manteniendo al paciente caliente y minimizando el tiempo en la escena"
            },
            {"letter": "c", "text": "Es un efecto esperado y benigno de la hipotermia terapéutica que no requiere intervención"},
            {"letter": "d", "text": "El sangrado se debe exclusivamente a la técnica de punción venosa, sin relación con la temperatura corporal"}
        ],
        "correctAnswer": "b",
        "explanation": "El 'triángulo letal' o 'tríada mortal' del trauma describe la interacción sinérgica entre hipotermia, acidosis y coagulopatía, cada una empeorando a las otras dos. La hipotermia (temperatura menor a 35°C) reduce la actividad de las enzimas de la cascada de coagulación y altera la función plaquetaria, disminuyendo la capacidad de formar coágulos estables. La acidosis metabólica, producto de la hipoperfusión tisular y el metabolismo anaeróbico, inhibe adicionalmente la actividad de los factores de coagulación e interfiere con la contractilidad cardíaca. Esta coagulopatía resultante empeora la hemorragia, lo que a su vez agrava el shock, la hipoperfusión y por tanto la acidosis y la pérdida de calor, generando un círculo vicioso frecuentemente mortal. La prevención prehospitalaria se centra en minimizar la exposición al frío, cubrir al paciente con mantas térmicas, limitar los líquidos IV fríos en exceso y reducir el tiempo en la escena para permitir control quirúrgico definitivo temprano."
    },
    {
        "question": "Una mujer de 81 años con fibrilación auricular en tratamiento con warfarina sufre una caída y presenta un hematoma en expansión en el cuero cabelludo tras golpearse la cabeza. Está alerta pero refiere cefalea leve; GCS 15, pupilas isocóricas y reactivas. ¿Cuál es la consideración clínica MÁS importante que debe guiar el manejo y la decisión de transporte de esta paciente, más allá del hematoma visible?",
        "options": [
            {"letter": "a", "text": "Como el GCS es 15 y no hay déficit neurológico evidente, la paciente puede ser dada de alta en el lugar tras observación breve"},
            {
                "letter": "b",
                "text": "La anticoagulación con warfarina inhibe la síntesis de factores de coagulación dependientes de vitamina K (II, VII, IX y X), lo que aumenta significativamente el riesgo de una hemorragia intracraneal oculta y de expansión lenta, incluso con un examen neurológico inicial normal; por ello debe transportarse con prioridad alta y reevaluación neurológica continua"
            },
            {"letter": "c", "text": "La warfarina no afecta el riesgo de hemorragia intracraneal, solo el sangrado de tejidos blandos superficiales"},
            {"letter": "d", "text": "Debe administrarse vitamina K en el campo antes de considerar el transporte"}
        ],
        "correctAnswer": "b",
        "explanation": "La warfarina es un antagonista de la vitamina K que inhibe la síntesis hepática de los factores de coagulación II, VII, IX y X, prolongando el tiempo de protrombina y aumentando de forma marcada el riesgo de hemorragia, incluyendo hemorragia intracraneal, ante cualquier trauma craneal, incluso aparentemente menor. En pacientes anticoagulados, un examen neurológico inicial normal (GCS 15, pupilas normales) no descarta una hemorragia intracraneal en evolución, ya que el efecto de masa y el deterioro neurológico pueden desarrollarse de forma retardada a medida que el hematoma se expande lentamente por la coagulación deficiente. Por esta razón, todo paciente anticoagulado con trauma craneal, sin importar la aparente benignidad inicial, debe considerarse de alto riesgo, transportarse con prioridad y reevaluarse neurológicamente de forma continua, ya que el manejo definitivo (posible reversión de la anticoagulación e imagenología) solo puede realizarse en el hospital."
    },
    {
        "question": "Un paciente con trauma múltiple recibe grandes volúmenes de cristaloides IV en el campo para tratar hipotensión secundaria a hemorragia no controlada. Al llegar al hospital, sus estudios de coagulación muestran tiempos prolongados y su hematocrito ha caído más de lo esperado para la pérdida de sangre estimada. ¿Qué mecanismo explica este empeoramiento de la coagulopatía asociado a la reanimación agresiva con cristaloides, y cuál es el enfoque prehospitalario moderno para evitarlo?",
        "options": [
            {"letter": "a", "text": "Los cristaloides no tienen ningún efecto sobre la coagulación; el hallazgo se debe únicamente a la hemorragia original"},
            {
                "letter": "b",
                "text": "La infusión masiva de cristaloides diluye los factores de coagulación y las plaquetas circulantes (coagulopatía dilucional), y además puede aumentar la presión arterial lo suficiente para desalojar coágulos ya formados ('pop the clot'); el enfoque moderno favorece la reanimación con hipotensión permisiva y volúmenes limitados de cristaloides hasta lograr el control definitivo de la hemorragia"
            },
            {"letter": "c", "text": "Los cristaloides deben administrarse en volúmenes ilimitados hasta normalizar completamente la presión arterial antes del control quirúrgico"},
            {"letter": "d", "text": "El hallazgo se debe a una reacción transfusional, ya que los cristaloides contienen proteínas plasmáticas"}
        ],
        "correctAnswer": "b",
        "explanation": "La administración agresiva de grandes volúmenes de cristaloides en el paciente con hemorragia no controlada produce una coagulopatía dilucional al reducir la concentración relativa de factores de coagulación, plaquetas y fibrinógeno en el volumen circulante, además de causar hipotermia iatrogénica si los líquidos no están calentados, lo que agrava aún más la coagulopatía (ver triángulo letal). Adicionalmente, elevar artificialmente la presión arterial mediante fluidos antes de lograr el control quirúrgico de la hemorragia puede desalojar coágulos que se están formando en el sitio de la lesión ('pop the clot'), reiniciando o empeorando el sangrado. Por estas razones, el enfoque prehospitalario moderno favorece la reanimación con hipotensión permisiva —administrando el volumen mínimo de cristaloides necesario para mantener una perfusión cerebral adecuada (por ejemplo, un estado mental aceptable o una presión sistólica objetivo modesta) sin normalizar completamente la presión arterial— priorizando el transporte rápido hacia el control definitivo de la hemorragia sobre la reanimación completa en el campo."
    }
]
