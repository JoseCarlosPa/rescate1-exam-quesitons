import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Cuál es el primer paso al evaluar la vía aérea de un paciente?",
        answer: "Verificar si el paciente está alerta y puede hablar, lo que indica que la vía aérea está, por el momento, permeable."
    },
    {
        question: "¿Qué maniobra se utiliza para abrir la vía aérea en pacientes sin sospecha de trauma cervical?",
        answer: "La maniobra de inclinación de cabeza y elevación del mentón (frente-mentón)."
    },
    {
        question: "¿Qué maniobra se usa si se sospecha una lesión en la columna cervical?",
        answer: "La maniobra de tracción mandibular, evitando mover el cuello del paciente."
    },
    {
        question: "¿Cómo se mide correctamente una cánula orofaríngea (OPA)?",
        answer: "Se mide desde la comisura de la boca del paciente hasta el ángulo de la mandíbula o el lóbulo de la oreja."
    },
    {
        question: "¿Cuándo se debe usar una cánula orofaríngea (OPA)?",
        answer: "Solo en pacientes inconscientes que no tengan reflejo nauseoso."
    },
    {
        question: "¿Cuándo se prefiere una cánula nasofaríngea (NPA) sobre una orofaríngea (OPA)?",
        answer: "En pacientes con nivel de conciencia disminuido que aún tienen reflejo nauseoso, o cuando la boca está lesionada."
    },
    {
        question: "¿Cuál es la diferencia clave entre ventilación y oxigenación?",
        answer: "La ventilación es el proceso físico de mover aire hacia y desde los pulmones. La oxigenación es el proceso por el cual el oxígeno se une a la hemoglobina en la sangre."
    },
];

