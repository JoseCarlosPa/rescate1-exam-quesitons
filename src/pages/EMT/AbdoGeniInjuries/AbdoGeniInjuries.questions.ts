import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Cuál es la principal diferencia entre los órganos sólidos y los órganos huecos del abdomen?",
        answer: "Los órganos sólidos (como el hígado, bazo, riñones y páncreas) contienen una gran cantidad de vasos sanguíneos, por lo que su lesión suele provocar una hemorragia severa y shock. Los órganos huecos (como el estómago, intestinos y vejiga) contienen diversas sustancias que, al derramarse por una ruptura, causan peritonitis (una grave inflamación e infección de la cavidad abdominal).",
    },
    {
        question: "¿Qué es una evisceración y cómo debe manejarse?",
        answer: "Una evisceración es la protrusión de órganos abdominales a través de una herida abierta. No se debe intentar reintroducir los órganos. El manejo correcto es cubrirlos con un apósito estéril grande y húmedo, y luego colocar un apósito oclusivo por encima para mantener la humedad y el calor. El paciente debe ser transportado rápidamente.",
    },
    {
        question: "Mencione un órgano importante en cada uno de los cuatro cuadrantes abdominales.",
        answer: "• Cuadrante Superior Derecho (CSD): Hígado. \n• Cuadrante Superior Izquierdo (CSI): Bazo. \n• Cuadrante Inferior Derecho (CID): Apéndice. \n• Cuadrante Inferior Izquierdo (CII): Colon sigmoide.",
    },
    {
        question: "¿Qué es el signo de Kehr y qué lesión puede indicar?",
        answer: "El signo de Kehr es un dolor referido al hombro izquierdo. Es un signo clásico de irritación del diafragma, comúnmente causado por una hemorragia proveniente de una ruptura del bazo.",
    },
    {
        question: "¿Qué es el espacio retroperitoneal?",
        answer: "Es el área anatómica ubicada detrás de la cavidad abdominal. Contiene órganos importantes como los riñones, el páncreas y grandes vasos como la aorta y la vena cava. Las lesiones en esta área pueden causar hemorragias masivas que son difíciles de detectar.",
    },
    {
        question: "¿Cuál es el principal signo de una lesión renal o del sistema urinario?",
        answer: "La hematuria, o sangre en la orina, es el signo más común de una lesión en los riñones o la vejiga. También puede haber dolor en el flanco (la parte baja de la espalda y los costados).",
    },
    {
        question: "En un traumatismo cerrado de abdomen, ¿cuál es el órgano más frecuentemente lesionado?",
        answer: "El bazo es el órgano más comúnmente lesionado en traumatismos abdominales cerrados, seguido por el hígado. Ambos pueden sangrar profusamente.",
    },
    {
        question: "Al evaluar un abdomen, ¿qué significan los términos 'defensa' (guarding) y 'rigidez'?",
        answer: "La 'defensa' es la contracción voluntaria de los músculos abdominales por parte del paciente para evitar el dolor durante la palpación. La 'rigidez' (o 'abdomen en tabla') es una contracción involuntaria y persistente de los músculos abdominales, y es un signo de irritación peritoneal significativa.",
    },
];


