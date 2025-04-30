export const faqData = [
    {
        question: "¿Qué es la inmovilización?",
        answer: "Es el procedimiento mediante el cual se restringe el movimiento de una parte lesionada del cuerpo para prevenir lesiones mayores.",
    },
    {
        question: "¿Por qué es importante inmovilizar una fractura antes del traslado?",
        answer: "Para evitar mayor daño a tejidos, nervios y vasos sanguíneos, así como para reducir el dolor del paciente.",
    },
    {
        question: "¿Qué tipos de férulas existen?",
        answer: "Férulas rígidas, blandas, neumáticas y de vacío.",
    },
    {
        question: "¿Cuándo se debe usar un collarín cervical?",
        answer: "Cuando se sospecha lesión en columna cervical, especialmente tras traumatismos craneales, caídas o accidentes de tránsito.",
    },
    {
        question: "¿Qué se debe evaluar antes y después de inmovilizar una extremidad?",
        answer: "Circulación, sensibilidad y movimiento distal (CSM).",
    },
    {
        question: "¿Qué es la tabla espinal larga?",
        answer: "Es un dispositivo utilizado para inmovilizar a pacientes con sospecha de lesión espinal durante el traslado.",
    },
];

export interface Question {
    question: string;
    options: { letter: string; text: string }[];
    correctAnswer: string;
}