export const airwayManagementQuestions: Question[] = [
    {
        question: "En un paciente inconsciente sin sospecha de trauma, ¿cuál es la causa más común de obstrucción de la vía aérea?",
        options: [
            { letter: "a", text: "Un cuerpo extraño" },
            { letter: "b", text: "La lengua" },
            { letter: "c", text: "Edema por reacción alérgica" },
            { letter: "d", "text": "Vómito" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Mientras ventila a un paciente adulto con un dispositivo bolsa-válvula-mascarilla (BVM), ¿cuál es el signo MÁS confiable de que las ventilaciones son efectivas?",
        options: [
            { letter: "a", text: "El oxímetro de pulso muestra una saturación del 99%" },
            { letter: "b", text: "Mejora del color de la piel del paciente" },
            { letter: "c", text: "Se observa una elevación y descenso visible del tórax" },
            { letter: "d", text: "Se escuchan sonidos respiratorios al auscultar" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el volumen tidal que se debe administrar al ventilar a un paciente adulto con un BVM?",
        options: [
            { letter: "a", text: "Suficiente para causar una elevación torácica visible y suave" },
            { letter: "b", text: "Apretar la bolsa completamente en cada ventilación" },
            { letter: "c", text: "Aproximadamente 1000 mL para asegurar la oxigenación" },
            { letter: "d", text: "Un volumen que mantenga el ETCO2 por debajo de 20 mmHg" },
        ],
        correctAnswer: "a",
    },
    {
        question: "Atiende a un hombre de 60 años con sospecha de una caída de su propia altura. Está inconsciente y respira de forma ruidosa (ronquidos). ¿Cuál es la maniobra inicial correcta para manejar su vía aérea?",
        options: [
            { letter: "a", text: "Realizar la maniobra de inclinación de cabeza-elevación de mentón" },
            { letter: "b", text: "Insertar inmediatamente una cánula orofaríngea" },
            { letter: "c", text: "Realizar la maniobra de tracción mandibular" },
            { letter: "d", text: "Colocarlo en posición de recuperación" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Su compañero aplica un oxímetro de pulso a un paciente en shock hipovolémico con extremidades frías y pálidas. La lectura es del 88%. ¿Qué factor podría estar causando una lectura imprecisa?",
        options: [
            { letter: "a", text: "Hipertensión" },
            { letter: "b", text: "Vasoconstricción periférica" },
            { letter: "c", text: "Fiebre" },
            { letter: "d", text: "Ictericia (coloración amarilla de la piel)" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿En cuál de los siguientes pacientes estaría CONTRAINDICADO el uso de una cánula nasofaríngea (NPA)?",
        options: [
            { letter: "a", text: "Un paciente somnoliento con reflejo nauseoso intacto" },
            { letter: "b", text: "Un paciente con lesiones faciales graves y sospecha de fractura de la base del cráneo" },
            { letter: "c", text: "Un paciente que no tolera una cánula orofaríngea" },
            { letter: "d", text: "Un paciente con historial de asma" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Al aspirar secreciones líquidas (vómito) de la vía aérea de un paciente adulto, ¿cuál es el tiempo máximo recomendado por cada intento de succión?",
        options: [
            { letter: "a", text: "5 segundos" },
            { letter: "b", text: "15 segundos" },
            { letter: "c", text: "30 segundos" },
            { letter: "d", text: "Hasta que la vía aérea esté completamente despejada, sin importar el tiempo" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Atiende a un paciente inconsciente post-convulsión. Presenta ronquidos y cianosis central. El oxímetro marca 85%. ¿Cuál es la secuencia de intervención más apropiada?",
        options: [
            { letter: "a", text: "Administrar oxígeno, insertar una OPA y luego abrir la vía aérea" },
            { letter: "b", text: "Realizar tracción mandibular y preparar equipo de intubación" },
            { letter: "c", text: "Colocar al paciente en posición de recuperación y esperar" },
            { letter: "d", text: "Abrir la vía aérea (frente-mentón), insertar una OPA si no hay reflejo nauseoso, y ventilar con BVM" },
        ],
        correctAnswer: "d",
    },
    {
        question: "Usted está ventilando a un paciente adulto en apnea con un BVM. ¿Cuál es la frecuencia correcta para administrar las ventilaciones?",
        options: [
            { letter: "a", text: "Una ventilación cada 3-5 segundos (12-20 por minuto)" },
            { letter: "b", text: "Una ventilación cada 6 segundos (10 por minuto)" },
            { letter: "c", text: "Dos ventilaciones rápidas cada 10 segundos" },
            { letter: "d", text: "Tan rápido como sea posible para elevar la saturación" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un paciente de 70 años está alerta, pero con evidente dificultad respiratoria y una saturación de oxígeno del 90%. ¿Cuál es el dispositivo de administración de oxígeno más apropiado para este paciente?",
        options: [
            { letter: "a", text: "Cánula nasal a 4 L/min" },
            { letter: "b", text: "Mascarilla no recirculante a 15 L/min" },
            { letter: "c", text: "Ventilación con BVM sin oxígeno suplementario" },
            { letter: "d", text: "No se requiere oxígeno si el paciente sigue hablando" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de los siguientes hallazgos es un signo inequívoco de ventilación inadecuada en un adulto?",
        options: [
            { letter: "a", text: "Frecuencia respiratoria de 18 por minuto" },
            { letter: "b", text: "Piel tibia, rosada y seca" },
            { letter: "c", text: "Uso de músculos accesorios en cuello y abdomen para respirar" },
            { letter: "d", text: "Movimiento torácico simétrico durante la inspiración" },
        ],
        correctAnswer: "c",
    },
    {
        question: "En una persona sana, ¿cuál es el estímulo fisiológico primario que controla la frecuencia y profundidad de la respiración?",
        options: [
            { letter: "a", text: "El nivel de oxígeno (O₂) en la sangre" },
            { letter: "b", text: "El nivel de dióxido de carbono (CO₂) en la sangre" },
            { letter: "c", text: "La presión arterial sistémica" },
            { letter: "d", text: "La frecuencia cardíaca y el pulso" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Mientras ventila con un BVM a un paciente inconsciente, éste vomita. ¿Cuál debe ser su acción inmediata y prioritaria?",
        options: [
            { letter: "a", text: "Continuar ventilando para intentar pasar el vómito a los pulmones" },
            { letter: "b", text: "Detenerse, girar al paciente de lado, y succionar la orofaringe inmediatamente" },
            { letter: "c", text: "Insertar una cánula orofaríngea más grande para contener el vómito" },
            { letter: "d", text: "Ignorar el vómito y comenzar las compresiones torácicas" },
        ],
        correctAnswer: "b",
    }
];