import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Cuál es la prioridad número uno al atender a un paciente con lesiones graves en la cara o el cuello?",
        answer: "La principal prioridad es siempre la vía aérea. Las lesiones en la cara y el cuello pueden obstruir la vía aérea debido a sangrado, secreciones, desplazamiento de tejidos o inflamación. Es fundamental asegurar y mantener una vía aérea permeable, a menudo mediante succión y posicionamiento adecuados.",
    },
    {
        question: "¿Cómo se debe manejar un objeto empalado en el ojo?",
        answer: "No se debe retirar el objeto. Se debe estabilizar en su lugar con un vendaje voluminoso. Es crucial cubrir AMBOS ojos para prevenir el movimiento simpático del ojo lesionado, lo que podría causar más daño. El paciente debe ser transportado de inmediato.",
    },
    {
        question: "¿Qué es un enfisema subcutáneo y qué puede indicar en una lesión de cuello?",
        answer: "El enfisema subcutáneo es la presencia de aire en el tejido blando debajo de la piel, lo que produce una sensación crepitante al tacto. En una lesión de cuello, esto puede indicar que la tráquea o la laringe han sido lesionadas, permitiendo que el aire se escape hacia los tejidos circundantes.",
    },
    {
        question: "¿Cuál es el manejo inicial para una quemadura química en el ojo?",
        answer: "El manejo consiste en una irrigación (lavado) inmediata y continua del ojo con agua estéril o solución salina. La irrigación debe durar al menos 20 minutos y debe comenzar tan pronto como sea posible en la escena, continuando durante el transporte.",
    },
    {
        question: "¿Por qué una herida abierta en el cuello, especialmente si afecta a la vena yugular, es tan peligrosa?",
        answer: "Es peligrosa por dos razones principales: 1) Puede causar una hemorragia masiva difícil de controlar. 2) Existe un alto riesgo de que entre aire en la vena (embolia aérea), lo cual puede viajar al corazón y ser fatal. Por eso, se debe aplicar un apósito oclusivo.",
    },
    {
        question: "¿Cómo se transporta un diente que ha sido avulsionado (arrancado)?",
        answer: "El diente no debe limpiarse. Debe ser transportado en una solución de almacenamiento especial (como la solución salina balanceada de Hank), leche fría, o envuelto en gasa empapada en solución salina. No debe transportarse seco.",
    },
    {
        question: "Al tratar una laceración en el cuello, ¿por qué es importante aplicar el apósito oclusivo sellándolo por sus cuatro lados?",
        answer: "Sellar el apósito oclusivo por los cuatro lados previene que el aire entre en la herida durante la inhalación (evitando una embolia aérea) y al mismo tiempo previene que el aire de la tráquea, si estuviera lesionada, se acumule en los tejidos (evitando un enfisema subcutáneo a tensión).",
    },
    {
        question: "¿Qué indica una 'fractura por estallamiento' (blowout) del ojo y cuál es un signo característico?",
        answer: "Es una fractura de la órbita, los huesos que rodean y sostienen al ojo. Un signo característico es la incapacidad del paciente para mover los ojos al unísono o mirar hacia arriba, ya que los músculos oculares pueden quedar atrapados en la fractura.",
    },
];

