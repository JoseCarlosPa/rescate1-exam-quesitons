export const faqData = [
    {
        question: "¿Cuál es la regla principal de la mecánica corporal para levantar a un paciente?",
        answer: "La regla clave es mantener siempre la espalda en una posición recta y erguida (vertical) y levantar sin girar. La fuerza debe provenir de las piernas, no de la espalda. ",
    },
    {
        question: "¿Qué es el 'levantamiento de fuerza' (power lift)?",
        answer: "Es la técnica más segura y poderosa para levantar. Consiste en flexionar las piernas con la espalda recta, sujetar el peso cerca del cuerpo y extender las piernas para levantarse. ",
    },
    {
        question: "¿Cuándo se debe realizar un movimiento de emergencia?",
        answer: "Se realiza cuando hay un peligro inmediato en la escena (fuego, explosivos) que amenaza la vida del paciente o del personal de rescate, o cuando se necesita acceder a otro paciente más grave. ",
    },
    {
        question: "¿Qué dispositivo es el más adecuado para bajar a un paciente consciente por las escaleras?",
        answer: "La silla de escalera es el dispositivo ideal, ya que permite mover a un paciente sentado de forma segura por tramos de escaleras, siempre que su condición médica lo permita. ",
    },
    {
        question: "¿Cuántos proveedores se necesitan para levantar a un paciente que pesa más de 114 kg (250 lb)?",
        answer: "Se deben utilizar al menos cuatro proveedores para levantar a un paciente de más de 114 kg, para garantizar la estabilidad y seguridad durante el levantamiento. ",
    },
    {
        question: "¿Cómo se distribuye el peso de un paciente acostado en una camilla?",
        answer: "El peso no se distribuye de manera uniforme. Entre el 68% y el 78% del peso corporal se encuentra en la mitad superior del cuerpo (torso), lo que es crucial para posicionar al personal correctamente. ",
    },
];

export interface Question {
    question: string;
    options: { letter: string; text: string }[];
    correctAnswer: string;
}

