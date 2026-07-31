import {Question} from "../../../question";


export const faqData = [
    {
        question: "¿Qué es el 'mecanismo de lesión' (ML) y el 'índice de sospecha'?",
        answer: "El Mecanismo de Lesión describe las fuerzas que actuaron sobre el cuerpo para causar una lesión. El Índice de Sospecha es la conciencia y preocupación del paramédico por la existencia de lesiones potencialmente graves y no visibles, basándose en la evaluación del ML.",
    },
    {
        question: "¿Cuál es la diferencia entre un traumatismo cerrado y uno penetrante?",
        answer: "Un traumatismo cerrado es una lesión por impacto que no rompe la piel, como en un choque de auto o una caída. Un traumatismo penetrante es una lesión que perfora la piel y daña los tejidos subyacentes, como una herida por cuchillo o bala.",
    },
    {
        question: "Según la física del trauma, ¿qué factor es más importante en la gravedad de una lesión: la masa o la velocidad?",
        answer: "La velocidad es mucho más importante. La energía cinética, que es la energía de un objeto en movimiento, se calcula como ½ de la masa por la velocidad al cuadrado ($$E_c = \\frac{1}{2}mv^2$$). Esto significa que al duplicar la velocidad, la energía (y el potencial de daño) se cuadruplica.",
    },
    {
        question: "Describa las 'tres colisiones' que ocurren en un accidente automovilístico.",
        answer: "1. La colisión del vehículo contra otro objeto. \n2. La colisión del ocupante contra el interior del vehículo. \n3. La colisión de los órganos internos del ocupante contra las estructuras sólidas del cuerpo (huesos, cráneo).",
    },
    {
        question: "¿Cuáles son los cuatro tipos de lesiones por explosión?",
        answer: "• Lesión primaria: Causada por la onda expansiva de la explosión (daña órganos llenos de aire). \n• Lesión secundaria: Causada por fragmentos y escombros que vuelan. \n• Lesión terciaria: Causada cuando la persona es arrojada por la fuerza de la explosión. \n• Lesión cuaternaria: Otras lesiones (quemaduras, inhalación de tóxicos, etc.).",
    },
    {
        question: "¿Qué es el 'Período Dorado' (Golden Hour) en el manejo del trauma?",
        answer: "Es el período de tiempo después de una lesión traumática durante el cual existe la mayor probabilidad de que el tratamiento médico y quirúrgico rápido prevenga la muerte. Aunque no son exactamente 60 minutos, enfatiza la necesidad de un transporte rápido al centro adecuado.",
    },
    {
        question: "¿Qué es la cavitación en el contexto de un traumatismo penetrante?",
        answer: "La cavitación es el daño causado por la onda de presión que se forma alrededor de un proyectil de mediana o alta velocidad a medida que atraviesa el cuerpo. Esta onda expansiva puede dañar tejidos que no están en el camino directo del proyectil.",
    },
    {
        question: "¿Cuáles son algunos criterios para considerar el transporte rápido a un centro de trauma?",
        answer: "Los criterios se basan en la fisiología (hipotensión, GCS < 14), la anatomía de la lesión (heridas penetrantes en torso, tórax inestable) y el mecanismo de lesión (caída de gran altura, eyección del vehículo, muerte de otro ocupante en el mismo vehículo).",
    },
];


