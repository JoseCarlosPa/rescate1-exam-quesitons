import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué cambios fisiológicos del envejecimiento afectan más la atención prehospitalaria?",
        answer: "Los cambios más relevantes incluyen: disminución de la reserva cardiovascular y respiratoria, alteración de la termorregulación, reducción de la función renal que afecta el metabolismo de medicamentos, cambios en el sistema nervioso que alteran la respuesta al dolor y la presentación de síntomas, y fragilidad ósea que aumenta el riesgo de fracturas.",
    },
    {
        question: "¿Por qué los adultos mayores pueden presentar síntomas atípicos en emergencias cardíacas?",
        answer: "Los adultos mayores frecuentemente presentan síntomas atípicos debido a: neuropatía diabética que reduce la sensación de dolor, múltiples comorbilidades que enmascaran síntomas, uso de medicamentos que alteran la respuesta del cuerpo, y cambios en el sistema nervioso autónomo. Un infarto puede manifestarse solo como confusión, náuseas o disnea sin dolor torácico clásico.",
    },
    {
        question: "¿Cuál es la diferencia entre delirium, demencia y depresión en el adulto mayor?",
        answer: "Delirium: inicio agudo (horas/días), fluctuante, alteración de conciencia, causas médicas tratables. Demencia: inicio gradual (meses/años), progresivo, conciencia normal inicialmente, deterioro cognitivo irreversible. Depresión: inicio variable, episódico, conciencia normal, alteración del ánimo, tratable. Es crucial identificar el delirium ya que es una emergencia médica.",
    },
    {
        question: "¿Qué es la polifarmacia y por qué es un problema en geriatría?",
        answer: "La polifarmacia es el uso de múltiples medicamentos (generalmente ≥5) por un paciente. En geriatría es problemática porque: aumenta el riesgo de interacciones medicamentosas, los cambios farmacocinéticos del envejecimiento alteran la efectividad y toxicidad, puede causar 'cascadas terapéuticas' donde se prescriben medicamentos para tratar efectos adversos de otros, y aumenta el riesgo de caídas, confusión y hospitalización.",
    },
    {
        question: "¿Cómo se debe ajustar la dosificación de medicamentos de emergencia en adultos mayores?",
        answer: "Se debe seguir el principio 'start low, go slow': comenzar con dosis más bajas (generalmente 25-50% de la dosis estándar), aumentar gradualmente según respuesta, monitorizar más frecuentemente los efectos adversos, considerar la función renal y hepática reducida, y estar especialmente atento a medicamentos como opioides, benzodiacepinas y sedantes.",
    },
    {
        question: "¿Qué signos sugieren maltrato del adulto mayor?",
        answer: "Signos físicos: lesiones en diferentes etapas de curación, lesiones inconsistentes con el mecanismo reportado, hematomas en áreas usualmente cubiertas, desnutrición o deshidratación. Signos conductuales: miedo al cuidador, evitar contacto visual, ansiedad excesiva, retraimiento. Signos ambientales: condiciones insalubres, falta de medicamentos necesarios, aislamiento social.",
    },
    {
        question: "¿Cuáles son las principales causas de caídas en adultos mayores?",
        answer: "Factores intrínsecos: debilidad muscular, alteraciones del equilibrio, problemas visuales, hipotensión ortostática, medicamentos sedantes, deterioro cognitivo. Factores extrínsecos: iluminación inadecuada, superficies resbaladizas, obstáculos en el hogar, calzado inadecuado. Las caídas son la principal causa de lesión traumática en mayores de 65 años.",
    },
    {
        question: "¿Cómo se maneja la hipotermia en adultos mayores?",
        answer: "Los adultos mayores son más susceptibles a hipotermia debido a la termorregulación alterada. Manejo: retirar de ambiente frío, quitar ropa húmeda, recalentamiento gradual con mantas térmicas, monitorización cardíaca (riesgo de arritmias), manejo cuidadoso para evitar vasodilatación periférica rápida, y considerar causas subyacentes como sepsis, hipoglucemia o medicamentos.",
    },
];

