import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Cuál es la diferencia entre una reacción alérgica local y la anafilaxia?",
        answer: "Una reacción alérgica local afecta un área específica del cuerpo, como hinchazón y picazón en el sitio de una picadura de insecto. La anafilaxia es una reacción sistémica, severa y potencialmente mortal que afecta a múltiples sistemas del cuerpo a la vez (p. ej., piel y sistema respiratorio) y puede causar shock.",
    },
    {
        question: "¿Qué es un alérgeno y cuáles son las 5 categorías más comunes?",
        answer: "Un alérgeno es una sustancia que, aunque normalmente es inofensiva, causa una respuesta inmunitaria exagerada en personas sensibles. Las cinco categorías comunes son: \n1. Alimentos (nueces, mariscos). \n2. Medicamentos (penicilina, aspirina). \n3. Plantas (hiedra venenosa). \n4. Químicos (maquillaje, jabones). \n5. Picaduras y mordeduras de insectos.",
    },
    {
        question: "¿Qué papel juega la histamina en una reacción anafiláctica?",
        answer: "La histamina es el principal químico liberado por el cuerpo durante una reacción anafiláctica. Causa la dilatación de los vasos sanguíneos (lo que provoca hipotensión y urticaria), el aumento de la permeabilidad vascular (causando hinchazón o angioedema) y la constricción de los bronquios (causando dificultad para respirar y sibilancias).",
    },
    {
        question: "¿Qué es la urticaria y el angioedema?",
        answer: "La urticaria son ronchas rojas, elevadas y que pican en la piel, un signo muy común de una reacción alérgica. El angioedema es una hinchazón similar pero que ocurre en las capas más profundas de la piel, afectando comúnmente los labios, la cara, la lengua y las manos.",
    },
    {
        question: "¿Por qué la epinefrina es el tratamiento de primera línea para la anafilaxia?",
        answer: "La epinefrina es vital porque contrarresta directamente los efectos más mortales de la anafilaxia. Es un vasoconstrictor (revierte la hipotensión) y un broncodilatador (abre las vías respiratorias). Ningún otro medicamento actúa tan rápido y eficazmente en esta emergencia.",
    },
    {
        question: "¿Qué es el estridor y por qué es un signo tan preocupante?",
        answer: "El estridor es un sonido agudo y chillón que se escucha durante la inspiración. Es causado por una obstrucción severa de la vía aérea superior, generalmente por hinchazón de la laringe o la tráquea. Es un signo ominoso que indica que la vía aérea del paciente está a punto de cerrarse por completo.",
    },
    {
        question: "¿Cómo se define la anafilaxia en el campo?",
        answer: "Generalmente, se considera anafilaxia si un paciente fue expuesto a un alérgeno y presenta dos o más de los siguientes sistemas afectados: piel (urticaria, angioedema), respiratorio (disnea, sibilancias), cardiovascular (hipotensión, taquicardia) o gastrointestinal (náuseas, vómitos). O simplemente si presenta hipotensión después de la exposición.",
    },
    {
        question: "Un paciente que tuvo una reacción alérgica leve en el pasado, ¿puede tener una reacción grave en el futuro?",
        answer: "Sí. Una exposición previa sensibiliza al sistema inmunitario. Una exposición posterior al mismo alérgeno puede desencadenar una reacción mucho más rápida y severa, incluyendo anafilaxia potencialmente mortal.",
    },
];


