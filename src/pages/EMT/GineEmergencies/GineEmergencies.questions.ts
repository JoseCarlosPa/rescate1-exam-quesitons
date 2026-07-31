import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Cuál es la pregunta más importante que se debe hacer a una mujer en edad fértil que presenta dolor abdominal?",
        answer: "La pregunta más importante es: '¿Cuándo fue su última menstruación?'. La respuesta ayuda a determinar la posibilidad de un embarazo y a diferenciar entre varias emergencias ginecológicas, como un embarazo ectópico.",
    },
    {
        question: "¿Qué es la Enfermedad Pélvica Inflamatoria (EPI)?",
        answer: "La EPI es una infección de los órganos reproductores femeninos superiores, como el útero, las trompas de Falopio y los ovarios. A menudo es causada por una enfermedad de transmisión sexual y puede provocar dolor abdominal bajo generalizado, fiebre y flujo vaginal anormal.",
    },
    {
        question: "¿Qué es un embarazo ectópico y por qué es una emergencia potencialmente mortal?",
        answer: "Un embarazo ectópico ocurre cuando un óvulo fertilizado se implanta fuera del útero, comúnmente en una trompa de Falopio. Es una emergencia mortal porque a medida que crece, puede romper la trompa, causando una hemorragia interna masiva y shock.",
    },
    {
        question: "¿Cómo se debe manejar un sangrado vaginal activo en el entorno prehospitalario?",
        answer: "Se debe tratar como una hemorragia externa, utilizando toallas sanitarias para absorber la sangre. Es crucial no introducir nada en la vagina, como tampones o gasas (no se debe 'empacar' la vagina). Se debe tratar al paciente por shock si está presente.",
    },
    {
        question: "¿Cuál es el enfoque principal al atender a una víctima de agresión sexual?",
        answer: "La prioridad es el bienestar médico y emocional del paciente. El proveedor debe ser empático, profesional y no juzgar. Si bien la preservación de la evidencia es importante (no permitir que se bañe, cambie de ropa, etc.), no debe retrasar el tratamiento de lesiones que pongan en peligro la vida.",
    },
    {
        question: "¿Qué es un quiste ovárico y cuándo se convierte en una emergencia?",
        answer: "Un quiste ovárico es un saco lleno de líquido que se forma en o sobre un ovario. Generalmente son inofensivos, pero se convierten en una emergencia si se rompen (causando dolor abdominal súbito y severo) o si provocan una torsión ovárica, lo que corta el suministro de sangre al ovario.",
    },
    {
        question: "Además del sangrado, ¿cuál es la principal preocupación en un paciente con Enfermedad Pélvica Inflamatoria (EPI)?",
        answer: "La principal preocupación es el riesgo de sepsis, una respuesta abrumadora del cuerpo a la infección que puede llevar a un shock séptico y a la falla de órganos. También puede causar cicatrices que lleven a la infertilidad o a un futuro embarazo ectópico.",
    },
    {
        question: "Al documentar un caso de agresión sexual, ¿qué se debe incluir en el reporte?",
        answer: "El reporte debe ser objetivo y conciso. Se deben documentar los hallazgos de la evaluación del paciente y las declaraciones que él o ella haga, usando comillas si es posible. No se deben incluir opiniones personales, suposiciones ni conclusiones sobre lo ocurrido.",
    },
];