export const faceAndNeckExamen: Question[] = [
    {
        "question": "Usted atiende a un paciente con un traumatismo facial severo y sangrado activo en la boca. La prioridad en el manejo de este paciente es:",
        "options": [
            {"letter": "a", "text": "Controlar el sangrado con presión directa"},
            {"letter": "b", "text": "Evaluar si hay fracturas faciales"},
            {"letter": "c", "text": "Mantener una vía aérea permeable mediante succión"},
            {"letter": "d", "text": "Administrar oxígeno a alto flujo"}
        ],
        "correctAnswer": "c",
        "explanation": "En el manejo del trauma, la vía aérea (Airway) es siempre la primera prioridad. En un paciente con traumatismo facial y sangrado en la boca, la sangre puede obstruir la vía aérea rápidamente. Por lo tanto, la acción más crítica e inmediata es asegurar su permeabilidad, lo cual se logra mediante una succión agresiva y efectiva."
    },
    {
        "question": "Un paciente sufrió una laceración profunda en el lado derecho del cuello con sangrado venoso oscuro y profuso. ¿Cuál es el manejo inicial más adecuado para prevenir una embolia aérea?",
        "options": [
            {"letter": "a", "text": "Aplicar presión directa y un apósito oclusivo"},
            {"letter": "b", "text": "Colocar al paciente en posición de Trendelenburg"},
            {"letter": "c", "text": "Aplicar un collarín cervical rígido"},
            {"letter": "d", "text": "Comprimir la arteria carótida del lado lesionado"}
        ],
        "correctAnswer": "a",
        "explanation": "Una lesión en una vena grande del cuello, como la yugular, puede permitir que el aire entre en el sistema circulatorio, causando una embolia aérea potencialmente mortal. El manejo consiste en aplicar presión directa para controlar el sangrado y colocar un apósito oclusivo (sellado por los cuatro lados) para evitar que se aspire aire a través de la herida."
    },
    {
        "question": "Al tratar a un paciente con un lápiz empalado en la órbita, la acción correcta después de estabilizar el objeto es:",
        "options": [
            {"letter": "a", "text": "Cubrir únicamente el ojo afectado para observar la reacción del otro"},
            {"letter": "b", "text": "Retirar el objeto si está obstruyendo la visión"},
            {"letter": "c", "text": "Aplicar gotas para los ojos para lubricar"},
            {"letter": "d", "text": "Cubrir ambos ojos con un vendaje para prevenir el movimiento"}
        ],
        "correctAnswer": "d",
        "explanation": "Los ojos se mueven de forma simpática (juntos). Para evitar que el movimiento del ojo sano provoque el movimiento del ojo lesionado y cause más daño con el objeto empalado, se deben cubrir ambos ojos. Esto minimiza el movimiento ocular involuntario."
    },
    {
        "question": "Un trabajador de una fábrica de productos de limpieza se salpica un químico alcalino en el ojo izquierdo. El tratamiento prehospitalario fundamental es:",
        "options": [
            {"letter": "a", "text": "Neutralizar el álcali con una solución ácida débil"},
            {"letter": "b", "text": "Cubrir el ojo con un parche seco y transportar"},
            {"letter": "c", "text": "Irrigar el ojo continuamente con solución salina durante al menos 20 minutos"},
            {"letter": "d", "text": "Esperar a llegar al hospital para que un especialista lo lave"}
        ],
        "correctAnswer": "c",
        "explanation": "Para las quemaduras químicas oculares, especialmente por álcalis (que causan un daño más profundo que los ácidos), la intervención más importante es la irrigación inmediata y prolongada. El objetivo es diluir y eliminar la mayor cantidad posible de la sustancia química para limitar la lesión. La irrigación debe comenzar en la escena y continuar durante el transporte."
    },
    {
        "question": "Durante la evaluación de un paciente con un golpe directo en el cuello, usted palpa una sensación de 'burbujas' bajo la piel en la parte anterior del cuello. Esto es conocido como:",
        "options": [
            {"letter": "a", "text": "Hematoma en expansión"},
            {"letter": "b", "text": "Desviación traqueal"},
            {"letter": "c", "text": "Enfisema subcutáneo"},
            {"letter": "d", "text": "Edema laríngeo"}
        ],
        "correctAnswer": "c",
        "explanation": "El enfisema subcutáneo es la presencia de aire en los tejidos blandos debajo de la piel, lo que produce una sensación crepitante (similar a apretar plástico de burbujas). En el contexto de un trauma de cuello, es un signo ominoso que sugiere una lesión en la laringe o la tráquea, con fuga de aire hacia los tejidos circundantes."
    },
    {
        "question": "Un paciente presenta avulsión del globo ocular derecho tras una agresión. El manejo adecuado en la escena incluye:",
        "options": [
            {"letter": "a", "text": "Intentar reintroducir suavemente el ojo en la órbita"},
            {"letter": "b", "text": "Cubrir el ojo con un apósito estéril humedecido con solución salina"},
            {"letter": "c", "text": "Aplicar presión directa sobre el ojo para controlar el sangrado"},
            {"letter": "d", "text": "Enjuagar el ojo con abundante agua para limpiarlo"}
        ],
        "correctAnswer": "b",
        "explanation": "Nunca se debe intentar reintroducir un globo ocular avulsionado ni aplicar presión sobre él. El manejo correcto es proteger el ojo de más lesiones y evitar que la córnea se seque. Esto se logra cubriéndolo suavemente con un apósito estéril humedecido en solución salina."
    },
    {
        "question": "Un jugador de hockey es golpeado en el rostro y presenta una fractura facial con incapacidad para seguir con la vista su dedo hacia arriba. Este signo es muy sugestivo de:",
        "options": [
            {"letter": "a", "text": "Una fractura nasal"},
            {"letter": "b", "text": "Una fractura mandibular"},
            {"letter": "c", "text": "Una conmoción cerebral"},
            {"letter": "d", "text": "Una fractura orbitaria por estallamiento (blowout)"}
        ],
        "correctAnswer": "d",
        "explanation": "Una fractura del suelo de la órbita (blowout) puede causar que los músculos extraoculares, en particular el músculo recto inferior, queden atrapados en el defecto óseo. Este atrapamiento impide el movimiento normal del ojo, especialmente la mirada hacia arriba."
    },
    {
        "question": "¿Cuál de las siguientes lesiones faciales NO requiere, por sí misma, la inmovilización de la columna cervical?",
        "options": [
            {"letter": "a", "text": "Un hematoma masivo en la frente tras un atropellamiento"},
            {"letter": "b", "text": "Un corte superficial en el labio por morderse accidentalmente"},
            {"letter": "c", "text": "Un paciente inconsciente con una contusión en la mandíbula"},
            {"letter": "d", "text": "Una fractura maxilar por un golpe con un bate"}
        ],
        "correctAnswer": "b",
        "explanation": "La inmovilización cervical se basa en el mecanismo de lesión. Las opciones a, c y d implican fuerzas significativas que podrían haber afectado la columna cervical. Un corte superficial autoinfligido en el labio es una lesión aislada de baja energía que no implica un mecanismo de lesión espinal."
    },
    {
        "question": "Al tratar una lesión penetrante en la mejilla con un objeto que la atraviesa de lado a lado y obstruye la vía aérea:",
        "options": [
            {"letter": "a", "text": "Se debe dejar el objeto en su lugar sin importar la situación"},
            {"letter": "b", "text": "Se debe retirar el objeto para poder asegurar la vía aérea"},
            {"letter": "c", "text": "Se debe empujar el objeto hacia adentro para que no estorbe"},
            {"letter": "d", "text": "Se debe cortar el objeto a ras de la piel en ambos lados"}
        ],
        "correctAnswer": "b",
        "explanation": "La regla general es no retirar objetos empalados. Sin embargo, hay una excepción clave: si un objeto empalado en la mejilla compromete la vía aérea de forma activa y no se puede manejar de otra manera, se debe retirar para poder controlar el sangrado dentro de la boca y ventilar al paciente."
    },
    {
        "question": "La principal preocupación en un paciente con quemaduras faciales, hollín en las fosas nasales y voz ronca es:",
        "options": [
            {"letter": "a", "text": "El dolor y la desfiguración"},
            {"letter": "b", "text": "La infección de las quemaduras"},
            {"letter": "c", "text": "La lesión térmica de la vía aérea y el edema inminente"},
            {"letter": "d", "text": "La pérdida de líquidos a través de la piel quemada"}
        ],
        "correctAnswer": "c",
        "explanation": "Estos son los signos cardinales de una lesión por inhalación. El calor y los productos de la combustión dañan la vía aérea superior, causando una inflamación progresiva (edema). Esta es una verdadera emergencia, ya que la vía aérea puede hincharse y cerrarse por completo, por lo que se requiere un manejo agresivo y precoz de la misma."
    }
]