export const traumaGeneralQuestions: Question[] = [
    {
        "question": "Un conductor que no llevaba cinturón de seguridad sufre una colisión frontal. Golpea el volante con el pecho. Siguiendo el concepto de las 'tres colisiones', la lesión del corazón contra el esternón sería la colisión de tipo:",
        "options": [
            {"letter": "a", "text": "Primera"},
            {"letter": "b", "text": "Segunda"},
            {"letter": "c", "text": "Tercera"},
            {"letter": "d", "text": "Cuarta"}
        ],
        "correctAnswer": "c",
        "explanation": "La cinemática del trauma describe tres colisiones: 1) La colisión del vehículo contra otro objeto. 2) La colisión del ocupante contra el interior del vehículo (ej. pecho contra el volante). 3) La colisión de los órganos internos contra las paredes del cuerpo (ej. corazón y pulmones contra el esternón y las costillas). Esta tercera colisión es la que a menudo causa las lesiones internas más graves."
    },
    {
        "question": "Un paciente que fue arrojado contra una pared por la fuerza de una explosión cercana sufre una fractura de fémur. Este tipo de lesión se clasifica como:",
        "options": [
            {"letter": "a", "text": "Lesión primaria por explosión"},
            {"letter": "b", "text": "Lesión secundaria por explosión"},
            {"letter": "c", "text": "Lesión terciaria por explosión"},
            {"letter": "d", "text": "Lesión cuaternaria por explosión"}
        ],
        "correctAnswer": "c",
        "explanation": "Las lesiones por explosión se clasifican así: Primaria (onda de presión), Secundaria (fragmentos o proyectiles), Terciaria (el cuerpo es arrojado contra un objeto). La fractura por el impacto del cuerpo contra la pared es un ejemplo clásico de lesión terciaria. Las cuaternarias son otras lesiones relacionadas (quemaduras, inhalación, etc.)."
    },
    {
        "question": "¿Cuál de los siguientes pacientes cumple con los criterios de mecanismo de lesión para ser transportado a un centro de trauma?",
        "options": [
            {"letter": "a", "text": "Un peatón golpeado por un coche a baja velocidad con una abrasión en la rodilla"},
            {"letter": "b", "text": "Un adulto que se cayó desde una altura de 7 metros (aprox. 23 pies)"},
            {"letter": "c", "text": "Un motociclista que derrapó a baja velocidad y tiene un esguince de tobillo"},
            {"letter": "d", "text": "Un pasajero en una colisión menor sin quejas de dolor"}
        ],
        "correctAnswer": "b",
        "explanation": "Según las guías de triage de trauma, una caída de más de 6 metros (20 pies) para un adulto es un mecanismo de lesión significativo que justifica el transporte a un centro de trauma designado. Esta altura genera suficiente energía para causar lesiones internas graves, incluso si no son evidentes al principio."
    },
    {
        "question": "En un choque lateral (impacto en 'T'), el conductor tiene un alto índice de sospecha para lesiones en:",
        "options": [
            {"letter": "a", "text": "La columna cervical por hiperextensión"},
            {"letter": "b", "text": "Las extremidades inferiores por el 'mecanismo de bolsa de papel'"},
            {"letter": "c", "text": "El lado del cuerpo que recibió el impacto, incluyendo cuello, tórax y pelvis"},
            {"letter": "d", "text": "El cráneo por golpear el parabrisas"}
        ],
        "correctAnswer": "c",
        "explanation": "En un impacto lateral, el cuerpo se desplaza violentamente hacia el lado del impacto. Esto crea un alto riesgo de lesiones por compresión y cizallamiento en el lado afectado, incluyendo la columna cervical lateral, clavícula, costillas, pulmones, bazo (lado izquierdo), hígado (lado derecho) y pelvis."
    },
    {
        "question": "La principal diferencia en el potencial de lesión entre una herida por cuchillo y una herida por un rifle de alta velocidad es:",
        "options": [
            {"letter": "a", "text": "El riesgo de infección"},
            {"letter": "b", "text": "La presencia de una herida de entrada y salida"},
            {"letter": "c", "text": "El daño adicional causado por la cavitación del proyectil de alta velocidad"},
            {"letter": "d", "text": "La probabilidad de que el objeto se quede alojado"}
        ],
        "correctAnswer": "c",
        "explanation": "Un proyectil de alta velocidad transfiere una enorme cantidad de energía cinética a los tejidos, creando una cavidad temporal mucho más grande que el propio proyectil. Este estiramiento y compresión (cavitación) daña vasos sanguíneos, nervios y órganos que no están en la trayectoria directa de la bala, a diferencia de un cuchillo que solo daña el tejido que corta directamente."
    },
    {
        "question": "Un paciente es apuñalado en el abdomen con un picahielo. ¿Cuál es su principal preocupación con respecto a esta herida?",
        "options": [
            {"letter": "a", "text": "La hemorragia externa suele ser masiva"},
            {
                "letter": "b",
                "text": "El daño interno puede ser mucho mayor de lo que sugiere la pequeña herida externa"
            },
            {"letter": "c", "text": "El riesgo de tétanos es extremadamente alto"},
            {"letter": "d", "text": "Este tipo de herida siempre causa evisceración"}
        ],
        "correctAnswer": "b",
        "explanation": "En heridas penetrantes por objetos delgados como un picahielo o estilete, la herida externa puede ser muy pequeña y engañosa. Sin embargo, el objeto puede haber penetrado profundamente, lesionando órganos vitales y vasos sanguíneos importantes. Siempre se debe mantener un alto índice de sospecha de lesión interna grave."
    },
    {
        "question": "La ruptura del tímpano por la onda de presión de una explosión es un ejemplo de una lesión:",
        "options": [
            {"letter": "a", "text": "Primaria"},
            {"letter": "b", "text": "Secundaria"},
            {"letter": "c", "text": "Terciaria"},
            {"letter": "d", "text": "Cuaternaria"}
        ],
        "correctAnswer": "a",
        "explanation": "La lesión primaria por explosión es causada directamente por la onda expansiva de sobrepresión. Los órganos que contienen aire, como los oídos (membrana timpánica), los pulmones y el tracto gastrointestinal, son los más susceptibles a este tipo de daño por la diferencia de presión."
    },
    {
        "question": "Al evaluar la escena de una caída, ¿qué factor es MENOS importante para predecir la gravedad de las lesiones?",
        "options": [
            {"letter": "a", "text": "La altura desde la que cayó el paciente"},
            {"letter": "b", "text": "La hora del día en que ocurrió la caída"},
            {"letter": "c", "text": "La parte del cuerpo que impactó primero"},
            {"letter": "d", "text": "El tipo de superficie sobre la que aterrizó el paciente"}
        ],
        "correctAnswer": "b",
        "explanation": "La altura, la parte del cuerpo que impacta y la superficie de aterrizaje son factores críticos que determinan la cantidad de energía transferida y el tipo de lesiones. La hora del día en que ocurre la caída es irrelevante desde el punto de vista de la física y la cinemática del trauma."
    },
    {
        "question": "El concepto de 'índice de sospecha' es más útil para el paramédico porque:",
        "options": [
            {"letter": "a", "text": "Permite diagnosticar fracturas sin necesidad de rayos X"},
            {"letter": "b", "text": "Ayuda a anticipar y buscar lesiones que no son inmediatamente obvias"},
            {"letter": "c", "text": "Determina la culpabilidad en un accidente automovilístico"},
            {"letter": "d", "text": "Justifica no realizar una evaluación completa si el mecanismo es leve"}
        ],
        "correctAnswer": "b",
        "explanation": "El índice de sospecha es una de las herramientas de pensamiento crítico más importantes para un paramédico. Se basa en la comprensión de la cinemática del trauma para anticipar posibles lesiones internas graves basadas en el mecanismo, incluso si el paciente parece estable o presenta pocos signos externos de lesión."
    },
    {
        "question": "Un trauma multisistémico se define como:",
        "options": [
            {"letter": "a", "text": "Una lesión que requiere intervención quirúrgica"},
            {"letter": "b", "text": "Cualquier fractura de un hueso largo"},
            {"letter": "c", "text": "Una o más lesiones que afectan a más de un sistema corporal"},
            {"letter": "d", "text": "Cualquier traumatismo que ocurra en un paciente mayor de 65 años"}
        ],
        "correctAnswer": "c",
        "explanation": "El trauma multisistémico se refiere a un paciente que ha sufrido lesiones en dos o más sistemas corporales, como el sistema neurológico y el sistema cardiovascular, o el sistema respiratorio y el sistema musculoesquelético. Estos pacientes tienen un mayor riesgo de morbilidad y mortalidad."
    }
]


