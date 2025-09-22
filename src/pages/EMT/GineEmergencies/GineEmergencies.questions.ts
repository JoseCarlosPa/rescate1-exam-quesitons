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