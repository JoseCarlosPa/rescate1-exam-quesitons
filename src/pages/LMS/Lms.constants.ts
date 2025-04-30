export interface ReferenciaLSM {
    nombre: string;
    url: string;
    tipo: 'video' | 'artículo' | 'diccionario' | 'curso' | 'otro'; // Puedes ajustar los tipos según necesites
}

export interface TemaLSM {
    id: number;
    titulo: string;
    descripcion: string;
    referencias: ReferenciaLSM[];
}


export const temasLSM: TemaLSM[] = [
    {
        id: 1,
        titulo: 'Alfabeto Dactilológico (Abecedario)',
        descripcion: 'Aprende las señas correspondientes a cada letra del alfabeto español, fundamental para deletrear nombres o palabras sin seña específica.',
        referencias: [
            { nombre: 'Video: Alfabeto LSM', url: 'https://www.youtube.com/watch?time_continue=1&v=AltOZMRX4NA&embeds_referring_euri=https%3A%2F%2Fapp.edutin.com%2F&embeds_referring_origin=https%3A%2F%2Fapp.edutin.com&source_ve_path=Mjg2NjY', tipo: 'video' }, // Reemplazar '#' con URL real
            { nombre: 'Imagen: Alfabeto Dactilológico Mexicano', url: 'https://drive.google.com/file/d/1aPGtlQTadU4Q6fcheHjJ00FlEzfnnMXH/view?usp=sharing', tipo: 'otro' }, // Reemplazar '#' con URL real
        ],
    },
    {
        id: 2,
        titulo: 'Saludos y Frases Básicas',
        descripcion: 'Comienza a comunicarte con saludos comunes como "Hola", "Adiós", "Buenos días", y frases útiles como "¿Cómo estás?", "Gracias", "Por favor".',
        referencias: [
            { nombre: 'Video: Saludos en LSM', url: 'https://www.youtube.com/watch?v=EUu12-BVcyE&t=130s', tipo: 'video' }, // Reemplazar '#' con URL real
        ],
    },
    {
        id: 3,
        titulo: 'Números',
        descripcion: 'Aprende a señar los números cardinales (1, 2, 3...) y ordinales (primero, segundo...).',
        referencias: [
            { nombre: 'Video: Números en LSM (1-100)', url: 'https://www.youtube.com/watch?v=hf-Z5Ag0hU0&t=1s', tipo: 'video' }, // Reemplazar '#' con URL real
        ],
    },
    {
        id: 4,
        titulo: 'Familia',
        descripcion: 'Conoce las señas para los miembros de la familia: mamá, papá, hermano/a, hijo/a, abuelo/a, etc.',
        referencias: [
            { nombre: 'Video: Señas de Familia en LSM', url: 'https://www.youtube.com/watch?v=5HYjNYazVqk&t=124s', tipo: 'video' }, // Reemplazar '#' con URL real
        ],
    },
    {
        id: 5,
        titulo: 'Los Sentimientos',
        descripcion: 'Aprende a expresar emociones y sentimientos como felicidad, tristeza, enojo, sorpresa, etc.',
        referencias: [
            { nombre: 'Video: Los sentimientos 1ra Parte', url: 'https://www.youtube.com/watch?v=fy0MZXpu9os&t=1s&ab_channel=AprendiendoLenguadeSe%C3%B1asMexicana', tipo: 'video' }, // Ejemplo de URL real
            { nombre: 'Video: Los sentimientos 2da Parte', url: 'https://www.youtube.com/watch?v=N-grMMrkEUM&t=1s&ab_channel=AprendiendoLenguadeSe%C3%B1asMexicana', tipo: 'video' }, // Ejemplo de URL real

        ],
    },
    {
        id: 6,
        titulo: 'Los Verbos',
        descripcion: 'Aprende a usar verbos comunes en LSM como "comer", "beber", "dormir", "hablar", etc.',
        referencias: [
            { nombre: 'Video: Los Verbos 1ra Parte', url: 'https://www.youtube.com/watch?v=vYqeKOo8Oso&t=1s&ab_channel=AprendiendoLenguadeSe%C3%B1asMexicana', tipo: 'video' }, // Ejemplo de URL real
            { nombre: 'Video: Los Verbos 2da Parte', url: 'https://www.youtube.com/watch?v=FbCdESieECc&ab_channel=AprendiendoLenguadeSe%C3%B1asMexicana', tipo: 'video' }, // Ejemplo de URL real
            { nombre: 'Video: Los Verbos 3ra Parte', url: 'https://www.youtube.com/watch?v=-pN9brIQy7g&ab_channel=AprendiendoLenguadeSe%C3%B1asMexicana', tipo: 'video' }, // Ejemplo de URL real
        ],
    },
    {
        id: 6,
        titulo: 'Los Verbos',
        descripcion: 'Aprende a usar verbos comunes en LSM como "comer", "beber", "dormir", "hablar", etc.',
        referencias: [
           { nombre: 'Video: Los Verbos 4ta Parte', url: 'https://www.youtube.com/watch?v=-pN9brIQy7g&t=1s&ab_channel=AprendiendoLenguadeSe%C3%B1asMexicana', tipo: 'video' }, // Ejemplo de URL real
            { nombre: 'Video: Los Verbos 5ta Parte', url: 'https://www.youtube.com/watch?v=PWpL9Ji9qXY&t=1s&ab_channel=AprendiendoLenguadeSe%C3%B1asMexicana', tipo: 'video' }, // Ejemplo de URL real
            { nombre: 'Video: Los Verbos 6ta Parte', url: 'https://www.youtube.com/watch?v=PWpL9Ji9qXY&ab_channel=AprendiendoLenguadeSe%C3%B1asMexicana', tipo: 'video' }, // Ejemplo de URL real

        ],
    },
    {
        id: 7,
        titulo: 'Vocabulario: Tiempos',
        descripcion: 'Aprende a usar verbos comunes en LSM como "comer", "beber", "dormir", "hablar", etc.',
        referencias: [
            { nombre: 'Video: Conceptos de tiempos', url: 'https://www.youtube.com/watch?v=N_4fbbSLWUY&t=1s&ab_channel=MANOSENVOZCONTRAELAUDISMO', tipo: 'video' }, // Ejemplo de URL real
            { nombre: 'Video: Días de la semana', url: 'https://www.youtube.com/watch?v=P3JzTqgS-nU&t=1s&ab_channel=MANOSENVOZCONTRAELAUDISMO', tipo: 'video' }, // Ejemplo de URL real
            { nombre: 'Video: Meses del año', url: 'https://www.youtube.com/watch?v=qMqoxTGeR2Q&t=1s&ab_channel=MANOSENVOZCONTRAELAUDISMO', tipo: 'video' }, // Ejemplo de URL real
            { nombre: 'Video: Estaciones del año', url: 'https://www.youtube.com/watch?v=R7ZqEe3NOcE&t=1s&ab_channel=MANOSENVOZCONTRAELAUDISMO', tipo: 'video' }, // Ejemplo de URL real
        ],
    },
    {
        id: 8,
        titulo: 'Cultura Sorda y LSM',
        descripcion: 'Entiende que la LSM no es solo un lenguaje, sino parte de una identidad y cultura rica. Aprende sobre la comunidad Sorda en México.',
        referencias: [
            { nombre: 'CONADIS México (Información sobre discapacidad)', url: 'https://www.gob.mx/conadis', tipo: 'otro' }, // Ejemplo de URL real
        ],
    },

];