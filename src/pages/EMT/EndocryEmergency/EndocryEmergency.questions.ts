import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es la hipoglucemia y por qué es peligrosa?",
        answer: "La hipoglucemia es una condición donde el nivel de glucosa en sangre es anormalmente bajo. Es peligrosa porque el cerebro necesita un suministro constante de glucosa para funcionar, y una disminución severa puede llevar a un estado mental alterado, convulsiones o incluso la pérdida de conciencia si no se trata rápidamente.",
    },
    {
        question: "¿Cuáles son los signos y síntomas clave de la hiperglucemia?",
        answer: "Los signos y síntomas de la hiperglucemia incluyen sed excesiva (polidipsia), micción frecuente (poliuria), hambre excesiva (polifagia), aliento con olor afrutado (especialmente en cetoacidosis diabética), respiración rápida y profunda (Kussmaul), piel seca y caliente, y fatiga.",
    },
    {
        question: "¿Cómo debe actuar un TAMP ante un paciente con hipoglucemia que está consciente?",
        answer: "Si el paciente con hipoglucemia está consciente y es capaz de tragar, el TAMP debe administrar glucosa oral (por ejemplo, tabletas de glucosa, gel oral, jugo de frutas o bebidas azucaradas no dietéticas). Es fundamental monitorear el estado de conciencia y asegurar la vía aérea.",
    },
    {
        question: "¿Qué es la enfermedad de células falciformes y qué la causa?",
        answer: "La enfermedad de células falciformes es un trastorno genético hereditario que afecta los glóbulos rojos. En lugar de ser redondos y flexibles, los glóbulos rojos adquieren una forma de 'hoz' o 'media luna', lo que les impide fluir libremente por los vasos sanguíneos, causando obstrucciones, dolor y daño a órganos.",
    },
    {
        question: "¿Qué precauciones especiales debe tomar un TAMP con pacientes que padecen hemofilia?",
        answer: "Con pacientes hemofílicos, el TAMP debe evitar, en la medida de lo posible, procedimientos invasivos como inyecciones intramusculares. Es crucial controlar cualquier sangrado con presión directa firme y prolongada, aplicar hielo si es apropiado, y asegurar un transporte rápido al hospital para el manejo definitivo.",
    },
    {
        question: "¿Cuál es la principal diferencia entre la cetoacidosis diabética (CAD) y el estado hiperosmolar hiperglucémico (EHH)?",
        answer: "La cetoacidosis diabética (CAD) es más común en pacientes con diabetes tipo 1 y se caracteriza por hiperglucemia severa, deshidratación, y la acumulación de cetonas que llevan a acidosis metabólica. El estado hiperosmolar hiperglucémico (EHH), más frecuente en diabetes tipo 2, implica una hiperglucemia extremadamente alta y deshidratación severa sin la presencia significativa de cetonas o acidosis."
    },
    {
        question: "¿Qué papel juega el glucagón en el cuerpo y en qué situaciones médicas es relevante?",
        answer: "El glucagón es una hormona producida por el páncreas que tiene el efecto opuesto a la insulina: eleva los niveles de glucosa en la sangre al estimular al hígado para que libere glucosa almacenada. Es relevante en emergencias diabéticas, especialmente en el tratamiento de la hipoglucemia severa cuando la administración oral de glucosa no es posible o efectiva."
    }
];

