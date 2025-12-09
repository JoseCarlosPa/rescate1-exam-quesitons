import { Question } from "../../question";

// Preguntas para el examen formal
export const ropeRescueQuestions: Question[] = [
    {
        question: '¿Cuál es la elongación típica de una cuerda estática?',
        options: [
            { letter: 'a', text: '25-35%' },
            { letter: 'b', text: '15-20%' },
            { letter: 'c', text: 'Menos del 5%' },
            { letter: 'd', text: '40-50%' }
        ],
        correctAnswer: 'c',
    },
    {
        question: '¿Qué nudo se recomienda para unir dos cuerdas del mismo diámetro de forma permanente?',
        options: [
            { letter: 'a', text: 'Nudo ballestrinque' },
            { letter: 'b', text: 'Doble pescador' },
            { letter: 'c', text: 'As de guía' },
            { letter: 'd', text: 'Ocho simple' }
        ],
        correctAnswer: 'b',
    },
    {
        question: '¿Cuál es el ángulo máximo recomendado entre los brazos de un anclaje ecualizado?',
        options: [
            { letter: 'a', text: '90 grados' },
            { letter: 'b', text: '120 grados' },
            { letter: 'c', text: '60 grados' },
            { letter: 'd', text: '45 grados' }
        ],
        correctAnswer: 'c',
    },
    {
        question: '¿Qué tipo de cuerda se debe usar si existe posibilidad de caída con factor de caída mayor a 0.5?',
        options: [
            { letter: 'a', text: 'Cuerda estática' },
            { letter: 'b', text: 'Cuerda semi-estática' },
            { letter: 'c', text: 'Cuerda dinámica' },
            { letter: 'd', text: 'Cordino auxiliar' }
        ],
        correctAnswer: 'c',
    },
    {
        question: '¿Qué porcentaje de la resistencia de la cuerda conserva aproximadamente un nudo ocho doble?',
        options: [
            { letter: 'a', text: '50-60%' },
            { letter: 'b', text: '75-80%' },
            { letter: 'c', text: '90-95%' },
            { letter: 'd', text: '40-50%' }
        ],
        correctAnswer: 'b',
    },
    {
        question: '¿Para qué se utiliza principalmente el nudo prusik?',
        options: [
            { letter: 'a', text: 'Unir dos cuerdas' },
            { letter: 'b', text: 'Como nudo de tope' },
            { letter: 'c', text: 'Como sistema autobloqueante/ascenso' },
            { letter: 'd', text: 'Para hacer una gaza fija' }
        ],
        correctAnswer: 'c',
    },
    {
        question: '¿Qué significa la "S" en el acrónimo SERENE-A para evaluación de anclajes?',
        options: [
            { letter: 'a', text: 'Simple' },
            { letter: 'b', text: 'Seguro' },
            { letter: 'c', text: 'Solid (Sólido)' },
            { letter: 'd', text: 'Sistemático' }
        ],
        correctAnswer: 'c',
    },
    {
        question: '¿Cuál es la ventaja mecánica de un polipasto simple 3:1?',
        options: [
            { letter: 'a', text: 'Se necesita 1/2 de la fuerza para levantar la carga' },
            { letter: 'b', text: 'Se necesita 1/3 de la fuerza para levantar la carga' },
            { letter: 'c', text: 'Se triplica la velocidad de izado' },
            { letter: 'd', text: 'Se reduce la fricción a la mitad' }
        ],
        correctAnswer: 'b',
    },
    {
        question: '¿Por qué no se debe usar cinta sobre cinta (girth hitch de cinta en cinta)?',
        options: [
            { letter: 'a', text: 'Porque es difícil de deshacer' },
            { letter: 'b', text: 'Porque reduce mucho la resistencia' },
            { letter: 'c', text: 'Porque la fricción puede fundir el nylon' },
            { letter: 'd', text: 'Todas las anteriores son correctas' }
        ],
        correctAnswer: 'd',
    },
    {
        question: '¿Cuál es el diámetro recomendado del cordino prusik en relación a la cuerda principal?',
        options: [
            { letter: 'a', text: 'El mismo diámetro' },
            { letter: 'b', text: '60-70% del diámetro de la cuerda principal' },
            { letter: 'c', text: 'El doble del diámetro' },
            { letter: 'd', text: 'No importa el diámetro' }
        ],
        correctAnswer: 'b',
    },
    {
        question: '¿Cuánto tiempo de cola mínimo se debe dejar en un nudo ocho doble?',
        options: [
            { letter: 'a', text: '5 cm' },
            { letter: 'b', text: '10 cm' },
            { letter: 'c', text: '15 cm' },
            { letter: 'd', text: '20 cm' }
        ],
        correctAnswer: 'c',
    },
    {
        question: '¿Qué tipo de mosquetón es el más adecuado para usar con un nudo dinámico (Munter)?',
        options: [
            { letter: 'a', text: 'Mosquetón tipo D' },
            { letter: 'b', text: 'Mosquetón ovalado' },
            { letter: 'c', text: 'Mosquetón HMS (forma de pera)' },
            { letter: 'd', text: 'Mosquetón asimétrico' }
        ],
        correctAnswer: 'c',
    },
    {
        question: '¿Cuál es el factor de caída máximo posible?',
        options: [
            { letter: 'a', text: '0.5' },
            { letter: 'b', text: '1' },
            { letter: 'c', text: '2' },
            { letter: 'd', text: '3' }
        ],
        correctAnswer: 'c',
    },
    {
        question: '¿Por qué el As de Guía (Bowline) requiere siempre un nudo de seguridad?',
        options: [
            { letter: 'a', text: 'Porque es difícil de verificar' },
            { letter: 'b', text: 'Porque puede aflojarse sin carga constante' },
            { letter: 'c', text: 'Porque tiene baja resistencia' },
            { letter: 'd', text: 'Porque es un nudo para principiantes' }
        ],
        correctAnswer: 'b',
    },
    {
        question: '¿Qué característica debe tener un sistema de anclaje según el principio SERENE-A?',
        options: [
            { letter: 'a', text: 'Debe ser redundante' },
            { letter: 'b', text: 'Debe estar ecualizado' },
            { letter: 'c', text: 'No debe extenderse si falla un punto' },
            { letter: 'd', text: 'Todas las anteriores' }
        ],
        correctAnswer: 'd',
    },
    {
        question: '¿Cuál es el uso principal de una cuerda dinámica?',
        options: [
            { letter: 'a', text: 'Trabajo en altura industrial' },
            { letter: 'b', text: 'Sistemas de poleas' },
            { letter: 'c', text: 'Escalada con riesgo de caída' },
            { letter: 'd', text: 'Tirolinas' }
        ],
        correctAnswer: 'c',
    },
    {
        question: '¿Qué señal de voz se usa para indicar que se está iniciando un descenso?',
        options: [
            { letter: 'a', text: '¡EN CUERDA!' },
            { letter: 'b', text: '¡BAJANDO!' },
            { letter: 'c', text: '¡LIBRE!' },
            { letter: 'd', text: '¡FIRME!' }
        ],
        correctAnswer: 'b',
    },
    {
        question: '¿Cuándo se debe retirar una cuerda de rescate del servicio?',
        options: [
            { letter: 'a', text: 'Cuando el alma está visible' },
            { letter: 'b', text: 'Después de exposición a químicos' },
            { letter: 'c', text: 'Después de una caída con factor alto' },
            { letter: 'd', text: 'Todas las anteriores' }
        ],
        correctAnswer: 'd',
    },
    {
        question: '¿Qué es un nudo de fricción?',
        options: [
            { letter: 'a', text: 'Un nudo que une dos cuerdas' },
            { letter: 'b', text: 'Un nudo que crea una gaza fija' },
            { letter: 'c', text: 'Un nudo que se bloquea bajo carga y desliza sin ella' },
            { letter: 'd', text: 'Un nudo de tope' }
        ],
        correctAnswer: 'c',
    },
    {
        question: '¿Qué nudo se usa para crear una gaza en medio de la cuerda que puede cargarse en múltiples direcciones?',
        options: [
            { letter: 'a', text: 'Ocho doble' },
            { letter: 'b', text: 'Mariposa alpina' },
            { letter: 'c', text: 'As de guía' },
            { letter: 'd', text: 'Ballestrinque' }
        ],
        correctAnswer: 'b',
    }
];

