import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es el trauma?",
        answer: "Es una lesión física producida por una fuerza externa que puede poner en peligro la vida o causar discapacidad."
    },
    {
        question: "¿Qué es el mecanismo de lesión (ML)?",
        answer: "Es la forma en que ocurre una lesión, como por colisión vehicular, caídas, o heridas penetrantes. Comprenderlo ayuda a anticipar las lesiones."
    },
    {
        question: "¿Por qué es importante la cinemática del trauma?",
        answer: "Porque permite al paramédico predecir la probabilidad y el tipo de lesiones internas, incluso si no son visibles, basándose en la energía involucrada en el incidente."
    },
    {
        question: "¿Qué se evalúa en la evaluación primaria de un paciente traumatizado?",
        answer: "Se evalúan y manejan las amenazas inmediatas a la vida, siguiendo el mnemotécnico ABCDE: Vía aérea con control cervical, Respiración, Circulación y control de hemorragias, Déficit neurológico y Exposición/Entorno."
    },
    {
        question: "¿Qué significa la 'hora dorada' en el manejo del trauma?",
        answer: "Es el periodo crítico, generalmente la primera hora después de un trauma grave, durante el cual la intervención médica avanzada y el transporte rápido a un centro de trauma pueden mejorar drásticamente la supervivencia y reducir la morbilidad."
    },
    {
        question: "¿Cuál es la diferencia principal entre trauma contuso y penetrante?",
        answer: "El trauma contuso ocurre por un impacto sin perforación o ruptura de la piel (ej. golpes, caídas), mientras que el trauma penetrante implica una interrupción de la integridad de la piel o membranas mucosas (ej. heridas por arma blanca o proyectil)."
    },
    {
        question: "¿Qué es el índice de sospecha?",
        answer: "Es la capacidad de predecir o anticipar lesiones basándose en el mecanismo de lesión, entendiendo que pueden existir lesiones significativas que no son evidentes externamente."
    },
    {
        question: "¿Cuándo se considera un transporte rápido a un centro de trauma?",
        answer: "Se considera cuando hay hallazgos de evaluación que indican un trauma grave o inestable, como un Glasgow Coma Scale (GCS) bajo, hipotensión, dificultad respiratoria severa o mecanismos de lesión de alto riesgo."
    }
];

