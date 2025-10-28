import { RapidResponseQuestion } from './RapidResponse.types';

export const PLAYER_COLORS = ['#ef4444', '#3b82f6']; // Rojo y Azul

export const DIFFICULTY_POINTS = {
    'Fácil': 10,
    'Media': 20,
    'Difícil': 30,
};

export const QUESTION_TYPE_MULTIPLIER = {
    'normal': 1,
    'rapida': 1.5, // 50% más puntos si respondes rápido
    'doble': 2, // Puntos dobles
    'robar': 1, // Si fallas, el otro jugador puede robar
};

export const TIME_LIMITS = {
    'Fácil': 15,
    'Media': 20,
    'Difícil': 25,
    'rapida': 10,
};

export const RAPID_RESPONSE_QUESTIONS: RapidResponseQuestion[] = [
    // === PREGUNTAS FÁCILES ===
    {
        id: 'rr-easy-1',
        category: 'Signos Vitales',
        difficulty: 'Fácil',
        question: '¿Cuál es el rango normal de presión arterial en un adulto sano?',
        answer: '120/80 mmHg',
        options: ['120/80 mmHg', '140/90 mmHg', '100/60 mmHg', '160/100 mmHg'],
        explanation: 'La presión arterial normal es aproximadamente 120/80 mmHg.',
        points: 10,
        type: 'normal',
        timeLimit: 15,
    },
    {
        id: 'rr-easy-2',
        category: 'Vía Aérea',
        difficulty: 'Fácil',
        question: '¿Cuál es la maniobra básica para abrir la vía aérea en un paciente sin trauma?',
        answer: 'Inclinación de cabeza y elevación del mentón',
        options: [
            'Inclinación de cabeza y elevación del mentón',
            'Tracción mandibular',
            'Golpe interescapular',
            'Compresión abdominal'
        ],
        explanation: 'La inclinación de cabeza y elevación del mentón es la técnica básica para abrir la vía aérea.',
        points: 10,
        type: 'normal',
        timeLimit: 15,
    },
    {
        id: 'rr-easy-3',
        category: 'RCP',
        difficulty: 'Fácil',
        question: '¿Cuál es la relación de compresiones y ventilaciones en RCP para adultos?',
        answer: '30:2',
        options: ['30:2', '15:2', '5:1', '100:2'],
        explanation: 'La relación correcta es 30 compresiones por cada 2 ventilaciones.',
        points: 10,
        type: 'rapida',
        timeLimit: 10,
    },
    {
        id: 'rr-easy-4',
        category: 'Anatomía',
        difficulty: 'Fácil',
        question: '¿Qué arteria se palpa en la muñeca para tomar el pulso?',
        answer: 'Arteria radial',
        options: ['Arteria radial', 'Arteria femoral', 'Arteria carótida', 'Arteria braquial'],
        explanation: 'La arteria radial se encuentra en la muñeca y es común para tomar el pulso.',
        points: 10,
        type: 'normal',
        timeLimit: 15,
    },
    {
        id: 'rr-easy-5',
        category: 'Equipos',
        difficulty: 'Fácil',
        question: '¿Qué equipo de protección personal es esencial en TODA emergencia médica?',
        answer: 'Guantes',
        options: ['Guantes', 'Mascarilla N95', 'Bata', 'Careta facial'],
        explanation: 'Los guantes son el EPP más básico y esencial en cualquier emergencia.',
        points: 10,
        type: 'normal',
        timeLimit: 15,
    },

    // === PREGUNTAS MEDIAS ===
    {
        id: 'rr-medium-1',
        category: 'Trauma',
        difficulty: 'Media',
        question: '¿Cuál es la prioridad en el manejo inicial de un paciente politraumatizado?',
        answer: 'Asegurar la vía aérea con control cervical',
        options: [
            'Asegurar la vía aérea con control cervical',
            'Controlar hemorragias externas',
            'Inmovilizar fracturas',
            'Obtener signos vitales'
        ],
        explanation: 'La vía aérea es siempre la prioridad, manteniendo control cervical en trauma.',
        points: 20,
        type: 'doble',
        timeLimit: 20,
    },
    {
        id: 'rr-medium-2',
        category: 'Farmacología',
        difficulty: 'Media',
        question: '¿Cuál es la dosis inicial de epinefrina en un paro cardíaco?',
        answer: '1 mg IV cada 3-5 minutos',
        options: [
            '1 mg IV cada 3-5 minutos',
            '0.3 mg IM única dosis',
            '0.5 mg IV cada 10 minutos',
            '2 mg IV única dosis'
        ],
        explanation: 'En paro cardíaco se administra 1 mg de epinefrina IV cada 3-5 minutos.',
        points: 20,
        type: 'normal',
        timeLimit: 20,
    },
    {
        id: 'rr-medium-3',
        category: 'Evaluación',
        difficulty: 'Media',
        question: '¿Qué significa la "P" en el mnemotécnico OPQRST?',
        answer: 'Provocación/Paliación',
        options: [
            'Provocación/Paliación',
            'Presión arterial',
            'Pulso',
            'Posición'
        ],
        explanation: 'OPQRST es una herramienta para evaluar dolor. P = Provocación/Paliación.',
        points: 20,
        type: 'rapida',
        timeLimit: 10,
    },
    {
        id: 'rr-medium-4',
        category: 'Shock',
        difficulty: 'Media',
        question: '¿Cuál es el primer signo de shock hipovolémico compensado?',
        answer: 'Taquicardia',
        options: ['Taquicardia', 'Hipotensión', 'Cianosis', 'Pérdida de conciencia'],
        explanation: 'La taquicardia es el primer signo mientras el cuerpo compensa la pérdida de volumen.',
        points: 20,
        type: 'robar',
        timeLimit: 20,
    },
    {
        id: 'rr-medium-5',
        category: 'Neurología',
        difficulty: 'Media',
        question: '¿Qué evalúa la Escala de Glasgow (GCS)?',
        answer: 'Nivel de conciencia',
        options: [
            'Nivel de conciencia',
            'Función motora',
            'Reflejos pupilares',
            'Presión intracraneal'
        ],
        explanation: 'La GCS evalúa el nivel de conciencia mediante apertura ocular, respuesta verbal y motora.',
        points: 20,
        type: 'normal',
        timeLimit: 20,
    },

    // === PREGUNTAS DIFÍCILES ===
    {
        id: 'rr-hard-1',
        category: 'Ritmos Cardíacos',
        difficulty: 'Difícil',
        question: '¿Cuál es el tratamiento definitivo para una taquicardia ventricular sin pulso?',
        answer: 'Desfibrilación inmediata',
        options: [
            'Desfibrilación inmediata',
            'Cardioversión sincronizada',
            'Adenosina 6 mg IV',
            'Amiodarona 300 mg IV'
        ],
        explanation: 'La TV sin pulso es un ritmo desfibrilable que requiere desfibrilación inmediata.',
        points: 30,
        type: 'doble',
        timeLimit: 25,
    },
    {
        id: 'rr-hard-2',
        category: 'Toxicología',
        difficulty: 'Difícil',
        question: '¿Cuál es el antídoto específico para una sobredosis de opioides?',
        answer: 'Naloxona (Narcan)',
        options: [
            'Naloxona (Narcan)',
            'Flumazenil',
            'Atropina',
            'Glucagón'
        ],
        explanation: 'Naloxona es el antagonista específico de opioides, revierte la depresión respiratoria.',
        points: 30,
        type: 'rapida',
        timeLimit: 10,
    },
    {
        id: 'rr-hard-3',
        category: 'Obstetricia',
        difficulty: 'Difícil',
        question: '¿Cuál es la complicación más grave del desprendimiento de placenta?',
        answer: 'Shock hemorrágico materno y muerte fetal',
        options: [
            'Shock hemorrágico materno y muerte fetal',
            'Hipertensión materna',
            'Infección uterina',
            'Parto prematuro'
        ],
        explanation: 'El desprendimiento de placenta puede causar hemorragia masiva materna y muerte fetal.',
        points: 30,
        type: 'robar',
        timeLimit: 25,
    },
    {
        id: 'rr-hard-4',
        category: 'Ventilación',
        difficulty: 'Difícil',
        question: '¿Qué indica un ETCO2 de 10 mmHg durante RCP?',
        answer: 'Compresiones inadecuadas o mal pronóstico',
        options: [
            'Compresiones inadecuadas o mal pronóstico',
            'Ventilación excesiva',
            'Metabolismo aumentado',
            'RCP exitoso'
        ],
        explanation: 'ETCO2 bajo durante RCP indica perfusión inadecuada o mal pronóstico. Meta: >10-20 mmHg.',
        points: 30,
        type: 'normal',
        timeLimit: 25,
    },
    {
        id: 'rr-hard-5',
        category: 'Trauma',
        difficulty: 'Difícil',
        question: '¿Qué es el signo de Beck en trauma torácico?',
        answer: 'Tríada: hipotensión, distensión venosa yugular y tonos cardíacos apagados',
        options: [
            'Tríada: hipotensión, distensión venosa yugular y tonos cardíacos apagados',
            'Crepitación en cuello y tórax',
            'Asimetría en expansión torácica',
            'Dolor abdominal irradiado'
        ],
        explanation: 'El signo de Beck indica taponamiento cardíaco: hipotensión, DVY y ruidos apagados.',
        points: 30,
        type: 'doble',
        timeLimit: 25,
    },

    // === MÁS PREGUNTAS VARIADAS ===
    {
        id: 'rr-easy-6',
        category: 'Hemorragias',
        difficulty: 'Fácil',
        question: '¿Cuál es el método PRIMARIO para controlar una hemorragia externa?',
        answer: 'Presión directa',
        options: ['Presión directa', 'Torniquete', 'Elevación', 'Puntos de presión'],
        explanation: 'La presión directa sobre la herida es el método primario de control de hemorragias.',
        points: 10,
        type: 'rapida',
        timeLimit: 10,
    },
    {
        id: 'rr-medium-6',
        category: 'Pediátrico',
        difficulty: 'Media',
        question: '¿Cuál es la frecuencia de compresiones en RCP pediátrico?',
        answer: '100-120 por minuto',
        options: ['100-120 por minuto', '80-100 por minuto', '60-80 por minuto', '120-140 por minuto'],
        explanation: 'La frecuencia de compresiones en pediátrico es la misma que en adultos: 100-120/min.',
        points: 20,
        type: 'normal',
        timeLimit: 20,
    },
    {
        id: 'rr-hard-6',
        category: 'Electrolitos',
        difficulty: 'Difícil',
        question: '¿Qué cambio en el ECG sugiere hiperpotasemia severa?',
        answer: 'Ondas T picudas y ensanchamiento del QRS',
        options: [
            'Ondas T picudas y ensanchamiento del QRS',
            'Ondas U prominentes',
            'Intervalo QT prolongado',
            'Elevación del segmento ST'
        ],
        explanation: 'La hiperpotasemia causa ondas T picudas y puede ensanchar el QRS peligrosamente.',
        points: 30,
        type: 'robar',
        timeLimit: 25,
    },
    {
        id: 'rr-easy-7',
        category: 'Quemaduras',
        difficulty: 'Fácil',
        question: '¿Cómo se clasifica una quemadura que afecta epidermis y dermis con ampollas?',
        answer: 'Segundo grado (grosor parcial)',
        options: [
            'Segundo grado (grosor parcial)',
            'Primer grado (superficial)',
            'Tercer grado (grosor completo)',
            'Cuarto grado'
        ],
        explanation: 'Las quemaduras de segundo grado afectan epidermis y dermis, con ampollas características.',
        points: 10,
        type: 'normal',
        timeLimit: 15,
    },
    {
        id: 'rr-medium-7',
        category: 'Diabetes',
        difficulty: 'Media',
        question: '¿Cuál es el nivel crítico de glucosa que define hipoglicemia severa?',
        answer: 'Menos de 70 mg/dL',
        options: [
            'Menos de 70 mg/dL',
            'Menos de 100 mg/dL',
            'Menos de 50 mg/dL',
            'Menos de 40 mg/dL'
        ],
        explanation: 'Glucosa menor a 70 mg/dL se considera hipoglicemia que requiere tratamiento.',
        points: 20,
        type: 'rapida',
        timeLimit: 10,
    },
    {
        id: 'rr-hard-7',
        category: 'Farmacología Avanzada',
        difficulty: 'Difícil',
        question: '¿Cuál es la dosis de amiodarona en una fibrilación ventricular refractaria?',
        answer: '300 mg IV en bolo, puede repetir 150 mg',
        options: [
            '300 mg IV en bolo, puede repetir 150 mg',
            '150 mg IV en bolo, puede repetir 300 mg',
            '1 mg IV cada 3-5 minutos',
            '1-1.5 mg/kg IV en bolo'
        ],
        explanation: 'En FV/TV refractaria: amiodarona 300 mg IV, puede repetir 150 mg.',
        points: 30,
        type: 'normal',
        timeLimit: 25,
    },
    {
        id: 'rr-easy-8',
        category: 'ABCDE',
        difficulty: 'Fácil',
        question: '¿Qué significa la "E" en el enfoque ABCDE del trauma?',
        answer: 'Exposición/Examen completo',
        options: [
            'Exposición/Examen completo',
            'Estabilización',
            'Evaluación secundaria',
            'Extracción'
        ],
        explanation: 'E = Exposición del paciente y Examen completo, manteniendo normotermia.',
        points: 10,
        type: 'rapida',
        timeLimit: 10,
    },
];

export const POWER_UPS = [
    {
        id: 'skip',
        name: 'Saltar',
        description: 'Salta una pregunta difícil sin penalización',
    },
    {
        id: 'fifty-fifty',
        name: '50/50',
        description: 'Elimina dos opciones incorrectas',
    },
    {
        id: 'extra-time',
        name: 'Tiempo Extra',
        description: 'Añade 10 segundos al temporizador',
    },
];
