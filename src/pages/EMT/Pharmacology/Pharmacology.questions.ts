import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es un fármaco?",
        answer: "Es cualquier sustancia química que, al interactuar con un sistema biológico, altera sus funciones normales."
    },
    {
        question: "¿Cuál es la diferencia entre un fármaco y un medicamento?",
        answer: "Un fármaco es la sustancia activa, mientras que un medicamento es la preparación farmacéutica que contiene uno o más fármacos, formulada para ser administrada con fines terapéuticos, diagnósticos o preventivos."
    },
    {
        question: "¿Cuáles son los 'cinco correctos' de la administración de medicamentos?",
        answer: "Los 'cinco correctos' son: Paciente correcto, Medicamento correcto, Dosis correcta, Vía correcta y Hora correcta. A menudo se añaden 'documentación correcta' y 'razón correcta'."
    },
    {
        question: "¿Qué medicamento prehospitalario se utiliza comúnmente en reacciones anafilácticas graves?",
        answer: "La Epinefrina es el medicamento de elección en reacciones anafilácticas graves debido a sus efectos broncodilatadores y vasopresores."
    },
    {
        question: "¿Qué vía de administración generalmente permite el efecto más rápido de un medicamento?",
        answer: "La vía intravenosa (IV) es la que generalmente permite el efecto más rápido de un medicamento, ya que introduce el fármaco directamente en el torrente sanguíneo."
    },
    {
        question: "¿Qué medicamento se administra para hipoglucemia en un paciente consciente?",
        answer: "En un paciente consciente con hipoglucemia, se administra Glucosa oral."
    },
    {
        question: "¿Qué medicamento se utiliza para inhibir la agregación plaquetaria en casos de infarto agudo de miocardio?",
        answer: "La Aspirina es el medicamento utilizado para inhibir la agregación plaquetaria en el contexto de un infarto agudo de miocardio."
    },
    {
        question: "¿Qué es la farmacodinamia?",
        answer: "La farmacodinamia es el estudio de cómo los medicamentos actúan en el cuerpo y producen sus efectos, es decir, qué le hace el fármaco al cuerpo."
    },
    {
        question: "¿Qué es una contraindicación de un medicamento?",
        answer: "Una contraindicación es una condición o factor que hace que el uso de un medicamento en particular sea peligroso o desaconsejable para un paciente, ya que podría causar daño."
    }
];