export const geriatricQuestions: Question[] = [
    {
        "question": "¿Cuál es el cambio fisiológico más significativo del envejecimiento que afecta la respuesta cardiovascular a las emergencias?",
        "options": [
            {"letter": "a", "text": "Aumento de la flexibilidad arterial"},
            {"letter": "b", "text": "Disminución de la frecuencia cardíaca máxima y rigidez arterial"},
            {"letter": "c", "text": "Aumento del gasto cardíaco"},
            {"letter": "d", "text": "Mejora de la contractilidad miocárdica"}
        ],
        "correctAnswer": "b",
        "explanation": "Con la edad, las arterias se vuelven más rígidas (arterioesclerosis) y el corazón pierde su capacidad para acelerar eficazmente (disminución de la frecuencia cardíaca máxima). Esto limita la capacidad del cuerpo para compensar el shock o el estrés, haciendo que los pacientes mayores se descompensen más rápidamente."
    },
    {
        "question": "Un adulto mayor de 78 años presenta confusión súbita sin fiebre. ¿Cuál es la causa más probable?",
        "options": [
            {"letter": "a", "text": "Demencia de inicio tardío"},
            {"letter": "b", "text": "Delirium por causa médica subyacente"},
            {"letter": "c", "text": "Depresión mayor"},
            {"letter": "d", "text": "Esquizofrenia de inicio tardío"}
        ],
        "correctAnswer": "b",
        "explanation": "El delirium se caracteriza por un inicio agudo y un curso fluctuante de la alteración mental. En los adultos mayores, a menudo es el primer o único signo de una enfermedad subyacente grave, como una infección (ej. ITU, neumonía), un infarto, o un desequilibrio electrolítico."
    },
    {
        "question": "¿Cuál es la presentación más común de infarto al miocardio en adultos mayores?",
        "options": [
            {"letter": "a", "text": "Dolor torácico típico opresivo"},
            {"letter": "b", "text": "Disnea, náuseas o confusión sin dolor torácico"},
            {"letter": "c", "text": "Dolor irradiado al brazo izquierdo"},
            {"letter": "d", "text": "Sudoración profusa"}
        ],
        "correctAnswer": "b",
        "explanation": "Los adultos mayores a menudo tienen presentaciones 'atípicas' o 'silenciosas' de un infarto. En lugar del dolor torácico clásico, pueden presentar síntomas como dificultad súbita para respirar (disnea), debilidad generalizada, náuseas, síncope o un cambio agudo en el estado mental."
    },
    {
        "question": "En el manejo farmacológico geriátrico, ¿qué principio se debe seguir?",
        "options": [
            {"letter": "a", "text": "Usar dosis estándar de adulto"},
            {"letter": "b", "text": "Aumentar la dosis debido a menor absorción"},
            {"letter": "c", "text": "'Start low, go slow' - comenzar con dosis bajas"},
            {"letter": "d", "text": "Evitar todos los medicamentos"}
        ],
        "correctAnswer": "c",
        "explanation": "Debido a los cambios en el metabolismo y la excreción de fármacos, los adultos mayores son más sensibles a los efectos de los medicamentos y tienen un mayor riesgo de efectos adversos. El principio 'comienza bajo y ve despacio' implica usar la dosis efectiva más baja posible y titularla lentamente para minimizar los riesgos."
    },
    {
        "question": "¿Cuál es el factor de riesgo más importante para caídas en adultos mayores?",
        "options": [
            {"letter": "a", "text": "Edad avanzada solamente"},
            {"letter": "b", "text": "Polifarmacia y medicamentos sedantes"},
            {"letter": "c", "text": "Uso de bastón"},
            {"letter": "d", "text": "Vivir solo"}
        ],
        "correctAnswer": "b",
        "explanation": "La polifarmacia (el uso de múltiples medicamentos) es un factor de riesgo principal para las caídas. Medicamentos como sedantes, antihipertensivos y analgésicos pueden causar mareos, hipotensión ortostática y alteración del equilibrio, aumentando significativamente la probabilidad de una caída."
    },
    {
        "question": "Un adulto mayor presenta hipotensión y bradicardia después de una caída. ¿Qué complicación debe considerarse prioritariamente?",
        "options": [
            {"letter": "a", "text": "Deshidratación simple"},
            {"letter": "b", "text": "Hemorragia interna por uso de anticoagulantes"},
            {"letter": "c", "text": "Reacción vasovagal"},
            {"letter": "d", "text": "Hipoglucemia"}
        ],
        "correctAnswer": "b",
        "explanation": "Muchos adultos mayores toman anticoagulantes. En el contexto de un trauma, se debe tener un alto índice de sospecha de hemorragia interna, especialmente una hemorragia intracraneal. La combinación de hipotensión y bradicardia puede ser un signo ominoso de aumento de la presión intracraneal (Tríada de Cushing)."
    },
    {
        "question": "¿Cuál es la temperatura corporal que define hipotermia en adultos mayores?",
        "options": [
            {"letter": "a", "text": "< 36°C"},
            {"letter": "b", "text": "< 35°C"},
            {"letter": "c", "text": "< 34°C"},
            {"letter": "d", "text": "< 32°C"}
        ],
        "correctAnswer": "b",
        "explanation": "La definición estándar de hipotermia es una temperatura corporal central por debajo de 35°C (95°F). Los adultos mayores tienen un mayor riesgo debido a una menor capacidad para termorregular, menos grasa subcutánea y condiciones médicas coexistentes."
    },
    {
        "question": "En un paciente geriátrico con fractura de cadera, ¿cuál es la complicación más preocupante durante el transporte prolongado?",
        "options": [
            {"letter": "a", "text": "Dolor severo"},
            {"letter": "b", "text": "Síndrome de aplastamiento y embolia grasa"},
            {"letter": "c", "text": "Ansiedad"},
            {"letter": "d", "text": "Pérdida de apetito"}
        ],
        "correctAnswer": "b",
        "explanation": "Las fracturas de huesos largos como la cadera o el fémur pueden liberar glóbulos de grasa de la médula ósea al torrente sanguíneo, causando una embolia grasa. La inmovilidad prolongada también aumenta el riesgo de rabdomiólisis (síndrome de aplastamiento) y tromboembolismo venoso. Son complicaciones sistémicas graves."
    },
    {
        "question": "¿Cuál es el signo más confiable para distinguir entre delirium y demencia?",
        "options": [
            {"letter": "a", "text": "Nivel de educación del paciente"},
            {"letter": "b", "text": "Inicio agudo y fluctuación de síntomas en delirium"},
            {"letter": "c", "text": "Edad del paciente"},
            {"letter": "d", "text": "Presencia de alucinaciones"}
        ],
        "correctAnswer": "b",
        "explanation": "La característica distintiva clave es el tiempo de inicio. La demencia es un deterioro cognitivo crónico, progresivo y lento (meses a años). El delirium es un cambio agudo (horas a días) en el estado mental y su severidad tiende a fluctuar a lo largo del día."
    },
    {
        "question": "En un adulto mayor con sospecha de sepsis, ¿cuál puede ser el único signo presente?",
        "options": [
            {"letter": "a", "text": "Fiebre alta (>38.5°C)"},
            {"letter": "b", "text": "Escalofríos intensos"},
            {"letter": "c", "text": "Alteración del estado mental sin fiebre"},
            {"letter": "d", "text": "Dolor localizado"}
        ],
        "correctAnswer": "c",
        "explanation": "Los adultos mayores a menudo no montan una respuesta febril robusta a la infección. Por ello, una alteración aguda del estado mental (delirium), debilidad generalizada o simplemente 'no actuar como de costumbre' pueden ser los únicos indicadores tempranos de una sepsis severa."
    },
    {
        "question": "¿Cuál es la dosis inicial recomendada de morfina para dolor severo en un adulto mayor?",
        "options": [
            {"letter": "a", "text": "5-10 mg IV"},
            {"letter": "b", "text": "1-2 mg IV"},
            {"letter": "c", "text": "15-20 mg IV"},
            {"letter": "d", "text": "No administrar opioides en geriatría"}
        ],
        "correctAnswer": "b",
        "explanation": "Siguiendo el principio de 'start low, go slow', la dosis inicial de opioides en pacientes geriátricos debe reducirse significativamente (generalmente a la mitad o un tercio de la dosis de un adulto joven) para evitar la depresión respiratoria y la hipotensión. Dosis pequeñas y tituladas son más seguras."
    },
    {
        "question": "Un adulto mayor toma warfarina y presenta una caída con traumatismo craneal leve. ¿Cuál es la consideración más importante?",
        "options": [
            {"letter": "a", "text": "El riesgo de hemorragia intracraneal está significativamente aumentado"},
            {"letter": "b", "text": "La warfarina protege contra coágulos cerebrales"},
            {"letter": "c", "text": "No hay diferencia en el manejo"},
            {"letter": "d", "text": "Solo importa si hay pérdida de conciencia"}
        ],
        "correctAnswer": "a",
        "explanation": "La anticoagulación con warfarina aumenta drásticamente el riesgo de que un traumatismo craneal, incluso uno aparentemente menor, cause una hemorragia intracraneal grave. Se debe tener un umbral muy bajo para sospecharla y transportar al paciente para una evaluación neurológica y de imagen avanzada."
    },
    {
        "question": "¿Cuál es la causa más común de convulsiones de nueva aparición en adultos mayores?",
        "options": [
            {"letter": "a", "text": "Epilepsia idiopática"},
            {"letter": "b", "text": "Evento cerebrovascular (ACV)"},
            {"letter": "c", "text": "Tumor cerebral"},
            {"letter": "d", "text": "Traumatismo craneal"}
        ],
        "correctAnswer": "b",
        "explanation": "Mientras que en los jóvenes la causa suele ser idiopática, en los adultos mayores una convulsión de nueva aparición a menudo es secundaria a una lesión estructural cerebral. El ACV (tanto isquémico como hemorrágico) es la causa subyacente más frecuente en esta población."
    },
    {
        "question": "En la evaluación de un adulto mayor con disnea, ¿qué hallazgo sugiere insuficiencia cardíaca?",
        "options": [
            {"letter": "a", "text": "Sibilancias difusas"},
            {"letter": "b", "text": "Crepitantes en bases pulmonares y edema en extremidades inferiores"},
            {"letter": "c", "text": "Estridor inspiratorio"},
            {"letter": "d", "text": "Ausencia de ruidos pulmonares unilateral"}
        ],
        "correctAnswer": "b",
        "explanation": "Esta combinación de signos es clásica de la insuficiencia cardíaca congestiva. La incapacidad del corazón para bombear eficazmente causa una acumulación de líquido en los pulmones (crepitantes o estertores) y en las extremidades inferiores (edema periférico)."
    },
    {
        "question": "¿Cuál es el manejo inicial más apropiado para un adulto mayor con hipoglucemia severa?",
        "options": [
            {"letter": "a", "text": "Dextrosa 50% 50 ml IV rápido"},
            {"letter": "b", "text": "Dextrosa 10% 100-200 ml IV lento"},
            {"letter": "c", "text": "Glucagón IM solamente"},
            {"letter": "d", "text": "Esperar hasta llegar al hospital"}
        ],
        "correctAnswer": "b",
        "explanation": "La dextrosa al 50% (D50) es muy hipertónica y puede dañar las venas frágiles de los ancianos y causar cambios bruscos de fluidos. Se prefiere usar concentraciones más bajas, como la dextrosa al 10% (D10), para corregir la hipoglucemia de manera más segura y controlada."
    }
]

