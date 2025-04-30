import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué causa el dolor abdominal en emergencias gastrointestinales?",
        answer: "Puede deberse a inflamación, obstrucción, isquemia o infecciones en órganos digestivos.",
    },
    {
        question: "¿Qué se debe evitar hacer con un paciente con dolor abdominal?",
        answer: "Evitar dar líquidos, alimentos o medicamentos sin indicación médica.",
    },
    {
        question: "¿Qué puede indicar la presencia de sangre en el vómito (hematemesis)?",
        answer: "Puede indicar una hemorragia gastrointestinal alta, como úlceras o varices esofágicas.",
    },
    {
        question: "¿Qué se evalúa en el examen físico del abdomen?",
        answer: "Se evalúan signos de distensión, sensibilidad localizada, rigidez y ruidos intestinales.",
    },
    {
        question: "¿Cuál es la prioridad en una emergencia urológica como la retención urinaria?",
        answer: "Identificar y aliviar el dolor, evaluar función renal y trasladar al hospital.",
    },
    {
        question: "¿Qué indica la presencia de melena en un paciente?",
        answer: "Sangrado gastrointestinal, típicamente de origen alto (como estómago o duodeno).",
    },
];

export const gastrointestinalUrologicQuestions: Question[] = [
    {
        question: "¿Cuál de los siguientes síntomas sugiere una hemorragia gastrointestinal alta?",
        options: [
            { letter: "a", text: "Diarrea acuosa" },
            { letter: "b", text: "Hematuria" },
            { letter: "c", text: "Hematemesis" },
            { letter: "d", text: "Dolor en el flanco derecho" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un dolor abdominal súbito, intenso y localizado en la fosa iliaca derecha puede indicar:",
        options: [
            { letter: "a", text: "Apendicitis" },
            { letter: "b", text: "Pancreatitis" },
            { letter: "c", text: "Colecistitis" },
            { letter: "d", text: "Gastritis" },
        ],
        correctAnswer: "a",
    },
    {
        question: "El tratamiento prehospitalario para un paciente con dolor abdominal incluye:",
        options: [
            { letter: "a", text: "Dar líquidos orales" },
            { letter: "b", text: "Administrar analgésicos" },
            { letter: "c", text: "Mantener al paciente en posición de confort" },
            { letter: "d", text: "Aplicar calor en el abdomen" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es un signo potencial de peritonitis?",
        options: [
            { letter: "a", text: "Vómito con alimentos no digeridos" },
            { letter: "b", text: "Distensión abdominal con dolor y rigidez" },
            { letter: "c", text: "Náusea sin dolor" },
            { letter: "d", text: "Micción frecuente" },
        ],
        correctAnswer: "b",
    },
    {
        question: "La hematuria es un signo que puede indicar:",
        options: [
            { letter: "a", text: "Gastritis" },
            { letter: "b", text: "Urolitiasis o trauma renal" },
            { letter: "c", text: "Úlcera gástrica" },
            { letter: "d", text: "Estreñimiento" },
        ],
        correctAnswer: "b",
    },
    {
        question: "El dolor en el flanco con irradiación hacia la ingle es característico de:",
        options: [
            { letter: "a", text: "Apendicitis" },
            { letter: "b", text: "Infección urinaria" },
            { letter: "c", text: "Cólico renal" },
            { letter: "d", text: "Gastritis" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué indica una melena (heces negras alquitranadas)?",
        options: [
            { letter: "a", text: "Sangrado digestivo bajo" },
            { letter: "b", text: "Obstrucción intestinal" },
            { letter: "c", text: "Sangrado digestivo alto" },
            { letter: "d", text: "Diarrea infecciosa" },
        ],
        correctAnswer: "c",
    },
    {
        question: "En el examen físico abdominal, un signo de defensa involuntaria sugiere:",
        options: [
            { letter: "a", text: "Inflamación gástrica leve" },
            { letter: "b", text: "Peritonitis" },
            { letter: "c", text: "Estreñimiento" },
            { letter: "d", text: "Obesidad abdominal" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de los siguientes hallazgos requiere traslado inmediato?",
        options: [
            { letter: "a", text: "Distensión leve sin dolor" },
            { letter: "b", text: "Dolor abdominal intermitente" },
            { letter: "c", text: "Abdomen rígido con signos de shock" },
            { letter: "d", text: "Náusea leve sin vómito" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Una infección del tracto urinario puede producir todos estos síntomas EXCEPTO:",
        options: [
            { letter: "a", text: "Disuria" },
            { letter: "b", text: "Dolor al orinar" },
            { letter: "c", text: "Hematemesis" },
            { letter: "d", text: "Fiebre" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué órgano se encuentra en el cuadrante superior derecho y puede causar dolor por inflamación?",
        options: [
            { letter: "a", text: "Apéndice" },
            { letter: "b", text: "Colon sigmoide" },
            { letter: "c", text: "Hígado" },
            { letter: "d", text: "Vejiga" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Una masa palpable pulsátil en el abdomen puede sugerir:",
        options: [
            { letter: "a", text: "Tumor intestinal" },
            { letter: "b", text: "Aneurisma de aorta abdominal" },
            { letter: "c", text: "Litiasis renal" },
            { letter: "d", text: "Hernia inguinal" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué estructura se afecta en una colecistitis aguda?",
        options: [
            { letter: "a", text: "Intestino delgado" },
            { letter: "b", text: "Páncreas" },
            { letter: "c", text: "Vesícula biliar" },
            { letter: "d", text: "Estómago" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué es la disuria?",
        options: [
            { letter: "a", text: "Ausencia de orina" },
            { letter: "b", text: "Dolor al orinar" },
            { letter: "c", text: "Sangre en la orina" },
            { letter: "d", text: "Incontinencia urinaria" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el riesgo de aplicar calor en el abdomen de un paciente con dolor no diagnosticado?",
        options: [
            { letter: "a", text: "Relaja al paciente excesivamente" },
            { letter: "b", text: "Puede enmascarar o agravar una condición subyacente" },
            { letter: "c", text: "No hay riesgo si alivia el dolor" },
            { letter: "d", text: "Mejora la circulación intestinal" },
        ],
        correctAnswer: "b",
    },
    {
        question: "La pancreatitis aguda puede causar dolor irradiado a:",
        options: [
            { letter: "a", text: "La mandíbula" },
            { letter: "b", text: "La pierna izquierda" },
            { letter: "c", text: "La espalda" },
            { letter: "d", text: "El brazo derecho" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué signo puede indicar shock hipovolémico en un paciente con hemorragia digestiva?",
        options: [
            { letter: "a", text: "Bradicardia" },
            { letter: "b", text: "Hipotensión y taquicardia" },
            { letter: "c", text: "Fiebre" },
            { letter: "d", text: "Hiperventilación con alcalosis" },
        ],
        correctAnswer: "b",
    },
    {
        question: "La apendicitis no tratada puede progresar a:",
        options: [
            { letter: "a", text: "Hernia umbilical" },
            { letter: "b", text: "Hematemesis" },
            { letter: "c", text: "Peritonitis" },
            { letter: "d", text: "Enfermedad de Crohn" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es la maniobra más segura al evaluar el abdomen en un paciente con dolor severo?",
        options: [
            { letter: "a", text: "Palpación profunda en todos los cuadrantes" },
            { letter: "b", text: "Palpación ligera progresiva desde el área menos dolorosa" },
            { letter: "c", text: "Percusión abdominal vigorosa" },
            { letter: "d", text: "Presión directa sobre el área más dolorosa" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Una obstrucción intestinal puede manifestarse con:",
        options: [
            { letter: "a", text: "Evacuaciones normales" },
            { letter: "b", text: "Ruidos intestinales normales" },
            { letter: "c", text: "Vómitos y ausencia de evacuaciones" },
            { letter: "d", text: "Disuria y hematuria" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el signo clásico de apendicitis en etapas tempranas?",
        options: [
            { letter: "a", text: "Dolor en la parte inferior izquierda del abdomen" },
            { letter: "b", text: "Dolor periumbilical que migra a la fosa iliaca derecha" },
            { letter: "c", text: "Dolor torácico irradiado a brazo izquierdo" },
            { letter: "d", text: "Hinchazón en el epigastrio" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de los siguientes síntomas puede indicar pancreatitis aguda?",
        options: [
            { letter: "a", text: "Dolor abdominal que mejora después de comer" },
            { letter: "b", text: "Dolor abdominal superior irradiado a la espalda" },
            { letter: "c", text: "Dolor que aparece solo durante la micción" },
            { letter: "d", text: "Náuseas con sangrado rectal" },
        ],
        correctAnswer: "b",
    },
    {
        question: "La hematoquecia es una manifestación de:",
        options: [
            { letter: "a", text: "Hemorragia del tracto gastrointestinal inferior" },
            { letter: "b", text: "Anemia nutricional" },
            { letter: "c", text: "Vómito con sangre" },
            { letter: "d", text: "Obstrucción intestinal" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué tipo de dolor es más común en los cólicos renales?",
        options: [
            { letter: "a", text: "Dolor constante y localizado en el epigastrio" },
            { letter: "b", text: "Dolor sordo en la parte superior del abdomen" },
            { letter: "c", text: "Dolor intermitente que irradia desde el flanco hacia la ingle" },
            { letter: "d", text: "Dolor que mejora al cambiar de posición" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué indica la presencia de sangre en la orina (hematuria)?",
        options: [
            { letter: "a", text: "Es normal en pacientes jóvenes" },
            { letter: "b", text: "Indica infección del tracto respiratorio" },
            { letter: "c", text: "Puede indicar trauma renal o cálculo urinario" },
            { letter: "d", text: "Es señal exclusiva de insuficiencia hepática" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un signo de abdomen agudo es:",
        options: [
            { letter: "a", text: "Dolor abdominal leve con fiebre baja" },
            { letter: "b", text: "Rigidez abdominal involuntaria" },
            { letter: "c", text: "Diarrea autolimitada sin dolor" },
            { letter: "d", text: "Gas y distensión leve" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es una causa común de obstrucción intestinal en adultos mayores?",
        options: [
            { letter: "a", text: "Cólico renal" },
            { letter: "b", text: "Hemorroides" },
            { letter: "c", text: "Adherencias por cirugías previas" },
            { letter: "d", text: "Infección urinaria" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué hallazgo requiere intervención urgente en un paciente con dolor abdominal?",
        options: [
            { letter: "a", text: "Vómito sin sangre" },
            { letter: "b", text: "Hipotensión y piel fría" },
            { letter: "c", text: "Flatulencia leve" },
            { letter: "d", text: "Ausencia de fiebre" },
        ],
        correctAnswer: "b",
    },
    {
        question: "En caso de vómito con sangre roja brillante, se debe sospechar:",
        options: [
            { letter: "a", text: "Úlcera gástrica perforada" },
            { letter: "b", text: "Hemorragia del intestino delgado" },
            { letter: "c", text: "Hemorragia del tracto gastrointestinal superior" },
            { letter: "d", text: "Hepatitis crónica" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es la prioridad en un paciente con signos de shock hipovolémico por hemorragia gastrointestinal?",
        options: [
            { letter: "a", text: "Administrar antiácidos" },
            { letter: "b", text: "Transportar sin realizar intervención" },
            { letter: "c", text: "Iniciar soporte vital básico y oxígeno suplementario" },
            { letter: "d", text: "Pedir al paciente que ingiera líquidos" },
        ],
        correctAnswer: "c",
    },
];
