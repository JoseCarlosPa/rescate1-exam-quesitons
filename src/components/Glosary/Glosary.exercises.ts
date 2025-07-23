export type ClaveExerciseType = 'open' | 'test' | 'fill' | 'simulacion';

export interface ClaveExercise {
    tipo: ClaveExerciseType;
    pregunta: string;
    opciones?: string[];
    respuesta: string | string[];
    retroalimentacion: string;
}

export const CLAVES_EXERCISES: ClaveExercise[] = [
    {
        tipo: 'open',
        pregunta: '¿Qué clave usarías para reportar un paciente con fractura y hemorragia?',
        respuesta: ['29F', '29H'],
        retroalimentacion: 'Respuesta esperada: 29F (Fracturado) y 29H (Hemorragia).'
    },
    {
        tipo: 'simulacion',
        pregunta: 'Simula un reporte radial para un accidente de tráfico con dos lesionados graves y un vehículo volcado.',
        respuesta: 'Base, aquí unidad Alfa-2, en el lugar de accidente clave 52V, dos pacientes con clave 29G, solicitamos clave 2 y clave 3.',
        retroalimentacion: 'Ejemplo: "Base, aquí unidad Alfa-2, en el lugar de accidente clave 52V, dos pacientes con clave 29G, solicitamos clave 2 y clave 3."'
    },
    {
        tipo: 'open',
        pregunta: '¿Qué clave corresponde a solicitar apoyo de bomberos y policía?',
        respuesta: ['3', '4S'],
        retroalimentacion: 'Respuesta esperada: 3 (Bomberos) y 4S (Seguridad Pública).'
    },
    {
        tipo: 'simulacion',
        pregunta: '¿Cómo reportarías por radio que la escena es peligrosa y se requiere traslado inmediato?',
        respuesta: 'Base, escena clave 22, procedemos con clave 40, traslado inmediato.',
        retroalimentacion: 'Ejemplo: "Base, escena clave 22, procedemos con clave 40, traslado inmediato."'
    },
    {
        tipo: 'test',
        pregunta: '¿Cuál es la clave para reportar un paciente intoxicado?',
        opciones: ['51', '17', '25'],
        respuesta: '51',
        retroalimentacion: 'Respuesta correcta: 51 (Persona drogada/intoxicada).'
    },
    {
        tipo: 'fill',
        pregunta: 'Completa el reporte: "Base, aquí unidad Bravo-1, tenemos paciente con clave ___ y ___, solicitamos clave ___ en domicilio." (fractura, hemorragia y ambulancia)',
        respuesta: ['29F', '29H', '2'],
        retroalimentacion: 'Respuesta: 29F (Fracturado), 29H (Hemorragia), 2 (Ambulancia).'
    }
];

