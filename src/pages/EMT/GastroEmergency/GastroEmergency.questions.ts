import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué tipos de dolor abdominal son comunes en emergencias gastrointestinales?",
        answer: "El dolor abdominal puede ser visceral (difuso y mal localizado, como en distensión), parietal (agudo, localizado, empeora con el movimiento, como en peritonitis), o referido (percibido en un área diferente al origen, por ejemplo, dolor de vesícula en el hombro derecho)."
    },
    {
        question: "¿Cuáles son las causas más frecuentes de hemorragia gastrointestinal superior?",
        answer: "Las causas comunes incluyen úlceras pépticas, várices esofágicas (especialmente en pacientes con enfermedad hepática), esofagitis, y desgarros de Mallory-Weiss (debido a vómitos severos)."
    },
    {
        question: "¿Cómo se manifiesta una hemorragia gastrointestinal inferior?",
        answer: "La hemorragia gastrointestinal inferior se puede manifestar como hematoquecia (sangre roja brillante o marronácea en las heces) o melena (heces negras, alquitranadas y malolientes, si el sangrado es lento o abundante desde el colon derecho)."
    },
    {
        question: "¿Qué síntomas sugieren una peritonitis?",
        answer: "La peritonitis se caracteriza por dolor abdominal severo y generalizado, 'abdomen en tabla' (rigidez abdominal), náuseas, vómitos, fiebre y signos de shock. Es una emergencia médica grave."
    },
    {
        question: "¿Cuál es el enfoque inicial en un paciente con dolor abdominal agudo?",
        answer: "El enfoque inicial incluye asegurar la vía aérea, la respiración y la circulación (ABCs), evaluar los signos vitales, realizar una evaluación abdominal enfocada, y considerar el traslado rápido a un centro médico."
    },
    {
        question: "¿Qué es la colecistitis y cómo se presenta?",
        answer: "La colecistitis es la inflamación de la vesícula biliar, comúnmente causada por cálculos biliares. Se presenta con dolor intenso en el cuadrante superior derecho del abdomen, que puede irradiarse al hombro o espalda, náuseas, vómitos y fiebre."
    },
    {
        question: "¿Qué debe evitarse en el manejo prehospitalario de un paciente con dolor abdominal agudo?",
        answer: "Generalmente, se debe evitar dar cualquier cosa por vía oral (alimentos, líquidos, medicamentos), administrar analgésicos potentes que puedan enmascarar los síntomas, o retrasar el transporte a un hospital."
    },
    {
        question: "¿Qué es la melena y qué implica?",
        answer: "Melena se refiere a heces negras, alquitranadas y malolientes, resultantes de la digestión de la sangre. Usualmente indica una hemorragia gastrointestinal superior, donde la sangre ha tenido tiempo de ser digerida por las enzimas intestinales."
    },
    {
        question: "¿Qué signos vitales son clave para monitorear en emergencias gastrointestinales graves?",
        answer: "La frecuencia cardíaca (taquicardia), la presión arterial (hipotensión), la frecuencia respiratoria y el estado de conciencia son cruciales, ya que pueden indicar hipovolemia o shock."
    },
    {
        question: "¿Qué consideraciones especiales hay para pacientes con dispositivos de diálisis peritoneal o hemodiálisis?",
        answer: "En pacientes con diálisis peritoneal, cualquier signo de infección en el sitio de inserción del catéter o líquido peritoneal turbio es una emergencia. En pacientes con hemodiálisis, se debe tener precaución con el sitio de la fístula o injerto (no tomar PA o venopunción en ese brazo) y estar atentos a desequilibrios electrolíticos."
    }
];

