export interface ReferenciaLSM {
    nombre: string;
    url: string;
    tipo: 'video' | 'artículo' | 'diccionario' | 'curso' | 'otro';
}

export interface TemaLSM {
    id: number;
    titulo: string;
    descripcion: string;
    referencias: ReferenciaLSM[];
}

export interface AlphabetLetter {
    letter: string;
    description: string;
    image?: string;
}

export interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
}

export const lsmAlphabet: AlphabetLetter[] = [
    { letter: 'A', description: 'Puño cerrado con el pulgar a un lado.', image: './alphabet/A.svg' },
    { letter: 'B', description: 'Mano abierta con los cuatro dedos juntos y extendidos hacia arriba; el pulgar se dobla hacia la palma.', image: './alphabet/B.svg' },
    { letter: 'C', description: 'Los dedos se curvan formando la letra "C".', image: './alphabet/C.svg' },
    { letter: 'D', description: 'El dedo índice apunta hacia arriba, mientras que los demás dedos se curvan para tocar la punta del pulgar.', image: './alphabet/D.svg' },
    { letter: 'E', description: 'Los dedos se doblan hacia la palma (como una garra cerrada), mostrando las uñas al frente.', image: './alphabet/E.svg' },
    { letter: 'F', description: 'Se tocan las puntas del índice y el pulgar, y los otros tres dedos quedan extendidos y juntos hacia arriba.', image: './alphabet/F.svg' },
    { letter: 'G', description: 'El dedo índice y el pulgar se extienden horizontalmente, con la palma mirando hacia ti.', image: './alphabet/G.svg' },
    { letter: 'H', description: 'Igual que la G, pero extendiendo también el dedo medio junto al índice.', image: './alphabet/H.svg' },
    { letter: 'I', description: 'Puño cerrado con el dedo meñique extendido hacia arriba.', image: './alphabet/I.svg' },
    { letter: 'J', description: 'Con la posición de la I, dibujas una "J" en el aire.', image: './alphabet/J.svg' },
    { letter: 'K', description: 'Dedos índice y medio en "V", el pulgar se apoya entre ellos y se hace un ligero movimiento hacia arriba.', image: './alphabet/K.svg' },
    { letter: 'L', description: 'Dedo índice hacia arriba y pulgar hacia un lado, formando una "L".', image: './alphabet/L.svg' },
    { letter: 'M', description: 'Los dedos índice, medio y anular se doblan hacia abajo sobre el pulgar.', image: './alphabet/M.svg' },
    { letter: 'N', description: 'Solo los dedos índice y medio se doblan hacia abajo sobre el pulgar.', image: './alphabet/N.svg' },
    { letter: 'Ñ', description: 'Igual que la N, pero se mueve la muñeca de un lado a otro (balanceo).', image: './alphabet/Ñ.svg' },
    { letter: 'O', description: 'Todos los dedos se curvan hasta tocarse las puntas, formando un círculo.', image: './alphabet/O.svg' },
    { letter: 'P', description: 'Posición similar a la K, pero la mano se mantiene estática.', image: './alphabet/P.svg' },
    { letter: 'Q', description: 'El dedo índice y el pulgar forman una "garra" apuntando hacia abajo, moviendo la muñeca.', image: './alphabet/Q.svg' },
    { letter: 'R', description: 'Los dedos índice y medio se cruzan.', image: './alphabet/R.svg' },
    { letter: 'S', description: 'Puño cerrado con el pulgar cruzado por enfrente de los demás dedos.', image: './alphabet/S.svg' },
    { letter: 'T', description: 'Puño cerrado con el pulgar metido entre el dedo índice y el medio.', image: './alphabet/T.svg' },
    { letter: 'U', description: 'Dedos índice y medio extendidos y juntos hacia arriba.', image: './alphabet/U.svg' },
    { letter: 'V', description: 'Dedos índice y medio extendidos y separados (formando una "V").', image: './alphabet/V.svg' },
    { letter: 'W', description: 'Dedos índice, medio y anular extendidos y separados.', image: './alphabet/W.svg' },
    { letter: 'X', description: 'Con la mano en forma de "garra", se jala la mano hacia el cuerpo.', image: './alphabet/X.svg' },
    { letter: 'Y', description: 'Dedos pulgar y meñique extendidos, los demás doblados hacia la palma.', image: './alphabet/Y.svg' },
    { letter: 'Z', description: 'Con el dedo índice extendido, dibujas una "Z" en el aire.', image: './alphabet/Z.svg' },
];

