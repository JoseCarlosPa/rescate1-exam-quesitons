import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es un infarto agudo al miocardio (IAM)?",
        answer: "Es la muerte de una parte del músculo cardíaco debido a la interrupción del flujo sanguíneo a esa área, generalmente por una obstrucción en una arteria coronaria.",
    },
    {
        question: "¿Qué diferencia hay entre una angina estable e inestable?",
        answer: "La angina estable se presenta de forma predecible con el esfuerzo físico o estrés y se alivia con reposo o nitroglicerina. La angina inestable puede ocurrir en reposo, es menos predecible y puede indicar un empeoramiento de la enfermedad coronaria, siendo una emergencia médica.",
    },
    {
        question: "¿Qué se debe hacer primero si se encuentra a una persona inconsciente sin pulso?",
        answer: "Se debe activar inmediatamente el sistema de emergencias médicas, iniciar compresiones torácicas de alta calidad (RCP) y, si está disponible, utilizar un Desfibrilador Externo Automático (DEA) lo antes posible.",
    },
    {
        question: "¿Qué es el shock cardiogénico?",
        answer: "Es una condición grave en la que el corazón ha sido dañado y no puede bombear suficiente sangre para satisfacer las necesidades de oxígeno y nutrientes del cuerpo, llevando a una falla multiorgánica si no se trata rápidamente.",
    },
    {
        question: "¿Cuál es el papel del DEA en emergencias cardiovasculares?",
        answer: "El DEA es un dispositivo portátil que analiza el ritmo cardíaco y puede administrar una descarga eléctrica (desfibrilación) para restablecer un ritmo cardíaco normal en casos de paro cardíaco súbito causado por ciertos ritmos anormales.",
    },
    {
        question: "¿Qué síntomas pueden indicar un infarto en mujeres?",
        answer: "Aunque el dolor torácico es común, las mujeres pueden experimentar síntomas atípicos como fatiga inusual, dificultad para respirar, náuseas o vómitos, dolor en el cuello, mandíbula, espalda o brazo, sin un dolor torácico intenso.",
    },
    {
        question: "¿Es la aspirina útil en un infarto y por qué?",
        answer: "Sí, la aspirina es muy útil. Actúa como un antiagregante plaquetario, lo que significa que ayuda a prevenir que las plaquetas se agrupen y formen coágulos más grandes que podrían bloquear completamente una arteria coronaria. Esto puede limitar el daño al músculo cardíaco.",
    },
    {
        question: "¿Cuándo está contraindicada la administración de nitroglicerina?",
        answer: "La nitroglicerina está contraindicada si el paciente tiene una presión arterial sistólica por debajo de 90-100 mmHg, si ha tomado inhibidores de la fosfodiesterasa (como Viagra o Cialis) en las últimas 24-48 horas, o si ya ha tomado la dosis máxima prescrita (generalmente 3 dosis).",
    },
];


