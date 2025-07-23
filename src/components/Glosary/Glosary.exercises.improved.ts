export type ClaveExerciseType = 'open' | 'test' | 'fill' | 'simulacion' | 'matching' | 'build-report';

export interface ClaveExercise {
    tipo: ClaveExerciseType;
    pregunta: string;
    opciones?: string[];
    respuesta: string | string[];
    retroalimentacion: string;
    categoria?: 'basicas' | 'emergencia' | 'recursos' | 'paciente' | 'ubicacion';
}

export const CLAVES_EXERCISES_IMPROVED: ClaveExercise[] = [
    // Ejercicios básicos de identificación
    {
        tipo: 'test',
        pregunta: '¿Cuál es la clave para solicitar una ambulancia?',
        opciones: ['1', '2', '3', '4'],
        respuesta: '2',
        retroalimentacion: 'Clave 2 = AMBULANCIA. Esta es una de las claves más importantes para recordar.',
        categoria: 'recursos'
    },
    {
        tipo: 'test',
        pregunta: '¿Qué clave usarías para reportar un paciente con fractura?',
        opciones: ['29F', '29G', '29H', '29L'],
        respuesta: '29F',
        retroalimentacion: 'Clave 29F = FRACTURADO. Las claves 29 son para diferentes tipos de lesiones.',
        categoria: 'paciente'
    },
    {
        tipo: 'test',
        pregunta: '¿Cuál es la clave para solicitar bomberos?',
        opciones: ['2', '3', '4S', '5'],
        respuesta: '3',
        retroalimentacion: 'Clave 3 = BOMBEROS. Esencial para emergencias con fuego o rescate.',
        categoria: 'recursos'
    },
    {
        tipo: 'test',
        pregunta: '¿Qué significa la clave 29CPC?',
        opciones: ['Cortado', 'Caído', 'Paro Cardíaco', 'Quemado'],
        respuesta: 'Paro Cardíaco',
        retroalimentacion: 'Clave 29CPC = PARO CARDIACO. Una de las emergencias más críticas.',
        categoria: 'emergencia'
    },

    // Ejercicios de opción múltiple más avanzados
    {
        tipo: 'test',
        pregunta: '¿Cuál es la clave para reportar que la escena es peligrosa?',
        opciones: ['21', '22', '25', '28'],
        respuesta: '22',
        retroalimentacion: 'Clave 22 = PELIGROSO. Siempre prioriza la seguridad de la escena.',
        categoria: 'ubicacion'
    },
    {
        tipo: 'test',
        pregunta: '¿Qué clave corresponde a "TRASLADO"?',
        opciones: ['38', '39', '40', '41'],
        respuesta: '40',
        retroalimentacion: 'Clave 40 = TRASLADO. Se especifica con 40L (local), 40F (foráneo), 40E (especial).',
        categoria: 'basicas'
    },

    // Ejercicios de completar reportes
    {
        tipo: 'fill',
        pregunta: 'Completa: "Base, unidad Bravo-1, tenemos paciente masculino con clave ___ y ___, solicitamos clave ___ urgente." (balaceado, hemorragia, ambulancia)',
        respuesta: ['29B', '29H', '2'],
        retroalimentacion: 'Respuesta: 29B (BALACEADO), 29H (HEMORRAGIA), 2 (AMBULANCIA).',
        categoria: 'emergencia'
    },
    {
        tipo: 'fill',
        pregunta: 'Completa: "Central, aquí Alpha-2, accidente clave ___, vehículo ___, dos pacientes clave ___, solicitamos clave ___." (contra objeto fijo, volcado, graves, bomberos)',
        respuesta: ['52F', '52V', '29G', '3'],
        retroalimentacion: 'Respuesta: 52F (CONTRA OBJETO FIJO), 52V (VOLCADURA), 29G (GRAVE), 3 (BOMBEROS).',
        categoria: 'emergencia'
    },
    {
        tipo: 'fill',
        pregunta: 'Completa: "Base, clave ___ en domicilio, paciente femenino con clave ___ y ___, iniciamos clave ___." (servicio, ebria, caída, traslado)',
        respuesta: ['21', '17', '29C', '40'],
        retroalimentacion: 'Respuesta: 21 (SERVICIO), 17 (EBRIO), 29C (CAIDO), 40 (TRASLADO).',
        categoria: 'basicas'
    },

    // Ejercicios de construcción de reportes completos
    {
        tipo: 'build-report',
        pregunta: 'Construye un reporte para: Accidente de motocicleta, conductor con fractura de pierna y sangrado, necesitas ambulancia y seguridad pública.',
        respuesta: 'Base, aquí unidad [ID], accidente clave 52 con clave 13, paciente masculino con clave 29F y clave 29H, solicitamos clave 2 y clave 4S.',
        retroalimentacion: 'Elementos clave: 52 (accidente), 13 (motocicleta), 29F (fracturado), 29H (hemorragia), 2 (ambulancia), 4S (seguridad pública).',
        categoria: 'emergencia'
    },
    {
        tipo: 'build-report',
        pregunta: 'Construye un reporte para: Incendio en domicilio, una persona quemada grave, necesitas bomberos y ambulancia.',
        respuesta: 'Base, aquí unidad [ID], clave 71 en clave 20, paciente con clave 29Q y clave 29G, solicitamos clave 3 y clave 2 urgente.',
        retroalimentacion: 'Elementos clave: 71 (incendio), 20 (domicilio), 29Q (quemado), 29G (grave), 3 (bomberos), 2 (ambulancia).',
        categoria: 'emergencia'
    },

    // Ejercicios de simulación práctica
    {
        tipo: 'simulacion',
        pregunta: 'Simula un reporte inicial para un accidente donde un peatón fue atropellado, está inconsciente y con hemorragia.',
        respuesta: 'Base, aquí unidad [ID], accidente clave 52A, paciente con clave 29G, clave 29H, posible alteración neurológica, solicitamos clave 2 inmediato.',
        retroalimentacion: 'Ejemplo: "Base, aquí unidad Alfa-1, accidente clave 52A, paciente con clave 29G, clave 29H, posible alteración neurológica, solicitamos clave 2 inmediato."',
        categoria: 'emergencia'
    },
    {
        tipo: 'simulacion',
        pregunta: 'Simula un reporte de llegada al hospital con un paciente estable tras una caída.',
        respuesta: 'Hospital, unidad [ID] llegando con paciente masculino, clave 29C y clave 29L, signos vitales estables, clave 43.',
        retroalimentacion: 'Ejemplo: "Hospital Central, unidad Bravo-2 llegando con paciente masculino, clave 29C y clave 29L, signos vitales estables, clave 43."',
        categoria: 'basicas'
    },

    // Ejercicios de respuesta abierta
    {
        tipo: 'open',
        pregunta: '¿Qué claves usarías para reportar un paciente ebrio que se cayó y tiene una cortada en la cabeza?',
        respuesta: ['17', '29C', '29A'],
        retroalimentacion: 'Respuesta esperada: 17 (EBRIO), 29C (CAIDO), 29A (APUÑALADO/CORTADO).',
        categoria: 'paciente'
    },
    {
        tipo: 'open',
        pregunta: 'Menciona 3 claves relacionadas con recursos de emergencia que puedes solicitar.',
        respuesta: ['2', '3', '4S'],
        retroalimentacion: 'Ejemplos: 2 (AMBULANCIA), 3 (BOMBEROS), 4S (SEGURIDAD PÚBLICA), 12 (MÉDICO).',
        categoria: 'recursos'
    },

    // Ejercicios de matching (emparejar)
    {
        tipo: 'matching',
        pregunta: 'Empareja las claves con su significado: 29G, 29L, 29CPC',
        respuesta: ['GRAVE', 'LEVE', 'PARO CARDIACO'],
        retroalimentacion: '29G = GRAVE, 29L = LEVE, 29CPC = PARO CARDIACO. Estas claves indican la severidad del paciente.',
        categoria: 'paciente'
    },

    // Ejercicios de situaciones complejas
    {
        tipo: 'build-report',
        pregunta: 'Construye un reporte para: Riña en la calle, 2 personas lesionadas (una apuñalada grave, otra con golpes leves), necesitas ambulancia, policía y que la escena es peligrosa.',
        respuesta: 'Base, unidad [ID], clave 32, escena clave 22, dos pacientes: uno clave 29A y clave 29G, otro clave 29GOL y clave 29L, solicitamos clave 2 y clave 4S.',
        retroalimentacion: 'Elementos: 32 (riña), 22 (peligroso), 29A (apuñalado), 29G (grave), 29GOL (golpeado), 29L (leve), 2 (ambulancia), 4S (seguridad).',
        categoria: 'emergencia'
    },

    // Ejercicios sobre códigos de urgencia
    {
        tipo: 'test',
        pregunta: '¿Qué significa "clave 60-3" en un reporte?',
        opciones: ['Código Verde', 'Código Amarillo', 'Código Rojo', 'Sin urgencia'],
        respuesta: 'Código Rojo',
        retroalimentacion: 'Clave 60-3 = URGENCIA CODIGO 3 / ROJO. La máxima prioridad de urgencia.',
        categoria: 'emergencia'
    },

    // Más ejercicios variados
    {
        tipo: 'test',
        pregunta: '¿Qué clave se usa para reportar "MISION CUMPLIDA"?',
        opciones: ['42', '43', '44', '45'],
        respuesta: '43',
        retroalimentacion: 'Clave 43 = MISION CUMPLIDA. Se usa al finalizar exitosamente un servicio.',
        categoria: 'basicas'
    },
    {
        tipo: 'open',
        pregunta: '¿Cuál es la diferencia entre las claves 40L, 40F y 40E?',
        respuesta: ['40L = TRASLADO LOCAL', '40F = TRASLADO FORANEO', '40E = TRASLADO ESPECIAL'],
        retroalimentacion: '40L = Local (hospital cercano), 40F = Foráneo (hospital fuera de la zona), 40E = Especial (traslado con condiciones especiales).',
        categoria: 'basicas'
    }
];