export const immobilizationQuestions: Question[] = [
    {
        question: "¿Cuál es el objetivo principal de la inmovilización?",
        options: [
            { letter: "a", text: "Eliminar completamente el dolor del paciente" },
            { letter: "b", text: "Evitar que el paciente se mueva" },
            { letter: "c", text: "Prevenir daño adicional a tejidos y estructuras" },
            { letter: "d", text: "Permitir una recuperación más rápida" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué se debe evaluar antes y después de colocar una férula?",
        options: [
            { letter: "a", text: "Presión arterial" },
            { letter: "b", text: "Frecuencia respiratoria" },
            { letter: "c", text: "Nivel de glucosa" },
            { letter: "d", text: "Circulación, sensibilidad y movimiento (CSM)" },
        ],
        correctAnswer: "d",
    },
    {
        question: "¿Cuál de los siguientes dispositivos se utiliza para inmovilizar la columna vertebral?",
        options: [
            { letter: "a", text: "Collarín rígido" },
            { letter: "b", text: "Camilla de cuchara" },
            { letter: "c", text: "Tabla espinal larga" },
            { letter: "d", text: "Férula de tracción" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué tipo de férula se adapta mejor a la forma del miembro lesionado?",
        options: [
            { letter: "a", text: "Rígida" },
            { letter: "b", text: "Neumática" },
            { letter: "c", text: "De vacío" },
            { letter: "d", text: "Improvisada" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es una indicación clara para usar un collarín cervical?",
        options: [
            { letter: "a", text: "Dolor en brazo izquierdo" },
            { letter: "b", text: "Fractura de tibia" },
            { letter: "c", text: "Trauma craneoencefálico con mecanismo de lesión importante" },
            { letter: "d", text: "Dolor abdominal" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué férula es ideal para fracturas de extremidades largas con deformidad visible?",
        options: [
            { letter: "a", text: "Férula neumática" },
            { letter: "b", text: "Férula rígida" },
            { letter: "c", text: "Férula de vacío" },
            { letter: "d", text: "Collarín cervical" },
        ],
        correctAnswer: "c",
    },
    {
        question: "La inmovilización incorrecta puede provocar:",
        options: [
            { letter: "a", text: "Dolor leve" },
            { letter: "b", text: "Parálisis permanente" },
            { letter: "c", text: "Curación más rápida" },
            { letter: "d", text: "Hipertermia" },
        ],
        correctAnswer: "b",
    },
    {
        question: "La férula de tracción está indicada principalmente en:",
        options: [
            { letter: "a", text: "Fractura de húmero" },
            { letter: "b", text: "Fractura de fémur en adultos" },
            { letter: "c", text: "Fractura de muñeca" },
            { letter: "d", text: "Fractura costal" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de los siguientes dispositivos NO es adecuado para inmovilizar la columna vertebral?",
        options: [
            { letter: "a", text: "Camilla rígida" },
            { letter: "b", text: "Collarín cervical" },
            { letter: "c", text: "Férula neumática" },
            { letter: "d", text: "Tabla espinal larga" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el primer paso antes de aplicar una férula?",
        options: [
            { letter: "a", text: "Administrar oxígeno" },
            { letter: "b", text: "Controlar el dolor" },
            { letter: "c", text: "Evaluar CSM" },
            { letter: "d", text: "Aplicar vendaje" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué parte del cuerpo inmoviliza un collarín cervical?",
        options: [
            { letter: "a", text: "La mandíbula" },
            { letter: "b", text: "El cráneo" },
            { letter: "c", text: "La columna cervical" },
            { letter: "d", text: "El esternón" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué dispositivo es más útil en una fractura de antebrazo estable sin deformidad?",
        options: [
            { letter: "a", text: "Férula de tracción" },
            { letter: "b", text: "Férula rígida" },
            { letter: "c", text: "Collarín cervical" },
            { letter: "d", text: "Tabla espinal" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es una complicación de no inmovilizar adecuadamente una fractura?",
        options: [
            { letter: "a", text: "Hipotermia" },
            { letter: "b", text: "Hematomas cutáneos" },
            { letter: "c", text: "Lesión vascular" },
            { letter: "d", text: "Dolor muscular leve" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué debe evitarse al colocar un collarín cervical?",
        options: [
            { letter: "a", text: "Hacer presión en la tráquea" },
            { letter: "b", text: "Alinear el cuello manualmente" },
            { letter: "c", text: "Usar el tamaño adecuado" },
            { letter: "d", text: "Inmovilizar la cabeza" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué indica una disminución de sensibilidad distal después de inmovilizar una extremidad?",
        options: [
            { letter: "a", text: "El procedimiento fue exitoso" },
            { letter: "b", text: "La férula está bien ajustada" },
            { letter: "c", text: "Compromiso neurovascular" },
            { letter: "d", text: "Dolor muscular normal" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué se debe hacer si la férula interfiere con la circulación distal?",
        options: [
            { letter: "a", text: "Aplicar hielo" },
            { letter: "b", text: "Retirar la férula y volver a colocarla" },
            { letter: "c", text: "Esperar a llegar al hospital" },
            { letter: "d", text: "Dejar al paciente quieto" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué tipo de férula se infla con aire?",
        options: [
            { letter: "a", text: "Rígida" },
            { letter: "b", text: "Neumática" },
            { letter: "c", text: "De vacío" },
            { letter: "d", text: "Improvisada" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuándo es más indicado el uso de férulas de vacío?",
        options: [
            { letter: "a", text: "En quemaduras extensas" },
            { letter: "b", text: "En luxaciones abiertas" },
            { letter: "c", text: "En fracturas con deformidades evidentes" },
            { letter: "d", text: "En heridas menores" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué maniobra es crítica al colocar al paciente sobre una tabla espinal larga?",
        options: [
            { letter: "a", text: "Maniobra de Heimlich" },
            { letter: "b", text: "Técnica de tracción axial" },
            { letter: "c", text: "Rotación de 180 grados" },
            { letter: "d", text: "Log-roll (rodar en bloque)" },
        ],
        correctAnswer: "d",
    },
    {
        question: "¿Cuál es el paso final tras inmovilizar a un paciente en una tabla larga?",
        options: [
            { letter: "a", text: "Retirar el collarín" },
            { letter: "b", text: "Realizar la evaluación secundaria" },
            { letter: "c", text: "Asegurar cabeza con bloques de sujeción y cintas" },
            { letter: "d", text: "Revisar nivel de glucosa" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué indica una extremidad fría y sin pulso después de inmovilizarla?",
        options: [
            { letter: "a", text: "Fractura cerrada" },
            { letter: "b", text: "Compresión arterial" },
            { letter: "c", text: "Síndrome compartimental" },
            { letter: "d", text: "Infección" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué tipo de inmovilización se usa en sospecha de lesión espinal en un paciente sentado?",
        options: [
            { letter: "a", text: "Tabla larga" },
            { letter: "b", text: "Camilla de cuchara" },
            { letter: "c", text: "Dispositivo de inmovilización espinal corta (KED)" },
            { letter: "d", text: "Férula de tracción" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es una indicación para usar férula de tracción?",
        options: [
            { letter: "a", text: "Fractura expuesta de fémur" },
            { letter: "b", text: "Fractura estable de tibia" },
            { letter: "c", text: "Luxación de cadera" },
            { letter: "d", text: "Fractura cerrada de fémur medio" },
        ],
        correctAnswer: "d",
    },
    {
        question: "¿Qué se debe evitar al inmovilizar una articulación dislocada?",
        options: [
            { letter: "a", text: "Inmovilizar en la posición encontrada" },
            { letter: "b", text: "Forzarla a la posición anatómica" },
            { letter: "c", text: "Evaluar el pulso distal" },
            { letter: "d", text: "Buscar sensibilidad distal" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué dispositivo puede inmovilizar completamente una pierna rota y también servir para transporte?",
        options: [
            { letter: "a", text: "Collarín cervical" },
            { letter: "b", text: "Férula rígida" },
            { letter: "c", text: "Tabla espinal larga" },
            { letter: "d", text: "Férula de tracción" },
        ],
        correctAnswer: "d",
    },
    {
        question: "¿Qué hacer si una férula causa dolor intenso al aplicarse?",
        options: [
            { letter: "a", text: "Ajustarla más fuerte" },
            { letter: "b", text: "Ignorar el dolor" },
            { letter: "c", text: "Retirarla y reevaluar" },
            { letter: "d", text: "Administrar analgésicos" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es un signo de mala inmovilización de una extremidad?",
        options: [
            { letter: "a", text: "Dolor localizado" },
            { letter: "b", text: "Inflamación" },
            { letter: "c", text: "Ausencia de movimiento distal" },
            { letter: "d", text: "Coloración rosada de la piel" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué acción puede prevenir complicaciones tras inmovilizar un brazo fracturado?",
        options: [
            { letter: "a", text: "Ajustar vendajes cada 5 minutos" },
            { letter: "b", text: "Aplicar presión directa" },
            { letter: "c", text: "Revisar constantemente CSM" },
            { letter: "d", text: "Usar cabestrillo" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué significa 'inmovilización en bloque'?",
        options: [
            { letter: "a", text: "Uso de varias férulas en un paciente" },
            { letter: "b", text: "Evitar todo tipo de movimiento de la columna" },
            { letter: "c", text: "Inmovilizar solo la parte lesionada" },
            { letter: "d", text: "Uso de torniquetes múltiples" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué componente no puede faltar en la inmovilización espinal completa?",
        options: [
            { letter: "a", text: "Bolsa de oxígeno" },
            { letter: "b", text: "Cinturones o correas de sujeción" },
            { letter: "c", text: "Glucómetro" },
            { letter: "d", text: "Guantes estériles" },
        ],
        correctAnswer: "b",
    },
];