export const abdoBeniInjuriesQuestions: Question[] = [
    {
        "question": "Un paciente que sufrió un impacto con el volante en un choque vehicular se queja de dolor severo en el cuadrante superior izquierdo del abdomen y en el hombro izquierdo. ¿Qué lesión es más probable?",
        "options": [
            {"letter": "a", "text": "Laceración hepática"},
            {"letter": "b", "text": "Ruptura de bazo"},
            {"letter": "c", "text": "Fractura de las costillas inferiores derechas"},
            {"letter": "d", "text": "Contusión pancreática"}
        ],
        "correctAnswer": "b",
        "explanation": "El bazo se encuentra en el cuadrante superior izquierdo. Una lesión en este órgano puede irritar el diafragma, causando un dolor referido al hombro izquierdo, conocido como signo de Kehr. Esta combinación de dolor en el CSI y el hombro izquierdo es clásica de una lesión esplénica."
    },
    {
        "question": "Usted atiende a un paciente con una herida por arma blanca en el abdomen, con un asa intestinal visible. El tratamiento adecuado incluye:",
        "options": [
            {"letter": "a", "text": "Intentar reintroducir suavemente el intestino en la cavidad abdominal"},
            {"letter": "b", "text": "Cubrir la herida con un apósito estéril húmedo y luego uno oclusivo"},
            {"letter": "c", "text": "Aplicar un vendaje compresivo apretado para controlar la hemorragia"},
            {"letter": "d", "text": "Lavar la herida y el intestino con solución salina antes de cubrir"}
        ],
        "correctAnswer": "b",
        "explanation": "En una evisceración abdominal, nunca se debe intentar reintroducir los órganos. El manejo correcto es cubrirlos con un apósito estéril empapado en solución salina para evitar que se sequen, y luego aplicar un vendaje oclusivo por los cuatro lados para mantener el calor y la humedad, y prevenir la contaminación."
    },
    {
        "question": "La lesión de un órgano hueco, como el intestino delgado, tiene más probabilidades de causar:",
        "options": [
            {"letter": "a", "text": "Hemorragia masiva y shock hipovolémico"},
            {"letter": "b", "text": "Peritonitis debido al derrame de contenido bacteriano"},
            {"letter": "c", "text": "Una contusión cardíaca por la fuerza del impacto"},
            {"letter": "d", "text": "Insuficiencia renal aguda"}
        ],
        "correctAnswer": "b",
        "explanation": "Los órganos huecos (estómago, intestinos, vejiga) contienen sustancias (ácido, heces, orina) que, al derramarse en la cavidad abdominal, causan una inflamación e infección severa del peritoneo, conocida como peritonitis. Si bien pueden sangrar, la hemorragia masiva es más característica de los órganos sólidos."
    },
    {
        "question": "Un paciente con traumatismo cerrado de abdomen presenta equimosis alrededor del ombligo (signo de Cullen). Este hallazgo tardío es indicativo de:",
        "options": [
            {"letter": "a", "text": "Una úlcera gástrica perforada"},
            {"letter": "b", "text": "Una fractura pélvica"},
            {"letter": "c", "text": "Sangrado retroperitoneal"},
            {"letter": "d", "text": "Una laceración superficial de la pared abdominal"}
        ],
        "correctAnswer": "c",
        "explanation": "El signo de Cullen (equimosis periumbilical) y el signo de Grey Turner (equimosis en los flancos) son hallazgos tardíos que indican la presencia de una hemorragia en el espacio retroperitoneal. La sangre se filtra a través de los tejidos y se hace visible en la superficie horas después de la lesión."
    },
    {
        "question": "El hígado se encuentra predominantemente en el:",
        "options": [
            {"letter": "a", "text": "Cuadrante superior derecho"},
            {"letter": "b", "text": "Cuadrante superior izquierdo"},
            {"letter": "c", "text": "Cuadrante inferior derecho"},
            {"letter": "d", "text": "Cuadrante inferior izquierdo"}
        ],
        "correctAnswer": "a",
        "explanation": "Anatómicamente, el hígado, el órgano sólido más grande del abdomen, se localiza principalmente en el cuadrante superior derecho (CSD), protegido por las costillas inferiores. Un traumatismo en esta área debe generar un alto índice de sospecha de lesión hepática."
    },
    {
        "question": "Al tratar a un paciente con un objeto grande empalado en el abdomen, la acción correcta es:",
        "options": [
            {"letter": "a", "text": "Retirar el objeto cuidadosamente para evaluar la profundidad de la herida"},
            {"letter": "b", "text": "Cortar el objeto a ras de la piel para facilitar el transporte"},
            {"letter": "c", "text": "Estabilizar el objeto en su lugar con apósitos voluminosos y no moverlo"},
            {"letter": "d", "text": "Mover el objeto para determinar si hay sangrado activo"}
        ],
        "correctAnswer": "c",
        "explanation": "La regla de oro para objetos empalados es NUNCA retirarlos en el campo. El objeto puede estar taponando un vaso sanguíneo importante, y su extracción podría causar una hemorragia fatal. La atención se centra en estabilizar el objeto para evitar que se mueva y cause más daño durante el transporte."
    },
    {
        "question": "Un hombre presenta una avulsión completa del pene. El manejo de la parte amputada debe incluir:",
        "options": [
            {"letter": "a", "text": "Colocarla directamente en hielo para su preservación"},
            {
                "letter": "b",
                "text": "Envolverla en un apósito estéril, colocarla en una bolsa de plástico y mantenerla fría"
            },
            {"letter": "c", "text": "Desecharla ya que no es posible re-implantarla"},
            {"letter": "d", "text": "Sumergirla en solución salina estéril a temperatura ambiente"}
        ],
        "correctAnswer": "b",
        "explanation": "Para preservar una parte amputada con posibilidades de reimplante, se debe envolver en un apósito estéril (seco o húmedo según protocolo), sellarla en una bolsa de plástico y colocar esa bolsa sobre hielo o una compresa fría. El contacto directo con el hielo puede causar congelación y dañar el tejido."
    },
    {
        "question": "En una paciente embarazada que sufre un traumatismo abdominal, una de las mayores preocupaciones es la separación prematura de la placenta de la pared uterina, una condición conocida como:",
        "options": [
            {"letter": "a", "text": "Placenta previa"},
            {"letter": "b", "text": "Embarazo ectópico"},
            {"letter": "c", "text": "Ruptura uterina"},
            {"letter": "d", "text": "Abruptio placentae (desprendimiento prematuro de placenta)"}
        ],
        "correctAnswer": "d",
        "explanation": "El abruptio placentae o desprendimiento prematuro de placenta es una complicación grave del trauma en el embarazo. La fuerza del impacto puede hacer que la placenta se separe del útero, comprometiendo el suministro de oxígeno al feto y causando una hemorragia grave en la madre."
    },
    {
        "question": "Un paciente golpeado en el flanco derecho con un bate de béisbol presenta hematuria. ¿Qué órgano es más probable que esté lesionado?",
        "options": [
            {"letter": "a", "text": "El bazo"},
            {"letter": "b", "text": "El estómago"},
            {"letter": "c", "text": "El riñón derecho"},
            {"letter": "d", "text": "El apéndice"}
        ],
        "correctAnswer": "c",
        "explanation": "Los riñones están ubicados en el espacio retroperitoneal, en la región de los flancos. Un traumatismo cerrado directo en esta área puede causar una contusión o laceración renal, lo que resulta en sangrado hacia el sistema urinario y se manifiesta como hematuria (sangre en la orina)."
    },
    {
        "question": "La principal causa de muerte por lesiones abdominales en el entorno prehospitalario es:",
        "options": [
            {"letter": "a", "text": "La infección por peritonitis"},
            {"letter": "b", "text": "La obstrucción intestinal"},
            {"letter": "c", "text": "La hemorragia y el shock hipovolémico"},
            {"letter": "d", "text": "El dolor severo que causa síncope"}
        ],
        "correctAnswer": "c",
        "explanation": "En la fase aguda del trauma, la amenaza más inmediata para la vida es la pérdida de sangre. La lesión de órganos sólidos (hígado, bazo) o grandes vasos sanguíneos abdominales puede provocar una hemorragia interna masiva, llevando rápidamente al shock hipovolémico y la muerte si no se controla. La infección es una complicación posterior."
    }
]