export const endocrineHematologicQuestions: Question[] = [
    {
        "question": "¿Cuál de las siguientes hormonas es responsable de reducir los niveles de glucosa en la sangre?",
        "options": [
            {"letter": "a", "text": "Glucagón"},
            {"letter": "b", "text": "Epinefrina"},
            {"letter": "c", "text": "Insulina"},
            {"letter": "d", "text": "Cortisol"}
        ],
        "correctAnswer": "c",
        "explanation": "La insulina, producida por el páncreas, actúa como una 'llave' que permite que la glucosa pase del torrente sanguíneo a las células para ser utilizada como energía. Este proceso reduce eficazmente la concentración de glucosa en la sangre."
    },
    {
        "question": "Un paciente diabético que ha estado haciendo ejercicio intenso y no ha comido en varias horas, ¿cuál de los siguientes es el riesgo más inminente?",
        "options": [
            {"letter": "a", "text": "Hiperglucemia grave"},
            {"letter": "b", "text": "Cetoacidosis diabética"},
            {"letter": "c", "text": "Hipoglucemia"},
            {"letter": "d", "text": "Estado hiperosmolar hiperglucémico"}
        ],
        "correctAnswer": "c",
        "explanation": "El ejercicio consume la glucosa disponible. Si el paciente es diabético y usa insulina, esta seguirá actuando. La combinación del consumo de glucosa por el ejercicio y la acción de la insulina sin una nueva ingesta de alimentos puede provocar una caída peligrosa de los niveles de azúcar en sangre (hipoglucemia)."
    },
    {
        "question": "¿Cuál de los siguientes órganos es más vulnerable a sufrir daño permanente y rápido por niveles de glucosa extremadamente bajos?",
        "options": [
            {"letter": "a", "text": "Corazón"},
            {"letter": "b", "text": "Riñones"},
            {"letter": "c", "text": "Hígado"},
            {"letter": "d", "text": "Cerebro"}
        ],
        "correctAnswer": "d",
        "explanation": "El cerebro depende casi exclusivamente de la glucosa como fuente de energía y no puede almacenarla. La falta de glucosa (hipoglucemia) interrumpe su función rápidamente, llevando a alteración mental, convulsiones, coma y daño cerebral irreversible si no se corrige a tiempo."
    },
    {
        "question": "Un TAMP evalúa a un paciente diabético con alteración del estado mental. ¿Cuál sería la primera pregunta vital a hacer para orientar el manejo inicial?",
        "options": [
            {"letter": "a", "text": "¿Ha tomado sus medicamentos hoy?"},
            {"letter": "b", "text": "¿Cuándo fue la última vez que comió o ingirió líquidos azucarados?"},
            {"letter": "c", "text": "¿Tiene antecedentes de problemas cardíacos?"},
            {"letter": "d", "text": "¿Siente algún dolor en el pecho?"}
        ],
        "correctAnswer": "b",
        "explanation": "La hipoglucemia es la emergencia diabética que más rápidamente amenaza la vida. Preguntar sobre la última ingesta de alimentos ayuda a evaluar rápidamente el riesgo de hipoglucemia y a diferenciarla de la hiperglucemia, que suele tener un desarrollo más lento."
    },
    {
        "question": "Un nivel normal de glucosa en sangre en ayunas se considera típicamente dentro del rango de:",
        "options": [
            {"letter": "a", "text": "Menos de 60 mg/dL"},
            {"letter": "b", "text": "70-110 mg/dL"},
            {"letter": "c", "text": "120-180 mg/dL"},
            {"letter": "d", "text": "Más de 200 mg/dL"}
        ],
        "correctAnswer": "b",
        "explanation": "El rango de 70 a 110 mg/dL se considera el estándar para una glucemia normal en un adulto en ayunas. Valores por debajo de 70 mg/dL indican hipoglucemia y valores consistentemente por encima de 126 mg/dL en ayunas pueden indicar diabetes."
    },
    {
        "question": "¿Cuál es un signo y síntoma temprano común en la hipoglucemia?",
        "options": [
            {"letter": "a", "text": "Aliento afrutado"},
            {"letter": "b", "text": "Piel seca y caliente"},
            {"letter": "c", "text": "Sudoración profusa y piel fría/húmeda"},
            {"letter": "d", "text": "Micción frecuente"}
        ],
        "correctAnswer": "c",
        "explanation": "En la hipoglucemia, el cuerpo libera hormonas como la adrenalina para intentar subir los niveles de glucosa. Esta respuesta adrenérgica causa sudoración (diaforesis), temblores, ansiedad y una piel pálida, fría y pegajosa. Los otros signos son característicos de la hiperglucemia."
    },
    {
        "question": "En un paciente con diabetes, la respiración de Kussmaul (profunda y rápida) es un signo clásico de:",
        "options": [
            {"letter": "a", "text": "Hipoglucemia severa"},
            {"letter": "b", "text": "Reacción alérgica a la insulina"},
            {"letter": "c", "text": "Cetoacidosis diabética"},
            {"letter": "d", "text": "Estado hiperosmolar no cetósico"}
        ],
        "correctAnswer": "c",
        "explanation": "La cetoacidosis diabética (CAD) produce una acumulación de ácidos (cetonas) en la sangre. El cuerpo intenta compensar esta acidosis metabólica eliminando dióxido de carbono (un ácido) a través de los pulmones, lo que resulta en un patrón respiratorio profundo y rápido conocido como respiración de Kussmaul."
    },
    {
        "question": "Si un paciente diabético inconsciente es encontrado, y no se tiene un glucómetro disponible, ¿cuál es la acción más apropiada para un TAMP basada en la alta mortalidad de una condición específica?",
        "options": [
            {"letter": "a", "text": "Asumir hiperglucemia y esperar los paramédicos avanzados."},
            {"letter": "b", "text": "Asumir hipoglucemia y administrar glucosa oral si es posible."},
            {"letter": "c", "text": "Asumir hipoglucemia y no administrar nada oralmente por riesgo de aspiración."},
            {"letter": "d", "text": "Administrar glucagón si está autorizado o transportar rápidamente."}
        ],
        "correctAnswer": "d",
        "explanation": "La hipoglucemia no tratada puede causar daño cerebral irreversible y la muerte mucho más rápido que la hiperglucemia. Dado que un paciente inconsciente no puede tragar de forma segura, la administración oral está contraindicada. La prioridad es el tratamiento definitivo (glucagón intramuscular o dextrosa IV) o el transporte inmediato."
    },
    {
        "question": "¿Cuál de las siguientes NO es una característica de la enfermedad de células falciformes?",
        "options": [
            {"letter": "a", "text": "Glóbulos rojos con forma de hoz"},
            {"letter": "b", "text": "Riesgo de oclusiones vasculares"},
            {"letter": "c", "text": "Aumento de la capacidad de transporte de oxígeno de la sangre"},
            {"letter": "d", "text": "Episodios de dolor agudo (crisis vaso-oclusivas)"}
        ],
        "correctAnswer": "c",
        "explanation": "La forma anormal de hoz de los glóbulos rojos en esta enfermedad compromete su flexibilidad y su capacidad para transportar oxígeno de manera eficiente. Esta forma anómala es la que provoca que se atasquen en los vasos pequeños, causando las crisis de dolor."
    },
    {
        "question": "Un paciente con hemofilia sufre un traumatismo menor y empieza a sangrar. ¿Cuál es la prioridad inmediata del TAMP?",
        "options": [
            {"letter": "a", "text": "Administrar aspirina para el dolor."},
            {"letter": "b", "text": "Controlar el sangrado con presión directa y transportar rápidamente."},
            {"letter": "c", "text": "Aplicar un torniquete de inmediato."},
            {"letter": "d", "text": "Esperar a que el sangrado se detenga por sí solo."}
        ],
        "correctAnswer": "b",
        "explanation": "La hemofilia es un trastorno de la coagulación. Incluso un traumatismo menor puede causar una hemorragia prolongada. El manejo prehospitalario se centra en el control básico del sangrado (presión directa) y el transporte urgente a un hospital para recibir terapia de reemplazo del factor de coagulación deficiente."
    },
    {
        "question": "¿Cuál de los siguientes es un factor de riesgo para el desarrollo de un estado hiperosmolar hiperglucémico (EHH) en un paciente diabético tipo 2?",
        "options": [
            {"letter": "a", "text": "Omisión de dosis de insulina"},
            {"letter": "b", "text": "Infección o enfermedad aguda"},
            {"letter": "c", "text": "Ejercicio extenuante sin ingesta de alimentos"},
            {"letter": "d", "text": "Consumo excesivo de alcohol"}
        ],
        "correctAnswer": "b",
        "explanation": "El EHH suele ser desencadenado por un estrés fisiológico, como una infección (neumonía, ITU). Este estrés aumenta la glucosa en sangre y causa una deshidratación severa, llevando a niveles de glucosa extremadamente altos sin la presencia significativa de cetonas."
    },
    {
        "question": "Un TAMP se encuentra con un paciente diabético que presenta un estado mental alterado, piel caliente y seca, y aliento con olor afrutado. ¿Cuál es la condición más probable?",
        "options": [
            {"letter": "a", "text": "Hipoglucemia"},
            {"letter": "b", "text": "Cetoacidosis diabética"},
            {"letter": "c", "text": "Reacción insulínica"},
            {"letter": "d", "text": "Accidente cerebrovascular"}
        ],
        "correctAnswer": "b",
        "explanation": "Esta es la tríada clásica de la Cetoacidosis Diabética (CAD). La piel caliente y seca se debe a la deshidratación, la alteración mental es por la deshidratación y la acidosis, y el aliento afrutado es por la exhalación de cetonas (específicamente, acetona)."
    },
    {
        "question": "¿Qué tipo de diabetes mellitus generalmente se desarrolla en la infancia y requiere insulina exógena para su manejo?",
        "options": [
            {"letter": "a", "text": "Diabetes gestacional"},
            {"letter": "b", "text": "Diabetes tipo 2"},
            {"letter": "c", "text": "Diabetes insípida"},
            {"letter": "d", "text": "Diabetes tipo 1"}
        ],
        "correctAnswer": "d",
        "explanation": "La diabetes tipo 1 es una enfermedad autoinmune en la que el cuerpo destruye las células beta del páncreas, que son las que producen insulina. Suele diagnosticarse en la infancia o la juventud y requiere tratamiento con insulina de por vida."
    },
    {
        "question": "Cuando un TAMP evalúa el nivel de glucosa en sangre de un paciente diabético inconsciente y el resultado es de 45 mg/dL, esto indica:",
        "options": [
            {"letter": "a", "text": "Hiperglucemia leve"},
            {"letter": "b", "text": "Nivel de glucosa normal"},
            {"letter": "c", "text": "Hipoglucemia severa"},
            {"letter": "d", "text": "Cetoacidosis diabética"}
        ],
        "correctAnswer": "c",
        "explanation": "Un nivel de glucosa en sangre por debajo de 70 mg/dL se considera hipoglucemia. Un valor de 45 mg/dL en un paciente inconsciente es una emergencia crítica que indica una hipoglucemia severa que requiere corrección inmediata para prevenir daño cerebral."
    },
    {
        "question": "La 'crisis vaso-oclusiva' es el síntoma más común y distintivo de cuál de las siguientes condiciones:",
        "options": [
            {"letter": "a", "text": "Hemofilia"},
            {"letter": "b", "text": "Anemia aplásica"},
            {"letter": "c", "text": "Enfermedad de células falciformes"},
            {"letter": "d", "text": "Leucemia"}
        ],
        "correctAnswer": "c",
        "explanation": "La crisis vaso-oclusiva es el sello distintivo de la enfermedad de células falciformes. Ocurre cuando los glóbulos rojos en forma de hoz se atascan en los vasos sanguíneos pequeños, bloqueando el flujo de sangre y causando isquemia tisular y dolor intenso."
    }
]

