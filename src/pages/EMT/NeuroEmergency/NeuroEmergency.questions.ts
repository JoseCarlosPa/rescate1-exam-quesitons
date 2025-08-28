import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es un **Evento Vascular Cerebral (EVC)**?",
        answer: "Es una interrupción del flujo sanguíneo al cerebro, ya sea por oclusión de un vaso (isquémico) o por la ruptura de un vaso y hemorragia (hemorrágico).",
    },
    {
        question: "¿Qué es la **Escala de Cincinnati**?",
        answer: "Es una herramienta prehospitalaria utilizada para la detección rápida de un posible EVC, evaluando tres signos clave: caída facial (parálisis facial), debilidad en un brazo (deriva del brazo) y alteraciones en el habla (lenguaje anormal).",
    },
    {
        question: "¿Cuándo se considera un **estado epiléptico**?",
        answer: "Se define como una convulsión que dura más de 5 minutos, o la ocurrencia de convulsiones repetidas sin recuperación completa de la conciencia entre cada evento. Es una emergencia médica.",
    },
    {
        question: "¿Qué importancia tiene la **medición de glucosa** en pacientes con alteración neurológica?",
        answer: "La hipoglucemia (nivel bajo de azúcar en la sangre) puede simular los síntomas de un EVC o una convulsión, por lo que es fundamental descartarla temprano mediante un test de glucosa capilar en cualquier paciente con alteración del estado de conciencia o sospecha de emergencia neurológica.",
    },
    {
        question: "¿Qué acciones iniciales deben tomarse ante un paciente con **convulsión activa**?",
        answer: "Lo principal es asegurar la seguridad del paciente: proteger la cabeza para evitar traumatismos, mover objetos peligrosos del entorno y no intentar restringir los movimientos. No se debe introducir ningún objeto en la boca. Una vez que la convulsión cese, se debe colocar al paciente en posición de recuperación y evaluar su vía aérea y respiración.",
    },
    {
        question: "¿Qué puede causar un **síncope**?",
        answer: "El síncope, o desmayo, es una pérdida súbita y temporal de la conciencia debido a una reducción transitoria del flujo sanguíneo al cerebro. Puede ser causado por problemas cardíacos, deshidratación severa, dolor intenso, ansiedad, disautonomía o ciertas medicaciones.",
    },
    {
        question: "¿Cuáles son las **tres principales causas de cefalea** que requieren atención de emergencia?",
        answer: "Aunque la mayoría de las cefaleas son benignas, aquellas que requieren atención de emergencia incluyen la cefalea asociada a un EVC (especialmente hemorrágico), la meningitis (infección de las membranas que rodean el cerebro y la médula espinal) y la cefalea de 'trueno' (la peor cefalea de la vida, de inicio súbito, que puede indicar una hemorragia subaracnoidea).",
    },
    {
        question: "¿Cuál es la **diferencia clave entre un EVC isquémico y un EVC hemorrágico**?",
        answer: "Un EVC isquémico ocurre cuando un coágulo bloquea el flujo de sangre a una parte del cerebro. Un EVC hemorrágico ocurre cuando un vaso sanguíneo se rompe dentro o alrededor del cerebro, causando sangrado. La diferenciación es crucial para el tratamiento, ya que los tratamientos son muy diferentes.",
    },
];


