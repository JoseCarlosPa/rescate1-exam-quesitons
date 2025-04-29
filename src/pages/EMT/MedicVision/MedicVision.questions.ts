import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es la visión médica general?",
        answer: "Es la evaluación estructurada y rápida del estado general de un paciente con condición médica no traumática.",
    },
    {
        question: "¿Qué herramientas se usan para valorar signos y síntomas médicos?",
        answer: "Se utilizan herramientas como OPQRST y SAMPLE.",
    },
    {
        question: "¿Por qué es importante la evaluación médica general en el prehospitalario?",
        answer: "Porque permite detectar condiciones médicas críticas que pueden comprometer la vida si no se interviene a tiempo.",
    },
    {
        question: "¿Qué datos se deben obtener durante la historia clínica rápida?",
        answer: "Alergias, medicamentos actuales, antecedentes médicos, eventos relacionados y últimos alimentos.",
    },
    {
        question: "¿Qué diferencia hay entre paciente médico y traumático?",
        answer: "El paciente médico presenta condiciones internas (cardíacas, neurológicas, respiratorias), mientras que el traumático tiene lesiones físicas externas.",
    },
];


export const visionMedicGeneralQuestions: Question[] = [
    {
        question: "¿Qué define a un paciente médico?",
        options: [
            { letter: "a", text: "Aquel que ha sufrido un accidente automovilístico" },
            { letter: "b", text: "Aquel que presenta una condición interna no traumática" },
            { letter: "c", text: "Aquel con fractura abierta" },
            { letter: "d", text: "Cualquier paciente pediátrico" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué herramienta se usa para valorar dolor en pacientes médicos?",
        options: [
            { letter: "a", text: "ABCDE" },
            { letter: "b", text: "SAMPLE" },
            { letter: "c", text: "OPQRST" },
            { letter: "d", text: "GCS" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el objetivo principal de la visión médica general?",
        options: [
            { letter: "a", text: "Evaluar únicamente el dolor" },
            { letter: "b", text: "Detectar lesiones externas" },
            { letter: "c", text: "Identificar signos y síntomas que indiquen urgencia médica" },
            { letter: "d", text: "Revisar antecedentes familiares" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué significa la 'M' en SAMPLE?",
        options: [
            { letter: "a", text: "Medicamentos actuales" },
            { letter: "b", text: "Movilidad" },
            { letter: "c", text: "Malestar" },
            { letter: "d", text: "Meningitis" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué aspecto NO es parte de la visión médica general?",
        options: [
            { letter: "a", text: "Historia clínica" },
            { letter: "b", text: "Análisis radiológico" },
            { letter: "c", text: "Signos vitales" },
            { letter: "d", text: "Evaluación de síntomas" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué signo vital puede indicar hipoxia en un paciente médico?",
        options: [
            { letter: "a", text: "Temperatura elevada" },
            { letter: "b", text: "Frecuencia respiratoria normal" },
            { letter: "c", text: "Oximetría por debajo de 90%" },
            { letter: "d", text: "PA 120/80" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué componente del ABC se prioriza ante un paciente inconsciente con vómito?",
        options: [
            { letter: "a", text: "Circulación" },
            { letter: "b", text: "Vía aérea" },
            { letter: "c", text: "Temperatura" },
            { letter: "d", text: "Evaluación secundaria" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué dato subjetivo es parte de la evaluación médica?",
        options: [
            { letter: "a", text: "Presión arterial" },
            { letter: "b", text: "Nivel de glucosa" },
            { letter: "c", text: "Dolor referido por el paciente" },
            { letter: "d", text: "Ritmo respiratorio" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué se debe hacer si el paciente refiere disnea súbita y dolor torácico?",
        options: [
            { letter: "a", text: "Esperar evolución natural" },
            { letter: "b", text: "Administrar alimentos" },
            { letter: "c", text: "Iniciar oxigenoterapia y traslado urgente" },
            { letter: "d", text: "Aplicar glucosa oral" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué herramienta permite explorar antecedentes médicos y eventos previos?",
        options: [
            { letter: "a", text: "SAMPLE" },
            { letter: "b", text: "APGAR" },
            { letter: "c", text: "GCS" },
            { letter: "d", text: "AVPU" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Cuál de los siguientes signos es OBJETIVO en la evaluación médica?",
        options: [
            { letter: "a", text: "Dolor en el pecho" },
            { letter: "b", text: "Ansiedad del paciente" },
            { letter: "c", text: "Piel cianótica" },
            { letter: "d", text: "Náuseas" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué herramienta evalúa características del dolor como su irradiación o severidad?",
        options: [
            { letter: "a", text: "AVPU" },
            { letter: "b", text: "SAMPLE" },
            { letter: "c", text: "OPQRST" },
            { letter: "d", text: "ABCDE" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es un signo de alarma en un paciente médico?",
        options: [
            { letter: "a", text: "Temperatura de 37°C" },
            { letter: "b", text: "Dolor torácico súbito" },
            { letter: "c", text: "Pulso regular" },
            { letter: "d", text: "Buen estado general" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué representa la 'L' en SAMPLE?",
        options: [
            { letter: "a", text: "Localización del dolor" },
            { letter: "b", text: "Última comida o bebida" },
            { letter: "c", text: "Lugar del incidente" },
            { letter: "d", text: "Lesión previa" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de los siguientes datos indica urgencia médica?",
        options: [
            { letter: "a", text: "Pulso de 90 lpm" },
            { letter: "b", text: "Disnea progresiva" },
            { letter: "c", text: "Temperatura de 37.5°C" },
            { letter: "d", text: "Dolor muscular leve" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué debes investigar si el paciente refiere dolor abdominal?",
        options: [
            { letter: "a", text: "Si ha viajado recientemente" },
            { letter: "b", text: "Si comió recientemente" },
            { letter: "c", text: "Ambas anteriores" },
            { letter: "d", text: "Solo edad" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué representa el paso 'S' en SAMPLE?",
        options: [
            { letter: "a", text: "Síntomas subjetivos" },
            { letter: "b", text: "Signos vitales" },
            { letter: "c", text: "Signos de lesión" },
            { letter: "d", text: "Saturación de oxígeno" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué diferencia a un síntoma de un signo?",
        options: [
            { letter: "a", text: "El síntoma lo percibe el paciente, el signo es observable por otros" },
            { letter: "b", text: "El signo es más importante" },
            { letter: "c", text: "Ambos se miden con equipo" },
            { letter: "d", text: "No hay diferencia" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué componente ayuda a entender la evolución del malestar?",
        options: [
            { letter: "a", text: "SAMPLE" },
            { letter: "b", text: "GCS" },
            { letter: "c", text: "AVPU" },
            { letter: "d", text: "OPQRST" },
        ],
        correctAnswer: "d",
    },
    {
        question: "¿Qué deberías documentar si el paciente niega dolor pero tiene taquicardia?",
        options: [
            { letter: "a", text: "Solo frecuencia cardíaca" },
            { letter: "b", text: "Síntomas referidos y signos objetivos" },
            { letter: "c", text: "Nada hasta que sienta dolor" },
            { letter: "d", text: "Solamente signos vitales" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de los siguientes signos puede asociarse a infección?",
        options: [
            { letter: "a", text: "Fiebre, escalofríos, taquicardia" },
            { letter: "b", text: "Dolor muscular leve" },
            { letter: "c", text: "Piel seca" },
            { letter: "d", text: "Hipotermia leve" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué debes hacer si un paciente presenta síncope (desmayo)?",
        options: [
            { letter: "a", text: "Aplicar calor" },
            { letter: "b", text: "Evaluar signos vitales y nivel de conciencia" },
            { letter: "c", text: "No intervenir si despierta" },
            { letter: "d", text: "Esperar a que pase" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué indica una saturación de oxígeno de 85%?",
        options: [
            { letter: "a", text: "Hipoxia leve" },
            { letter: "b", text: "Hipoxia severa" },
            { letter: "c", text: "Normal" },
            { letter: "d", text: "No evaluable" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué síntomas pueden acompañar una hipoglucemia?",
        options: [
            { letter: "a", text: "Sudoración, temblores, confusión" },
            { letter: "b", text: "Fiebre alta y tos" },
            { letter: "c", text: "Taquicardia y presión elevada" },
            { letter: "d", text: "Cianosis central" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué debe incluirse en la evaluación del paciente médico en fase inicial?",
        options: [
            { letter: "a", text: "Solo saturación" },
            { letter: "b", text: "Signos vitales y signos/síntomas" },
            { letter: "c", text: "Condición de los acompañantes" },
            { letter: "d", text: "Tipo de transporte disponible" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué valor de frecuencia respiratoria es preocupante en adultos?",
        options: [
            { letter: "a", text: "16 rpm" },
            { letter: "b", text: "10 rpm" },
            { letter: "c", text: "20 rpm" },
            { letter: "d", text: "15 rpm" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es una contraindicación para administrar glucosa oral?",
        options: [
            { letter: "a", text: "Paciente quejoso" },
            { letter: "b", text: "Paciente inconsciente" },
            { letter: "c", text: "Paciente con náuseas" },
            { letter: "d", text: "Paciente con diabetes controlada" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué se recomienda hacer con un paciente con signos de EVC (ictus)?",
        options: [
            { letter: "a", text: "Administrar líquidos orales" },
            { letter: "b", text: "Colocar en decúbito prono" },
            { letter: "c", text: "Traslado urgente y soporte ABC" },
            { letter: "d", text: "Esperar 15 minutos" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué indica una piel fría y pegajosa en paciente médico?",
        options: [
            { letter: "a", text: "Signo de normalidad" },
            { letter: "b", text: "Síntoma leve" },
            { letter: "c", text: "Posible respuesta al estrés o shock" },
            { letter: "d", text: "Buena perfusión" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué herramienta ayuda a decidir si un paciente debe ser trasladado como prioridad?",
        options: [
            { letter: "a", text: "Electrocardiograma" },
            { letter: "b", text: "Evaluación de signos vitales y síntomas" },
            { letter: "c", text: "Entrevista a familiares" },
            { letter: "d", text: "Pedir una receta médica" },
        ],
        correctAnswer: "b",
    }
];