export const gastrointestinalUrologicQuestions: Question[] = [
    {
        "question": "¿Cuál de los siguientes síntomas es más indicativo de una hemorragia gastrointestinal *inferior*?",
        "options": [
            { "letter": "a", "text": "Vómito en 'posos de café'" },
            { "letter": "b", "text": "Melena" },
            { "letter": "c", "text": "Hematoquecia" },
            { "letter": "d", "text": "Hematemesis" }
        ],
        "correctAnswer": "c",
        "explanation": "La hematoquecia es la presencia de sangre roja y fresca en las heces, lo que indica un sangrado en el tracto GI inferior (colon, recto) donde la sangre no ha tenido tiempo de ser digerida. La melena (heces negras) y el vómito en posos de café indican un sangrado superior, ya que la sangre ha sido digerida por el ácido del estómago."
    },
    {
        "question": "Un paciente con dolor abdominal agudo presenta 'abdomen en tabla' a la palpación. Este hallazgo sugiere:",
        "options": [
            { "letter": "a", "text": "Una obstrucción intestinal leve" },
            { "letter": "b", "text": "Apéndice inflamado" },
            { "letter": "c", "text": "Peritonitis" },
            { "letter": "d", "text": "Una úlcera duodenal" }
        ],
        "correctAnswer": "c",
        "explanation": "El 'abdomen en tabla' describe una rigidez abdominal involuntaria y severa. Es un signo clásico de peritonitis (inflamación del peritoneo), que puede ser causada por la perforación de un órgano. Los músculos abdominales se contraen para proteger los órganos inflamados."
    },
    {
        "question": "Durante la evaluación de un paciente con sospecha de sangrado gastrointestinal, ¿qué signo vital es el último en cambiar significativamente en el escenario de shock compensado?",
        "options": [
            { "letter": "a", "text": "Frecuencia cardíaca" },
            { "letter": "b", "text": "Frecuencia respiratoria" },
            { "letter": "c", "text": "Presión arterial" },
            { "letter": "d", "text": "Llenado capilar" }
        ],
        "correctAnswer": "c",
        "explanation": "En las etapas iniciales del shock (fase compensada), el cuerpo mantiene la presión arterial aumentando la frecuencia cardíaca y la vasoconstricción periférica. Por lo tanto, la hipotensión (caída de la presión arterial) es un signo tardío que indica que los mecanismos de compensación están fallando."
    },
    {
        "question": "Un paciente con antecedentes de cirrosis hepática presenta vómito con sangre roja brillante. La causa más probable es:",
        "options": [
            { "letter": "a", "text": "Gastritis aguda" },
            { "letter": "b", "text": "Várices esofágicas rotas" },
            { "letter": "c", "text": "Úlcera péptica" },
            { "letter": "d", "text": "Diverticulitis" }
        ],
        "correctAnswer": "b",
        "explanation": "La cirrosis aumenta la presión en el sistema venoso portal, lo que provoca que las venas en el esófago se dilaten (várices). Estas várices son frágiles y pueden romperse, causando una hemorragia masiva y potencialmente mortal que se presenta como vómito de sangre roja brillante (hematemesis)."
    },
    {
        "question": "¿Qué tipo de dolor abdominal es difuso, poco localizado y suele describirse como retortijón o calambre?",
        "options": [
            { "letter": "a", "text": "Dolor parietal" },
            { "letter": "b", "text": "Dolor referido" },
            { "letter": "c", "text": "Dolor visceral" },
            { "letter": "d", "text": "Dolor somático" }
        ],
        "correctAnswer": "c",
        "explanation": "El dolor visceral se origina en los órganos internos (vísceras). Las fibras nerviosas de estos órganos no son tan precisas como las de la piel, lo que resulta en un dolor mal localizado, sordo o tipo cólico que a menudo se siente en la línea media del abdomen."
    },
    {
        "question": "La 'respuesta protectora' o 'guarding' en el examen abdominal de un paciente indica:",
        "options": [
            { "letter": "a", "text": "Dolor leve sin relevancia clínica" },
            { "letter": "b", "text": "Inflamación o irritación del peritoneo" },
            { "letter": "c", "text": "Un calambre muscular inofensivo" },
            { "letter": "d", "text": "Una reacción alérgica" }
        ],
        "correctAnswer": "b",
        "explanation": "El 'guarding' es la contracción voluntaria o involuntaria de los músculos de la pared abdominal en respuesta a la palpación. Es un mecanismo de defensa para proteger los órganos subyacentes inflamados y es un signo confiable de irritación peritoneal."
    },
    {
        "question": "Un paciente con dolor intenso en el cuadrante superior derecho que se irradia al hombro derecho, náuseas y vómitos, probablemente presenta:",
        "options": [
            { "letter": "a", "text": "Apéndicitis" },
            { "letter": "b", "text": "Pancreatitis" },
            { "letter": "c", "text": "Colecistitis aguda" },
            { "letter": "d", "text": "Perforación de úlcera gástrica" }
        ],
        "correctAnswer": "c",
        "explanation": "Esta es la presentación clásica de la colecistitis (inflamación de la vesícula biliar). La vesícula se encuentra en el cuadrante superior derecho (CSD), y la inflamación puede irritar el diafragma, causando dolor referido al hombro o escápula derecha (signo de Boas)."
    },
    {
        "question": "¿Cuál de las siguientes es una prioridad en el manejo prehospitalario de un paciente con sangrado gastrointestinal activo y signos de shock?",
        "options": [
            { "letter": "a", "text": "Administrar antieméticos para controlar el vómito" },
            { "letter": "b", "text": "Establecer dos vías intravenosas de grueso calibre y administrar líquidos" },
            { "letter": "c", "text": "Ofrecer agua al paciente para hidratación" },
            { "letter": "d", "text": "Realizar una palpación abdominal profunda para identificar la fuente del sangrado" }
        ],
        "correctAnswer": "b",
        "explanation": "Ante un paciente en shock hipovolémico, la prioridad es la reanimación con líquidos para mantener la perfusión de los órganos vitales. Esto se logra estableciendo acceso intravenoso de gran calibre (idealmente dos) para la administración rápida de solución salina o Ringer lactato."
    },
    {
        "question": "Un paciente con antecedentes de cálculos renales presenta dolor agudo e intermitente en el flanco que se irradia a la ingle. Este tipo de dolor es característico de:",
        "options": [
            { "letter": "a", "text": "Cistitis" },
            { "letter": "b", "text": "Pielonefritis" },
            { "letter": "c", "text": "Cólico renal" },
            { "letter": "d", "text": "Epididimitis" }
        ],
        "correctAnswer": "c",
        "explanation": "El cólico renal es causado por el paso de un cálculo (piedra) a través del uréter. Provoca un dolor espasmódico y muy intenso que clásicamente comienza en el flanco (ángulo costovertebral) y sigue el trayecto del uréter hacia la ingle y los genitales."
    },
    {
        "question": "¿Cuál de las siguientes NO es una complicación común asociada con la diálisis peritoneal?",
        "options": [
            { "letter": "a", "text": "Peritonitis" },
            { "letter": "b", "text": "Hipotensión ortostática" },
            { "letter": "c", "text": "Infección del sitio de salida del catéter" },
            { "letter": "d", "text": "Hernias en la pared abdominal" }
        ],
        "correctAnswer": "b",
        "explanation": "La hipotensión ortostática es mucho más común en la hemodiálisis, donde se extraen grandes volúmenes de líquido del cuerpo en un corto período. La diálisis peritoneal es un proceso más gradual. Sus complicaciones más comunes son infecciosas (peritonitis) o mecánicas (hernias, fugas)."
    },
    {
        "question": "Al evaluar a un paciente con dolor abdominal, la ausencia de ruidos intestinales ('abdomen silencioso') puede indicar:",
        "options": [
            { "letter": "a", "text": "Un tracto gastrointestinal saludable" },
            { "letter": "b", "text": "Un aumento de la motilidad intestinal" },
            { "letter": "c", "text": "Una obstrucción intestinal o peritonitis" },
            { "letter": "d", "text": "Estreñimiento" }
        ],
        "correctAnswer": "c",
        "explanation": "La ausencia de ruidos intestinales (íleo paralítico) después de auscultar por un tiempo adecuado es un signo ominoso. Sugiere una falta total de peristaltismo, que puede ser causada por una obstrucción intestinal tardía o una inflamación generalizada como la peritonitis."
    },
    {
        "question": "Un desgarro de Mallory-Weiss es una causa de hemorragia gastrointestinal superior que se asocia típicamente con:",
        "options": [
            { "letter": "a", "text": "Uso prolongado de AINEs" },
            { "letter": "b", "text": "Esfuerzo intenso al vomitar" },
            { "letter": "c", "text": "Enfermedad de Crohn" },
            { "letter": "d", "text": "Infección por H. pylori" }
        ],
        "correctAnswer": "b",
        "explanation": "Un desgarro de Mallory-Weiss es una laceración longitudinal en la unión del esófago y el estómago. Es causado por un aumento brusco de la presión, que ocurre clásicamente durante episodios de vómitos o arcadas violentas y repetitivas."
    },
    {
        "question": "En un paciente con sospecha de pancreatitis, ¿dónde esperaría encontrar el dolor principal?",
        "options": [
            { "letter": "a", "text": "Cuadrante inferior derecho" },
            { "letter": "b", "text": "Epigastrio, a menudo irradiado a la espalda" },
            { "letter": "c", "text": "Cuadrante superior derecho" },
            { "letter": "d", "text": "Región suprapúbica" }
        ],
        "correctAnswer": "b",
        "explanation": "El páncreas se encuentra en la parte superior del abdomen, en la región retroperitoneal. La inflamación (pancreatitis) causa un dolor intenso en el epigastrio (la 'boca del estómago') que característicamente se irradia de forma transfictiva (como si atravesara) hacia la espalda."
    },
    {
        "question": "¿Cuál de los siguientes NO es un signo de shock hipovolémico en un paciente con sangrado gastrointestinal?",
        "options": [
            { "letter": "a", "text": "Taquicardia" },
            { "letter": "b", "text": "Hipotensión" },
            { "letter": "c", "text": "Piel caliente y rubicunda" },
            { "letter": "d", "text": "Alteración del estado mental" }
        ],
        "correctAnswer": "c",
        "explanation": "En el shock hipovolémico, el cuerpo desvía la sangre de la periferia hacia los órganos vitales (corazón, cerebro, riñones). Esta vasoconstricción periférica provoca que la piel se vuelva pálida, fría y húmeda. La piel caliente y enrojecida (rubicunda) es característica de otros tipos de shock, como el distributivo (séptico, neurogénico)."
    },
    {
        "question": "La retención urinaria aguda se caracteriza por:",
        "options": [
            { "letter": "a", "text": "Dolor al orinar y aumento de la frecuencia" },
            { "letter": "b", "text": "Incapacidad para vaciar la vejiga y dolor suprapúbico intenso" },
            { "letter": "c", "text": "Aumento significativo de la producción de orina" },
            { "letter": "d", "text": "Presencia de sangre en la orina sin dolor" }
        ],
        "correctAnswer": "b",
        "explanation": "La retención urinaria aguda es una emergencia médica definida por la incapacidad repentina y dolorosa de orinar. El paciente siente una necesidad urgente de vaciar la vejiga, pero no puede hacerlo, lo que causa una distensión severa de la vejiga y un dolor intenso en la región suprapúbica (por encima del pubis)."
    }
]

