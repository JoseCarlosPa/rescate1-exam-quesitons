import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es el trauma?",
        answer: "Es una lesión física producida por una fuerza externa que puede poner en peligro la vida o causar discapacidad.",
    },
    {
        question: "¿Qué es el mecanismo de lesión (MOI)?",
        answer: "Es la forma en que ocurre una lesión, como por colisión vehicular, caídas o heridas penetrantes.",
    },
    {
        question: "¿Por qué es importante la cinemática del trauma?",
        answer: "Porque ayuda a predecir lesiones internas que podrían no ser evidentes a simple vista.",
    },
    {
        question: "¿Qué se evalúa en la evaluación primaria?",
        answer: "Las amenazas inmediatas a la vida: Vía aérea, respiración, circulación, estado neurológico y exposición (ABCDE).",
    },
    {
        question: "¿Qué significa la 'hora dorada'?",
        answer: "Es el tiempo crítico tras un trauma grave en el que la atención rápida puede mejorar significativamente la supervivencia.",
    },
    {
        question: "¿Qué diferencia hay entre trauma contuso y penetrante?",
        answer: "El contuso ocurre por golpes sin ruptura de la piel, mientras que el penetrante involucra heridas abiertas como por arma blanca o bala.",
    },
];

export const traumaGeneralQuestions: Question[] = [
    {
        question: "¿Cuál es la principal causa de muerte en personas menores de 45 años?",
        options: [
            { letter: "a", text: "Cáncer" },
            { letter: "b", text: "Trauma" },
            { letter: "c", text: "Enfermedades cardíacas" },
            { letter: "d", text: "Enfermedades respiratorias" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué significa MOI en trauma?",
        options: [
            { letter: "a", text: "Manejo operativo inmediato" },
            { letter: "b", text: "Mecanismo de lesión" },
            { letter: "c", text: "Medición de oxígeno intermitente" },
            { letter: "d", text: "Modelo óptimo de intervención" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué componente de la evaluación primaria identifica lesiones que amenazan la vida?",
        options: [
            { letter: "a", text: "OPQRST" },
            { letter: "b", text: "SAMPLE" },
            { letter: "c", text: "ABCDE" },
            { letter: "d", text: "GCS" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de los siguientes NO es un ejemplo de trauma contuso?",
        options: [
            { letter: "a", text: "Golpe en el abdomen con un bate" },
            { letter: "b", text: "Colisión frontal vehicular" },
            { letter: "c", text: "Caída desde una escalera" },
            { letter: "d", text: "Herida por cuchillo" },
        ],
        correctAnswer: "d",
    },
    {
        question: "La transferencia de energía cinética depende principalmente de:",
        options: [
            { letter: "a", text: "La edad del paciente" },
            { letter: "b", text: "La distancia al hospital" },
            { letter: "c", text: "La masa y velocidad del objeto" },
            { letter: "d", text: "El tipo de ambulancia" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué lesión es más probable en una caída de altura significativa?",
        options: [
            { letter: "a", text: "Lesión en extremidades superiores" },
            { letter: "b", text: "Lesión abdominal leve" },
            { letter: "c", text: "Lesión espinal o pélvica" },
            { letter: "d", text: "Esguince de tobillo" },
        ],
        correctAnswer: "c",
    },
    {
        question: "El uso de cinturón de seguridad puede reducir:",
        options: [
            { letter: "a", text: "Lesiones de tejidos blandos" },
            { letter: "b", text: "Lesiones graves por desaceleración" },
            { letter: "c", text: "Fracturas simples" },
            { letter: "d", text: "Lesiones por inhalación" },
        ],
        correctAnswer: "b",
    },
    {
        question: "El principio de la 'hora dorada' implica que:",
        options: [
            { letter: "a", text: "El tratamiento puede retrasarse si hay tráfico" },
            { letter: "b", text: "La evaluación secundaria debe durar una hora" },
            { letter: "c", text: "El tratamiento definitivo dentro de una hora mejora la supervivencia" },
            { letter: "d", text: "Una hora es suficiente para estabilizar al paciente en escena" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el objetivo principal de la evaluación secundaria?",
        options: [
            { letter: "a", text: "Determinar la frecuencia respiratoria" },
            { letter: "b", text: "Controlar la escena" },
            { letter: "c", text: "Detectar todas las lesiones y obtener historia clínica" },
            { letter: "d", text: "Verificar signos vitales únicamente" },
        ],
        correctAnswer: "c",
    },
    {
        question: "La evaluación del 'ABCDE' comienza con:",
        options: [
            { letter: "a", text: "Evaluación de dolor" },
            { letter: "b", text: "Exposición del paciente" },
            { letter: "c", text: "Vía aérea y control cervical" },
            { letter: "d", text: "Control de sangrado externo" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Una desaceleración rápida puede causar:",
        options: [
            { letter: "a", text: "Únicamente lesiones superficiales" },
            { letter: "b", text: "Desgarros internos y hemorragias ocultas" },
            { letter: "c", text: "Dolor de cabeza temporal" },
            { letter: "d", text: "Reducción de signos vitales" },
        ],
        correctAnswer: "b",
    },
    {
        question: "En una colisión frontal, la lesión más común sin cinturón es:",
        options: [
            { letter: "a", text: "Traumatismo craneoencefálico leve" },
            { letter: "b", text: "Lesión en manos" },
            { letter: "c", text: "Impacto torácico y abdominal con el volante" },
            { letter: "d", text: "Lesión de oído" },
        ],
        correctAnswer: "c",
    },
    {
        question: "El protocolo SAMPLE recopila información sobre:",
        options: [
            { letter: "a", text: "Signos vitales únicamente" },
            { letter: "b", text: "Intervenciones médicas avanzadas" },
            { letter: "c", text: "Historia médica relevante del paciente" },
            { letter: "d", text: "Control ambiental de la escena" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué parte del cuerpo protege más órganos vitales de trauma contuso?",
        options: [
            { letter: "a", text: "Cráneo" },
            { letter: "b", text: "Pelvis" },
            { letter: "c", text: "Tórax" },
            { letter: "d", text: "Columna vertebral" },
        ],
        correctAnswer: "c",
    },
    {
        question: "El término 'triaje' se refiere a:",
        options: [
            { letter: "a", text: "Transportar al paciente más cercano al hospital" },
            { letter: "b", text: "Detener el sangrado en escena" },
            { letter: "c", text: "Clasificar pacientes por gravedad" },
            { letter: "d", text: "Aplicar vendajes" },
        ],
        correctAnswer: "c",
    },
    {
        question: "En trauma, la principal prioridad durante la evaluación inicial es:",
        options: [
            { letter: "a", text: "Historia médica completa" },
            { letter: "b", text: "Radiografía inmediata" },
            { letter: "c", text: "Identificar amenazas a la vida" },
            { letter: "d", text: "Administrar analgésicos" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Una caída desde una altura se considera grave si supera:",
        options: [
            { letter: "a", text: "1 metro" },
            { letter: "b", text: "2 metros" },
            { letter: "c", text: "3 veces la altura del paciente" },
            { letter: "d", text: "La altura de una silla" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el signo clásico de un neumotórax a tensión?",
        options: [
            { letter: "a", text: "Dolor en extremidades" },
            { letter: "b", text: "Tráquea desviada" },
            { letter: "c", text: "Fiebre súbita" },
            { letter: "d", text: "Visión borrosa" },
        ],
        correctAnswer: "b",
    },
    {
        question: "La regla de oro en trauma pediátrico es:",
        options: [
            { letter: "a", text: "Transportar sin evaluación previa" },
            { letter: "b", text: "Tratar como adulto en miniatura" },
            { letter: "c", text: "Evaluar con base en peso y talla" },
            { letter: "d", text: "Tratarlo con base en el mecanismo de lesión y no subestimar el daño" },
        ],
        correctAnswer: "d",
    },
    {
        question: "El sangrado arterial se caracteriza por:",
        options: [
            { letter: "a", text: "Sangrado oscuro y constante" },
            { letter: "b", text: "Sangrado intermitente y lento" },
            { letter: "c", text: "Flujo pulsátil y rojo brillante" },
            { letter: "d", text: "Sangrado que se coagula rápidamente" },
        ],
        correctAnswer: "c",
    },
    {
        question: "El GCS se utiliza para evaluar:",
        options: [
            { letter: "a", text: "Lesiones musculares" },
            { letter: "b", text: "Respuesta neurológica del paciente" },
            { letter: "c", text: "Frecuencia cardíaca" },
            { letter: "d", text: "Nivel de azúcar en sangre" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Una lesión penetrante en el cuello puede comprometer:",
        options: [
            { letter: "a", text: "El páncreas" },
            { letter: "b", text: "La columna lumbar" },
            { letter: "c", text: "La vía aérea y vasos sanguíneos mayores" },
            { letter: "d", text: "El nervio ciático" },
        ],
        correctAnswer: "c",
    },
    {
        question: "La evaluación continua del paciente incluye:",
        options: [
            { letter: "a", text: "Tomar signos vitales cada 30 minutos" },
            { letter: "b", text: "Solo repetir preguntas" },
            { letter: "c", text: "Revalorar signos vitales, conciencia y lesiones" },
            { letter: "d", text: "Esperar a que el paciente lo solicite" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué indica palidez y sudoración fría en paciente con trauma?",
        options: [
            { letter: "a", text: "Infección aguda" },
            { letter: "b", text: "Estado de alerta" },
            { letter: "c", text: "Hipoperfusión (shock)" },
            { letter: "d", text: "Deshidratación leve" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué herramienta se usa para estabilizar la columna cervical?",
        options: [
            { letter: "a", text: "Férula" },
            { letter: "b", text: "Collarín cervical" },
            { letter: "c", text: "Vendaje elástico" },
            { letter: "d", text: "Tabla espinal larga únicamente" },
        ],
        correctAnswer: "b",
    },
    {
        question: "El examen físico rápido se realiza en:",
        options: [
            { letter: "a", text: "Menos de 90 segundos" },
            { letter: "b", text: "Menos de 5 minutos" },
            { letter: "c", text: "10 a 15 minutos" },
            { letter: "d", text: "Durante el traslado, sin tiempo definido" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Cuál es una indicación de trauma multisistémico?",
        options: [
            { letter: "a", text: "Herida leve en un brazo" },
            { letter: "b", text: "Fractura aislada" },
            { letter: "c", text: "Lesiones en dos o más sistemas del cuerpo" },
            { letter: "d", text: "Dolor abdominal aislado" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué se debe hacer ante hemorragia externa grave?",
        options: [
            { letter: "a", text: "Cubrir con una gasa sin presión" },
            { letter: "b", text: "Aplicar presión directa y vendaje" },
            { letter: "c", text: "Lavar con agua y jabón" },
            { letter: "d", text: "Esperar a que cese espontáneamente" },
        ],
        correctAnswer: "b",
    }
];