export const traumaGeneralQuestions: Question[] = [
    {
        question: "¿Cuál es la principal causa de muerte en personas menores de 45 años en Estados Unidos, según el capítulo?",
        options: [
            { letter: "a", text: "Enfermedades cardíacas" },
            { letter: "b", text: "Cáncer" },
            { letter: "c", text: "Trauma" },
            { letter: "d", text: "Accidentes cerebrovasculares" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué tipo de energía se transforma en daño tisular en un evento traumático?",
        options: [
            { letter: "a", text: "Energía potencial" },
            { letter: "b", text: "Energía térmica" },
            { letter: "c", text: "Energía cinética" },
            { letter: "d", text: "Energía química" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un paciente sufrió una caída desde una altura de 4 metros. ¿Qué tipo de trauma se esperaría predominantemente?",
        options: [
            { letter: "a", text: "Trauma penetrante" },
            { letter: "b", text: "Trauma contuso" },
            { letter: "c", text: "Trauma térmico" },
            { letter: "d", text: "Trauma por explosión" },
        ],
        correctAnswer: "b",
    },
    {
        question: "En un choque frontal de un vehículo, ¿qué patrón de lesión es común para un ocupante no restringido?",
        options: [
            { letter: "a", text: "Lesiones por latigazo cervical hacia atrás" },
            { letter: "b", text: "Lesiones en la cabeza, cuello, tórax y abdomen por impacto contra el tablero o volante" },
            { letter: "c", text: "Lesiones de extremidades inferiores por impacto lateral" },
            { letter: "d", text: "Expulsión completa del vehículo sin lesiones internas" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué se debe considerar en la evaluación de una caída en pacientes pediátricos, además de la altura?",
        options: [
            { letter: "a", text: "El tipo de superficie de impacto" },
            { letter: "b", text: "La edad del niño y la presencia de condiciones médicas preexistentes" },
            { letter: "c", "text": "El color de la ropa que llevaba el niño" },
            { letter: "d", text: "La distancia a la que fue proyectado el niño" },
        ],
        correctAnswer: "b", // Aunque el capítulo menciona la superficie, la edad y condiciones preexistentes son más específicas para pediátricos.
    },
    {
        question: "¿Cuál es una característica del trauma penetrante de alta velocidad (ej. proyectil de rifle)?",
        options: [
            { letter: "a", text: "Suele causar una herida de entrada pequeña y una de salida grande." },
            { letter: "b", text: "Genera una gran cavitación temporal y permanente." },
            { letter: "c", text: "Las lesiones se limitan solo a la trayectoria directa del proyectil." },
            { letter: "d", text: "Produce quemaduras extensas en la piel." },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un paciente presenta fracturas costales múltiples, contusión pulmonar y laceración hepática. ¿Cómo clasificaría este tipo de trauma?",
        options: [
            { letter: "a", text: "Trauma aislado" },
            { letter: "b", text: "Trauma superficial" },
            { letter: "c", text: "Trauma multisistémico" },
            { letter: "d", text: "Trauma de tejidos blandos" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de los siguientes es un componente clave del 'Índice de Sospecha' en la evaluación de trauma?",
        options: [
            { letter: "a", text: "La edad del paciente" },
            { letter: "b", text: "El mecanismo de lesión" },
            { letter: "c", text: "El historial médico familiar" },
            { letter: "d", text: "La hora del día en que ocurrió el incidente" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Según la Escala de Trauma Revisada (RTS), un puntaje alto indica:",
        options: [
            { letter: "a", text: "Mayor gravedad de las lesiones." },
            { letter: "b", text: "Menor probabilidad de supervivencia." },
            { letter: "c", text: "Mejor pronóstico y menor gravedad." },
            { letter: "d", text: "Necesidad de un centro de trauma Nivel III." },
        ],
        correctAnswer: "c", // Un RTS más alto indica un paciente con mejor pronóstico.
    },
    {
        question: "¿Qué acción tiene la prioridad más alta en el manejo inicial de un paciente con trauma grave?",
        options: [
            { letter: "a", text: "Obtener un historial médico detallado." },
            { letter: "b", text: "Realizar una evaluación secundaria completa." },
            { letter: "c", text: "Controlar la vía aérea y la hemorragia grave." },
            { letter: "d", text: "Esperar la llegada de soporte avanzado." },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un paciente es encontrado inconsciente después de ser atropellado por un vehículo. Su GCS es de 7 y presenta deformidad evidente en fémur. ¿Cumple criterios para transporte rápido?",
        options: [
            { letter: "a", text: "No, porque la deformidad en el fémur no es una amenaza vital inmediata." },
            { letter: "b", text: "Sí, debido al GCS bajo y el mecanismo de lesión de alto riesgo." },
            { letter: "c", text: "Solo si hay hemorragia externa visible." },
            { letter: "d", text: "Depende de la distancia al hospital más cercano." },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué es el trauma multisistémico?",
        options: [
            { letter: "a", text: "Lesiones en una única extremidad." },
            { letter: "b", text: "Lesiones que afectan dos o más sistemas corporales principales." },
            { letter: "c", "text": "Un tipo de trauma psicológico." },
            { letter: "d", text: "Una lesión que solo afecta la piel." },
        ],
        correctAnswer: "b",
    },
    {
        question: "Para un paciente con trauma severo, ¿cuál es la consideración de transporte más apropiada según las guías de trauma?",
        options: [
            { letter: "a", text: "Transportar al hospital más cercano, independientemente de sus capacidades." },
            { letter: "b", text: "Transportar al centro de trauma más cercano que pueda proporcionar el nivel de atención adecuado." },
            { letter: "c", text: "Esperar a que el paciente se estabilice antes de transportarlo." },
            { letter: "d", text: "Contactar a la familia del paciente para decidir el destino." },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué efecto secundario es común en un trauma por explosión debido a la onda expansiva primaria?",
        options: [
            { letter: "a", text: "Fracturas de huesos largos." },
            { letter: "b", text: "Quemaduras de tercer grado." },
            { letter: "c", text: "Barotrauma (lesiones pulmonares, tímpano, etc.)." },
            { letter: "d", text: "Cortes y laceraciones por escombros." },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un paramédico evalúa a un paciente involucrado en un accidente de motocicleta. ¿Qué tipo de información sobre el incidente es crucial para el índice de sospecha?",
        options: [
            { letter: "a", text: "La marca y modelo de la motocicleta." },
            { letter: "b", text: "Si el paciente llevaba casco y el estado del mismo." },
            { letter: "c", "text": "El color de la ropa del paciente." },
            { letter: "d", text: "La hora exacta del accidente." },
        ],
        correctAnswer: "b",
    },
];