export const gastrointestinalUrologicQuestionsChallenge: Question[] = [
    {
        question: "Un hombre de 45 años presenta dolor abdominal severo que inició hace 6 horas como dolor periumbilical difuso y ahora se localiza en fosa ilíaca derecha. Al examen: fiebre 38.2°C, defensa muscular en cuadrante inferior derecho, signo de Blumberg positivo. FC 110 lpm, TA 125/80 mmHg. ¿Cuál es la sospecha diagnóstica más probable y el manejo apropiado?",
        options: [
            { letter: "a", text: "Gastroenteritis; líquidos IV y antieméticos" },
            { letter: "b", text: "Apendicitis aguda; transporte urgente sin analgésicos" },
            { letter: "c", text: "Cálculo renal; analgésicos y líquidos" },
            { letter: "d", text: "Obstrucción intestinal; descompresión gástrica" }
        ],
        correctAnswer: "b",
        explanation: "La migración del dolor de periumbilical a fosa ilíaca derecha (signo de Murphy), fiebre, defensa muscular y signo de Blumberg (dolor de rebote) son clásicos de apendicitis aguda. Requiere evaluación quirúrgica urgente. Los analgésicos pueden enmascarar signos y retrasar el diagnóstico."
    },
    {
        question: "Una mujer de 35 años presenta hematemesis masiva (vómito con sangre roja) y melena. Está pálida, diaforética, con FC 130 lpm, TA 85/50 mmHg. Refiere antecedentes de úlcera péptica y uso crónico de AINE. ¿Cuál es la prioridad en el manejo prehospitalario?",
        options: [
            { letter: "a", text: "Administrar antiácidos para neutralizar el ácido gástrico" },
            { letter: "b", text: "Dos accesos IV de gran calibre, cristaloides, posición Trendelenburg y transporte urgente" },
            { letter: "c", text: "Sonda nasogástrica para descompresión" },
            { letter: "d", text: "Posición semi-sentada para evitar aspiración" }
        ],
        correctAnswer: "b",
        explanation: "Hemorragia digestiva alta masiva con signos de shock hipovolémico (taquicardia, hipotensión, palidez, diaforesis). La prioridad es la reanimación con volumen mediante dos accesos IV de gran calibre y transporte urgente para control quirúrgico del sangrado."
    },
    {
        question: "Un hombre de 65 años con cirrosis hepática conocida presenta distensión abdominal masiva, disnea y ortopnea. Al examen: abdomen tenso con matidez desplazable, edema en extremidades inferiores, ictericia. Sus signos vitales son estables pero presenta saturación de 88%. ¿Cuál es la complicación más probable?",
        options: [
            { letter: "a", text: "Perforación intestinal" },
            { letter: "b", text: "Ascitis masiva con compromiso respiratorio" },
            { letter: "c", text: "Obstrucción intestinal mecánica" },
            { letter: "d", text: "Pancreatitis aguda" }
        ],
        correctAnswer: "b",
        explanation: "La cirrosis causa hipertensión portal que lleva a ascitis (acumulación de líquido en cavidad peritoneal). Cuando es masiva, puede comprometer la respiración por elevación diafragmática. El paciente necesita drenaje terapéutico urgente y soporte respiratorio."
    },
    {
        question: "Un joven de 20 años presenta dolor testicular izquierdo súbito e intenso que inició hace 2 horas durante el ejercicio. Al examen: testículo izquierdo elevado, horizontalizado, extremadamente sensible. Niega fiebre o síntomas urinarios. ¿Cuál es la urgencia de este cuadro?",
        options: [
            { letter: "a", text: "No urgente; probable trauma menor" },
            { letter: "b", text: "Urgencia moderada; probable epididimitis" },
            { letter: "c", text: "Urgencia extrema; probable torsión testicular" },
            { letter: "d", text: "Urgencia baja; probable varicocele" }
        ],
        correctAnswer: "c",
        explanation: "Dolor testicular súbito, intenso, con testículo elevado y horizontalizado sugiere torsión testicular. Es una emergencia urológica absoluta que requiere detorsión quirúrgica dentro de 6 horas para salvar el testículo. Cada hora de retraso reduce significativamente la viabilidad."
    },
    {
        question: "Una mujer de 28 años embarazada de 16 semanas presenta náuseas y vómitos severos, pérdida de peso de 8 kg, deshidratación y cetonas en orina. No puede retener líquidos ni sólidos por 5 días. ¿Cuál es el diagnóstico más probable y manejo inicial?",
        options: [
            { letter: "a", text: "Gastroenteritis viral; rehidratación oral" },
            { letter: "b", text: "Hiperémesis gravídica; líquidos IV con tiamina y antiémeticos seguros" },
            { letter: "c", text: "Apendicitis en embarazo; evaluación quirúrgica" },
            { letter: "d", text: "Reflujo gastroesofágico; antiácidos" }
        ],
        correctAnswer: "b",
        explanation: "Hiperémesis gravídica es náuseas y vómitos severos del embarazo con pérdida de peso >5% y cetonuria. Puede causar desequilibrios electrolíticos graves y deficiencia de tiamina. Requiere hidratación IV, corrección electrolítica y antiémeticos seguros en embarazo."
    },
    {
        question: "Un hombre de 55 años con antecedentes de alcoholismo presenta dolor abdominal epigástrico severo irradiado a la espalda, náuseas, vómitos y distensión abdominal. Al examen: abdomen rígido, ausencia de ruidos intestinales, FC 120 lpm, TA 90/60 mmHg. ¿Cuál es la complicación más temida de su condición probable?",
        options: [
            { letter: "a", text: "Perforación gástrica" },
            { letter: "b", text: "Necrosis pancreática con shock distributivo" },
            { letter: "c", text: "Obstrucción biliar" },
            { letter: "d", text: "Sangrado variceal" }
        ],
        correctAnswer: "b",
        explanation: "El cuadro sugiere pancreatitis aguda severa (dolor epigástrico irradiado a espalda, alcoholismo). La necrosis pancreática puede llevar a liberación masiva de enzimas, SIRS (síndrome de respuesta inflamatoria sistémica) y shock distributivo, con mortalidad muy alta."
    },
    {
        question: "Un paciente de 70 años con fibrilación auricular presenta dolor abdominal súbito, severo y desproporcionado a los hallazgos físicos. Inicialmente el abdomen está blando pero el paciente refiere dolor 10/10. Después de 4 horas desarrolla distensión, rigidez y ausencia de ruidos intestinales. ¿Cuál es la causa más probable?",
        options: [
            { letter: "a", text: "Perforación de úlcera péptica" },
            { letter: "b", text: "Isquemia mesentérica embólica" },
            { letter: "c", text: "Vólvulo intestinal" },
            { letter: "d", text: "Colecistitis aguda" }
        ],
        correctAnswer: "b",
        explanation: "Fibrilación auricular predispone a embolias. La isquemia mesentérica embólica presenta inicialmente dolor severo desproporcionado a hallazgos físicos ('dolor fuera de proporción'). Posteriormente desarrolla signos peritoneales por necrosis intestinal. Es una emergencia quirúrgica."
    },
    {
        question: "Un hombre de 30 años presenta cólico renal severo en flanco derecho irradiado a ingle, con hematuria microscópica. Durante el transporte desarrolla súbitamente fiebre (39°C), escalofríos y deterioro del estado general. ¿Qué complicación ha desarrollado?",
        options: [
            { letter: "a", text: "Ruptura renal" },
            { letter: "b", text: "Pielonefritis obstructiva (pionefrosis)" },
            { letter: "c", text: "Glomerulonefritis aguda" },
            { letter: "d", text: "Cistitis hemorrágica" }
        ],
        correctAnswer: "b",
        explanation: "Un cálculo renal con fiebre y escalofríos indica pielonefritis obstructiva (pionefrosis), donde la infección se desarrolla proximal al cálculo obstructor. Es una emergencia urológica que requiere drenaje inmediato (nefrostomía o stent ureteral) y antibióticos, ya que puede llevar a sepsis."
    },
    {
        question: "Una mujer de 40 años presenta dolor en cuadrante superior derecho que inicia después de comer comida grasosa, acompañado de náuseas y vómitos. Al examen: signo de Murphy positivo, ictericia leve, fiebre 38.5°C. Sus signos vitales: FC 105 lpm, TA 110/70 mmHg. ¿Cuál es la tríada clásica presente en este caso?",
        options: [
            { letter: "a", text: "Dolor, fiebre, ictericia (tríada de Charcot)" },
            { letter: "b", text: "Dolor, náuseas, vómitos" },
            { letter: "c", text: "Fiebre, taquicardia, hipotensión" },
            { letter: "d", text: "Murphy, ictericia, distensión" }
        ],
        correctAnswer: "a",
        explanation: "La tríada de Charcot (dolor en cuadrante superior derecho + fiebre + ictericia) indica colangitis aguda, una infección del árbol biliar frecuentemente asociada a obstrucción por cálculos. Es una emergencia que requiere antibióticos y descompresión biliar urgente."
    },
    {
        question: "Un hombre de 25 años consulta por imposibilidad para orinar desde hace 8 horas, con dolor suprapúbico severo y sensación de llenado vesical. Al examen se palpa masa suprapúbica. Niega fiebre o secreción uretral, pero refiere antecedente de gonorrea tratada hace 2 meses. ¿Cuál es la causa más probable de su retención urinaria?",
        options: [
            { letter: "a", text: "Hiperplasia prostática benigna" },
            { letter: "b", text: "Estenosis uretral post-infecciosa" },
            { letter: "c", text: "Cálculo vesical" },
            { letter: "d", text: "Tumor prostático" }
        ],
        correctAnswer: "b",
        explanation: "En un joven con antecedente de gonorrea, la retención urinaria aguda sugiere estenosis uretral como secuela de la infección previa. Las infecciones de transmisión sexual pueden causar cicatrización y estrechez uretral, llevando a obstrucción. Requiere cateterización de emergencia y posterior dilatación."
    }
];