// Categorías para organizar mejor el estudio
export const CLAVES_CATEGORIES = {
    'recursos': {
        name: 'Recursos y Apoyo',
        claves: ['2', '3', '4S', '4A', '4C', '4G', '4P', '12', '15'],
        description: 'Claves para solicitar diferentes tipos de apoyo y recursos',
        color: 'bg-blue-100 border-blue-300 text-blue-800'
    },
    'paciente': {
        name: 'Estado del Paciente',
        claves: ['29', '29A', '29B', '29C', '29E', '29F', '29G', '29H', '29L', '29GOL', '29Q', '29V', '29Z', '29CPC', '17', '16', '25', '51'],
        description: 'Claves para describir lesiones y condiciones del paciente',
        color: 'bg-red-100 border-red-300 text-red-800'
    },
    'emergencia': {
        name: 'Tipos de Emergencia',
        claves: ['52', '52A', '52F', '52O', '52S', '52V', '71', '32', '61'],
        description: 'Claves para diferentes tipos de emergencias y accidentes',
        color: 'bg-orange-100 border-orange-300 text-orange-800'
    },
    'comunicacion': {
        name: 'Comunicación Básica',
        claves: ['21', '38', '9', '37', '42', '43', '47', '46', '40', '40E', '40F', '40L'],
        description: 'Claves básicas para comunicación y confirmación',
        color: 'bg-green-100 border-green-300 text-green-800'
    },
    'ubicacion': {
        name: 'Ubicación y Escena',
        claves: ['20', '22', '28', '41', '55', '63'],
        description: 'Claves relacionadas con ubicación y condiciones de la escena',
        color: 'bg-purple-100 border-purple-300 text-purple-800'
    }
};
