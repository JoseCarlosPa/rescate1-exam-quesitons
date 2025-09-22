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