export const traumaChallengeQuestions: Question[] = [
    {
        "question": "Un conductor de 34 años sufre una colisión frontal a 90 km/h contra un árbol. No llevaba cinturón de seguridad y el airbag no se desplegó. Al llegar, usted observa que el volante está deformado, hay una 'telaraña' en el parabrisas y el tablero está hundido en el lugar del acompañante. El paciente está alerta pero refiere dolor torácico y abdominal difuso, con abrasiones en ambas rodillas. ¿Cuál es la interpretación MÁS correcta de estos hallazgos combinados según el análisis de la escena y la cinemática del trauma?",
        "options": [
            {"letter": "a", "text": "El volante deformado sugiere solo contusión de tejidos blandos en el tórax; el dolor abdominal es probablemente ansiedad y no requiere alto índice de sospecha"},
            {"letter": "b", "text": "El patrón de daños indica un mecanismo 'de abajo hacia arriba y hacia adentro' en 'vía descendente' clásico de impacto frontal sin restricción: rodillas contra el tablero (posible fractura de fémur/cadera/luxación posterior de cadera), tórax contra el volante (posible contusión cardíaca o de aorta) y cabeza contra el parabrisas, con transferencia de energía adicional a vísceras abdominales por desaceleración brusca de órganos sólidos como hígado y bazo"},
            {"letter": "c", "text": "La telaraña en el parabrisas descarta lesión de columna cervical, ya que la cabeza se detuvo antes de alcanzar velocidades peligrosas"},
            {"letter": "d", "text": "Como el paciente está alerta y orientado, el mecanismo de lesión pierde relevancia y la conducta debe basarse únicamente en los signos vitales actuales"}
        ],
        "correctAnswer": "b",
        "explanation": "En un impacto frontal sin restricción, el cuerpo continúa moviéndose hacia adelante mientras el vehículo se detiene abruptamente, generando un patrón de lesión predecible 'de abajo hacia arriba': las rodillas impactan el tablero (con riesgo de fractura de fémur, luxación posterior de cadera o lesión de rodilla), el tórax golpea el volante (con riesgo de contusión miocárdica, fractura costal o desaceleración de la aorta torácica en su punto de fijación al ligamento arterioso) y la cabeza impacta el parabrisas (riesgo de lesión craneal y cervical por flexión/extensión). Además, la desaceleración súbita provoca que órganos sólidos como el hígado y el bazo, que continúan moviéndose por inercia, se desgarren de sus puntos de fijación vascular (pedículos), causando hemorragia interna sin signos externos evidentes. Un paciente alerta con signos vitales normales puede estar compensando fisiológicamente y aun así tener una lesión interna grave en evolución, por lo que el mecanismo de lesión debe mantener un índice de sospecha elevado independientemente del estado mental inicial."
    },
    {
        "question": "Una mujer de 28 años se encontraba a unos 4 metros de una explosión de gas en un edificio. Presenta quemaduras parciales en los brazos, laceraciones por fragmentos de vidrio en el rostro, y fue lanzada contra una pared, golpeándose la cabeza. Además, refiere dolor torácico y comienza a presentar disnea progresiva y hemoptisis. ¿Cómo debe usted clasificar e interpretar el conjunto de lesiones de esta paciente?",
        "options": [
            {"letter": "a", "text": "Todas las lesiones son de un solo tipo (terciarias), ya que todas ocurrieron en el mismo evento y momento temporal"},
            {"letter": "b", "text": "La disnea progresiva y hemoptisis son irrelevantes si no hay lesión externa visible en el tórax, por lo que deben atribuirse a ansiedad postraumática"},
            {"letter": "c", "text": "Presenta una combinación de lesión primaria (onda de sobrepresión causando posible contusión pulmonar o 'pulmón de blast' explicando la disnea y hemoptisis), lesión secundaria (laceraciones por fragmentos de vidrio), lesión terciaria (trauma craneal por ser lanzada contra la pared) y lesión cuaternaria (quemaduras), por lo que requiere manejo como trauma multisistémico con alto índice de sospecha de lesión pulmonar y craneal"},
            {"letter": "d", "text": "Solo debe tratarse la quemadura visible, ya que es la lesión más evidente y las demás son secundarias en prioridad clínica"}
        ],
        "correctAnswer": "c",
        "explanation": "Las lesiones por explosión se clasifican en cuatro categorías que frecuentemente coexisten en el mismo paciente: la lesión primaria es causada directamente por la onda de sobrepresión y afecta preferentemente órganos con contenido aéreo como los pulmones (produciendo el llamado 'pulmón de blast', que se manifiesta con disnea progresiva, hemoptisis e hipoxia que puede empeorar en minutos u horas); la lesión secundaria es producida por fragmentos y escombros proyectados (las laceraciones faciales); la lesión terciaria ocurre cuando el cuerpo mismo es desplazado y golpea un objeto fijo (el trauma craneal contra la pared); y la lesión cuaternaria agrupa el resto de los mecanismos, como las quemaduras térmicas. Dado que estas lesiones afectan múltiples sistemas corporales simultáneamente, la paciente debe manejarse como trauma multisistémico, priorizando la vía aérea y la ventilación por el riesgo de deterioro respiratorio progresivo y manteniendo alta sospecha de lesión intracraneal oculta."
    },
    {
        "question": "Dos motociclistas sufren colisiones separadas. El motociclista A impactó de frente contra un vehículo y fue proyectado por encima del manubrio ('eyección hacia arriba y adelante'). El motociclista B derrapó lateralmente y quedó atrapado entre la motocicleta y el pavimento ('lay-down'). Comparando ambos mecanismos, ¿cuál es la diferencia MÁS importante en el patrón de lesiones esperado?",
        "options": [
            {"letter": "a", "text": "No hay diferencia relevante, ya que ambos son accidentes de motocicleta y deben manejarse de forma idéntica"},
            {"letter": "b", "text": "El motociclista A tiene mayor riesgo de lesiones graves de cabeza, columna cervical, tórax y abdomen por el impacto de alta energía al aterrizar tras la eyección, mientras que el motociclista B, al disipar energía mediante fricción con el pavimento (deslizamiento), tiende a presentar lesiones más localizadas de tejidos blandos, abrasiones extensas ('road rash') y fracturas de extremidades, aunque ambos requieren evaluación completa de columna"},
            {"letter": "c", "text": "El motociclista B siempre tendrá lesiones más graves porque el deslizamiento genera más fricción que cualquier impacto directo"},
            {"letter": "d", "text": "Solo el motociclista A requiere inmovilización espinal, ya que el mecanismo de 'lay-down' nunca compromete la columna"}
        ],
        "correctAnswer": "b",
        "explanation": "En la eyección frontal por encima del manubrio, el motociclista sufre una transferencia de energía masiva y concentrada al momento del aterrizaje sobre el pavimento u otro objeto, lo que produce con frecuencia lesiones graves de cráneo, columna cervical, tórax (impacto directo de alta energía) y abdomen, siendo este uno de los mecanismos con mayor mortalidad en trauma. En contraste, la maniobra de 'lay-down' o derrape lateral permite que la energía cinética se disipe progresivamente a través de la fricción contra el pavimento durante el deslizamiento, lo que generalmente resulta en lesiones más superficiales y localizadas como abrasiones extensas y fracturas de extremidades, aunque no elimina el riesgo de lesión espinal si el cuerpo impacta contra un objeto fijo durante el deslizamiento. En ambos casos el mecanismo de lesión obliga a mantener precauciones de columna hasta descartar lesión mediante evaluación clínica adecuada."
    },
    {
        "question": "Un trabajador de la construcción cae desde un andamio de 5 metros de altura y aterriza de pie, impactando primero con los talones sobre concreto. Está consciente, con dolor intenso en ambos talones y en la zona lumbar baja, sin déficit neurológico distal evidente. Aplicando el concepto de transmisión de energía en cadena ósea ('lesión de Don Juan' o síndrome del talón), ¿qué estructuras adicionales deben sospecharse activamente, más allá del sitio de dolor referido por el paciente?",
        "options": [
            {"letter": "a", "text": "Únicamente los talones, ya que el dolor lumbar es simplemente referido y no indica lesión estructural"},
            {"letter": "b", "text": "Solo la columna cervical, porque toda caída de altura debe evaluarse primero por lesión cervical independientemente del punto de impacto"},
            {"letter": "c", "text": "Fracturas de calcáneo, y por transmisión ascendente de la energía a través de tibia, fémur y pelvis, fracturas de meseta tibial, fémur, acetábulo/pelvis y fracturas por compresión de la columna toracolumbar (lumbar baja), incluso en ausencia de déficit neurológico inicial"},
            {"letter": "d", "text": "Ninguna estructura adicional, ya que el paciente permanece consciente y sin déficit neurológico, lo cual descarta lesión ósea significativa"}
        ],
        "correctAnswer": "c",
        "explanation": "Cuando una persona cae de pie y aterriza sobre los talones, la energía cinética se transmite en cadena ascendente a través del esqueleto axial, un patrón clásicamente descrito como el síndrome del 'salto del suicida' o 'Don Juan': primero fractura el calcáneo, luego puede continuar hacia la meseta tibial, el fémur, el acetábulo y la pelvis, terminando frecuentemente en fracturas por compresión de las vértebras toracolumbares debido a la carga axial sobre la columna. La ausencia de déficit neurológico distal no descarta una fractura vertebral inestable, ya que muchas fracturas por compresión son estables inicialmente pero pueden volverse inestables con el movimiento inadecuado del paciente. Por ello, el mecanismo de lesión por sí solo obliga a inmovilizar la columna completa y a mantener alto índice de sospecha de fracturas en toda la cadena de transmisión de energía, independientemente de los hallazgos del examen físico inicial."
    },
    {
        "question": "En la escena de un tiroteo, un paciente presenta una única herida de entrada en el cuadrante superior izquierdo del abdomen, sin herida de salida evidente, causada por un proyectil de arma corta de baja velocidad. El paciente está hemodinámicamente estable con signos vitales normales. ¿Cuál es el razonamiento clínico MÁS adecuado respecto al potencial de lesión de este trauma penetrante?",
        "options": [
            {"letter": "a", "text": "Como no hay herida de salida y el arma es de baja velocidad, se puede asumir que el daño se limita al trayecto visible y el paciente puede ser dado de alta tras sutura de la herida"},
            {"letter": "b", "text": "La estabilidad hemodinámica actual descarta lesión de órganos sólidos, ya que cualquier lesión grave se manifestaría inmediatamente con hipotensión"},
            {"letter": "c", "text": "Aunque las armas de baja velocidad producen menos cavitación que los rifles de asalto, el trayecto del proyectil es impredecible (puede desviarse por hueso o tejido) y la localización en el cuadrante superior izquierdo obliga a sospechar lesión de bazo, diafragma, riñón izquierdo o incluso estructuras torácicas si el proyectil ascendió, por lo que la estabilidad actual no descarta hemorragia interna en evolución ni requiere reevaluación continua"},
            {"letter": "d", "text": "Debe tratarse únicamente como una laceración cutánea, ya que el trauma penetrante de baja velocidad rara vez compromete estructuras profundas"}
        ],
        "correctAnswer": "c",
        "explanation": "Aunque los proyectiles de baja velocidad (como los de armas cortas) generan menor cavitación y daño tisular secundario que los de alta velocidad, su trayectoria dentro del cuerpo puede desviarse de forma impredecible al chocar con hueso, fascia u otras estructuras, por lo que la ausencia de herida de salida no permite predecir con certeza qué órganos fueron afectados. La localización en el cuadrante superior izquierdo del abdomen genera un índice de sospecha elevado de lesión esplénica, renal izquierda, diafragmática o incluso de la base pulmonar izquierda si el proyectil ascendió por la cavidad torácica, dado que el diafragma se eleva hasta el cuarto espacio intercostal durante la espiración. Un paciente puede compensar hemodinámicamente durante un período variable antes de descompensarse súbitamente por hemorragia interna progresiva (por ejemplo, por una laceración esplénica), por lo que la estabilidad inicial nunca descarta lesión grave y exige transporte rápido y reevaluación constante de signos de shock."
    },
    {
        "question": "En el triage de un accidente automovilístico con dos ocupantes, el paciente A presenta signos vitales dentro de parámetros normales y se queja solo de dolor leve en el cuello, mientras que el paciente B, en el asiento contiguo, fue encontrado sin signos vitales en la escena. Según los criterios de triage de trauma basados en mecanismo de lesión, ¿cómo debe influir la muerte del paciente B en el manejo del paciente A?",
        "options": [
            {"letter": "a", "text": "No debe influir en absoluto, ya que cada paciente se evalúa exclusivamente por sus propios signos vitales y hallazgos físicos individuales"},
            {"letter": "b", "text": "La muerte de un ocupante en el mismo compartimento del vehículo es, por sí sola, un criterio de mecanismo de lesión que indica que se aplicaron fuerzas extremas al vehículo, por lo que el paciente A debe ser considerado de alto riesgo y transportado a un centro de trauma pese a su aparente estabilidad clínica"},
            {"letter": "c", "text": "Solo debe considerarse si el paciente A también presenta deformidad visible del vehículo en su lado"},
            {"letter": "d", "text": "Debe usarse únicamente para fines de documentación legal, sin ninguna implicación en la decisión de transporte"}
        ],
        "correctAnswer": "b",
        "explanation": "Los criterios de triage de trauma basados en el mecanismo de lesión incluyen específicamente la muerte de otro ocupante en el mismo vehículo como un indicador de que se transfirieron fuerzas de altísima energía durante la colisión, independientemente de la presentación clínica aparente de los demás ocupantes. Este criterio existe precisamente porque los signos vitales normales y las molestias leves pueden ser engañosos en las etapas tempranas del trauma, ya que los mecanismos compensatorios fisiológicos pueden enmascarar lesiones internas graves durante un período variable. Por lo tanto, el paciente A debe recibir un índice de sospecha elevado y ser transportado a un centro de trauma designado, aplicando el principio de que el mecanismo de lesión puede predecir la gravedad potencial incluso cuando la evaluación fisiológica y anatómica inicial no lo demuestra."
    }
];