export const geriatricChallengeQuestions: Question[] = [
    {
        "question": "Un hombre de 82 años con antecedente de diabetes tipo 2 y neuropatía periférica es encontrado por su hija con debilidad generalizada, náuseas y 'no se ve bien' desde hace 2 horas. No refiere dolor torácico. Sus signos vitales son PA 96/58, FC 102, FR 22, SpO2 94%. La hija menciona que el paciente toma metformina, losartán e insulina. ¿Cuál es el razonamiento clínico MÁS apropiado para este cuadro?",
        "options": [
            {"letter": "a", "text": "Como no hay dolor torácico ni fiebre, es poco probable un síndrome coronario agudo; se debe priorizar la búsqueda de hipoglucemia como única causa"},
            {"letter": "b", "text": "La combinación de hipotensión relativa, taquicardia compensatoria y malestar inespecífico en un diabético con neuropatía autonómica es altamente sugestiva de un infarto silente; se debe obtener ECG de 12 derivaciones de inmediato y tratar como síndrome coronario agudo hasta descartarlo"},
            {"letter": "c", "text": "Los síntomas son típicos de un efecto adverso leve de la metformina y solo requieren observación domiciliaria"},
            {"letter": "d", "text": "Debe asumirse deshidratación simple por la edad y tratarse únicamente con líquidos IV sin monitorización cardíaca"}
        ],
        "correctAnswer": "b",
        "explanation": "La neuropatía diabética autonómica y sensorial reduce o elimina la percepción del dolor isquémico, por lo que hasta un tercio de los infartos en adultos mayores diabéticos son 'silentes' o se presentan con equivalentes anginosos como disnea, diaforesis, náuseas o simplemente debilidad y alteración del estado general. La hipotensión relativa junto con taquicardia refleja un intento de compensación cardiovascular, un signo de alarma en un paciente con reserva cardíaca ya disminuida por la edad. Descartar hipoglucemia es razonable pero no debe retrasar ni sustituir la obtención de un ECG de 12 derivaciones, ya que el síndrome coronario agudo es una causa potencialmente letal y tiempo-dependiente que puede coexistir con o disfrazarse de otros procesos. Asumir causas benignas sin ECG e ignorar el contexto cardiovascular pone al paciente en riesgo de un deterioro súbito no anticipado."
    },
    {
        "question": "Una mujer de 84 años con antecedente de fibrilación auricular en tratamiento con warfarina y un episodio reciente de neumonía tratado con un nuevo antibiótico presenta epistaxis espontánea, equimosis extensas en ambos brazos y letargo progresivo en las últimas 24 horas. Su hija dice que 'ha estado más lenta y confundida de lo normal'. ¿Cuál es la interacción farmacológica y el riesgo clínico que debe sospechar el proveedor prehospitalario?",
        "options": [
            {"letter": "a", "text": "Muchos antibióticos comunes (como macrólidos o fluoroquinolonas) potencian el efecto de la warfarina al alterar la flora intestinal y el metabolismo hepático, elevando el INR y el riesgo de hemorragia interna, incluida hemorragia intracraneal, que puede manifestarse como el cambio en el estado mental descrito"},
            {"letter": "b", "text": "La neumonía por sí sola explica la confusión y las equimosis son un hallazgo incidental sin relevancia clínica"},
            {"letter": "c", "text": "La warfarina no interactúa con antibióticos; el sangrado se debe únicamente a fragilidad capilar por la edad"},
            {"letter": "d", "text": "El letargo se debe a efecto sedante del antibiótico y no requiere evaluación neurológica adicional"}
        ],
        "correctAnswer": "a",
        "explanation": "Numerosos antibióticos, especialmente macrólidos, fluoroquinolonas y algunos derivados del trimetoprim-sulfametoxazol, inhiben el metabolismo hepático de la warfarina o alteran la flora intestinal productora de vitamina K, potenciando su efecto anticoagulante y elevando el INR de forma significativa. En un adulto mayor, esto se traduce en un riesgo mucho mayor de hemorragias espontáneas, incluyendo hemorragia intracraneal, que puede presentarse inicialmente solo como un cambio sutil o progresivo en el estado mental (letargo, confusión) sin un traumatismo evidente. La combinación de epistaxis, equimosis extensas y alteración del sensorio en un paciente anticoagulado constituye una emergencia que exige transporte prioritario y notificación temprana al hospital receptor sobre la posible necesidad de reversión de la anticoagulación. Atribuir estos hallazgos únicamente a la neumonía o a la fragilidad capilar ignora una cascada farmacológica peligrosa y potencialmente reversible."
    },
    {
        "question": "Un hombre de 79 años es encontrado en el suelo de su cocina por un vecino. Refiere haber 'tropezado' hace unas horas, tiene dolor leve en la cadera derecha y puede mover la pierna, aunque con dolor. Signos vitales: PA 102/64, FC 96, piel pálida y fría, sin signos externos evidentes de trauma mayor. El paciente toma clopidogrel por un stent coronario. ¿Por qué la evaluación de este paciente requiere un umbral de sospecha mucho más bajo que en un adulto joven con el mismo mecanismo?",
        "options": [
            {"letter": "a", "text": "Porque el paciente puede mover la pierna, lo que descarta fractura y hemorragia significativa"},
            {"letter": "b", "text": "Porque la reserva fisiológica disminuida del anciano, junto con el uso de antiagregantes plaquetarios, permite que exista una pérdida sanguínea interna significativa (p. ej., fractura de cadera oculta o hemorragia retroperitoneal) con signos vitales aparentemente estables o solo sutilmente alterados, retrasando el reconocimiento del shock"},
            {"letter": "c", "text": "Porque los ancianos siempre exageran el dolor y este caso probablemente no representa una lesión real"},
            {"letter": "d", "text": "Porque el clopidogrel no tiene relación con el riesgo de sangrado en fracturas de cadera"}
        ],
        "correctAnswer": "b",
        "explanation": "El envejecimiento reduce la reserva fisiológica cardiovascular, de modo que los mecanismos compensatorios (taquicardia, vasoconstricción) pueden mantener una presión arterial aparentemente aceptable incluso con una pérdida sanguínea significativa, retrasando los signos clásicos de shock hasta una fase de descompensación tardía y súbita. El clopidogrel inhibe la agregación plaquetaria, aumentando sustancialmente el riesgo y la magnitud del sangrado ante cualquier fractura, incluyendo hemorragias ocultas como la retroperitoneal asociada a fracturas de cadera o pélvicas. La piel pálida y fría junto con la taquicardia relativa, a pesar de una presión arterial 'aceptable', son señales tempranas de shock compensado que no deben ignorarse. Por ello, todo anciano con mecanismo de caída, antiagregantes o anticoagulantes y signos sutiles de hipoperfusión debe manejarse como potencial hemorragia interna grave, con transporte prioritario y reevaluación frecuente de signos vitales, en lugar de confiar en la movilidad de la extremidad o la ausencia de deformidad evidente."
    },
    {
        "question": "Un hombre de 88 años que vive con su hijo es traído al servicio de emergencias con pérdida de peso marcada, úlceras por presión en estadio III en sacro y talones, deshidratación evidente y hematomas en forma de dedos en la parte superior de ambos brazos. El paciente está letárgico pero responde preguntas simples de forma coherente y dice repetidamente que 'todo está bien' y que 'no quiere causar problemas'. El hijo se muestra evasivo al preguntar sobre el cuidado diario. ¿Cuál es la conducta MÁS apropiada del proveedor prehospitalario?",
        "options": [
            {"letter": "a", "text": "Aceptar la afirmación del paciente de que 'todo está bien' y no documentar los hallazgos físicos, ya que el paciente tiene derecho a decidir sobre su cuidado"},
            {"letter": "b", "text": "Documentar objetivamente todos los hallazgos físicos (úlceras, hematomas patronados, deshidratación), transportar al paciente evitando confrontar al cuidador en la escena, y notificar la sospecha de negligencia/abuso a las autoridades correspondientes y al personal del hospital receptor"},
            {"letter": "c", "text": "Confrontar inmediatamente al hijo en la escena y acusarlo de abuso antes de trasladar al paciente"},
            {"letter": "d", "text": "No es necesario reportar nada, ya que las úlceras por presión son un hallazgo normal e inevitable en cualquier paciente de 88 años postrado"}
        ],
        "correctAnswer": "b",
        "explanation": "Las úlceras por presión avanzadas, la deshidratación severa y los hematomas con patrones geométricos (como marcas de dedos) son hallazgos altamente sugestivos de negligencia o abuso, especialmente cuando el cuidador se muestra evasivo. Muchas víctimas de abuso o negligencia minimizan o niegan la situación por miedo, dependencia del cuidador, vergüenza o deterioro cognitivo, por lo que la negación verbal del paciente no descarta el maltrato y no debe usarse como justificación para omitir la documentación. El proveedor prehospitalario tiene la obligación legal y ética de documentar objetivamente los hallazgos, evitar confrontaciones en la escena que puedan poner en riesgo la seguridad del equipo o represalias contra el paciente, y notificar la sospecha a través de los canales apropiados (servicios de protección al adulto, autoridades y personal receptor). Ignorar o normalizar estos hallazgos perpetúa un ciclo de daño potencialmente mortal para una población vulnerable."
    },
    {
        "question": "Una mujer de 86 años en una residencia de adultos mayores es evaluada por 'debilidad y confusión' de 3 días de evolución. Ha tenido poca ingesta oral por náuseas. Signos vitales: PA 88/52, FC 118, mucosas secas, piel con turgencia disminuida, y el personal reporta que toma un diurético de asa y un IECA para hipertensión, además de un AINE de venta libre que se automedica por dolor articular. ¿Cuál es la fisiopatología que mejor explica el riesgo de lesión renal aguda en esta paciente?",
        "options": [
            {"letter": "a", "text": "La deshidratación reduce el flujo sanguíneo renal, y la combinación de diurético (que exacerba la depleción de volumen), IECA (que reduce la presión de filtración glomerular al dilatar la arteriola eferente) y AINE (que reduce la perfusión renal al inhibir las prostaglandinas vasodilatadoras de la arteriola aferente) crea una 'triple amenaza' que puede precipitar una lesión renal aguda prerrenal"},
            {"letter": "b", "text": "El envejecimiento renal no afecta la función y estos medicamentos no tienen relación con el riñón"},
            {"letter": "c", "text": "Solo el AINE es relevante; el diurético y el IECA no afectan la perfusión renal"},
            {"letter": "d", "text": "La confusión se debe únicamente a demencia progresiva y no está relacionada con el estado hidroelectrolítico"}
        ],
        "correctAnswer": "a",
        "explanation": "El envejecimiento renal normal ya cursa con una reducción progresiva de la tasa de filtración glomerular y una menor capacidad de concentrar la orina, lo que limita la reserva funcional del riñón ante el estrés. En este caso, la deshidratación por baja ingesta oral reduce el volumen circulante efectivo, mientras que el diurético de asa agrava aún más esa depleción de volumen. El IECA disminuye la presión de filtración al dilatar la arteriola eferente, y el AINE reduce el flujo sanguíneo renal al bloquear la síntesis de prostaglandinas vasodilatadoras en la arteriola aferente; juntos, estos tres fármacos eliminan los mecanismos compensatorios que normalmente protegen la perfusión renal durante la hipovolemia. Esta combinación, conocida informalmente como la 'triple amenaza' o 'triple whammy', es una causa bien documentada de lesión renal aguda prerrenal en adultos mayores y explica tanto la hipotensión y taquicardia como la confusión, que en este contexto probablemente refleja delirium secundario a hipoperfusión cerebral y desequilibrio metabólico, no demencia."
    },
    {
        "question": "Un hijo llama al 911 porque su madre de 81 años, con diagnóstico de demencia tipo Alzheimer leve conocida desde hace 2 años y usualmente orientada en persona y con rutinas estables, comenzó hace 6 horas a mostrarse mucho más confundida de lo habitual, con periodos de agitación seguidos de somnolencia excesiva, y no reconoce a su hijo en ciertos momentos aunque en otros parece lúcida. No tiene fiebre. El hijo insiste en que 'esto no es normal para ella, incluso con su demencia'. ¿Cuál es la interpretación clínica más apropiada y la acción prioritaria?",
        "options": [
            {"letter": "a", "text": "Es la progresión esperada de la demencia de Alzheimer; no se requiere evaluación urgente ni traslado"},
            {"letter": "b", "text": "El cambio agudo (horas) y el curso fluctuante superpuesto a una demencia basal estable son característicos de delirium, que en el adulto mayor suele indicar una causa médica aguda subyacente (infección, alteración metabólica, efecto medicamentoso, hipoxia, entre otras); se debe trasladar y evaluar de forma urgente para identificar y tratar la causa reversible, independientemente de la ausencia de fiebre"},
            {"letter": "c", "text": "La ausencia de fiebre descarta cualquier causa médica aguda, por lo que el cuadro debe atribuirse únicamente a estrés emocional"},
            {"letter": "d", "text": "Como la paciente ya tiene diagnóstico de demencia, cualquier alteración cognitiva nueva debe manejarse igual y no requiere prioridad de traslado"}
        ],
        "correctAnswer": "b",
        "explanation": "La clave diagnóstica es comparar el estado mental actual con el basal conocido del paciente: la demencia produce un deterioro cognitivo lento y progresivo a lo largo de meses o años, con relativa estabilidad día a día, mientras que el delirium se define por un inicio agudo (horas a días) y un curso fluctuante, con alternancia entre agitación, letargo y periodos de mayor lucidez, tal como describe el hijo. En un adulto mayor, la superposición de delirium sobre una demencia preexistente es extremadamente común y a menudo se atribuye erróneamente a 'progresión de la demencia', retrasando el reconocimiento de una causa médica aguda y potencialmente reversible como infección urinaria, neumonía, alteración electrolítica, hipoxia, retención urinaria, dolor no controlado o efecto adverso medicamentoso. La ausencia de fiebre no descarta procesos serios, ya que, como se ha señalado, los adultos mayores frecuentemente no montan una respuesta febril robusta ante infecciones graves. Por ello, todo cambio agudo del estado mental en un paciente con demencia conocida debe tratarse como una posible urgencia médica que requiere evaluación y traslado, no como una simple progresión esperable de su condición basal."
    }
]