export const cardiovascularQuestions: Question[] = [
    {
        "question": "¿Cuál es el principal objetivo del sistema cardiovascular?",
        "options": [
            { "letter": "a", "text": "Regular la temperatura corporal" },
            { "letter": "b", "text": "Transportar oxígeno, nutrientes y desechos" },
            { "letter": "c", "text": "Producir hormonas" },
            { "letter": "d", "text": "Filtrar la sangre" }
        ],
        "correctAnswer": "b",
        "explanation": "La función primordial del sistema cardiovascular es la perfusión: hacer circular la sangre por todo el cuerpo para llevar oxígeno y nutrientes a las células y, al mismo tiempo, recoger dióxido de carbono y otros productos de desecho para su eliminación."
    },
    {
        "question": "Un paciente presenta dolor torácico opresivo que irradia al brazo izquierdo y mandíbula, acompañado de diaforesis. ¿Cuál es la sospecha más alta?",
        "options": [
            { "letter": "a", "text": "Ansiedad" },
            { "letter": "b", "text": "Reflujo gastroesofágico" },
            { "letter": "c", "text": "Síndrome coronario agudo" },
            { "letter": "d", "text": "Neumonía" }
        ],
        "correctAnswer": "c",
        "explanation": "Esta es la presentación clásica de un Síndrome Coronario Agudo (SCA), que incluye el infarto de miocardio. La combinación de dolor opresivo, irradiación característica y diaforesis (sudoración fría) debe hacer sospechar inmediatamente de una isquemia cardíaca."
    },
    {
        "question": "¿Cuál de los siguientes no es un síntoma común de un infarto agudo al miocardio?",
        "options": [
            { "letter": "a", "text": "Dolor torácico" },
            { "letter": "b", "text": "Disnea (dificultad para respirar)" },
            { "letter": "c", "text": "Fiebre alta repentina" },
            { "letter": "d", "text": "Náuseas o vómitos" }
        ],
        "correctAnswer": "c",
        "explanation": "Mientras que el dolor torácico, la disnea y las náuseas son síntomas muy comunes de un infarto, una fiebre alta y repentina no lo es. Puede aparecer una febrícula (fiebre baja) horas o días después debido a la respuesta inflamatoria del cuerpo, pero no es un signo inicial."
    },
    {
        "question": "En la evaluación de un paciente con sospecha de síndrome coronario agudo, ¿qué pregunta es crucial respecto a su historial médico?",
        "options": [
            { "letter": "a", "text": "¿Qué tipo de dieta sigue habitualmente?" },
            { "letter": "b", "text": "¿Ha viajado recientemente fuera del país?" },
            { "letter": "c", "text": "¿Tiene antecedentes de diabetes o hipertensión?" },
            { "letter": "d", "text": "¿Prefiere ser atendido por un médico hombre o mujer?" }
        ],
        "correctAnswer": "c",
        "explanation": "La diabetes y la hipertensión son dos de los factores de riesgo más importantes para desarrollar enfermedad de las arterias coronarias. Conocer estos antecedentes aumenta significativamente el índice de sospecha de un SCA."
    },
    {
        "question": "¿Cuál es la dosis inicial recomendada de aspirina para un paciente adulto con sospecha de infarto, sin contraindicaciones?",
        "options": [
            { "letter": "a", "text": "81 mg" },
            { "letter": "b", "text": "160 a 325 mg (no con capa entérica)" },
            { "letter": "c", "text": "500 mg" },
            { "letter": "d", "text": "Sin aspirina, solo nitroglicerina" }
        ],
        "correctAnswer": "b",
        "explanation": "La administración temprana de aspirina tiene un beneficio demostrado en la mortalidad del infarto. La dosis recomendada es de 160 a 325 mg, y debe ser masticable (sin capa entérica) para una absorción más rápida y un efecto antiplaquetario inmediato."
    },
    {
        "question": "Un paciente con dolor torácico ha tomado 3 dosis de nitroglicerina sin alivio y su presión arterial sistólica es de 88 mmHg. ¿Qué acción debe tomar el paramédico?",
        "options": [
            { "letter": "a", "text": "Administrar una cuarta dosis de nitroglicerina." },
            { "letter": "b", "text": "Administrar una dosis de aspirina." },
            { "letter": "c", "text": "Evaluar rápidamente y transportar, evitando más nitroglicerina." },
            { "letter": "d", "text": "Esperar 10 minutos y reevaluar la presión arterial." }
        ],
        "correctAnswer": "c",
        "explanation": "La nitroglicerina es un vasodilatador y está contraindicada si la presión arterial sistólica (PAS) es inferior a 90-100 mmHg. Administrar más nitroglicerina a un paciente hipotenso puede causar un colapso cardiovascular. La prioridad es el transporte inmediato para una intervención definitiva."
    },
    {
        "question": "¿Cuál es el ritmo cardíaco desfibrilable más común en un paro cardíaco súbito?",
        "options": [
            { "letter": "a", "text": "Asistolia" },
            { "letter": "b", "text": "Actividad eléctrica sin pulso (AESP)" },
            { "letter": "c", "text": "Fibrilación ventricular (FV)" },
            { "letter": "d", "text": "Bradicardia sinusal" }
        ],
        "correctAnswer": "c",
        "explanation": "La fibrilación ventricular (FV) es el ritmo inicial más frecuente en los paros cardíacos súbitos presenciados en adultos. Es un ritmo caótico y no productivo que requiere una descarga eléctrica (desfibrilación) para intentar restablecer un ritmo organizado y con pulso."
    },
    {
        "question": "Durante la RCP, ¿cuál es la profundidad de compresión torácica recomendada para un adulto?",
        "options": [
            { "letter": "a", "text": "Al menos 1 pulgada (2.5 cm)" },
            { "letter": "b", "text": "Al menos 2 pulgadas (5 cm), no exceder 2.4 pulgadas (6 cm)" },
            { "letter": "c", "text": "De 3 a 4 pulgadas (7.5 a 10 cm)" },
            { "letter": "d", "text": "Hasta que el tórax se aplane" }
        ],
        "correctAnswer": "b",
        "explanation": "Las guías de reanimación (AHA) enfatizan la RCP de alta calidad. Para un adulto, esto implica comprimir el tórax a una profundidad de al menos 5 cm (2 pulgadas) pero no más de 6 cm (2.4 pulgadas) para maximizar el flujo sanguíneo sin causar lesiones."
    },
    {
        "question": "El paciente con dolor torácico pierde el conocimiento y no tiene pulso. ¿Cuál es el primer paso vital después de confirmar la ausencia de pulso?",
        "options": [
            { "letter": "a", "text": "Administrar oxígeno suplementario" },
            { "letter": "b", "text": "Iniciar compresiones torácicas inmediatamente" },
            { "letter": "c", "text": "Esperar a que llegue el equipo avanzado" },
            { "letter": "d", "text": "Administrar un analgésico" }
        ],
        "correctAnswer": "b",
        "explanation": "Ante un paro cardíaco confirmado (sin pulso), la prioridad absoluta es iniciar las compresiones torácicas de alta calidad. El principio es C-A-B (Compresiones - Vía Aérea - Respiración). Las compresiones mantienen un flujo sanguíneo mínimo a los órganos vitales, especialmente al cerebro."
    },
    {
        "question": "¿Qué es la insuficiencia cardíaca congestiva (ICC)?",
        "options": [
            { "letter": "a", "text": "Una afección donde el corazón bombea sangre con demasiada fuerza." },
            { "letter": "b", "text": "La incapacidad del corazón para bombear suficiente sangre para satisfacer las demandas del cuerpo, lo que lleva a la acumulación de líquidos." },
            { "letter": "c", "text": "Una infección viral del corazón." },
            { "letter": "d", "text": "Un tipo de arritmia cardíaca." }
        ],
        "correctAnswer": "b",
        "explanation": "La ICC es una condición crónica en la que el músculo cardíaco se ha debilitado y no puede bombear eficientemente. Esto provoca que la sangre se 'congestione' o acumule detrás del corazón, filtrándose a los pulmones (edema pulmonar) y al resto del cuerpo (edemas periféricos)."
    },
    {
        "question": "Un paciente con antecedentes de insuficiencia cardíaca presenta disnea severa, crepitantes en los pulmones y edemas en las piernas. ¿Qué complicación cardiovascular sospecharía?",
        "options": [
            { "letter": "a", "text": "Angina de pecho estable" },
            { "letter": "b", "text": "Accidente cerebrovascular" },
            { "letter": "c", "text": "Embolia pulmonar" },
            { "letter": "d", "text": "Edema pulmonar agudo" }
        ],
        "correctAnswer": "d",
        "explanation": "Esta tríada de síntomas es la presentación clásica del edema pulmonar agudo, una descompensación grave de la insuficiencia cardíaca. La disnea (falta de aire), los crepitantes (líquido en los alvéolos) y el edema periférico indican una sobrecarga de volumen severa."
    },
    {
        "question": "En un paciente con posible aneurisma aórtico, ¿cuál de los siguientes es un síntoma clave que debe buscar el paramédico?",
        "options": [
            { "letter": "a", "text": "Dolor abdominal que irradia a la espalda o escápulas" },
            { "letter": "b", "text": "Dolor torácico puntiforme que empeora con la respiración" },
            { "letter": "c", "text": "Erupción cutánea pruriginosa" },
            { "letter": "d", "text": "Rigidez en el cuello" }
        ],
        "correctAnswer": "a",
        "explanation": "Un aneurisma de la aorta abdominal (AAA) que se está disecando o rompiendo a menudo causa un dolor abdominal o de espalda súbito y muy intenso, descrito frecuentemente como 'desgarrador'. La irradiación a la espalda o entre los omóplatos es un signo clásico."
    },
    {
        "question": "¿Qué medida es esencial para el manejo prehospitalario de una emergencia hipertensiva?",
        "options": [
            { "letter": "a", "text": "Administrar grandes volúmenes de líquidos intravenosos." },
            { "letter": "b", "text": "Elevar las piernas del paciente para mejorar el retorno venoso." },
            { "letter": "c", "text": "Mantener la calma, monitorear y transportar al paciente de forma segura y rápida." },
            { "letter": "d", "text": "Administrar nitroglicerina sublingual de inmediato." }
        ],
        "correctAnswer": "c",
        "explanation": "En el campo, el objetivo no es bajar drásticamente la presión arterial, ya que esto podría causar hipoperfusión cerebral. El manejo se centra en el cuidado de soporte, la monitorización continua de signos vitales y neurológicos, y el traslado rápido a un centro donde se pueda reducir la presión de manera controlada."
    },
    {
        "question": "¿Cuál es el principal riesgo al administrar nitroglicerina a un paciente con presión arterial baja?",
        "options": [
            { "letter": "a", "text": "Aumento de la frecuencia cardíaca" },
            { "letter": "b", "text": "Empeoramiento de la hipotensión y posible shock" },
            { "letter": "c", "text": "Reacción alérgica grave" },
            { "letter": "d", "text": "Dolor de cabeza severo" }
        ],
        "correctAnswer": "b",
        "explanation": "La nitroglicerina es un potente vasodilatador. Si se administra a un paciente que ya está hipotenso, causará una caída aún mayor de la presión arterial, comprometiendo la perfusión de los órganos vitales y pudiendo precipitar un shock profundo."
    },
    {
        "question": "Un paciente con dolor torácico agudo refiere que ha tomado sildenafil (Viagra) hace aproximadamente 12 horas. ¿Qué implicación tiene esto para el tratamiento con nitroglicerina?",
        "options": [
            { "letter": "a", "text": "No hay contraindicación, se puede administrar nitroglicerina normalmente." },
            { "letter": "b", "text": "La nitroglicerina está absolutamente contraindicada debido al riesgo de hipotensión severa." },
            { "letter": "c", "text": "Se puede administrar nitroglicerina, pero con dosis reducidas." },
            { "letter": "d", "text": "Solo se puede administrar nitroglicerina si la presión arterial es muy alta." }
        ],
        "correctAnswer": "b",
        "explanation": "El uso de inhibidores de la fosfodiesterasa como el sildenafil en las últimas 24-48 horas es una contraindicación absoluta para la administración de nitroglicerina. La combinación de ambos fármacos puede provocar una vasodilatación masiva y una hipotensión grave y refractaria que puede ser mortal."
    }
]