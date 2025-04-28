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
            { nombre: 'Video: Alfabeto LSM', url: 'https://drive.google.com/file/d/1ZXsCrtOaxdNDocnxLmmQZVgsScVOKIOP/view?usp=sharing, https://drive.google.com/file/d/1aPGtlQTadU4Q6fcheHjJ00FlEzfnnMXH/view?usp=sharing', tipo: 'video' }, // Reemplazar '#' con URL real
            { nombre: 'Imagen: Alfabeto Dactilológico Mexicano', url: 'https://drive.google.com/file/d/1aPGtlQTadU4Q6fcheHjJ00FlEzfnnMXH/view?usp=sharing', tipo: 'otro' }, // Reemplazar '#' con URL real
        ],
    },
    {
        id: 2,
        titulo: 'Saludos y Frases Básicas',
        descripcion: 'Comienza a comunicarte con saludos comunes como "Hola", "Adiós", "Buenos días", y frases útiles como "¿Cómo estás?", "Gracias", "Por favor".',
        referencias: [
            { nombre: 'Video: Saludos en LSM', url: '#', tipo: 'video' }, // Reemplazar '#' con URL real
            { nombre: 'Artículo: Primeras frases en LSM', url: '#', tipo: 'artículo' }, // Reemplazar '#' con URL real
        ],
    },
    {
        id: 3,
        titulo: 'Números',
        descripcion: 'Aprende a señar los números cardinales (1, 2, 3...) y ordinales (primero, segundo...).',
        referencias: [
            { nombre: 'Video: Números en LSM (1-100)', url: '#', tipo: 'video' }, // Reemplazar '#' con URL real
        ],
    },
    {
        id: 4,
        titulo: 'Familia',
        descripcion: 'Conoce las señas para los miembros de la familia: mamá, papá, hermano/a, hijo/a, abuelo/a, etc.',
        referencias: [
            { nombre: 'Video: Señas de Familia en LSM', url: '#', tipo: 'video' }, // Reemplazar '#' con URL real
            { nombre: 'Diccionario LSM en línea', url: '#', tipo: 'diccionario' }, // Reemplazar '#' con URL real
        ],
    },
    {
        id: 5,
        titulo: 'Cultura Sorda y LSM',
        descripcion: 'Entiende que la LSM no es solo un lenguaje, sino parte de una identidad y cultura rica. Aprende sobre la comunidad Sorda en México.',
        referencias: [
            { nombre: 'Artículo: Introducción a la Cultura Sorda', url: '#', tipo: 'artículo' }, // Reemplazar '#' con URL real
            { nombre: 'CONADIS México (Información sobre discapacidad)', url: 'https://www.gob.mx/conadis', tipo: 'otro' }, // Ejemplo de URL real
        ],
    },
    // --- Agrega más temas aquí ---
    // Ejemplos: Colores, Días de la semana, Comida, Preguntas (Qué, Quién, Dónde...), Verbos comunes, etc.
];