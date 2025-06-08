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
        question: "¿Cuál de los siguientes síntomas es más indicativo de una hemorragia gastrointestinal *inferior*?",
        options: [
            { letter: "a", text: "Vómito en 'posos de café'" },
            { letter: "b", text: "Melena" },
            { letter: "c", text: "Hematoquecia" },
            { letter: "d", text: "Hematemesis" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un paciente con dolor abdominal agudo presenta 'abdomen en tabla' a la palpación. Este hallazgo sugiere:",
        options: [
            { letter: "a", text: "Una obstrucción intestinal leve" },
            { letter: "b", text: "Apéndice inflamado" },
            { letter: "c", "text": "Peritonitis" },
            { letter: "d", text: "Una úlcera duodenal" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Durante la evaluación de un paciente con sospecha de sangrado gastrointestinal, ¿qué signo vital es el último en cambiar significativamente en el escenario de shock compensado?",
        options: [
            { letter: "a", text: "Frecuencia cardíaca" },
            { letter: "b", text: "Frecuencia respiratoria" },
            { letter: "c", text: "Presión arterial" },
            { letter: "d", text: "Llenado capilar" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un paciente con antecedentes de cirrosis hepática presenta vómito con sangre roja brillante. La causa más probable es:",
        options: [
            { letter: "a", text: "Gastritis aguda" },
            { letter: "b", text: "Várices esofágicas rotas" },
            { letter: "c", text: "Úlcera péptica" },
            { letter: "d", text: "Diverticulitis" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué tipo de dolor abdominal es difuso, poco localizado y suele describirse como retortijón o calambre?",
        options: [
            { letter: "a", text: "Dolor parietal" },
            { letter: "b", text: "Dolor referido" },
            { letter: "c", "text": "Dolor visceral" },
            { letter: "d", text: "Dolor somático" },
        ],
        correctAnswer: "c",
    },
    {
        question: "La 'respuesta protectora' o 'guarding' en el examen abdominal de un paciente indica:",
        options: [
            { letter: "a", text: "Dolor leve sin relevancia clínica" },
            { letter: "b", text: "Inflamación o irritación del peritoneo" },
            { letter: "c", text: "Un calambre muscular inofensivo" },
            { letter: "d", text: "Una reacción alérgica" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un paciente con dolor intenso en el cuadrante superior derecho que se irradia al hombro derecho, náuseas y vómitos, probablemente presenta:",
        options: [
            { letter: "a", text: "Apéndicitis" },
            { letter: "b", text: "Pancreatitis" },
            { letter: "c", text: "Colecistitis aguda" },
            { letter: "d", text: "Perforación de úlcera gástrica" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de las siguientes es una prioridad en el manejo prehospitalario de un paciente con sangrado gastrointestinal activo y signos de shock?",
        options: [
            { letter: "a", text: "Administrar antieméticos para controlar el vómito" },
            { letter: "b", text: "Establecer dos vías intravenosas de grueso calibre y administrar líquidos" },
            { letter: "c", text: "Ofrecer agua al paciente para hidratación" },
            { letter: "d", text: "Realizar una palpación abdominal profunda para identificar la fuente del sangrado" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un paciente con antecedentes de cálculos renales presenta dolor agudo e intermitente en el flanco que se irradia a la ingle. Este tipo de dolor es característico de:",
        options: [
            { letter: "a", text: "Cistitis" },
            { letter: "b", text: "Pielonefritis" },
            { letter: "c", "text": "Cólico renal" },
            { letter: "d", text: "Epididimitis" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de las siguientes NO es una complicación común asociada con la diálisis peritoneal?",
        options: [
            { letter: "a", text: "Peritonitis" },
            { letter: "b", text: "Hipotensión ortostática" },
            { letter: "c", text: "Infección del sitio de salida del catéter" },
            { letter: "d", text: "Hernias en la pared abdominal" },
        ],
        correctAnswer: "b", // La hipotensión ortostática es más común en hemodiálisis por la rápida remoción de fluidos.
    },
    {
        question: "Al evaluar a un paciente con dolor abdominal, la ausencia de ruidos intestinales ('abdomen silencioso') puede indicar:",
        options: [
            { letter: "a", text: "Un tracto gastrointestinal saludable" },
            { letter: "b", text: "Un aumento de la motilidad intestinal" },
            { letter: "c", "text": "Una obstrucción intestinal o peritonitis" },
            { letter: "d", text: "Estreñimiento" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un desgarro de Mallory-Weiss es una causa de hemorragia gastrointestinal superior que se asocia típicamente con:",
        options: [
            { letter: "a", text: "Uso prolongado de AINEs" },
            { letter: "b", text: "Esfuerzo intenso al vomitar" },
            { letter: "c", "text": "Enfermedad de Crohn" },
            { letter: "d", text: "Infección por H. pylori" },
        ],
        correctAnswer: "b",
    },
    {
        question: "En un paciente con sospecha de pancreatitis, ¿dónde esperaría encontrar el dolor principal?",
        options: [
            { letter: "a", text: "Cuadrante inferior derecho" },
            { letter: "b", text: "Epigastrio, a menudo irradiado a la espalda" },
            { letter: "c", "text": "Cuadrante superior derecho" },
            { letter: "d", text: "Región suprapúbica" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de los siguientes NO es un signo de shock hipovolémico en un paciente con sangrado gastrointestinal?",
        options: [
            { letter: "a", text: "Taquicardia" },
            { letter: "b", text: "Hipotensión" },
            { letter: "c", "text": "Piel caliente y rubicunda" },
            { letter: "d", text: "Alteración del estado mental" },
        ],
        correctAnswer: "c",
    },
    {
        question: "La retención urinaria aguda se caracteriza por:",
        options: [
            { letter: "a", text: "Dolor al orinar y aumento de la frecuencia" },
            { letter: "b", text: "Incapacidad para vaciar la vejiga y dolor suprapúbico intenso" },
            { letter: "c", "text": "Aumento significativo de la producción de orina" },
            { letter: "d", text: "Presencia de sangre en la orina sin dolor" },
        ],
        correctAnswer: "b",
    }
];