export const inmunologieQuestions: Question[] = [
    {
        "question": "Un paciente es picado por una avispa. Desarrolla urticaria generalizada y se queja de dificultad para respirar. Al auscultarlo, usted escucha sibilancias. Esta presentación clínica es más consistente con:",
        "options": [
            {"letter": "a", "text": "Una reacción local"},
            {"letter": "b", "text": "Anafilaxia"},
            {"letter": "c", "text": "Un ataque de asma"},
            {"letter": "d", "text": "Una reacción tóxica"}
        ],
        "correctAnswer": "b",
        "explanation": "La anafilaxia se define por la afectación de dos o más sistemas corporales. En este caso, el paciente presenta afectación del sistema tegumentario (urticaria) y del sistema respiratorio (dificultad para respirar y sibilancias), lo que confirma el diagnóstico de anafilaxia, una emergencia potencialmente mortal."
    },
    {
        "question": "La epinefrina ayuda a revertir los efectos de la anafilaxia principalmente porque sus efectos beta-2 causan broncodilatación y sus efectos alfa-1 causan:",
        "options": [
            {"letter": "a", "text": "Vasodilatación para mejorar la perfusión"},
            {"letter": "b", "text": "Un aumento en la frecuencia cardíaca"},
            {"letter": "c", "text": "Vasoconstricción para aumentar la presión arterial"},
            {"letter": "d", "text": "Una disminución en la producción de histamina"}
        ],
        "correctAnswer": "c",
        "explanation": "La epinefrina es el fármaco de elección para la anafilaxia por sus múltiples efectos. La estimulación de los receptores beta-2 abre las vías respiratorias (broncodilatación), mientras que la estimulación de los receptores alfa-1 contrae los vasos sanguíneos (vasoconstricción), lo que revierte la hipotensión y el shock."
    },
    {
        "question": "Usted atiende a un paciente con signos de anafilaxia y se prepara para administrar epinefrina con un autoinyector. ¿Cuál es la acción más importante e inmediata a realizar?",
        "options": [
            {
                "letter": "a",
                "text": "Asegurarse de que el paciente tenga una vía aérea permeable y administrar oxígeno a alto flujo"
            },
            {"letter": "b", "text": "Administrar epinefrina"},
            {"letter": "c", "text": "Establecer un acceso intravenoso para administrar líquidos"},
            {"letter": "d", "text": "Realizar una evaluación secundaria completa para encontrar otras lesiones"}
        ],
        "correctAnswer": "b",
        "explanation": "En un paciente con anafilaxia y compromiso de la vía aérea o circulatorio, la administración de epinefrina es la intervención más crítica y que salva la vida. Debe administrarse sin demora, ya que revierte directamente los procesos fisiopatológicos de la reacción anafiláctica. Las otras medidas son importantes, pero secundarias a la epinefrina."
    },
    {
        "question": "Un paciente que está cenando en un restaurante de mariscos de repente desarrolla estridor, hinchazón de la lengua y se ve cianótico. El estridor indica:",
        "options": [
            {"letter": "a", "text": "Constricción de las vías aéreas inferiores (bronquios)"},
            {"letter": "b", "text": "Acumulación de líquido en los pulmones"},
            {"letter": "c", "text": "Obstrucción severa de la vía aérea superior"},
            {"letter": "d", "text": "Una disminución en la frecuencia cardíaca"}
        ],
        "correctAnswer": "c",
        "explanation": "El estridor es un sonido agudo y de alta tonalidad que se escucha durante la inspiración. Es causado por el paso turbulento de aire a través de una vía aérea superior severamente estrechada, generalmente por el edema de la laringe o la faringe (angioedema), y representa una emergencia de vía aérea inminente."
    },
    {
        "question": "La urticaria se define como:",
        "options": [
            {"letter": "a", "text": "Hinchazón de los labios y la lengua"},
            {"letter": "b", "text": "Ronchas rojas, elevadas y que pican en la piel"},
            {"letter": "c", "text": "Coloración azulada de la piel por falta de oxígeno"},
            {"letter": "d", "text": "Sonidos sibilantes durante la respiración"}
        ],
        "correctAnswer": "b",
        "explanation": "La urticaria, también conocida como habones o 'hives' en inglés, es una manifestación cutánea de una reacción alérgica. Se caracteriza por la aparición de ronchas o pápulas rojas, bien delimitadas, elevadas y muy pruriginosas (que causan picor)."
    },
    {
        "question": "Al evaluar a un paciente con una posible reacción alérgica, ¿cuál de los siguientes hallazgos clasificaría la reacción como anafilaxia?",
        "options": [
            {"letter": "a", "text": "Picazón y enrojecimiento localizado en el brazo donde ocurrió la picadura"},
            {"letter": "b", "text": "Estornudos y ojos llorosos"},
            {"letter": "c", "text": "Urticaria en el pecho e hipotensión"},
            {"letter": "d", "text": "Una frecuencia cardíaca de 100 latidos/min sin otros síntomas"}
        ],
        "correctAnswer": "c",
        "explanation": "La anafilaxia se diagnostica cuando hay afectación de múltiples sistemas. La urticaria es un signo del sistema cutáneo y la hipotensión es un signo de compromiso del sistema cardiovascular. La combinación de ambos cumple los criterios para el diagnóstico de anafilaxia."
    },
    {
        "question": "¿Cuál de las siguientes afirmaciones sobre la exposición a alérgenos es correcta?",
        "options": [
            {"letter": "a", "text": "La primera exposición a un alérgeno siempre causa la reacción más severa"},
            {"letter": "b", "text": "La severidad de las reacciones alérgicas tiende a disminuir con cada exposición"},
            {
                "letter": "c",
                "text": "Una persona no puede desarrollar una alergia a algo a lo que ha estado expuesta muchas veces sin problemas"
            },
            {
                "letter": "d",
                "text": "Una exposición que inicialmente solo causa una reacción leve puede sensibilizar a la persona para una reacción anafiláctica en el futuro"
            }
        ],
        "correctAnswer": "d",
        "explanation": "El proceso de sensibilización implica que el sistema inmunológico 'aprende' a reconocer un alérgeno en la primera exposición (o primeras exposiciones), produciendo anticuerpos IgE. En exposiciones posteriores, la reacción puede ser mucho más rápida y severa, pudiendo llegar a la anafilaxia."
    },
    {
        "question": "El principal efecto negativo de la liberación de histamina sobre el sistema cardiovascular es:",
        "options": [
            {"letter": "a", "text": "La hipertensión y el riesgo de hemorragia cerebral"},
            {"letter": "b", "text": "La vasoconstricción y el enfriamiento de las extremidades"},
            {"letter": "c", "text": "La bradicardia que puede llevar a un paro cardíaco"},
            {"letter": "d", "text": "La vasodilatación sistémica que causa hipotensión y shock"}
        ],
        "correctAnswer": "d",
        "explanation": "La histamina es un potente vasodilatador que aumenta el calibre de los vasos sanguíneos y aumenta la permeabilidad capilar. Esta vasodilatación generalizada provoca una caída drástica de la presión arterial y una fuga de líquido del espacio vascular al intersticial, llevando al shock distributivo."
    },
    {
        "question": "Un paciente con anafilaxia conocida se auto-administró su epinefrina justo antes de su llegada. Usted nota que su dificultad respiratoria está mejorando pero sigue ansioso y con una frecuencia cardíaca de 140. Su siguiente paso debe ser:",
        "options": [
            {
                "letter": "a",
                "text": "Administrar una segunda dosis de epinefrina inmediatamente para tratar la taquicardia"
            },
            {
                "letter": "b",
                "text": "Administrar oxígeno, continuar la evaluación y prepararse para el transporte, reconociendo que la taquicardia es un efecto esperado de la epinefrina"
            },
            {"letter": "c", "text": "Asumir que el paciente está teniendo un ataque de pánico y calmarlo verbalmente"},
            {"letter": "d", "text": "Pedirle al paciente que respire en una bolsa de papel para controlar la ansiedad"}
        ],
        "correctAnswer": "b",
        "explanation": "La taquicardia y la ansiedad son efectos secundarios comunes y esperados de la epinefrina debido a su estimulación de los receptores beta-1. Dado que la condición del paciente está mejorando, el manejo correcto es el cuidado de soporte (oxígeno, monitorización) y el transporte, sin administrar más epinefrina por los efectos secundarios."
    },
    {
        "question": "¿Cuál de las cinco categorías de alérgenos es la causa más común de anafilaxia mortal?",
        "options": [
            {"letter": "a", "text": "Plantas"},
            {"letter": "b", "text": "Químicos"},
            {"letter": "c", "text": "Alimentos"},
            {"letter": "d", "text": "Medicamentos inyectados, seguidos por picaduras de insectos"}
        ],
        "correctAnswer": "d",
        "explanation": "Aunque las alergias alimentarias son muy comunes, las reacciones anafilácticas más rápidas y mortales suelen ocurrir con sustancias que se introducen directamente en el torrente sanguíneo, como los medicamentos inyectados (p. ej., penicilina) o el veneno de insectos (p. ej., abejas, avispas), ya que la reacción sistémica es casi inmediata."
    }
]