export const immobilizationQuestions: Question[] = [
    {
        question: "Al levantar a un paciente, ¿cuál es la principal razón para mantener el peso lo más cerca posible del cuerpo?",
        options: [
            { letter: "a", text: "Para evitar que el paciente sienta frío" },
            { letter: "b", text: "Para reducir la fuerza y la tensión sobre la espalda" },
            { letter: "c", text: "Para poder caminar más rápido" },
            { letter: "d", text: "Para facilitar la comunicación con el paciente" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un equipo de dos proveedores debe mover a un paciente de 120 kg (aprox. 265 lb). Según las recomendaciones, ¿cuál es la acción más segura?",
        options: [
            { letter: "a", text: "Intentar el levantamiento usando la técnica de fuerza" },
            { letter: "b", text: "Utilizar un arrastre de ropa para moverlo" },
            { letter: "c", text: "Solicitar ayuda adicional para contar con al menos cuatro proveedores" },
            { letter: "d", text: "Usar la camilla de cuchara para dividir el peso" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de los siguientes dispositivos NO está diseñado para ser utilizado en el transporte de pacientes por escaleras?",
        options: [
            { letter: "a", text: "La camilla con ruedas de la ambulancia" },
            { letter: "b", text: "La silla de escalera" },
            { letter: "c", text: "Una tabla de inmovilización" },
            { letter: "d", text: "Una camilla flexible" },
        ],
        correctAnswer: "a",
    },
    {
        question: "Durante la técnica de 'extracción rápida' de un vehículo, ¿quién es el responsable de dirigir los movimientos coordinados del equipo?",
        options: [
            { letter: "a", text: "El primer proveedor que mantiene el control cervical" },
            { letter: "b", text: "El segundo proveedor que levanta y gira el torso del paciente" },
            { letter: "c", text: "El tercer proveedor encargado de las piernas" },
            { letter: "d", text: "El proveedor que tenga más experiencia en la escena" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Se debe mover a un paciente desde su cama a una camilla. El paciente no puede colaborar. Ambos dispositivos están a la misma altura. ¿Qué técnica de movimiento sin levantamiento es la más adecuada?",
        options: [
            { letter: "a", text: "Levantamiento de extremidades" },
            { letter: "b", text: "Levantamiento directo del piso" },
            { letter: "c", text: "Método de movimiento con una sábana (sábana hospitalaria)" },
            { letter: "d", text: "Uso de una silla de escalera" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Al realizar un 'acarreo directo' con tres proveedores para mover a un paciente de la cama a la camilla, ¿qué función realiza el segundo proveedor (el del medio)?",
        options: [
            { letter: "a", text: "Sujetar la cabeza y la parte baja de la espalda" },
            { letter: "b", text: "Sujetar la cintura y las rodillas del paciente" },
            { letter: "c", text: "Sujetar las rodillas y los tobillos del paciente" },
            { letter: "d", text: "Sujetar únicamente las piernas del paciente" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué característica diferencia principalmente a una camilla bariátrica de una estándar?",
        options: [
            { letter: "a", text: "Es más ligera y fácil de transportar" },
            { letter: "b", text: "Tiene una mayor capacidad de peso y una superficie más amplia" },
            { letter: "c", text: "Solo puede ser utilizada por dos proveedores" },
            { letter: "d", text: "No incluye ruedas para facilitar su uso en terrenos difíciles" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un paciente inconsciente sin sospecha de trauma debe ser colocado en la 'posición de recuperación'. ¿Cómo ayuda esto al paciente?",
        options: [
            { letter: "a", text: "Mantiene la columna vertebral perfectamente alineada" },
            { letter: "b", text: "Facilita la evaluación de la presión arterial" },
            { letter: "c", text: "Ayuda a mantener la vía aérea permeable y permite el drenaje de fluidos" },
            { letter: "d", text: "Incrementa el flujo sanguíneo al cerebro" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Al empujar una camilla, ¿cuál es la técnica correcta para protegerse de lesiones?",
        options: [
            { letter: "a", text: "Empujar con los brazos completamente extendidos y los codos bloqueados" },
            { letter: "b", text: "Inclinarse desde la cintura para usar el peso del cuerpo" },
            { letter: "c", text: "Mantener los codos flexionados y el peso cerca del cuerpo" },
            { letter: "d", text: "Jalar la camilla caminando hacia atrás siempre que sea posible" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Para qué se utiliza principalmente una camilla de canasta (tipo Stokes)?",
        options: [
            { letter: "a", text: "Para transporte estándar en una ambulancia" },
            { letter: "b", text: "Para mover pacientes en espacios muy estrechos" },
            { letter: "c", text: "Para transportar a un paciente por terreno irregular o en rescates remotos" },
            { letter: "d", text: "Para inmovilizar fracturas de fémur" },
        ],
        correctAnswer: "c",
    },
    {
        question: "En una situación de 'movimiento de emergencia' donde debe arrastrar a un paciente solo, ¿qué principio es crucial para proteger al paciente de una lesión mayor?",
        options: [
            { letter: "a", text: "Levantar completamente al paciente del suelo" },
            { letter: "b", text: "Arrastrarlo de lado para mayor velocidad" },
            { letter: "c", text: "Jalar al paciente a lo largo de su eje longitudinal (en línea recta)" },
            { letter: "d", text: "Utilizar las extremidades inferiores para el arrastre" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un paciente con una posible curvatura espinal (cifosis) debe ser inmovilizado. ¿Cuál es la mejor consideración para este paciente?",
        options: [
            { letter: "a", text: "Forzar al paciente a una posición supina recta sobre la tabla" },
            { letter: "b", text: "Usar una camilla de cuchara para enderezar la columna" },
            { letter: "c", text: "Inmovilizar en su posición de lado o usar un colchón de vacío para adaptarse a la curvatura" },
            { letter: "d", text: "Transportar al paciente sin inmovilización para mayor comodidad" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el propósito de las correas en una camilla o tabla de inmovilización?",
        options: [
            { letter: "a", text: "Mantener al paciente abrigado" },
            { letter: "b", text: "Sujetar al paciente para evitar movimientos o caídas durante el traslado" },
            { letter: "c", text: "Servir como asas adicionales para los proveedores" },
            { letter: "d", text: "Inmovilizar únicamente las extremidades" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Al levantar una tabla espinal con la 'sujeción de fuerza' (power grip), ¿cómo deben posicionarse las manos?",
        options: [
            { letter: "a", text: "Con las palmas hacia abajo, sujetando el borde superior" },
            { letter: "b", text: "Con las palmas hacia arriba, insertando la mano debajo del mango" },
            { letter: "c", text: "Con una mano hacia arriba y la otra hacia abajo para equilibrar" },
            { letter: "d", text: "Sujetando los orificios con las puntas de los dedos" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Se debe realizar la 'técnica de extracción rápida' en un paciente en un vehículo. ¿En cuál de las siguientes situaciones está justificado este procedimiento?",
        options: [
            { letter: "a", text: "El paciente está estable pero se queja de dolor leve de cuello" },
            { letter: "b", text: "El vehículo tiene un daño mínimo y la escena es segura" },
            { letter: "c", text: "El paciente bloquea el acceso a otro paciente gravemente herido" },
            { letter: "d", text: "El paciente desea salir del vehículo por su propio pie" },
        ],
        correctAnswer: "c",
    }
];