// Preguntas desafiantes
export const ropeRescueChallengeQuestions: Question[] = [
    {
        question: 'En un sistema de polipasto 5:1 con poleas con 90% de eficiencia, ¿cuál es la ventaja mecánica real aproximada?',
        options: [
            { letter: 'a', text: '5:1' },
            { letter: 'b', text: '4.5:1' },
            { letter: 'c', text: '3.6:1' },
            { letter: 'd', text: '4.1:1' }
        ],
        correctAnswer: 'd',
    },
    {
        question: 'Si un anclaje ecualizado tiene brazos a 120°, ¿qué porcentaje de la carga total recibe CADA punto de anclaje?',
        options: [
            { letter: 'a', text: '50%' },
            { letter: 'b', text: '75%' },
            { letter: 'c', text: '100%' },
            { letter: 'd', text: '60%' }
        ],
        correctAnswer: 'c',
    },
    {
        question: 'Una cuerda tiene resistencia de 28 kN. Con un ocho doble (eficiencia 75%) y factor de seguridad 10:1, ¿cuál es la carga de trabajo segura?',
        options: [
            { letter: 'a', text: '2.8 kN' },
            { letter: 'b', text: '2.1 kN' },
            { letter: 'c', text: '21 kN' },
            { letter: 'd', text: '1.5 kN' }
        ],
        correctAnswer: 'b',
    },
    {
        question: '¿Cuál es la secuencia correcta del protocolo SERENE-A?',
        options: [
            { letter: 'a', text: 'Sólido, Ecualizado, Redundante, Eficiente, No Extensión, Ángulos' },
            { letter: 'b', text: 'Seguro, Evaluado, Resistente, Estable, Natural, Ajustable' },
            { letter: 'c', text: 'Simple, Equipo, Revisado, Efectivo, Nuevo, Adecuado' },
            { letter: 'd', text: 'Sistemático, Estándar, Regular, Específico, Normal, Apropiado' }
        ],
        correctAnswer: 'a',
    },
    {
        question: 'Un rescatista de 80kg con equipo realiza un rapel de 50 metros. Si la cuerda tiene elongación del 3%, ¿cuánto se estirará aproximadamente?',
        options: [
            { letter: 'a', text: '0.5 metros' },
            { letter: 'b', text: '1.5 metros' },
            { letter: 'c', text: '2.4 metros (80kg no es suficiente para elongación total)' },
            { letter: 'd', text: '3 metros' }
        ],
        correctAnswer: 'b',
    }
];