export const gineQuestions: Question[] = [
    {
        "question": "Una mujer de 24 años, sexualmente activa, se queja de un dolor abdominal bajo, súbito y severo, localizado en el lado derecho. Refiere que su última menstruación se retrasó dos semanas. Presenta piel pálida y taquicardia. ¿Cuál es la sospecha diagnóstica más probable?",
        "options": [
            {"letter": "a", "text": "Enfermedad Pélvica Inflamatoria (EPI)"},
            {"letter": "b", "text": "Embarazo ectópico roto"},
            {"letter": "c", "text": "Quiste ovárico simple"},
            {"letter": "d", "text": "Apendicitis"}
        ],
        "correctAnswer": "b",
        "explanation": "Esta es la presentación clásica de un embarazo ectópico roto. La tríada de un período menstrual ausente (amenorrea), dolor abdominal unilateral súbito y signos de shock (palidez, taquicardia) en una mujer en edad fértil es altamente sugestiva de esta emergencia que amenaza la vida."
    },
    {
        "question": "Al manejar a una paciente con sangrado vaginal profuso, la intervención más apropiada es:",
        "options": [
            {"letter": "a", "text": "Colocar un tampón para contener el sangrado"},
            {"letter": "b", "text": "Empacar la vagina con gasas estériles"},
            {"letter": "c", "text": "Colocar una toalla sanitaria sobre la abertura vaginal"},
            {"letter": "d", "text": "Aplicar presión directa sobre el cérvix"}
        ],
        "correctAnswer": "c",
        "explanation": "Nunca se debe introducir nada en la vagina de una paciente con sangrado activo. Hacerlo puede ocultar la verdadera cantidad de sangrado, introducir infecciones o causar más daño. El manejo correcto es colocar una toalla sanitaria externa para absorber la sangre, lo que permite estimar la pérdida de sangre y tratar a la paciente por shock si es necesario."
    },
    {
        "question": "Una paciente presenta dolor abdominal bajo, fiebre y un flujo vaginal con mal olor. ¿Qué condición es más consistente con estos síntomas?",
        "options": [
            {"letter": "a", "text": "Embarazo ectópico"},
            {"letter": "b", "text": "Un aborto espontáneo"},
            {"letter": "c", "text": "Enfermedad Pélvica Inflamatoria (EPI)"},
            {"letter": "d", "text": "Un quiste ovárico roto"}
        ],
        "correctAnswer": "c",
        "explanation": "La combinación de dolor abdominal bajo (a menudo bilateral), fiebre y flujo vaginal anormal (purulento o con mal olor) son los signos cardinales de la Enfermedad Pélvica Inflamatoria (EPI), una infección de los órganos reproductores superiores."
    },
    {
        "question": "Usted está atendiendo a una víctima de agresión sexual. Ella quiere ir al baño a limpiarse. ¿Cuál es la respuesta más adecuada?",
        "options": [
            {"letter": "a", "text": "Permitírselo para respetar su autonomía y comodidad"},
            {
                "letter": "b",
                "text": "Explicarle con sensibilidad que no lo haga para poder preservar posible evidencia, sin forzarla"
            },
            {"letter": "c", "text": "Prohibírselo terminantemente porque la evidencia es lo más importante"},
            {"letter": "d", "text": "Acompañarla al baño para asegurarse de que no elimine evidencia"}
        ],
        "correctAnswer": "b",
        "explanation": "La prioridad es el bienestar emocional y físico del paciente, pero también es importante preservar la evidencia forense. La mejor respuesta es explicar con empatía y sin juzgar la importancia de evitar bañarse, orinar o cambiarse de ropa para una posible recolección de evidencia, respetando siempre su decisión final."
    },
    {
        "question": "El tratamiento prehospitalario para una paciente con una emergencia ginecológica y signos de shock debe incluir:",
        "options": [
            {"letter": "a", "text": "Administrar aspirina para el dolor"},
            {"letter": "b", "text": "Colocar a la paciente en posición sentada para mayor comodidad"},
            {"letter": "c", "text": "Administrar oxígeno a alto flujo y mantenerla abrigada"},
            {"letter": "d", "text": "Darle líquidos por vía oral para reponer el volumen"}
        ],
        "correctAnswer": "c",
        "explanation": "Ante un shock hipovolémico (el más común en estas emergencias), el tratamiento se centra en maximizar la oxigenación de los tejidos restantes (oxígeno a alto flujo), tratar la hipotermia que puede empeorar el sangrado (mantenerla abrigada) y un transporte rápido. La posición debe ser supina para mejorar el retorno venoso."
    },
    {
        "question": "En una paciente con sospecha de Enfermedad Pélvica Inflamatoria, una complicación grave a largo plazo es:",
        "options": [
            {"letter": "a", "text": "El desarrollo de diabetes"},
            {"letter": "b", "text": "Un mayor riesgo de infertilidad y embarazo ectópico"},
            {"letter": "c", "text": "La aparición de hipertensión arterial"},
            {"letter": "d", "text": "La pérdida de la función renal"}
        ],
        "correctAnswer": "b",
        "explanation": "La infección y la inflamación de la EPI pueden causar cicatrices en las trompas de Falopio. Este tejido cicatricial puede obstruir las trompas, impidiendo la fecundación (infertilidad) o dificultando el paso del óvulo fecundado hacia el útero, lo que aumenta el riesgo de que se implante en la trompa (embarazo ectópico)."
    },
    {
        "question": "Al documentar sus hallazgos en un caso de presunta agresión sexual, usted debe:",
        "options": [
            {"letter": "a", "text": "Escribir sus propias conclusiones sobre quién fue el agresor"},
            {
                "letter": "b",
                "text": "Registrar únicamente los hallazgos médicos objetivos y las declaraciones de la paciente"
            },
            {"letter": "c", "text": "Omitir cualquier detalle gráfico para proteger la privacidad de la paciente"},
            {"letter": "d", "text": "Usar términos médicos vagos para evitar problemas legales"}
        ],
        "correctAnswer": "b",
        "explanation": "El informe de atención al paciente es un documento médico-legal. Debe ser completamente objetivo. Documente solo lo que ve y lo que el paciente le dice, usando comillas para las declaraciones directas. Evite cualquier juicio de valor, opinión o conclusión sobre el incidente."
    },
    {
        "question": "El dolor abdominal en una emergencia ginecológica puede ser referido a otras áreas. El dolor en el hombro en el contexto de una emergencia ginecológica puede indicar:",
        "options": [
            {"letter": "a", "text": "Irritación del diafragma por sangre en el abdomen"},
            {"letter": "b", "text": "Una infección renal concurrente"},
            {"letter": "c", "text": "Una reacción alérgica"},
            {"letter": "d", "text": "Un problema cardíaco"}
        ],
        "correctAnswer": "a",
        "explanation": "La sangre libre en la cavidad peritoneal (hemoperitoneo), como la causada por un embarazo ectópico roto, puede irritar el diafragma. El nervio frénico, que inerva el diafragma, comparte una vía nerviosa con los nervios del hombro, causando dolor referido en esa zona (Signo de Kehr)."
    },
    {
        "question": "La principal diferencia entre el dolor de la EPI y el de un embarazo ectópico roto es que la EPI suele presentar un dolor más __________, mientras que el embarazo ectópico presenta un dolor _________.",
        "options": [
            {"letter": "a", "text": "Súbito y agudo / gradual y difuso"},
            {"letter": "b", "text": "Gradual y difuso / súbito y unilateral"},
            {"letter": "c", "text": "Leve y cólico / punzante y en la espalda"},
            {"letter": "d", "text": "Intermitente / constante"}
        ],
        "correctAnswer": "b",
        "explanation": "La EPI es un proceso infeccioso que tiende a desarrollarse de forma más gradual, con un dolor que a menudo es difuso y bilateral. En contraste, la ruptura de un embarazo ectópico es un evento agudo que causa un dolor de inicio súbito, severo y típicamente localizado en un lado."
    },
    {
        "question": "La prioridad más alta en el manejo de cualquier emergencia ginecológica es:",
        "options": [
            {"letter": "a", "text": "Determinar la causa exacta del problema"},
            {"letter": "b", "text": "Manejar las amenazas a la vida, como el shock por hemorragia"},
            {"letter": "c", "text": "Aliviar el dolor del paciente con medicamentos"},
            {"letter": "d", "text": "Preservar la evidencia en todos los casos"}
        ],
        "correctAnswer": "b",
        "explanation": "Independientemente de la causa subyacente, la prioridad del TAMP es seguir la evaluación primaria (ABCDE). El manejo de las amenazas inmediatas para la vida, como una vía aérea comprometida, un problema respiratorio o, más comúnmente en estos casos, el shock circulatorio, siempre es lo primero."
    }
]