export const lsmQuiz: QuizQuestion[] = [
    {
        id: 1,
        question: '¿Qué es la Lengua de Señas Mexicana (LSM)?',
        options: [
            'Un sistema de mímica universal',
            'Una lengua natural con gramática y sintaxis propia',
            'Una traducción literal del español con las manos',
            'Un conjunto de gestos para personas que no pueden hablar'
        ],
        correctAnswer: 'Una lengua natural con gramática y sintaxis propia',
        explanation: 'La LSM es una lengua completa, reconocida oficialmente en México, con su propia estructura gramatical distinta al español.'
    },
    {
        id: 2,
        question: '¿Cuál es la forma correcta de deletrear una palabra en LSM?',
        options: [
            'Usando ambas manos para cada letra',
            'Moviendo la mano exageradamente por cada letra',
            'Manteniendo la mano dominante en una posición estable y clara',
            'Gritando la letra mientras se hace la seña'
        ],
        correctAnswer: 'Manteniendo la mano dominante en una posición estable y clara',
        explanation: 'La dactilología debe ser clara, fluida y realizada preferentemente con la mano dominante frente al hombro.'
    },
    {
        id: 3,
        question: '¿La LSM es igual en todo el mundo?',
        options: [
            'Sí, es un lenguaje universal',
            'No, cada país tiene su propia lengua de señas',
            'Solo cambia el alfabeto, las señas son las mismas',
            'Es igual en todos los países de habla hispana'
        ],
        correctAnswer: 'No, cada país tiene su propia lengua de señas',
        explanation: 'Al igual que las lenguas orales, las lenguas de señas varían por país y cultura. Existe la ASL (EE.UU.), LSE (España), etc.'
    },
    {
        id: 4,
        question: '¿Qué letra se dibuja en el aire?',
        options: [
            'La letra L',
            'La letra Z',
            'La letra O',
            'La letra A'
        ],
        correctAnswer: 'La letra Z',
        explanation: 'Para la letra Z, se utiliza el dedo índice para trazar la forma de la letra en el espacio frente al cuerpo.'
    }
];


