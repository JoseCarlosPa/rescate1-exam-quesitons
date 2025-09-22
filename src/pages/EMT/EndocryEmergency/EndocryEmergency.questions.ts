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