export const neurologicasQuestions: Question[] = [
    {
        "question": "¿Cuál de los siguientes trastornos ocurre cuando el flujo sanguíneo a una parte particular del cerebro se corta por un bloqueo que daña el tejido?",
        "options": [
            { "letter": "a", "text": "Evento vascular cerebral hemorrágico" },
            { "letter": "b", "text": "Evento vascular cerebral isquémico" },
            { "letter": "c", "text": "Convulsiones" },
            { "letter": "d", "text": "Estado epiléptico" }
        ],
        "correctAnswer": "b",
        "explanation": "Un EVC isquémico es causado por una oclusión (bloqueo), generalmente por un coágulo, que impide que la sangre llegue a una parte del cerebro, provocando la muerte del tejido por falta de oxígeno (isquemia). Un EVC hemorrágico es causado por un sangrado."
    },
    {
        "question": "¿Cuál es el nombre de la condición cuando hay debilidad en un lado del cuerpo después de un EVC?",
        "options": [
            { "letter": "a", "text": "Afasia" },
            { "letter": "b", "text": "Ataxia" },
            { "letter": "c", "text": "Hemiparesia" },
            { "letter": "d", "text": "Negligencia" }
        ],
        "correctAnswer": "c",
        "explanation": "'Hemi-' significa mitad y '-paresia' significa debilidad. Por lo tanto, hemiparesia es la debilidad en un lado del cuerpo. La afasia es un trastorno del lenguaje y la ataxia es la falta de coordinación."
    },
    {
        "question": "Un paciente experimentó una convulsión. ¿Qué criterios se deben cumplir para que este paciente tenga estado epiléptico?",
        "options": [
            { "letter": "a", "text": "Una convulsión de más de 30 minutos" },
            { "letter": "b", "text": "Una convulsión que fue precedida por un aura" },
            { "letter": "c", "text": "Múltiples convulsiones con conciencia normal entre cada evento" },
            { "letter": "d", "text": "Una convulsión que dura más de 5 minutos o convulsiones repetidas sin recuperación de la conciencia" }
        ],
        "correctAnswer": "d",
        "explanation": "La definición moderna de estado epiléptico (status epilepticus) es una convulsión continua que dura más de 5 minutos, o dos o más convulsiones seguidas sin que el paciente recupere completamente la conciencia entre ellas. Es una emergencia neurológica."
    },
    {
        "question": "¿Cuál de las siguientes es una causa metabólica de una convulsión?",
        "options": [
            { "letter": "a", "text": "Tumor cerebral" },
            { "letter": "b", "text": "Traumatismo craneoencefálico" },
            { "letter": "c", "text": "Hipoglucemia" },
            { "letter": "d", "text": "Absceso cerebral" }
        ],
        "correctAnswer": "c",
        "explanation": "Una causa metabólica se refiere a un desequilibrio en la química del cuerpo. La hipoglucemia (bajo nivel de azúcar en la sangre) es una causa metabólica común, ya que el cerebro necesita glucosa para funcionar. Las otras opciones son causas estructurales (problemas físicos en el cerebro)."
    },
    {
        "question": "Este paciente parece estar sufriendo un EVC y una convulsión. ¿Qué condición se asemeja a un EVC y también puede causar convulsiones?",
        "options": [
            { "letter": "a", "text": "Meningitis" },
            { "letter": "b", "text": "Estado posictal" },
            { "letter": "c", "text": "Hipoglucemia" },
            { "letter": "d", "text": "Migraña" }
        ],
        "correctAnswer": "c",
        "explanation": "La hipoglucemia severa es conocida como una 'imitadora de EVC' ('stroke mimic') porque puede causar déficits neurológicos focales (como debilidad en un lado del cuerpo) y alteración del estado mental, además de poder desencadenar convulsiones."
    },
    {
        "question": "¿Cuál es el primer paso en la evaluación de un paciente con sospecha de emergencia neurológica en el entorno prehospitalario?",
        "options": [
            { "letter": "a", "text": "Realizar una tomografía computarizada" },
            { "letter": "b", "text": "Establecer la vía aérea y asegurar la ventilación" },
            { "letter": "c", "text": "Administrar medicamentos anticonvulsivos" },
            { "letter": "d", "text": "Obtener un historial clínico completo" }
        ],
        "correctAnswer": "b",
        "explanation": "Independientemente de la causa, la prioridad en cualquier emergencia es seguir el ABC (Airway, Breathing, Circulation). Asegurar una vía aérea permeable y una ventilación adecuada es fundamental, ya que la hipoxia puede empeorar gravemente una lesión cerebral."
    },
    {
        "question": "Un paciente con un EVC agudo debe ser transportado preferentemente a un centro médico que tenga la capacidad de ofrecer:",
        "options": [
            { "letter": "a", "text": "Fisioterapia a largo plazo" },
            { "letter": "b", "text": "Unidad de cuidados paliativos" },
            { "letter": "c", "text": "Capacidades de tomografía y consulta neurológica especializada" },
            { "letter": "d", "text": "Servicios de rehabilitación ocupacional" }
        ],
        "correctAnswer": "c",
        "explanation": "El tiempo es cerebro ('Time is brain'). El paciente necesita una tomografía computarizada (TC) para diferenciar entre un EVC isquémico y uno hemorrágico, y una evaluación neurológica para determinar si es candidato a tratamientos urgentes como la trombólisis. Esto define a un 'Centro de Ictus' o 'Stroke Center'."
    },
    {
        "question": "¿Cuál de los siguientes no es un signo primario evaluado en la escala prehospitalaria de Cincinnati para EVC?",
        "options": [
            { "letter": "a", "text": "Caída facial" },
            { "letter": "b", "text": "Debilidad de la pierna" },
            { "letter": "c", "text": "Debilidad del brazo" },
            { "letter": "d", "text": "Alteración del habla" }
        ],
        "correctAnswer": "b",
        "explanation": "La escala de Cincinnati para EVC (FAST en inglés) evalúa tres componentes clave: Caída Facial (pidiendo al paciente que sonría), Debilidad del Brazo (pidiendo que cierre los ojos y extienda los brazos) y Alteración del Habla (pidiendo que repita una frase simple). La debilidad de la pierna no es parte de esta escala específica."
    },
    {
        "question": "En un paciente con cefalea severa, ¿cuál de los siguientes hallazgos sugiere una condición potencialmente mortal como meningitis?",
        "options": [
            { "letter": "a", "text": "Sensibilidad a la luz" },
            { "letter": "b", "text": "Náuseas y vómitos" },
            { "letter": "c", "text": "Rigidez de nuca y fiebre" },
            { "letter": "d", "text": "Dolor pulsátil en un lado de la cabeza" }
        ],
        "correctAnswer": "c",
        "explanation": "La combinación de fiebre, cefalea intensa y rigidez de nuca (dificultad o dolor al flexionar el cuello) es la tríada clásica de la meningitis, una infección de las membranas que cubren el cerebro y la médula espinal. Es una emergencia médica."
    },
    {
        "question": "Después de una convulsión, un paciente se encuentra en un estado de confusión y somnolencia. ¿Cómo se denomina este periodo?",
        "options": [
            { "letter": "a", "text": "Periodo tónico" },
            { "letter": "b", "text": "Fase clónica" },
            { "letter": "c", "text": "Estado de ausencia" },
            { "letter": "d", "text": "Estado posictal" }
        ],
        "correctAnswer": "d",
        "explanation": "El estado posictal es el período de recuperación que sigue a la fase activa de una convulsión. Se caracteriza por un nivel de conciencia alterado, que puede ir desde la somnolencia y confusión hasta la combatividad, y puede durar desde minutos hasta horas."
    },
    {
        "question": "El test de glucosa capilar debe realizarse en pacientes con alteración de conciencia porque:",
        "options": [
            { "letter": "a", "text": "Es obligatorio en todo protocolo." },
            { "letter": "b", "text": "Puede haber hipoglucemia no diagnosticada que simule una emergencia neurológica." },
            { "letter": "c", "text": "Reduce la necesidad de oxígeno." },
            { "letter": "d", "text": "Determina el nivel de estrés del paciente." }
        ],
        "correctAnswer": "b",
        "explanation": "La hipoglucemia es una causa reversible y común de alteración del estado mental, convulsiones y síntomas similares a los de un EVC. Es fundamental medir la glucosa para no pasar por alto esta condición tratable."
    },
    {
        "question": "Un paciente que ha sufrido una convulsión y ahora está inconsciente pero respira, debe ser colocado en:",
        "options": [
            { "letter": "a", "text": "Decúbito supino" },
            { "letter": "b", "text": "Posición de recuperación lateral" },
            { "letter": "c", "text": "Fowler completo" },
            { "letter": "d", "text": "Prono con apoyo en el pecho" }
        ],
        "correctAnswer": "b",
        "explanation": "La posición de recuperación (decúbito lateral) es ideal para pacientes inconscientes sin trauma que respiran adecuadamente. Utiliza la gravedad para mantener la lengua alejada de la parte posterior de la garganta y permite que el vómito o las secreciones drenen, protegiendo la vía aérea."
    },
    {
        "question": "Una emergencia neurológica puede estar causada por:",
        "options": [
            { "letter": "a", "text": "Hipoglucemia, TCE o ACV" },
            { "letter": "b", "text": "Broncoaspiración, fiebre o artritis" },
            { "letter": "c", "text": "Fractura de fémur, apendicitis o otitis" },
            { "letter": "d", "text": "Hipertensión controlada, alergias estacionales o gripe común" }
        ],
        "correctAnswer": "a",
        "explanation": "Las emergencias neurológicas pueden tener orígenes variados. La hipoglucemia (metabólica), un traumatismo craneoencefálico (TCE) o un accidente cerebrovascular (ACV) son causas comunes que afectan directamente la función cerebral."
    },
    {
        "question": "¿Qué tipo de EVC se caracteriza por la ruptura de un vaso sanguíneo en el cerebro?",
        "options": [
            { "letter": "a", "text": "EVC isquémico" },
            { "letter": "b", "text": "Ataque isquémico transitorio (AIT)" },
            { "letter": "c", "text": "EVC hemorrágico" },
            { "letter": "d", "text": "Convulsión" }
        ],
        "correctAnswer": "c",
        "explanation": "Un EVC hemorrágico ocurre cuando un vaso sanguíneo debilitado (como un aneurisma) se rompe y sangra dentro del cerebro. La sangre acumulada comprime el tejido cerebral circundante, causando daño."
    },
    {
        "question": "¿Cuál de los siguientes es un objetivo clave en el manejo prehospitalario de un paciente con sospecha de EVC?",
        "options": [
            { "letter": "a", "text": "Administrar aspirina inmediatamente a todos los pacientes." },
            { "letter": "b", "text": "Retrasar el transporte para realizar una evaluación exhaustiva en el lugar." },
            { "letter": "c", "text": "Identificar rápidamente los signos y síntomas y transportar a un centro adecuado." },
            { "letter": "d", "text": "Inducir el vómito para reducir la presión intracraneal." }
        ],
        "correctAnswer": "c",
        "explanation": "El tratamiento definitivo para muchos EVC isquémicos es tiempo-dependiente. La función del proveedor prehospitalario es reconocer rápidamente un posible EVC, realizar una evaluación breve y notificar al hospital receptor mientras se inicia un transporte rápido a un centro de ictus designado."
    }
]