export const gineChallengeQuestions: Question[] = [
    {
        "question": "Usted atiende a una mujer de 29 años con dolor abdominal bajo derecho de inicio súbito hace 30 minutos, que ahora refiere mareo intenso. Su última menstruación fue hace 7 semanas. Signos vitales: FC 128, PA 82/50, FR 24, piel pálida, fría y diaforética. Al palpar el abdomen, está rígido y con dolor a la descompresión difuso. ¿Cuál es la acción prehospitalaria más crítica y el razonamiento fisiopatológico que la sustenta?",
        "options": [
            {"letter": "a", "text": "Administrar 2 litros de cristaloides IV en bolo rápido antes de mover a la paciente, para normalizar la presión arterial antes del transporte"},
            {"letter": "b", "text": "Realizar transporte rápido a un centro con capacidad quirúrgica, con oxígeno a alto flujo y accesos IV en ruta, minimizando el tiempo en la escena, ya que el sangrado intraabdominal por ruptura tubárica no se controla con líquidos ni oxígeno"},
            {"letter": "c", "text": "Colocar a la paciente en posición de Trendelenburg profunda para mejorar la perfusión cerebral mientras se espera la mejoría de la presión arterial"},
            {"letter": "d", "text": "Retrasar el transporte para obtener una historia ginecológica detallada, incluyendo métodos anticonceptivos, antes de decidir el destino"}
        ],
        "correctAnswer": "b",
        "explanation": "El abdomen rígido con dolor a la descompresión difuso, la amenorrea de 7 semanas y el shock compensado que progresa a descompensado son consistentes con hemoperitoneo masivo por ruptura de un embarazo ectópico. El único tratamiento definitivo es la intervención quirúrgica para controlar el sangrado; ni el oxígeno ni los cristaloides detienen la hemorragia, solo diluyen los factores de coagulación y pueden aumentar la presión arterial lo suficiente para desalojar un coágulo incipiente, empeorando el sangrado ('pop the clot'). Por ello, la prioridad absoluta es minimizar el tiempo en la escena y transportar rápidamente a un centro con capacidad quirúrgica, realizando intervenciones de soporte (oxígeno, accesos IV, líquidos titulados con precaución) en ruta. La Trendelenburg profunda no mejora la perfusión cerebral real y puede comprometer la ventilación por el desplazamiento del contenido abdominal contra el diafragma."
    },
    {
        "question": "Una mujer de 34 años con antecedentes de múltiples parejas sexuales presenta fiebre de 39.2°C, dolor abdominal bajo bilateral de 4 días de evolución que ha empeorado progresivamente, flujo vaginal purulento y ahora taquicardia (FC 118) con hipotensión leve (PA 96/60) y confusión leve. ¿Qué proceso fisiopatológico subyacente explica mejor el deterioro hemodinámico de esta paciente y cuál es la implicación para su manejo prehospitalario?",
        "options": [
            {"letter": "a", "text": "Está desarrollando shock séptico secundario a una EPI complicada (posible absceso tuboovárico); el manejo debe incluir oxígeno, dos accesos IV con cristaloides para soporte hemodinámico y transporte prioritario, tratando la hipotensión como un signo de falla circulatoria por vasodilatación y fuga capilar, no solo como deshidratación"},
            {"letter": "b", "text": "Está experimentando una reacción vasovagal por el dolor, por lo que basta con colocarla en posición supina con las piernas elevadas y reevaluar en 5 minutos"},
            {"letter": "c", "text": "Presenta un embarazo ectópico coexistente con la infección, por lo que el manejo prioritario es idéntico al de una hemorragia interna con reposición masiva de volumen sin oxígeno suplementario"},
            {"letter": "d", "text": "La hipotensión se debe únicamente a la fiebre y se resolverá espontáneamente al administrar antipiréticos, por lo que no se requiere transporte urgente"}
        ],
        "correctAnswer": "a",
        "explanation": "La progresión de EPI con fiebre alta, dolor bilateral que empeora, taquicardia, hipotensión y alteración del estado mental describe la cascada de sepsis: la infección libera mediadores inflamatorios que causan vasodilatación sistémica y aumento de la permeabilidad capilar, generando una hipovolemia relativa (fuga de líquido al espacio extravascular) incluso sin pérdida hemática externa. Esto puede progresar a shock séptico con hipoperfusión de órganos vitales, reflejada en la confusión. El manejo prehospitalario debe tratar esto como una emergencia de shock distributivo: oxígeno suplementario para maximizar el aporte de oxígeno a tejidos hipoperfundidos, accesos IV para soporte de volumen y transporte prioritario a un centro capaz de manejar sepsis e infección ginecológica grave (posible drenaje quirúrgico de un absceso tuboovárico)."
    },
    {
        "question": "Una mujer de 58 años, posmenopáusica, llama porque presenta sangrado vaginal abundante con coágulos desde hace 3 horas, saturando varias toallas sanitarias por hora. No hay antecedente de trauma ni posibilidad de embarazo. Se encuentra pálida, con FC 122 y PA 88/58. Su esposo menciona que ha perdido peso 'sin explicación' en los últimos meses. Al planificar el manejo, ¿cuál es el enfoque más apropiado?",
        "options": [
            {"letter": "a", "text": "Descartar que se trate de una emergencia real ya que el sangrado vaginal no obstétrico rara vez causa shock hipovolémico significativo"},
            {"letter": "b", "text": "Empacar la vagina con gasas estériles para taponar directamente el origen del sangrado y así reducir la pérdida de sangre antes del transporte"},
            {"letter": "c", "text": "Tratar el cuadro como una hemorragia externa significativa con signos de shock hipovolémico: colocar toallas sanitarias externas para cuantificar la pérdida, administrar oxígeno, establecer accesos IV y transportar con prioridad, considerando que la pérdida de peso inexplicada sugiere una posible neoplasia ginecológica como causa subyacente"},
            {"letter": "d", "text": "Retrasar el transporte hasta identificar la causa exacta del sangrado mediante el interrogatorio, ya que el manejo prehospitalario depende completamente del diagnóstico etiológico"}
        ],
        "correctAnswer": "c",
        "explanation": "Independientemente de si el sangrado es obstétrico o no, la pérdida sanguínea significativa que produce taquicardia e hipotensión constituye un shock hipovolémico y debe manejarse con los mismos principios: nunca se empaca la vagina (esto oculta la magnitud real del sangrado y puede favorecer infección), sino que se colocan toallas externas para estimar la pérdida, se administra oxígeno a alto flujo, se establecen accesos IV y se transporta con prioridad. En una mujer posmenopáusica, cualquier sangrado vaginal es anormal por definición, y combinado con pérdida de peso inexplicada, eleva la sospecha clínica de una neoplasia ginecológica (por ejemplo, cáncer endometrial o cervical) como causa subyacente; sin embargo, la identificación etiológica no debe retrasar el manejo de las amenazas a la vida ni el transporte."
    },
    {
        "question": "Una mujer de 22 años presenta dolor pélvico derecho súbito, intenso y de tipo cólico intermitente, con náuseas y vómito, que inició durante actividad física. No hay retraso menstrual ni signos de shock (PA 118/76, FC 92). El dolor tiene episodios de mejoría parcial seguidos de exacerbaciones súbitas. ¿Qué condición debe sospecharse prioritariamente y por qué es tiempo-sensible?",
        "options": [
            {"letter": "a", "text": "Embarazo ectópico roto, ya que toda mujer en edad fértil con dolor pélvico unilateral debe asumirse como tal hasta demostrar lo contrario, sin importar los signos vitales"},
            {"letter": "b", "text": "Torsión ovárica, una emergencia tiempo-sensible en la que el ovario gira sobre su pedículo vascular comprometiendo primero el retorno venoso y luego el flujo arterial, lo que puede llevar a necrosis isquémica del ovario si no se resuelve quirúrgicamente pronto"},
            {"letter": "c", "text": "Enfermedad Pélvica Inflamatoria, dado que el dolor cólico intermitente es su presentación característica y no requiere manejo urgente"},
            {"letter": "d", "text": "Un cuadro gastrointestinal benigno como estreñimiento, ya que la ausencia de shock descarta cualquier emergencia ginecológica"}
        ],
        "correctAnswer": "b",
        "explanation": "El dolor unilateral súbito, tipo cólico e intermitente (con exacerbaciones que reflejan episodios de torsión y detorsión parcial), asociado a náuseas y vómito y desencadenado por movimiento físico, es característico de la torsión ovárica, frecuentemente asociada a un quiste ovárico o masa que actúa como punto de pivote. Fisiopatológicamente, la torsión primero comprime el retorno venoso de baja presión, causando congestión y edema del ovario, y si progresa, compromete también el flujo arterial de mayor presión, resultando en isquemia y potencial necrosis del tejido ovárico. Esto la convierte en una emergencia tiempo-sensible que requiere intervención quirúrgica pronta para preservar el ovario, aun en ausencia de shock sistémico, por lo que el transporte no debe retrasarse pese a la estabilidad hemodinámica."
    },
    {
        "question": "Una mujer embarazada de 32 semanas es víctima de un accidente automovilístico con impacto directo del volante sobre el abdomen. Presenta dolor abdominal difuso, contracciones uterinas palpables y sangrado vaginal leve. Sus signos vitales iniciales son FC 110, PA 108/70. ¿Cuál es la consideración prioritaria más importante en el manejo de esta paciente y su fundamento fisiológico?",
        "options": [
            {"letter": "a", "text": "Enfocarse únicamente en el bienestar fetal mediante monitoreo de la frecuencia cardíaca fetal, ya que la madre presenta signos vitales dentro de rangos aceptables"},
            {"letter": "b", "text": "Tratar a la madre como prioridad, transportarla en decúbito lateral izquierdo o con desplazamiento uterino manual hacia la izquierda para evitar la compresión aortocava, y reconocer que sus signos vitales 'normales' pueden enmascarar un shock temprano debido al aumento fisiológico del volumen sanguíneo del embarazo, además de sospechar un posible desprendimiento placentario oculto por el mecanismo de trauma"},
            {"letter": "c", "text": "Colocar a la paciente en posición supina estándar durante el transporte para facilitar la inmovilización espinal completa, priorizando la estabilización ortopédica sobre cualquier otra consideración"},
            {"letter": "d", "text": "Asumir que el sangrado vaginal leve descarta cualquier lesión placentaria significativa y proceder con el protocolo de trauma estándar sin modificaciones"}
        ],
        "correctAnswer": "b",
        "explanation": "En el trauma abdominal contuso durante el embarazo, siempre se trata primero a la madre, ya que su estabilidad es esencial para la perfusión fetal. El útero gravídico puede comprimir la vena cava inferior y la aorta en posición supina, reduciendo el retorno venoso y el gasto cardíaco; por ello se usa el decúbito lateral izquierdo o el desplazamiento uterino manual. Además, el volumen sanguíneo materno aumenta hasta un 45% durante el embarazo, lo que permite que la paciente pierda una cantidad significativa de sangre antes de mostrar signos evidentes de shock, por lo que signos vitales 'normales' pueden ser engañosos. El mecanismo (impacto directo del volante), junto con contracciones y sangrado vaginal, es altamente sugestivo de desprendimiento placentario (abruptio placentae), una complicación que puede progresar rápidamente a coagulopatía y shock tanto materno como fetal, por lo que se requiere transporte prioritario a un centro con capacidad obstétrica y de trauma."
    },
    {
        "question": "Usted es llamado para atender a una mujer de 26 años que reporta haber sido agredida sexualmente hace aproximadamente una hora. Está físicamente estable, pero visiblemente angustiada, y le pide encarecidamente que 'se dé prisa' porque quiere ducharse y cambiarse de ropa antes de que lleguen más personas. Un oficial de policía en la escena le sugiere que la anime a esperar. ¿Cuál es el enfoque más apropiado que equilibra el cuidado centrado en el paciente con la preservación de evidencia médico-legal?",
        "options": [
            {"letter": "a", "text": "Informarla, con empatía y sin coacción, de que bañarse, orinar, cambiarse de ropa o comer/beber puede eliminar evidencia forense importante, explicándole por qué esto podría ser relevante para su caso si decide reportarlo, pero respetando su decisión final sin obligarla ni retrasar la atención médica necesaria"},
            {"letter": "b", "text": "Seguir la sugerencia del oficial e insistir firmemente en que no se bañe, ya que la preservación de evidencia tiene prioridad sobre las preferencias inmediatas de la paciente"},
            {"letter": "c", "text": "Permitirle bañarse de inmediato sin comentario alguno, ya que mencionar la preservación de evidencia podría considerarse insensible o revictimizante"},
            {"letter": "d", "text": "Recolectar usted mismo muestras de ropa y fluidos corporales en la escena para asegurar la cadena de custodia antes de que la paciente tenga oportunidad de bañarse"}
        ],
        "correctAnswer": "a",
        "explanation": "El manejo prehospitalario de una víctima de agresión sexual debe priorizar su autonomía, bienestar emocional y atención médica por encima de cualquier otra consideración, ya que el TAMP no es responsable de la recolección forense de evidencia, tarea reservada al personal hospitalario y forense capacitado. Sin embargo, brindar información objetiva y compasiva sobre cómo ciertas acciones (bañarse, orinar, cambiar de ropa, comer o beber) pueden afectar la preservación de evidencia le permite a la paciente tomar una decisión informada, sin imponerle una obligación. Insistir firmemente (opción b) vulnera su autonomía y puede revictimizarla; omitir la información (opción c) le niega el derecho a decidir con conocimiento; y recolectar evidencia en el campo (opción d) excede el alcance de la práctica del TAMP y puede comprometer la cadena de custodia si no se realiza con los protocolos forenses adecuados."
    }
]