export const endocrineHematologicChallengeQuestions: Question[] = [
    {
        "question": "Un paciente de 68 años con diabetes tipo 2 es encontrado por su familia con confusión progresiva de tres días de evolución. No refieren vómito ni dolor abdominal. Los signos vitales muestran PA 92/58, FC 118, piel muy seca y turgencia disminuida marcadamente, sin aliento afrutado ni respiración de Kussmaul. La glucemia capilar marca 'HIGH' (por encima del rango del glucómetro). ¿Cuál es la explicación fisiopatológica más probable de este cuadro y su implicación para el manejo prehospitalario?",
        "options": [
            {"letter": "a", "text": "Se trata de cetoacidosis diabética atípica sin cetonas; el manejo prioritario es la administración de bicarbonato para corregir la acidosis subyacente."},
            {"letter": "b", "text": "Es un estado hiperosmolar hiperglucémico (EHH); como en la diabetes tipo 2 persiste suficiente insulina residual para suprimir la lipólisis y cetogénesis, la hiperglucemia extrema produce diuresis osmótica masiva y deshidratación severa sin acidosis significativa, por lo que la prioridad es el reemplazo agresivo de volumen y el transporte rápido."},
            {"letter": "c", "text": "Es una hipoglucemia severa con respuesta adrenérgica compensatoria; se debe administrar glucosa oral de inmediato."},
            {"letter": "d", "text": "Es una crisis tiroidea independiente de la diabetes; el manejo debe enfocarse en enfriamiento activo y betabloqueo."}
        ],
        "correctAnswer": "b",
        "explanation": "La ausencia de aliento afrutado y de respiración de Kussmaul, junto con una hiperglucemia extrema y deshidratación profunda de instauración lenta (días), es la presentación clásica del EHH y no de la CAD. En la diabetes tipo 2 suele quedar suficiente insulina endógena circulante para inhibir la lipólisis periférica, por lo que no se generan cuerpos cetónicos ni acidosis metabólica significativa, a diferencia de la CAD donde la deficiencia casi absoluta de insulina permite la cetogénesis descontrolada. El déficit de insulina residual sí es insuficiente para controlar la glucemia, generando hiperglucemia extrema, diuresis osmótica y pérdida masiva de agua libre que explica la hipotensión, taquicardia y piel seca. El manejo prehospitalario se centra en reposición de volumen y transporte rápido, ya que el EHH tiene una mortalidad más alta que la CAD debido al grado de deshidratación e hiperosmolaridad."
    },
    {
        "question": "Un paciente diabético tipo 1 de 30 años es hallado por colegas de trabajo con diaforesis profusa, temblor y comportamiento agresivo e irracional; uno de ellos comenta que 'huele a alcohol' y sugiere que está intoxicado. El paciente está combativo pero puede tragar. ¿Cuál es el razonamiento clínico más apropiado para el TAMP en este escenario?",
        "options": [
            {"letter": "a", "text": "Asumir intoxicación etílica dado el antecedente reportado y priorizar la seguridad de la escena sin intervención médica inmediata."},
            {"letter": "b", "text": "Tratar como hipoglucemia hasta demostrar lo contrario: la presentación de diaforesis, temblor y alteración conductual en un diabético tipo 1 es indistinguible clínicamente de la intoxicación etílica, pero la hipoglucemia no tratada progresa rápidamente a daño neurológico irreversible, por lo que se debe medir glucemia y administrar glucosa oral si el paciente puede proteger su vía aérea."},
            {"letter": "c", "text": "Administrar naloxona empíricamente ante la posibilidad de una sobredosis de opioides concomitante."},
            {"letter": "d", "text": "Restringir físicamente al paciente y transportarlo sin intervención hasta la evaluación hospitalaria, ya que intervenir podría empeorar la agitación."}
        ],
        "correctAnswer": "b",
        "explanation": "La hipoglucemia produce una respuesta neuroglucopénica y adrenérgica (liberación de catecolaminas) que se manifiesta con diaforesis, temblor, confusión y conducta agresiva o irracional, un cuadro que se confunde fácilmente con intoxicación por alcohol u otras sustancias; este solapamiento es una fuente frecuente de error diagnóstico prehospitalario. La regla de oro en cualquier diabético con alteración conductual o del estado mental es descartar hipoglucemia antes de atribuir el cuadro a otra causa, porque el cerebro depende casi exclusivamente de la glucosa y una hipoglucemia sostenida puede causar convulsiones, coma y lesión neuronal permanente en minutos. Como el paciente aún puede tragar y proteger su vía aérea, la glucosa oral es apropiada; si estuviera inconsciente estaría contraindicada por riesgo de aspiración y se preferiría glucagón intramuscular o dextrosa IV."
    },
    {
        "question": "Un paciente de 45 años con antecedente de insuficiencia adrenal primaria (enfermedad de Addison) que suspendió su hidrocortisona oral hace cuatro días por un cuadro gastrointestinal presenta ahora debilidad extrema, hipotensión que no mejora con dos bolos de cristaloides, dolor abdominal difuso y estado mental confuso. ¿Cuál es el mecanismo fisiopatológico central de esta crisis y por qué los fluidos por sí solos no revierten completamente el cuadro?",
        "options": [
            {"letter": "a", "text": "El paciente tiene una deshidratación simple por la gastroenteritis; los fluidos adicionales corregirán el cuadro en poco tiempo."},
            {"letter": "b", "text": "La suspensión del corticoide exógeno elimina el reemplazo de cortisol y mineralocorticoides; sin cortisol disminuye la sensibilidad vascular a las catecolaminas y sin aldosterona se pierde sodio y agua mientras se retiene potasio, generando hipotensión refractaria a volumen que requiere reemplazo de corticoesteroides además de líquidos."},
            {"letter": "c", "text": "Se trata de una reacción anafiláctica tardía a la hidrocortisona previa, por lo que se debe administrar epinefrina intramuscular."},
            {"letter": "d", "text": "El cuadro corresponde a una cetoacidosis diabética enmascarada; se debe priorizar la medición de cetonas urinarias sobre cualquier otra intervención."},
        ],
        "correctAnswer": "b",
        "explanation": "En la insuficiencia adrenal primaria, el paciente depende del corticoide exógeno para sustituir tanto el cortisol como, indirectamente, la función mineralocorticoide; la interrupción abrupta durante un estrés fisiológico agudo (la gastroenteritis) desencadena una crisis addisoniana. El cortisol es necesario para mantener la respuesta vascular normal a catecolaminas y para la gluconeogénesis; su ausencia produce vasodilatación e hipotensión que responde pobremente a la reposición de volumen aislada. La deficiencia concomitante de aldosterona provoca natriuresis, pérdida de volumen intravascular e hiperkalemia, agravando aún más la hipotensión y pudiendo generar arritmias. Por ello el tratamiento definitivo requiere la administración de corticoesteroides (hidrocortisona) además de líquidos IV, ya que el volumen por sí solo no corrige el déficit hormonal subyacente."
    },
    {
        "question": "Una paciente de 52 años con hipertiroidismo mal controlado que recientemente tuvo una infección respiratoria presenta fiebre de 39.8°C, taquicardia sinusal a 160/min, agitación extrema, temblor fino y diaforesis profusa. Su familia niega uso de estimulantes o drogas. ¿Cuál es la condición más probable y cuál es la razón por la que el reconocimiento prehospitalario temprano es crítico?",
        "options": [
            {"letter": "a", "text": "Sepsis de origen respiratorio no complicada; el manejo se limita a antipiréticos y transporte de rutina."},
            {"letter": "b", "text": "Tempestad o crisis tiroidea (thyroid storm): el exceso masivo de hormona tiroidea circulante, precipitado por el estrés infeccioso, produce un estado hipermetabólico extremo con riesgo de insuficiencia cardíaca de alto gasto, arritmias e hipertermia potencialmente fatal, por lo que requiere reconocimiento y transporte urgente, incluyendo medidas de enfriamiento activo."},
            {"letter": "c", "text": "Crisis de pánico secundaria al proceso infeccioso; se recomienda manejo conductual y observación."},
            {"letter": "d", "text": "Hipoglucemia con respuesta adrenérgica exagerada; se debe administrar glucosa oral de inmediato."}
        ],
        "correctAnswer": "b",
        "explanation": "La tempestad tiroidea es una emergencia endocrina poco frecuente pero letal en la que un exceso extremo de hormonas tiroideas, habitualmente desencadenado por un estrés fisiológico agudo como una infección, cirugía o trauma en un paciente con hipertiroidismo subyacente, produce un estado hipermetabólico exagerado. Esto se traduce clínicamente en fiebre alta, taquicardia marcada que puede degenerar en arritmias, agitación o delirio, y diaforesis, y puede progresar rápidamente a insuficiencia cardíaca de alto gasto y colapso cardiovascular si no se trata. Debido a que el cuadro imita otras causas de taquicardia e hipertermia (sepsis, intoxicación por estimulantes), el antecedente de enfermedad tiroidea y el desencadenante identificable son claves diagnósticas; el manejo prehospitalario incluye enfriamiento activo, soporte cardiovascular y transporte urgente, ya que el retraso aumenta significativamente la mortalidad."
    },
    {
        "question": "Un paciente de 24 años con enfermedad de células falciformes conocida presenta dolor torácico agudo, disnea progresiva y fiebre de 38.5°C tras un viaje en autobús de larga distancia sin calefacción adecuada. La saturación de oxígeno es de 89% con aire ambiente. ¿Cuál es la complicación más probable y qué justifica su elevada gravedad respecto a una crisis vaso-oclusiva típica?",
        "options": [
            {"letter": "a", "text": "Una crisis de dolor vaso-oclusiva común de tórax; el manejo se limita a analgesia y calor local."},
            {"letter": "b", "text": "Síndrome torácico agudo: la vaso-oclusión pulmonar por eritrocitos falciformes, agravada por hipoxia, frío e infección, causa infarto pulmonar e insuficiencia respiratoria progresiva, y constituye la principal causa de muerte en adultos con esta enfermedad, por lo que requiere oxígeno suplementario inmediato y transporte urgente."},
            {"letter": "c", "text": "Un ataque de asma desencadenado por el frío ambiental, sin relación con la enfermedad de base."},
            {"letter": "d", "text": "Una reacción alérgica tardía; se debe administrar epinefrina intramuscular de inmediato."}
        ],
        "correctAnswer": "b",
        "explanation": "El síndrome torácico agudo es una de las complicaciones más graves de la enfermedad de células falciformes y se presenta con dolor torácico, fiebre, disnea e hipoxemia, frecuentemente precipitado por frío, deshidratación, hipoxia o infección, factores que estaban presentes en el viaje descrito. La vaso-oclusión de la microvasculatura pulmonar por los eritrocitos falciformes produce infarto e inflamación del parénquino pulmonar, lo que puede evolucionar rápidamente a insuficiencia respiratoria franca. A diferencia de una crisis vaso-oclusiva dolorosa aislada en una extremidad, el compromiso pulmonar amenaza directamente la oxigenación y es la principal causa de mortalidad en adultos con esta enfermedad, lo que obliga a priorizar oxígeno suplementario, monitoreo respiratorio estrecho y transporte urgente en lugar de solo manejo analgésico."
    },
    {
        "question": "Un paciente de 19 años con hemofilia A severa sufre una caída de bicicleta y golpea su cabeza contra el pavimento. No presenta laceraciones visibles, está alerta y orientado, y niega pérdida de conciencia, pero refiere cefalea leve. ¿Cuál es la consideración clínica más crítica que debe guiar la decisión de transporte del TAMP, incluso en ausencia de signos externos evidentes de sangrado?",
        "options": [
            {"letter": "a", "text": "Como el paciente está alerta y sin sangrado visible, puede ser dado de alta en el sitio con recomendaciones de observación domiciliaria."},
            {"letter": "b", "text": "El riesgo real es la hemorragia intracraneal oculta: la deficiencia del factor de coagulación impide la formación de un coágulo estable, por lo que incluso un traumatismo craneal de apariencia menor puede generar una hemorragia intracraneal progresiva y potencialmente letal sin signos externos, lo que obliga a un transporte urgente para evaluación y reemplazo temprano del factor deficiente."},
            {"letter": "c", "text": "La prioridad es aplicar hielo local en el cuero cabelludo y reevaluar en 24 horas antes de decidir el transporte."},
            {"letter": "d", "text": "Se debe administrar aspirina para el dolor y transportar de forma no urgente si el dolor persiste."}
        ],
        "correctAnswer": "b",
        "explanation": "En la hemofilia, la deficiencia del factor VIII (hemofilia A) impide la formación y estabilización adecuada del coágulo de fibrina, lo que significa que cualquier sangrado, incluido el intracraneal, puede progresar de forma lenta pero sostenida durante horas sin que existan signos externos evidentes en el momento inicial. Un traumatismo craneal que en un paciente sin trastorno de coagulación sería de bajo riesgo puede en un hemofílico evolucionar a un hematoma intracraneal expansivo, ya que el sangrado no se autolimita como en una persona con hemostasia normal. Por esta razón, el estándar de manejo prehospitalario en pacientes hemofílicos con trauma craneal, incluso leve y sin pérdida de conciencia, es el transporte urgente para evaluación por imagen y administración temprana de concentrado del factor deficiente, ya que el tiempo hasta el reemplazo del factor es determinante en el pronóstico neurológico."
    }
]