export const temasLSM: TemaLSM[] = [
    {
        id: 1,
        titulo: 'Alfabeto Dactilológico (Abecedario)',
        descripcion: 'Aprende las señas correspondientes a cada letra del alfabeto español, fundamental para deletrear nombres o palabras sin seña específica.',
        referencias: [
            {
                nombre: 'Video: Alfabeto LSM',
                url: 'https://www.youtube.com/watch?time_continue=1&v=AltOZMRX4NA&embeds_referring_euri=https%3A%2F%2Fapp.edutin.com%2F&embeds_referring_origin=https%3A%2F%2Fapp.edutin.com&source_ve_path=Mjg2NjY',
                tipo: 'video'
            },
            {
                nombre: 'Imagen: Alfabeto Dactilológico Mexicano',
                url: 'https://drive.google.com/file/d/1aPGtlQTadU4Q6fcheHjJ00FlEzfnnMXH/view?usp=sharing',
                tipo: 'otro'
            },
        ],
    },
    {
        id: 2,
        titulo: 'Saludos y Frases Básicas',
        descripcion: 'Comienza a comunicarte con saludos comunes como "Hola", "Adiós", "Buenos días", y frases útiles como "¿Cómo estás?", "Gracias", "Por favor".',
        referencias: [
            {nombre: 'Video: Saludos en LSM', url: 'https://www.youtube.com/watch?v=EUu12-BVcyE&t=130s', tipo: 'video'},
        ],
    },
    {
        id: 3,
        titulo: 'Números',
        descripcion: 'Aprende a señar los números cardinales (1, 2, 3...) y ordinales (primero, segundo...).',
        referencias: [
            {
                nombre: 'Video: Números en LSM (1-100)',
                url: 'https://www.youtube.com/watch?v=hf-Z5Ag0hU0&t=1s',
                tipo: 'video'
            },
        ],
    },
    {
        id: 4,
        titulo: 'Familia',
        descripcion: 'Conoce las señas para los miembros de la familia: mamá, papá, hermano/a, hijo/a, abuelo/a, etc.',
        referencias: [
            {
                nombre: 'Video: Señas de Familia en LSM',
                url: 'https://www.youtube.com/watch?v=5HYjNYazVqk&t=124s',
                tipo: 'video'
            },
        ],
    },
    {
        id: 5,
        titulo: 'Los Sentimientos',
        descripcion: 'Aprende a expresar emociones y sentimientos como felicidad, tristeza, enojo, sorpresa, etc.',
        referencias: [
            {
                nombre: 'Video: Los sentimientos 1ra Parte',
                url: 'https://www.youtube.com/watch?v=fy0MZXpu9os&t=1s&ab_channel=AprendiendoLenguadeSe%C3%B1asMexicana',
                tipo: 'video'
            },
            {
                nombre: 'Video: Los sentimientos 2da Parte',
                url: 'https://www.youtube.com/watch?v=N-grMMrkEUM&t=1s&ab_channel=AprendiendoLenguadeSe%C3%B1asMexicana',
                tipo: 'video'
            },
        ],
    },
    {
        id: 6,
        titulo: 'Los Verbos: Básicos',
        descripcion: 'Aprende a usar verbos comunes en LSM como "comer", "beber", "dormir", "hablar", etc.',
        referencias: [
            {
                nombre: 'Video: Los Verbos 1ra Parte',
                url: 'https://www.youtube.com/watch?v=vYqeKOo8Oso&t=1s&ab_channel=AprendiendoLenguadeSe%C3%B1asMexicana',
                tipo: 'video'
            },
            {
                nombre: 'Video: Los Verbos 2da Parte',
                url: 'https://www.youtube.com/watch?v=FbCdESieECc&ab_channel=AprendiendoLenguadeSe%C3%B1asMexicana',
                tipo: 'video'
            },
            {
                nombre: 'Video: Los Verbos 3ra Parte',
                url: 'https://www.youtube.com/watch?v=-pN9brIQy7g&ab_channel=AprendiendoLenguadeSe%C3%B1asMexicana',
                tipo: 'video'
            },
        ],
    },
    {
        id: 7,
        titulo: 'Los Verbos: Avanzados',
        descripcion: 'Continúa aprendiendo más verbos y expresiones verbales importantes en LSM.',
        referencias: [
            {
                nombre: 'Video: Los Verbos 4ta Parte',
                url: 'https://www.youtube.com/watch?v=-pN9brIQy7g&t=1s&ab_channel=AprendiendoLenguadeSe%C3%B1asMexicana',
                tipo: 'video'
            },
            {
                nombre: 'Video: Los Verbos 5ta Parte',
                url: 'https://www.youtube.com/watch?v=PWpL9Ji9qXY&t=1s&ab_channel=AprendiendoLenguadeSe%C3%B1asMexicana',
                tipo: 'video'
            },
            {
                nombre: 'Video: Los Verbos 6ta Parte',
                url: 'https://www.youtube.com/watch?v=PWpL9Ji9qXY&ab_channel=AprendiendoLenguadeSe%C3%B1asMexicana',
                tipo: 'video'
            },
        ],
    },
    {
        id: 8,
        titulo: 'Vocabulario: Tiempos',
        descripcion: 'Aprende a expresar conceptos temporales como días de la semana, meses, estaciones y expresiones de tiempo.',
        referencias: [
            {
                nombre: 'Video: Conceptos de tiempos',
                url: 'https://www.youtube.com/watch?v=N_4fbbSLWUY&t=1s&ab_channel=MANOSENVOZCONTRAELAUDISMO',
                tipo: 'video'
            },
            {
                nombre: 'Video: Días de la semana',
                url: 'https://www.youtube.com/watch?v=P3JzTqgS-nU&t=1s&ab_channel=MANOSENVOZCONTRAELAUDISMO',
                tipo: 'video'
            },
            {
                nombre: 'Video: Meses del año',
                url: 'https://www.youtube.com/watch?v=qMqoxTGeR2Q&t=1s&ab_channel=MANOSENVOZCONTRAELAUDISMO',
                tipo: 'video'
            },
            {
                nombre: 'Video: Estaciones del año',
                url: 'https://www.youtube.com/watch?v=R7ZqEe3NOcE&t=1s&ab_channel=MANOSENVOZCONTRAELAUDISMO',
                tipo: 'video'
            },
        ],
    },
    {
        id: 9,
        titulo: 'Cultura Sorda y LSM',
        descripcion: 'Entiende que la LSM no es solo un lenguaje, sino parte de una identidad y cultura rica. Aprende sobre la comunidad Sorda en México.',
        referencias: [
            {
                nombre: 'CONADIS México (Información sobre discapacidad)',
                url: 'https://www.gob.mx/conadis',
                tipo: 'otro'
            },
            {nombre: 'Historia de la LSM', url: 'https://cultura-sorda.org/category/lsm/', tipo: 'artículo'},
            {nombre: 'Comunidad Sorda en México', url: 'https://www.federacionsordosmexico.org/', tipo: 'otro'},
        ],
    },
    {
        id: 10,
        titulo: 'Vocabulario: Colores y Ropa',
        descripcion: 'Aprende las señas para identificar colores y prendas de vestir comunes.',
        referencias: [
            {
                nombre: 'Video: Los colores en LSM',
                url: 'https://www.youtube.com/watch?v=IVkwMzTxgog&t=1s',
                tipo: 'video'
            },
            {nombre: 'Video: La ropa en LSM', url: 'https://www.youtube.com/watch?v=2C-kIVNNYIw', tipo: 'video'},
        ],
    },
    {
        id: 11,
        titulo: 'Vocabulario: Alimentos',
        descripcion: 'Aprende las señas para nombrar alimentos, bebidas y términos relacionados con la comida.',
        referencias: [
            {nombre: 'Video: Alimentos en LSM', url: 'https://www.youtube.com/watch?v=T6irZIqXmHQ', tipo: 'video'},
            {nombre: 'Video: Frutas en LSM', url: 'https://www.youtube.com/watch?v=PJIoGI0liyY&t=1s', tipo: 'video'},
        ],
    },
    {
        id: 12,
        titulo: 'Conversaciones Prácticas',
        descripcion: 'Aprende a mantener conversaciones básicas en diferentes contextos como restaurantes, tiendas, hospital, etc.',
        referencias: [
            {
                nombre: 'Video: Conversación básica en LSM',
                url: 'https://www.youtube.com/watch?v=d5U3NVtvZXk',
                tipo: 'video'
            },
            {nombre: 'Práctica: Diálogos comunes', url: 'https://www.youtube.com/watch?v=iQ-0jQPNh0c', tipo: 'video'},
        ],
    },
];