export const inmunologieChallengeQuestions: Question[] = [
    {
        "question": "Un paciente de 34 años fue picado por una abeja hace 45 minutos. Sus compañeros lo trataron con un autoinyector de epinefrina en el lugar y sus síntomas (urticaria, disnea, hipotensión) se resolvieron casi por completo. Durante el transporte de 40 minutos al hospital, el paciente súbitamente vuelve a presentar estridor, urticaria generalizada e hipotensión (PA 78/50), sin nueva exposición al alérgeno. ¿Cuál es la explicación fisiopatológica más probable de este deterioro?",
        "options": [
            {"letter": "a", "text": "El paciente está experimentando una anafilaxia bifásica, en la cual una segunda oleada de mediadores inflamatorios se libera horas después del evento inicial, incluso sin re-exposición al alérgeno"},
            {"letter": "b", "text": "La epinefrina administrada nunca fue absorbida correctamente y el episodio actual es simplemente la reacción original sin tratar"},
            {"letter": "c", "text": "El paciente está sufriendo un ataque de pánico secundario al estrés del evento, que imita los signos de shock"},
            {"letter": "d", "text": "Se trata de una reacción vasovagal producida por el dolor de la picadura, no relacionada con el proceso alérgico"}
        ],
        "correctAnswer": "a",
        "explanation": "La anafilaxia bifásica ocurre en hasta un 20% de los casos y se caracteriza por la recurrencia de los síntomas anafilácticos, típicamente entre 1 y 72 horas después de la resolución aparente del episodio inicial, sin una nueva exposición al alérgeno. Se cree que este fenómeno resulta del reclutamiento tardío de eosinófilos y de una segunda oleada de liberación de mediadores (histamina, leucotrienos, prostaglandinas) desde mastocitos y basófilos que no fueron completamente neutralizados por la dosis inicial de epinefrina, cuya vida media es de solo unos minutos. Por esta razón, todo paciente que recibió epinefrina por anafilaxia debe ser transportado y monitorizado, ya que la mejoría clínica inicial no descarta una recaída. El manejo prehospitalario debe incluir la disponibilidad de una segunda dosis de epinefrina y reevaluación constante de la vía aérea, respiración y circulación durante todo el transporte."
    },
    {
        "question": "Un paciente con anafilaxia por alergia a mariscos recibe dos dosis de epinefrina intramuscular con 5 minutos de diferencia. A pesar de esto, persiste con sibilancias severas, hipotensión (PA 72/40) y disminución del nivel de conciencia. Su protocolo local permite la administración de un antihistamínico H1 y considerar la infusión de líquidos IV. ¿Cuál es el razonamiento clínico correcto sobre el papel de estas intervenciones adicionales en este momento?",
        "options": [
            {"letter": "a", "text": "El antihistamínico debe remplazar a la epinefrina como tratamiento principal porque actúa más rápido sobre los receptores H1"},
            {"letter": "b", "text": "Los líquidos IV y el antihistamínico son tratamientos adyuvantes que ayudan a manejar los síntomas cutáneos y a reponer volumen intravascular, pero ninguno revierte la anafilaxia por sí solo; ante epinefrina refractaria se debe considerar una tercera dosis y preparar manejo avanzado de la vía aérea"},
            {"letter": "c", "text": "Como el paciente ya recibió dos dosis de epinefrina, no se debe administrar una tercera dosis bajo ninguna circunstancia por riesgo de arritmia letal"},
            {"letter": "d", "text": "La falta de respuesta a la epinefrina indica que el diagnóstico correcto no es anafilaxia sino un shock séptico, por lo que se debe suspender la epinefrina"}
        ],
        "correctAnswer": "b",
        "explanation": "En la anafilaxia refractaria a epinefrina, los antihistamínicos H1 (y H2) y los líquidos IV son terapias adyuvantes: los antihistamínicos bloquean competitivamente los receptores de histamina para mitigar la urticaria y el prurito, mientras que los cristaloides IV reemplazan el volumen intravascular perdido por el aumento masivo de la permeabilidad capilar inducido por la histamina y los leucotrienos. Sin embargo, ninguno de estos revierte la vasodilatación sistémica ni la broncoconstricción con la rapidez y eficacia de la epinefrina, que sigue siendo el fármaco de primera línea. Ante una anafilaxia que no responde tras dos dosis de epinefrina IM, las guías permiten considerar una tercera dosis (o iniciar infusión de epinefrina si el nivel de práctica lo permite) y el proveedor debe anticipar y prepararse para un manejo avanzado de la vía aérea, ya que el edema laríngeo progresivo puede hacerla intransitable. Retener epinefrina adicional por temor a efectos cardíacos en un paciente que se está deteriorando es un error, ya que el shock anafiláctico no tratado es más letal que el riesgo de un efecto adverso cardiovascular transitorio."
    },
    {
        "question": "Un paciente de 68 años con antecedente de enfermedad arterial coronaria y un infarto de miocardio previo presenta anafilaxia severa (angioedema progresivo, sibilancias e hipotensión de 68/40 mmHg) tras la administración de un antibiótico IV en una clínica. El personal médico duda en administrar epinefrina por temor a precipitar isquemia miocárdica o una arritmia. ¿Cuál es la conducta correcta y su justificación?",
        "options": [
            {"letter": "a", "text": "Se debe evitar la epinefrina por completo y manejar únicamente con oxígeno y posición de Trendelenburg hasta que llegue un médico"},
            {"letter": "b", "text": "Se debe administrar epinefrina sin demora, ya que el shock anafiláctico no tratado representa un riesgo de muerte inminente mayor que el riesgo cardíaco de la epinefrina, y la hipoperfusión coronaria por la hipotensión ya está comprometiendo el miocardio"},
            {"letter": "c", "text": "Se debe reducir la dosis de epinefrina a la mitad y administrarla únicamente por vía subcutánea para minimizar el efecto cardíaco"},
            {"letter": "d", "text": "Se debe usar exclusivamente un betabloqueador para controlar la posible taquicardia antes de considerar cualquier otro tratamiento"}
        ],
        "correctAnswer": "b",
        "explanation": "Aunque la epinefrina puede aumentar la demanda miocárdica de oxígeno y teóricamente precipitar isquemia o arritmias por su estimulación beta-1, en un paciente con anafilaxia que amenaza la vida el riesgo de no tratar el shock distributivo y la obstrucción de la vía aérea supera ampliamente el riesgo cardíaco de la epinefrina. La hipotensión severa ya está reduciendo la presión de perfusión coronaria, por lo que la falta de tratamiento perpetúa y empeora la isquemia miocárdica en lugar de prevenirla. Las guías de AAOS y de resucitación cardiovascular son consistentes en que las comorbilidades cardíacas no son una contraindicación absoluta para la epinefrina en anafilaxia; la dosis y vía (IM en el vasto lateral del muslo) no deben alterarse basándose en el temor a efectos cardíacos. El proveedor debe estar preparado para monitorizar el ritmo cardíaco y manejar posibles complicaciones, pero retrasar o negar la epinefrina en este contexto pone al paciente en mayor riesgo de muerte por asfixia o colapso circulatorio irreversible."
    },
    {
        "question": "Un paciente presenta hipotensión, taquicardia y piel fría y pálida después de una reacción alérgica a un medicamento. Otro paciente en un accidente de tránsito con una lesión de la médula espinal cervical también presenta hipotensión y bradicardia relativa con piel caliente. Ambos se clasifican como shock distributivo, pero el manejo prehospitalario difiere sustancialmente. ¿Cuál es la razón fisiopatológica clave que explica por qué la epinefrina es apropiada en el primer caso pero no se usa de la misma manera en el shock neurogénico?",
        "options": [
            {"letter": "a", "text": "En el shock anafiláctico, la epinefrina revierte tanto la vasodilatación mediada por histamina como la broncoconstricción y el angioedema que amenazan la vía aérea; en el shock neurogénico, el problema es la pérdida del tono simpático vascular por interrupción de la vía simpática, no una liberación de mediadores inflamatorios, por lo que el tratamiento se enfoca en líquidos IV y, si es necesario, vasopresores diferentes, sin el componente de broncoconstricción o angioedema que justifica la epinefrina"},
            {"letter": "b", "text": "Ambos shocks tienen exactamente la misma fisiopatología, por lo que la epinefrina debería usarse de manera idéntica en ambos casos"},
            {"letter": "c", "text": "El shock neurogénico no es realmente un tipo de shock distributivo, sino una forma de shock cardiogénico, por eso el tratamiento difiere"},
            {"letter": "d", "text": "La epinefrina no funciona en pacientes con piel fría y pálida, solo es efectiva cuando la piel está caliente y enrojecida"}
        ],
        "correctAnswer": "a",
        "explanation": "El shock distributivo es una categoría amplia que incluye al shock anafiláctico y al shock neurogénico, pero sus mecanismos causales son distintos, lo que determina el tratamiento apropiado. En la anafilaxia, la histamina y otros mediadores liberados por mastocitos y basófilos causan vasodilatación masiva, aumento de la permeabilidad capilar, broncoconstricción y angioedema; la epinefrina es ideal porque su acción alfa-1 revierte la vasodilatación y su acción beta-2 revierte la broncoconstricción, atacando simultáneamente los mecanismos causantes. En el shock neurogénico, la lesión medular interrumpe las vías simpáticas descendentes, eliminando el tono vasomotor sin que exista liberación de histamina, broncoconstricción ni angioedema; por ello el manejo prioriza la reposición de volumen con líquidos IV y, en el ámbito hospitalario, vasopresores que restauren el tono vascular, sin el beneficio broncodilatador que sí es crítico en la anafilaxia. Confundir ambos tipos de shock puede llevar a omitir la epinefrina cuando es urgente o a aplicarla innecesariamente cuando el problema real es neurológico."
    },
    {
        "question": "Un paciente con antecedente de angioedema hereditario (deficiencia de C1 inhibidor) presenta hinchazón progresiva de labios, lengua y tejidos de la vía aérea superior tras un traumatismo dental menor, sin urticaria ni sibilancias. El paciente le informa que en episodios previos la epinefrina y los antihistamínicos no fueron efectivos. ¿Cuál es la implicación más importante de esta información para el manejo prehospitalario inmediato?",
        "options": [
            {"letter": "a", "text": "Como la epinefrina no funcionó antes, no debe administrarse epinefrina y en su lugar se debe priorizar el manejo agresivo y anticipado de la vía aérea, incluyendo preparación para una vía aérea avanzada o intervención quirúrgica, dado que este angioedema no está mediado por histamina sino por bradicinina"},
            {"letter": "b", "text": "Se debe administrar una dosis doble de epinefrina inmediatamente para forzar la broncodilatación y vasoconstricción"},
            {"letter": "c", "text": "El angioedema hereditario siempre se acompaña de anafilaxia sistémica, por lo que el manejo es idéntico al de una reacción alérgica típica"},
            {"letter": "d", "text": "La ausencia de urticaria y sibilancias descarta cualquier emergencia de la vía aérea, por lo que solo se requiere observación"}
        ],
        "correctAnswer": "a",
        "explanation": "El angioedema hereditario se debe a una deficiencia o disfunción del inhibidor de C1 esterasa, lo que lleva a una producción descontrolada de bradicinina en lugar de histamina; por eso la epinefrina, los antihistamínicos y los corticosteroides —eficaces en la anafilaxia clásica mediada por IgE— tienen poco o ningún efecto en este cuadro. Esto explica por qué no hay urticaria ni sibilancias: el proceso no involucra mastocitos ni histamina de la misma manera. El desenlace más peligroso es la obstrucción progresiva e impredecible de la vía aérea superior por edema de la lengua, la faringe o la laringe, que puede evolucionar a una obstrucción completa en minutos a horas. Por ello, el proveedor prehospitalario debe reconocer que el tratamiento farmacológico estándar de la anafilaxia no revertirá el proceso, y debe priorizar el transporte rápido, la vigilancia continua de la vía aérea, la anticipación de una vía aérea difícil y la alerta temprana al hospital receptor para preparar tratamientos específicos (como concentrado de C1 inhibidor) e intervención quirúrgica de la vía aérea si es necesario."
    },
    {
        "question": "Un paciente con edema angioneurótico progresivo presenta voz apagada, dificultad para tragar su propia saliva y estridor leve pero en aumento. Aún puede hablar en oraciones completas y mantiene una saturación de oxígeno de 94%. El sitio de destino más cercano con capacidad quirúrgica está a 25 minutos, mientras que un hospital comunitario sin esa capacidad está a 8 minutos. ¿Cuál es la decisión de manejo de vía aérea y transporte más apropiada?",
        "options": [
            {"letter": "a", "text": "Esperar a que el paciente pierda la vía aérea por completo antes de intervenir, ya que actualmente tolera su saliva y habla en oraciones completas"},
            {"letter": "b", "text": "Intubar inmediatamente en el lugar sin preparación adicional, ya que la intubación siempre es más segura que el transporte"},
            {"letter": "c", "text": "Reconocer los signos de deterioro inminente de la vía aérea (voz apagada, dificultad para manejar secreciones, estridor progresivo) y transportar de inmediato al centro con capacidad quirúrgica de vía aérea, notificando temprano y preparando un plan de vía aérea difícil, incluso si el trayecto es más largo, porque intentar una intubación prehospitalaria en un angioedema progresivo conlleva alto riesgo de pérdida completa de la vía aérea sin rescate quirúrgico disponible"},
            {"letter": "d", "text": "Transportar al hospital comunitario más cercano sin notificación previa, ya que la distancia es el único factor relevante en la decisión"}
        ],
        "correctAnswer": "c",
        "explanation": "La voz apagada, la incapacidad progresiva para manejar secreciones y el estridor son signos clásicos de obstrucción inminente de la vía aérea superior por edema angioneurótico, un proceso dinámico que puede progresar rápidamente hacia la obstrucción completa. Dado que la intubación endotraqueal en presencia de edema significativo de tejidos blandos puede ser extremadamente difícil o imposible, y que un intento fallido puede precipitar la pérdida total de la vía aérea sin posibilidad inmediata de una vía aérea quirúrgica de rescate en el campo, la decisión más segura es transportar sin demora hacia el centro que cuenta con capacidad para manejo quirúrgico de la vía aérea (cricotirotomía o traqueostomía), incluso si implica un trayecto más largo. La notificación temprana permite que el equipo receptor active un equipo de vía aérea difícil y prepare el quirófano o la sala de urgencias con el equipo necesario antes de la llegada del paciente, maximizando las probabilidades de una intervención controlada en lugar de una emergencia catastrófica en un centro sin los recursos adecuados."
    }
]