export const neurologicalQuestionsChallenge: Question[] = [
    {
        question: "Un hombre de 65 años con fibrilación auricular desarrolla súbitamente debilidad en el lado derecho del cuerpo y dificultad para hablar. Sus familiares reportan que los síntomas iniciaron hace 45 minutos. Al examen: alerta pero confuso, hemiparesia derecha, desviación de la mirada hacia la izquierda, afasia. Glucosa: 110 mg/dL, TA: 160/95 mmHg. ¿Cuál es la prioridad en el manejo?",
        options: [
            { letter: "a", text: "Administrar aspirina 325 mg inmediatamente" },
            { letter: "b", text: "Reducir la presión arterial antes del transporte" },
            { letter: "c", text: "Transporte urgente a centro con capacidad de trombólisis (código ictus)" },
            { letter: "d", text: "Observación por 2 horas para ver si mejora espontáneamente" }
        ],
        correctAnswer: "c",
        explanation: "Este paciente presenta signos de EVC isquémico agudo en territorio de arteria cerebral media izquierda. Está dentro de la ventana de tiempo para trombólisis (3-4.5 horas). El transporte urgente a un centro de ictus es crucial. No se debe dar aspirina sin descartar hemorragia con TC."
    },
    {
        question: "Una mujer de 35 años presenta cefalea súbita e intensa ('la peor de mi vida'), rigidez de nuca, fotofobia y vómitos. Está consciente pero irritable. Sus signos vitales: FC 95 lpm, TA 145/85 mmHg, temperatura 37.2°C. ¿Cuál es la sospecha diagnóstica más probable?",
        options: [
            { letter: "a", text: "Migraña severa" },
            { letter: "b", text: "Hemorragia subaracnoidea" },
            { letter: "c", text: "Meningitis bacteriana" },
            { letter: "d", text: "Tumor cerebral" }
        ],
        correctAnswer: "b",
        explanation: "La cefalea 'en trueno' (súbita, intensa, peor de la vida) con rigidez de nuca en una mujer joven es altamente sugestiva de hemorragia subaracnoidea, frecuentemente por ruptura de aneurisma. Aunque la meningitis también causa rigidez de nuca, la fiebre sería más prominente."
    },
    {
        question: "Durante el transporte, un paciente diabético de 45 años con alteración del estado mental presenta convulsiones tónico-clónicas generalizadas que han durado 8 minutos. Su glucosa inicial fue de 180 mg/dL. Las convulsiones continúan a pesar de la oxigenoterapia. ¿Cuál es la intervención más apropiada?",
        options: [
            { letter: "a", text: "Administrar dextrosa 50% IV" },
            { letter: "b", text: "Preparar para intubación de secuencia rápida" },
            { letter: "c", text: "Sujetar físicamente al paciente para evitar lesiones" },
            { letter: "d", text: "Aumentar el flujo de oxígeno y esperar" }
        ],
        correctAnswer: "b",
        explanation: "Estado epiléptico (>5 minutos de convulsiones) es una emergencia neurológica. Con glucosa normal, la prioridad es proteger la vía aérea ya que las convulsiones prolongadas comprometen la ventilación y oxigenación. La intubación puede ser necesaria para control definitivo de la vía aérea."
    },
    {
        question: "Un hombre de 28 años sufre traumatismo craneal en accidente de motocicleta. Inicialmente estaba consciente, pero ahora presenta deterioro neurológico: confusión progresiva, somnolencia, pupila derecha dilatada y no reactiva. Su TA es 180/60 mmHg con bradicardia (50 lpm). ¿Qué complicación es más probable?",
        options: [
            { letter: "a", text: "Shock hemorrágico por sangrado interno" },
            { letter: "b", text: "Hematoma epidural con herniación cerebral" },
            { letter: "c", text: "Lesión cervical con shock neurogénico" },
            { letter: "d", text: "Contusión pulmonar severa" }
        ],
        correctAnswer: "b",
        explanation: "El 'intervalo lúcido' seguido de deterioro, pupila unilateral dilatada y la tríada de Cushing (hipertensión, bradicardia, respiración irregular) sugieren hematoma epidural con aumento de la presión intracraneal y herniación cerebral inminente. Es una emergencia neuroquirúrgica."
    },
    {
        question: "Una mujer de 55 años con antecedentes de migraña presenta cefalea severa, pero esta vez es diferente: inicio súbito, acompañada de debilidad en brazo y pierna izquierdos, y dificultad para encontrar palabras. Sus signos vitales son estables. ¿Cuál es la consideración más importante?",
        options: [
            { letter: "a", text: "Es una migraña complicada, administrar analgésicos" },
            { letter: "b", text: "Probable EVC, activar código ictus independientemente del historial de migraña" },
            { letter: "c", text: "Crisis de ansiedad exacerbando la migraña" },
            { letter: "d", text: "Cefalea tensional severa" }
        ],
        correctAnswer: "b",
        explanation: "Aunque tenga historial de migraña, la presencia de déficits neurológicos focales (hemiparesia, afasia) indica EVC hasta demostrar lo contrario. La migraña con aura puede causar síntomas neurológicos, pero estos nuevos signos requieren evaluación urgente para EVC."
    },
    {
        question: "Un niño de 8 años presenta convulsión febril en el contexto de fiebre de 39.5°C. La convulsión duró 3 minutos y ahora está posictal pero despierta. Sus padres están muy angustiados. ¿Cuál es el manejo más apropiado?",
        options: [
            { letter: "a", text: "Administrar anticonvulsivantes profilácticos" },
            { letter: "b", text: "Enfriamiento agresivo con hielo y alcohol" },
            { letter: "c", text: "Tranquilizar a los padres, enfriamiento gradual, y evaluación médica para determinar causa de la fiebre" },
            { letter: "d", text: "Transporte inmediato a neurocirugía" }
        ],
        correctAnswer: "c",
        explanation: "Las convulsiones febriles simples (<15 min, generalizadas, sin recurrencia en 24h) en niños de 6 meses a 5 años son generalmente benignas. El enfoque debe ser el enfriamiento gradual, tranquilizar a la familia, y encontrar la causa de la fiebre. El enfriamiento agresivo puede causar escalofríos."
    },
    {
        question: "Un paciente de 70 años con demencia es encontrado por su familia con nivel de conciencia alterado. No hay signos de trauma. Glucosa: 45 mg/dL. Después de administrar dextrosa 50%, el paciente mejora significativamente pero permanece ligeramente confuso. ¿Cuál es la explicación más probable?",
        options: [
            { letter: "a", text: "La dextrosa no fue efectiva" },
            { letter: "b", text: "Hay una lesión cerebral estructural subyacente" },
            { letter: "c", text: "La hipoglucemia se resolvió pero la confusión basal por demencia persiste" },
            { letter: "d", text: "Se requiere más dextrosa" }
        ],
        correctAnswer: "c",
        "explanation": "La hipoglucemia se corrigió exitosamente (mejoría significativa tras dextrosa), pero el paciente con demencia preexistente retorna a su nivel basal de función cognitiva alterada. Es importante reconocer que la corrección completa no siempre significa normalidad en pacientes con deterioro cognitivo previo."
    },
    {
        question: "Un hombre de 42 años presenta episodio de pérdida súbita de conciencia de 30 segundos mientras caminaba. Los testigos refieren que se puso pálido, cayó, y recuperó la conciencia espontáneamente sin confusión posterior. Niega palpitaciones o dolor torácico. ¿Cuál es la causa más probable?",
        options: [
            { letter: "a", text: "Convulsión parcial compleja" },
            { letter: "b", text: "Síncope vasovagal" },
            { letter: "c", text: "Hipoglucemia" },
            { letter: "d", text: "Ataque isquémico transitorio (AIT)" }
        ],
        correctAnswer: "b",
        "explanation": "El síncope vasovagal se caracteriza por pérdida súbita de conciencia con palidez, recuperación rápida y completa sin estado posictal (confusión). Las convulsiones típicamente tienen fase posictal, la hipoglucemia causa confusión persistente, y el AIT no causa pérdida de conciencia."
    },
    {
        question: "Una mujer embarazada de 32 semanas desarrolla convulsión tónico-clónica en presencia de hipertensión (TA 170/110 mmHg), proteinuria y edema. La convulsión cesa después de 2 minutos. Está posictal pero con signos vitales estables. ¿Cuál es la prioridad en el manejo?",
        options: [
            { letter: "a", text: "Administrar anticonvulsivantes de rutina" },
            { letter: "b", text: "Posición en decúbito lateral izquierdo, oxígeno, y transporte urgente a centro obstétrico" },
            { letter: "c", text: "Reducir rápidamente la presión arterial" },
            { letter: "d", text: "Inducir el parto inmediatamente" }
        ],
        correctAnswer: "b",
        explanation: "Este cuadro sugiere eclampsia (convulsiones en contexto de preeclampsia). La posición lateral evita la compresión aortocava, el oxígeno beneficia a madre y feto, y requiere manejo obstétrico especializado urgente. La reducción agresiva de TA puede comprometer la perfusión fetal."
    },
    {
        question: "Un paciente de 60 años con antecedentes de alcoholismo crónico es encontrado confuso y desorientado. Presenta marcha atáxica, movimientos oculares anormales (nistagmo) y dificultad para formar nuevos recuerdos. Su familia reporta que no ha comido bien por semanas. ¿Cuál es la deficiencia nutricional más probable?",
        options: [
            { letter: "a", text: "Deficiencia de vitamina B12" },
            { letter: "b", text: "Deficiencia de tiamina (vitamina B1)" },
            { letter: "c", text: "Deficiencia de ácido fólico" },
            { letter: "d", text: "Deficiencia de vitamina D" }
        ],
        correctAnswer: "b",
        explanation: "La tríada de encefalopatía de Wernicke (confusión, ataxia, oftalmoplegia/nistagmo) en un paciente alcohólico con malnutrición sugiere deficiencia de tiamina. Esta condición puede progresar al síndrome de Korsakoff (pérdida de memoria) si no se trata. Requiere tiamina IV urgente."
    }
];