export const faceAndNeckChallengeQuestions: Question[] = [
    {
        "question": "Un hombre de 34 años es extraído de un vehículo tras una colisión frontal a alta velocidad. Presenta una fractura masiva bilateral de maxilar (LeFort III), sangrado abundante en orofaringe, estridor progresivo y una saturación de oxígeno que cae de 94% a 88% en pocos minutos a pesar de la succión continua. El paciente aún respira espontáneamente pero con esfuerzo creciente. ¿Cuál es la consideración más crítica que debe guiar su decisión de manejo de la vía aérea en este momento?",
        "options": [
            {"letter": "a", "text": "Continuar únicamente con succión y oxígeno de alto flujo mediante mascarilla no recirculante, ya que el paciente todavía respira por sí mismo y cualquier manipulación adicional de la vía aérea podría empeorar el sangrado"},
            {"letter": "b", "text": "Reconocer que las fracturas LeFort III pueden colapsar el tercio medio facial y desestabilizar la vía aérea superior de forma progresiva, por lo que debe anticiparse una vía aérea definitiva temprana antes de que la inflamación, el sangrado y la pérdida de soporte óseo produzcan una obstrucción completa e impredecible"},
            {"letter": "c", "text": "Colocar de inmediato una cánula orofaríngea, ya que el estridor confirma que la lengua es la causa principal de la obstrucción y este dispositivo resolverá el problema sin necesidad de reevaluación adicional"},
            {"letter": "d", "text": "Priorizar la inmovilización espinal completa antes de reevaluar la vía aérea, dado el mecanismo de alta energía, incluso si esto retrasa el manejo de la saturación decreciente"}
        ],
        "correctAnswer": "b",
        "explanation": "El trauma facial masivo tipo LeFort III implica una separación craneofacial completa que destruye el soporte estructural del tercio medio de la cara, permitiendo que los tejidos blandos, la sangre y el edema colapsen progresivamente sobre la vía aérea superior. El estridor y la desaturación en un paciente que aún respira son signos de una vía aérea que se está deteriorando activamente, no de una situación estable. En este escenario, esperar a que ocurra una obstrucción completa es peligroso porque el edema y la distorsión anatómica pueden hacer que una vía aérea avanzada de rescate sea mucho más difícil de lograr minutos después. Por eso el principio de manejo agresivo y anticipado de la vía aérea (incluyendo la consideración temprana de dispositivos avanzados o transporte prioritario a un centro con capacidad quirúrgica) es la prioridad clínica más crítica, por encima de continuar con medidas pasivas como succión y oxígeno suplementario únicamente."
    },
    {
        "question": "Una mujer de 28 años sufre una herida penetrante por arma blanca en la cara lateral del cuello, en la 'zona II' (entre el cartílago cricoides y el ángulo de la mandíbula). Presenta un hematoma pulsátil en expansión rápida, ronquera y un chorro de sangre rojo brillante intermitente desde la herida. Se encuentra alerta pero ansiosa. ¿Cuál es la mejor descripción del enfoque de manejo prehospitalario en este caso?",
        "options": [
            {"letter": "a", "text": "Aplicar un vendaje compresivo circunferencial alrededor de todo el cuello para lograr una hemostasia efectiva y luego proceder con el transporte de rutina"},
            {"letter": "b", "text": "Explorar la herida con los dedos para identificar el vaso sangrante y realizar compresión digital directa sobre la arteria carótida antes de aplicar cualquier apósito"},
            {"letter": "c", "text": "Aplicar presión directa localizada (nunca circunferencial) sobre el punto de sangrado con un apósito oclusivo, evitar comprimir ambos lados del cuello simultáneamente, proteger la vía aérea que se está comprometiendo por el hematoma en expansión, y transportar de inmediato a un centro de trauma, ya que esta combinación de signos indica una lesión vascular mayor con riesgo inminente de obstrucción de la vía aérea"},
            {"letter": "d", "text": "Retirar cualquier coágulo visible en la herida para evaluar la profundidad de la lesión antes de decidir el tipo de apósito a utilizar"}
        ],
        "correctAnswer": "c",
        "explanation": "La zona II del cuello contiene estructuras vasculares mayores (carótida, yugular), la vía aérea (laringe, tráquea) y estructuras neurológicas en un espacio compacto, por lo que una herida penetrante en esta región con sangrado pulsátil arterial y un hematoma en expansión representa una emergencia con doble amenaza: exanguinación y obstrucción mecánica de la vía aérea por compresión externa. La presión debe ser directa y localizada, nunca circunferencial ni bilateral, porque comprimir ambas carótidas simultáneamente o rodear el cuello puede ocluir el flujo cerebral o comprometer aún más la vía aérea. Nunca se debe explorar la herida con los dedos ni retirar coágulos, ya que esto puede desalojar un tapón hemostático natural y desencadenar una hemorragia catastrófica o una embolia aérea. El transporte inmediato a un centro de trauma con capacidad quirúrgica vascular es esencial, ya que este tipo de lesión frecuentemente requiere control quirúrgico definitivo que no puede lograrse en el campo."
    },
    {
        "question": "Un motociclista impacta contra un cable tensado a la altura del cuello (mecanismo tipo 'clothesline'). A la llegada, el paciente presenta voz aflautada, dolor severo al tragar, enfisema subcutáneo extenso en cuello anterior y tórax superior, y una depresión palpable en la línea media del cuello donde normalmente se encuentra la prominencia del cartílago tiroides. Su frecuencia respiratoria es de 28/min con tiraje evidente. ¿Cuál es la interpretación clínica más precisa de estos hallazgos y la prioridad de manejo correspondiente?",
        "options": [
            {"letter": "a", "text": "Estos hallazgos son compatibles con una lesión traqueolaríngea significativa (posible fractura o separación laringotraqueal); dado el riesgo de pérdida completa e irreversible de la vía aérea, se debe minimizar la manipulación del cuello, evitar la hiperextensión cervical al abrir la vía aérea, tener preparado equipo de vía aérea avanzada y de rescate, y transportar con extrema urgencia sin retrasar la salida por procedimientos no esenciales"},
            {"letter": "b", "text": "El enfisema subcutáneo es un hallazgo benigno y esperado tras cualquier trauma cerrado de cuello, por lo que el manejo puede limitarse a la aplicación de oxígeno suplementario y transporte de rutina"},
            {"letter": "c", "text": "La depresión palpable en la línea media indica que la vía aérea ya está perdida de forma irreversible, por lo que el manejo debe enfocarse exclusivamente en soporte circulatorio y no en intentos de vía aérea"},
            {"letter": "d", "text": "Se debe realizar hiperextensión cervical inmediata para abrir al máximo la vía aérea, ya que esta maniobra es prioritaria sobre cualquier otra consideración en un paciente con dificultad respiratoria"}
        ],
        "correctAnswer": "a",
        "explanation": "El mecanismo de 'clothesline' produce una fuerza directa y concentrada sobre la laringe y la tráquea, estructuras cartilaginosas relativamente frágiles y poco protegidas en la cara anterior del cuello. La combinación de voz aflautada (por distorsión de la vía aérea superior), odinofagia severa, enfisema subcutáneo extenso (fuga de aire hacia los tejidos por ruptura de la vía aérea) y pérdida de la prominencia tiroidea normal son hallazgos clásicos de una fractura o separación laringotraqueal, una de las lesiones de vía aérea más peligrosas en trauma cerrado de cuello. La manipulación agresiva del cuello, y en particular la hiperextensión cervical, puede completar una separación parcial de la vía aérea o convertir una lesión parcialmente permeable en una obstrucción total, por lo que está contraindicada. El manejo prehospitalario correcto es minimizar la manipulación, mantener al paciente en una posición que le permita proteger su propia vía aérea en la medida de lo posible, tener disponible equipo de rescate de vía aérea y transportar con máxima urgencia a un centro capaz de realizar una vía aérea quirúrgica de emergencia."
    },
    {
        "question": "Un paciente sufre un traumatismo ocular penetrante con un fragmento de vidrio que permanece parcialmente insertado en el globo ocular derecho, con salida visible de humor vítreo alrededor del fragmento. El paciente, con dolor intenso, intenta repetidamente frotarse ambos ojos y quejarse en voz alta. ¿Cuál es la combinación de acciones más apropiada para este caso?",
        "options": [
            {"letter": "a", "text": "Retirar cuidadosamente el fragmento de vidrio para poder aplicar presión directa y controlar la salida de humor vítreo, ya que el sangrado activo es la prioridad principal"},
            {"letter": "b", "text": "Estabilizar el fragmento en su posición sin aplicar presión sobre el globo ocular, cubrir y proteger ambos ojos para limitar el movimiento ocular simpático, controlar activamente que el paciente no se toque los ojos, y considerar manejo farmacológico del dolor y la ansiedad si el protocolo lo permite, ya que el esfuerzo físico y el llanto aumentan la presión intraocular y el riesgo de extrusión adicional de contenido ocular"},
            {"letter": "c", "text": "Irrigar profusamente el ojo afectado con solución salina para limpiar el fragmento antes de cubrirlo, de forma similar al manejo de una quemadura química"},
            {"letter": "d", "text": "Colocar un parche compresivo firme sobre el ojo afectado para inmovilizar el fragmento y evitar que se desplace durante el transporte"}
        ],
        "correctAnswer": "b",
        "explanation": "Un objeto empalado en el globo ocular con salida de humor vítreo representa una lesión ocular abierta grave en la que cualquier presión directa, irrigación agresiva o manipulación puede expulsar más contenido intraocular y causar la pérdida permanente de la visión. El fragmento nunca debe retirarse en el campo, ya que puede estar taponando parcialmente la herida. Debe protegerse con una estructura rígida que evite el contacto (por ejemplo, un vaso o cono acolchado) y cubrirse sin ejercer presión, cubriendo también el ojo sano para minimizar el movimiento conjugado. Es igualmente importante controlar factores que elevan la presión intraocular, como el esfuerzo de frotarse los ojos, el llanto, la maniobra de Valsalva o la agitación, ya que estos pueden agravar la extrusión de contenido ocular; por ello, calmar al paciente y, si el protocolo del servicio lo permite, considerar manejo del dolor y la ansiedad, forma parte integral del manejo definitivo prehospitalario."
    },
    {
        "question": "Un paciente de 45 años sufre un golpe directo con un bate de béisbol en la mandíbula. Presenta maloclusión severa, dos dientes avulsionados que no se encuentran en la escena (se sospecha que fueron aspirados o deglutidos), sangrado activo intraoral y disminución progresiva del nivel de conciencia (Glasgow que baja de 14 a 11 en 10 minutos). ¿Cuál es el razonamiento correcto para priorizar el manejo de este paciente?",
        "options": [
            {"letter": "a", "text": "Buscar activamente los dientes avulsionados en la escena antes de continuar la evaluación, ya que su reimplantación es la prioridad terapéutica más urgente"},
            {"letter": "b", "text": "Colocar al paciente en decúbito supino con la cabeza en hiperextensión para facilitar el drenaje del sangrado intraoral hacia la faringe posterior"},
            {"letter": "c", "text": "Priorizar el control agresivo de la vía aérea mediante posicionamiento lateral o succión continua para manejar tanto el sangrado activo como el riesgo de aspiración de los dientes faltantes, y reconocer que el descenso del nivel de conciencia indica una posible lesión cerebral asociada que puede comprometer aún más los reflejos protectores de la vía aérea, elevando la urgencia del transporte"},
            {"letter": "d", "text": "Enfocar el manejo exclusivamente en la inmovilización de la fractura mandibular con un vendaje de cuatro puntas, ya que estabilizar el hueso es lo que previene la aspiración de los dientes"}
        ],
        "correctAnswer": "c",
        "explanation": "Este caso combina múltiples amenazas simultáneas a la vía aérea: sangrado intraoral activo, dientes avulsionados no localizados con alto riesgo de haber sido aspirados hacia la vía aérea inferior, y un nivel de conciencia en deterioro que sugiere una lesión cerebral traumática asociada. Un Glasgow que cae progresivamente indica pérdida gradual de los reflejos protectores de la vía aérea (tos, deglución), lo que aumenta dramáticamente el riesgo de aspiración de sangre o de los fragmentos dentales faltantes. La hiperextensión cervical y la búsqueda de los dientes en la escena son distractores peligrosos que retrasan el manejo real; en un paciente con posible lesión de columna cervical por el mecanismo, además, la hiperextensión está contraindicada. El posicionamiento lateral (si no hay sospecha de lesión espinal que lo contraindique) o la succión continua en supino con inmovilización, junto con la reevaluación neurológica seriada y el transporte prioritario, son las acciones que abordan simultáneamente el riesgo de aspiración y el deterioro neurológico."
    },
    {
        "question": "Un paciente presenta un objeto de metal empalado a través de la mejilla que ha perforado la cavidad oral y cuya punta protruye visiblemente dentro de la boca, obstruyendo parcialmente la orofaringe posterior. El paciente presenta arcadas frecuentes, sangrado en la vía aérea y dificultad para manejar sus propias secreciones. ¿Cuál es la justificación clínica correcta para la conducta a seguir con el objeto empalado?",
        "options": [
            {"letter": "a", "text": "El objeto debe dejarse siempre en su lugar y estabilizarse con vendajes voluminosos, sin excepción, ya que retirarlo podría causar una hemorragia incontrolable dentro de la cavidad oral"},
            {"letter": "b", "text": "En este caso específico, el objeto debe retirarse porque su posición y protrusión hacia la orofaringe posterior representan una amenaza directa e inminente para la vía aérea que supera el riesgo de sangrado adicional al retirarlo, siempre que se esté preparado para controlar la hemorragia y manejar la vía aérea inmediatamente después"},
            {"letter": "c", "text": "El objeto debe empujarse hacia afuera a través de la mejilla en dirección contraria a su trayectoria de entrada para minimizar el daño tisular adicional"},
            {"letter": "d", "text": "Se debe sedar profundamente al paciente antes de tomar cualquier decisión sobre el objeto, independientemente del estado de la vía aérea"}
        ],
        "correctAnswer": "b",
        "explanation": "La regla estándar para objetos empalados es estabilizarlos y no retirarlos, ya que el objeto puede estar taponando vasos sanguíneos lesionados. Sin embargo, la excepción reconocida a esta regla ocurre precisamente en la mejilla cuando el objeto compromete de forma activa la vía aérea, como en este caso donde la punta protruye hacia la orofaringe posterior y el paciente ya muestra signos de obstrucción y manejo inadecuado de secreciones. En esta situación, el riesgo inmediato de una obstrucción completa de la vía aérea supera el riesgo de hemorragia por la retirada del objeto, por lo que la conducta correcta es retirarlo con cuidado, estando preparado de inmediato para controlar el sangrado intraoral mediante succión, posicionamiento y, de ser necesario, manejo avanzado de la vía aérea."
    }
]