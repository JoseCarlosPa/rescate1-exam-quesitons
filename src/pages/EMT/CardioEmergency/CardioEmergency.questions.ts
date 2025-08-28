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

export const cardiovascularQuestionsChallenge: Question[] = [
    {
        question: "Un hombre de 58 años con diabetes e hipertensión presenta dolor epigástrico intenso, náuseas, vómitos y diaforesis. Niega dolor torácico. Sus signos vitales son: FC 95 lpm, TA 145/90 mmHg, SpO2 96%. Su ECG muestra elevaciones del ST en las derivaciones II, III y aVF. ¿Cuál es la interpretación más probable?",
        options: [
            { letter: "a", text: "Gastritis aguda por estrés" },
            { letter: "b", text: "Infarto agudo de miocardio inferior (pared inferior)" },
            { letter: "c", text: "Crisis hipertensiva" },
            { letter: "d", text: "Pancreatitis aguda" }
        ],
        correctAnswer: "b",
        explanation: "Los pacientes diabéticos pueden presentar infartos con síntomas atípicos (dolor epigástrico en lugar de torácico). Las elevaciones del ST en II, III y aVF indican infarto de la pared inferior del ventrículo izquierdo, típicamente por oclusión de la arteria coronaria derecha."
    },
    {
        question: "Una mujer de 65 años con antecedentes de insuficiencia cardíaca despierta súbitamente con disnea severa, ortopnea y ansiedad extrema. Al examen presenta crepitantes bibasales, taquicardia (120 lpm), hipertensión (180/100 mmHg) y expectoración espumosa rosada. ¿Cuál es la intervención prioritaria?",
        options: [
            { letter: "a", text: "Colocar al paciente en posición supina para mejorar el retorno venoso" },
            { letter: "b", text: "Posición semisentada, oxígeno de alto flujo y preparar para asistencia ventilatoria" },
            { letter: "c", text: "Administrar líquidos IV para mejorar la precarga" },
            { letter: "d", text: "Broncodilatadores nebulizados para el broncoespasmo" }
        ],
        correctAnswer: "b",
        explanation: "El cuadro indica edema agudo de pulmón. La posición semisentada reduce el retorno venoso, el oxígeno mejora la oxigenación y puede requerir CPAP o intubación. Los líquidos están contraindicados ya que empeorarían la sobrecarga de volumen."
    },
    {
        question: "Durante el transporte de un paciente con infarto, súbitamente se vuelve inconsciente. El monitor muestra taquicardia ventricular sostenida y el paciente no tiene pulso palpable. Su TA no es medible. ¿Cuál es la acción inmediata más apropiada?",
        options: [
            { letter: "a", text: "Administrar amiodarona IV" },
            { letter: "b", text: "Realizar cardioversión eléctrica sincronizada" },
            { letter: "c", text: "Iniciar RCP y preparar para desfibrilación" },
            { letter: "d", text: "Administrar lidocaína IV" }
        ],
        correctAnswer: "c",
        explanation: "Taquicardia ventricular sin pulso es un ritmo de paro cardíaco que requiere manejo como fibrilación ventricular: RCP inmediata y desfibrilación no sincronizada lo antes posible. La cardioversión sincronizada es solo para ritmos con pulso."
    },
    {
        question: "Un paciente de 45 años presenta dolor torácico severo tipo 'desgarro' que inicia súbitamente y se irradia a la espalda entre las escápulas. Al examen: TA brazo derecho 180/95 mmHg, brazo izquierdo 140/80 mmHg, pulsos desiguales en extremidades superiores. ¿Cuál es la sospecha clínica más probable?",
        options: [
            { letter: "a", text: "Infarto agudo de miocardio" },
            { letter: "b", text: "Embolia pulmonar masiva" },
            { letter: "c", text: "Disección aórtica aguda" },
            { letter: "d", text: "Neumotórax a tensión" }
        ],
        correctAnswer: "c",
        explanation: "El dolor 'desgarrador' súbito irradiado a la espalda, la diferencia de presión arterial >20 mmHg entre brazos y los pulsos desiguales son signos clásicos de disección aórtica aguda, una emergencia cardiovascular que requiere manejo inmediato."
    },
    {
        question: "Un hombre de 72 años con fibrilación auricular crónica presenta súbitamente dolor abdominal severo, náuseas y distensión. Al examen: abdomen rígido, ausencia de ruidos intestinales, taquicardia (130 lpm) e hipotensión (85/50 mmHg). No refiere fiebre. ¿Cuál es la complicación más probable de su arritmia?",
        options: [
            { letter: "a", text: "Perforación intestinal espontánea" },
            { letter: "b", text: "Isquemia mesentérica por embolia" },
            { letter: "c", text: "Pancreatitis aguda" },
            { letter: "d", text: "Obstrucción intestinal mecánica" }
        ],
        correctAnswer: "b",
        explanation: "La fibrilación auricular predispone a formación de trombos que pueden embolizar. La isquemia mesentérica embólica presenta dolor abdominal severo desproporcionado a los hallazgos físicos iniciales, con posterior desarrollo de signos peritoneales y shock."
    },
    {
        question: "Una mujer de 55 años desarrolla palpitaciones súbitas. Al monitor se observa taquicardia supraventricular regular a 180 lpm. Está consciente, ansiosa, con TA 110/70 mmHg. Ha fallado la maniobra de Valsalva. ¿Cuál es el siguiente paso en el manejo?",
        options: [
            { letter: "a", text: "Cardioversión eléctrica inmediata" },
            { letter: "b", text: "Masaje del seno carotídeo" },
            { letter: "c", text: "Amiodarona IV lenta" },
            { letter: "d", text: "Preparar para intubación" }
        ],
        correctAnswer: "b",
        explanation: "En TSV estable (con pulso y sin signos de shock), después del Valsalva se puede intentar masaje del seno carotídeo. La cardioversión se reserva para pacientes inestables o cuando fallan las maniobras vagales y medicamentos."
    },
    {
        question: "Un paciente de 68 años con antecedentes de IAM previo presenta síncope. Al recuperar la conciencia, el monitor muestra bradicardia sinusal a 35 lpm con pausas >3 segundos. Su TA es 80/50 mmHg y refiere mareo persistente. ¿Cuál es el tratamiento inicial más apropiado?",
        options: [
            { letter: "a", text: "Observación y monitorización continua" },
            { letter: "b", text: "Atropina 0.5 mg IV" },
            { letter: "c", text: "Marcapaso transcutáneo inmediato" },
            { letter: "d", text: "Líquidos IV para mejorar la precarga" }
        ],
        correctAnswer: "b",
        "explanation": "La bradicardia sintomática con compromiso hemodinámico requiere tratamiento. La atropina es la primera línea para bradicardia sinusal. Si no responde o hay bloqueo AV de alto grado, entonces se considera el marcapaso transcutáneo."
    },
    {
        question: "Durante una reanimación, después de 6 minutos de RCP de alta calidad y 3 descargas por FV, el paciente recupera pulso con TA 70/40 mmHg y FC 110 lpm. Está inconsciente con respiración espontánea pero superficial. ¿Cuál es la prioridad en el manejo post-paro?",
        options: [
            { letter: "a", text: "Administrar amiodarona para prevenir recurrencia de FV" },
            { letter: "b", text: "Asegurar vía aérea definitiva y ventilación adecuada" },
            { letter: "c", text: "Iniciar dopamina para la hipotensión" },
            { letter: "d", text: "Obtener ECG de 12 derivaciones inmediatamente" }
        ],
        correctAnswer: "b",
        explanation: "En el retorno de la circulación espontánea (ROSC), la prioridad es optimizar la oxigenación y ventilación para prevenir hipoxia secundaria. La vía aérea definitiva asegura ventilación controlada y previene aspiración en pacientes inconscientes."
    },
    {
        question: "Un hombre de 50 años fumador presenta dolor torácico atípico de 30 minutos de duración. Su ECG inicial es normal, pero 20 minutos después desarrolla elevación del ST de 3mm en V2-V4 y nueva onda Q en V3. Sus signos vitales son estables. ¿Qué indica este cambio electrocardiográfico?",
        options: [
            { letter: "a", text: "Falsa elevación del ST por artefacto" },
            { letter: "b", text: "STEMI anterior en evolución - requiere reperfusión urgente" },
            { letter: "c", text: "Pericarditis aguda" },
            { letter: "d", text: "Variante normal en deportista" }
        ],
        correctAnswer: "b",
        explanation: "La evolución de ECG normal a elevación significativa del ST (>2mm en precordiales) con nueva onda Q indica STEMI anterior en evolución (oclusión de descendente anterior). Es una emergencia que requiere reperfusión inmediata (angioplastia primaria o trombolisis)."
    },
    {
        question: "Una mujer embarazada de 34 semanas presenta disnea súbita, dolor torácico pleurítico y taquicardia (125 lpm) después de un vuelo largo. Su SpO2 es 89% y presenta taquipnea. Niega dolor en miembros inferiores pero refiere ansiedad severa. ¿Cuál es la consideración más importante en su manejo?",
        options: [
            { letter: "a", text: "Posición supina para mejorar el retorno venoso" },
            { letter: "b", text: "Restricción de oxígeno por riesgo fetal" },
            { letter: "c", text: "Posición en decúbito lateral izquierdo, oxígeno suplementario y transporte urgente" },
            { letter: "d", text: "Sedación para controlar la ansiedad" }
        ],
        correctAnswer: "c",
        explanation: "El cuadro sugiere embolia pulmonar (alto riesgo en embarazo + vuelo largo). La posición en decúbito lateral izquierdo previene la compresión aortocava, el oxígeno es seguro y beneficioso para madre y feto, y requiere transporte urgente para anticoagulación."
    }
];