export const pharmacologyQuestions: Question[] = [
    {
        question: "¿Cuál de las siguientes describe mejor el estudio de cómo el cuerpo procesa los medicamentos (absorción, distribución, metabolismo y excreción)?",
        options: [
            { letter: "a", text: "Farmacodinamia" },
            { letter: "b", text: "Farmacocinética" },
            { letter: "c", text: "Toxicología" },
            { letter: "d", text: "Farmacognosia" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué término se refiere a los efectos deseados de un medicamento que alivian los síntomas o tratan una condición?",
        options: [
            { letter: "a", text: "Efectos adversos" },
            { letter: "b", text: "Efectos secundarios" },
            { letter: "c", text: "Efectos terapéuticos" },
            { letter: "d", text: "Interacciones farmacológicas" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de las siguientes es una ventaja clave de la administración de medicamentos por vía sublingual?",
        options: [
            { letter: "a", text: "Absorción lenta y sostenida" },
            { letter: "b", text: "Evita el metabolismo de primer paso hepático" },
            { letter: "c", text: "Adecuado para grandes volúmenes de líquido" },
            { letter: "d", "text": "Requiere la ingesta de alimentos para una mejor absorción" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un paciente refiere que está tomando múltiples medicamentos recetados y también algunos suplementos herbales. ¿Por qué es crucial para el paramédico preguntar sobre todos los medicamentos, incluidos los de venta libre y los suplementos?",
        options: [
            { letter: "a", text: "Porque la mayoría de los pacientes olvidan mencionar medicamentos importantes." },
            { letter: "b", text: "Para determinar si el paciente es adherente a su tratamiento médico." },
            { letter: "c", text: "Debido a la posibilidad de interacciones farmacológicas que podrían afectar la condición del paciente o el tratamiento de emergencia." },
            { letter: "d", text: "Es importante solo si el paciente presenta efectos secundarios evidentes." },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué vía de administración de medicamentos implica la inyección en el tejido muscular?",
        options: [
            { letter: "a", text: "Intravenosa (IV)" },
            { letter: "b", text: "Subcutánea (SC)" },
            { letter: "c", text: "Intramuscular (IM)" },
            { letter: "d", text: "Intraósea (IO)" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de los siguientes es un ejemplo de un efecto adverso grave de un medicamento?",
        options: [
            { letter: "a", text: "Leve somnolencia después de tomar un antihistamínico." },
            { letter: "b", text: "Náuseas leves que desaparecen con el tiempo." },
            { letter: "c", text: "Una reacción anafiláctica severa con compromiso de la vía aérea." },
            { letter: "d", text: "Sequedad de boca al usar un descongestionante nasal." },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué ventaja principal tiene la administración de medicamentos por vía oral (VO)?",
        options: [
            { letter: "a", text: "Inicio de acción muy rápido." },
            { letter: "b", text: "Es la vía más segura y conveniente para el autotratamiento." },
            { letter: "c", text: "Evita completamente el metabolismo de primer paso." },
            { letter: "d", text: "Permite la administración de grandes volúmenes de líquido." },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de los siguientes medicamentos se utiliza principalmente para aliviar el dolor torácico asociado con la isquemia cardíaca al dilatar los vasos sanguíneos?",
        options: [
            { letter: "a", text: "Aspirina" },
            { letter: "b", text: "Nitroglicerina" },
            { letter: "c", "text": "Epinefrina" },
            { letter: "d", "text": "Glucosa oral" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué vía se usa para administrar medicamentos debajo de la piel, como la insulina o la epinefrina en autoinyectores?",
        options: [
            { letter: "a", text: "Intramuscular" },
            { letter: "b", text: "Intravenosa" },
            { letter: "c", text: "Subcutánea" },
            { letter: "d", text: "Oral" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué tipo de medicamento se clasifica como 'controlado' y requiere una regulación estricta debido a su potencial de abuso o dependencia?",
        options: [
            { letter: "a", text: "Antibióticos" },
            { letter: "b", text: "Antiinflamatorios no esteroideos (AINEs)" },
            { letter: "c", text: "Opioides (ej. Morfina)" },
            { letter: "d", text: "Vitaminas" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué parámetro es vital monitorear de cerca después de administrar Epinefrina debido a sus potentes efectos cardiovasculares?",
        options: [
            { letter: "a", text: "Temperatura corporal" },
            { letter: "b", text: "Nivel de glucosa en sangre" },
            { letter: "c", text: "Frecuencia cardíaca y presión arterial" },
            { letter: "d", text: "Nivel de oxígeno por oximetría de pulso" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el propósito principal de administrar carbón activado en ciertas intoxicaciones orales?",
        options: [
            { letter: "a", text: "Inducir el vómito para eliminar la toxina." },
            { letter: "b", text: "Neutralizar el pH gástrico y la toxina." },
            { letter: "c", text: "Absorber la toxina en el tracto gastrointestinal, previniendo su absorción sistémica." },
            { letter: "d", text: "Aumentar la eliminación renal de la toxina." },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué significa el 'nombre genérico' de un medicamento en comparación con su 'nombre comercial'?",
        options: [
            { letter: "a", text: "El nombre genérico es la marca registrada, mientras que el comercial es la sustancia activa." },
            { letter: "b", text: "El nombre genérico es el nombre químico oficial, y el comercial es el nombre de patente de la compañía farmacéutica." },
            { letter: "c", text: "El nombre genérico es asignado por la FDA, mientras que el comercial es elegido por los médicos." },
            { letter: "d", text: "Ambos se refieren a la misma cosa y son intercambiables en todos los contextos." },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué forma de medicamento es un dispositivo que entrega una dosis precisa de un fármaco directamente a los pulmones, comúnmente usado para el asma?",
        options: [
            { letter: "a", text: "Tableta sublingual" },
            { letter: "b", text: "Inyección intramuscular" },
            { letter: "c", text: "Inhalador de dosis medida (IDM)" },
            { letter: "d", text: "Supositorio rectal" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de las siguientes NO es una de las vías de administración de medicamentos mencionadas en el capítulo?",
        options: [
            { letter: "a", text: "Intradérmica (ID)" },
            { letter: "b", text: "Intravenosa (IV)" },
            { letter: "c", text: "Intratecal (IT)" },
            { letter: "d", text: "Transcutánea (TC)" },
        ],
        correctAnswer: "c", // Intratecal no se menciona explícitamente en el Capítulo 11 como una vía que el PAP pueda usar.
    },
    {
        question: "¿Qué es un 'efecto secundario' de un medicamento?",
        options: [
            { letter: "a", text: "Un efecto deseado y beneficioso del medicamento." },
            { letter: "b", text: "Una reacción adversa que siempre es grave y potencialmente mortal." },
            { letter: "c", text: "Un efecto no deseado que ocurre además del efecto terapéutico principal, pero que generalmente es predecible y no siempre grave." },
            { letter: "d", text: "La interacción entre dos o más medicamentos en el cuerpo." },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Por qué es fundamental que un paramédico entienda las indicaciones de un medicamento?",
        options: [
            { letter: "a", text: "Para saber cuándo el medicamento no debe administrarse." },
            { letter: "b", text: "Para conocer los efectos secundarios que podría causar." },
            { letter: "c", text: "Para identificar las condiciones o situaciones específicas en las que el medicamento es apropiado y beneficioso." },
            { letter: "d", text: "Para comprender cómo el medicamento se elimina del cuerpo." },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué acción debe tomar un paramédico si un paciente experimenta un efecto adverso grave después de la administración de un medicamento?",
        options: [
            { letter: "a", text: "Interrumpir inmediatamente el medicamento y monitorear al paciente." },
            { letter: "b", text: "Administrar una dosis adicional para contrarrestar el efecto." },
            { letter: "c", text: "Asumir que es una reacción normal y continuar el tratamiento." },
            { letter: "d", text: "Documentarlo y esperar la llegada al hospital sin intervenir." },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Cuál de las siguientes afirmaciones es CORRECTA sobre la administración de oxígeno suplementario por un paramédico?",
        options: [
            { letter: "a", text: "El oxígeno se considera un medicamento y debe administrarse con precaución." },
            { letter: "b", text: "El oxígeno siempre debe administrarse a la máxima concentración posible." },
            { letter: "c", text: "El oxígeno es una droga autoadministrada por el paciente." },
            { letter: "d", text: "El oxígeno no tiene efectos adversos conocidos." },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué tipo de administración de medicamento describe mejor cuando el paramédico asiste a un paciente para tomar su propio medicamento recetado, como nitroglicerina?",
        options: [
            { letter: "a", text: "Autoadministrada" },
            { letter: "b", text: "Administrada por PAP" },
            { letter: "c", text: "Asistida por el paciente" },
            { letter: "d", text: "Asistida por el director médico" },
        ],
        correctAnswer: "c",
    },
];