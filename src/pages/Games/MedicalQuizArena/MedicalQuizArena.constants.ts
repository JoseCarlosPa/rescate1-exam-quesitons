import { Question } from './MedicalQuizArena.types';

export const PLAYER_COLORS = [
    '#FF6B6B', // Rojo
    '#4ECDC4', // Turquesa
    '#45B7D1', // Azul
    '#FFA07A', // Salmón
    '#98D8C8', // Verde Menta
    '#F7DC6F', // Amarillo
    '#BB8FCE', // Púrpura
    '#85C1E2', // Azul Claro
];

export const PLAYER_AVATARS = [
    '👨‍⚕️', '👩‍⚕️', '🚑', '⚕️', '🏥', '💉', '🩺', '❤️'
];

export const CATEGORIES = [
    'Anatomía',
    'Farmacología',
    'Trauma',
    'Emergencias Cardíacas',
    'Vía Aérea',
    'Pediatría',
    'Evaluación',
    'Protocolos',
];

export const QUIZ_ARENA_QUESTIONS: Question[] = [
    // Anatomía
    {
        id: 'qa-1',
        category: 'Anatomía',
        difficulty: 'Fácil',
        question: '¿Cuál es la posición anatómica correcta?',
        answer: 'De pie, mirando al frente, brazos a los lados con palmas hacia adelante',
        options: [
            'De pie, mirando al frente, brazos a los lados con palmas hacia adelante',
            'Sentado con brazos cruzados',
            'Acostado boca arriba con brazos cruzados',
            'De pie con brazos levantados'
        ],
        points: 100,
        timeLimit: 15,
        explanation: 'La posición anatómica es el punto de referencia estándar para describir ubicaciones del cuerpo.'
    },
    {
        id: 'qa-2',
        category: 'Anatomía',
        difficulty: 'Media',
        question: '¿Cuántas vértebras cervicales tiene el ser humano?',
        answer: '7',
        options: ['5', '7', '12', '8'],
        points: 150,
        timeLimit: 15,
        explanation: 'La columna cervical está compuesta por 7 vértebras (C1-C7).'
    },
    {
        id: 'qa-3',
        category: 'Anatomía',
        difficulty: 'Difícil',
        question: '¿Qué arteria es responsable del 80% del flujo sanguíneo al cerebro?',
        answer: 'Arteria carótida interna',
        options: [
            'Arteria carótida interna',
            'Arteria vertebral',
            'Arteria basilar',
            'Arteria cerebral media'
        ],
        points: 200,
        timeLimit: 20,
        explanation: 'Las arterias carótidas internas suministran la mayor parte del flujo sanguíneo cerebral.'
    },

    // Farmacología
    {
        id: 'qa-4',
        category: 'Farmacología',
        difficulty: 'Fácil',
        question: '¿Cuál es la dosis de epinefrina en el paro cardíaco?',
        answer: '1 mg IV/IO cada 3-5 minutos',
        options: [
            '1 mg IV/IO cada 3-5 minutos',
            '0.5 mg IV/IO cada 10 minutos',
            '2 mg IV/IO cada 2 minutos',
            '0.3 mg IM una sola vez'
        ],
        points: 100,
        timeLimit: 15,
        explanation: 'La epinefrina en paro cardíaco se administra 1 mg IV/IO cada 3-5 minutos según ACLS.'
    },
    {
        id: 'qa-5',
        category: 'Farmacología',
        difficulty: 'Media',
        question: '¿Cuál es el antídoto para la sobredosis de opioides?',
        answer: 'Naloxona (Narcan)',
        options: [
            'Naloxona (Narcan)',
            'Flumazenil',
            'Glucagón',
            'Atropina'
        ],
        points: 150,
        timeLimit: 15,
        explanation: 'La naloxona es un antagonista opioide que revierte los efectos de los opioides.'
    },
    {
        id: 'qa-6',
        category: 'Farmacología',
        difficulty: 'Difícil',
        question: '¿Cuál es la dosis de adenosina para la taquicardia supraventricular en adultos?',
        answer: '6 mg IV en bolo rápido, seguido de 12 mg si es necesario',
        options: [
            '6 mg IV en bolo rápido, seguido de 12 mg si es necesario',
            '12 mg IV en bolo lento',
            '3 mg IV en bolo rápido',
            '10 mg IV en infusión'
        ],
        points: 200,
        timeLimit: 20,
        explanation: 'La adenosina se administra 6 mg IV rápido, seguido de flush; si no responde, 12 mg.'
    },

    // Trauma
    {
        id: 'qa-7',
        category: 'Trauma',
        difficulty: 'Fácil',
        question: '¿Qué significa DCAP-BTLS en la evaluación de trauma?',
        answer: 'Deformidad, Contusión, Abrasión, Penetración, Burns, Ternura, Laceración, Hinchazón',
        options: [
            'Deformidad, Contusión, Abrasión, Penetración, Burns, Ternura, Laceración, Hinchazón',
            'Dolor, Circulación, Anatomía, Presión, Bleeding, Temperatura, Lesión, Shock',
            'Diagnóstico, Control, Asistencia, Prevención, Bandaje, Transporte, Lesión, Signos',
            'Desfibrilación, CPR, Airway, Pulso, Breathing, Trauma, Life, Support'
        ],
        points: 100,
        timeLimit: 20,
        explanation: 'DCAP-BTLS es un mnemotécnico para recordar los hallazgos de la evaluación física.'
    },
    {
        id: 'qa-8',
        category: 'Trauma',
        difficulty: 'Media',
        question: '¿Cuál es la triada de Beck en el taponamiento cardíaco?',
        answer: 'Hipotensión, distensión venosa yugular, tonos cardíacos apagados',
        options: [
            'Hipotensión, distensión venosa yugular, tonos cardíacos apagados',
            'Hipertensión, taquicardia, dolor torácico',
            'Bradicardia, hipotensión, apnea',
            'Taquipnea, cianosis, disnea'
        ],
        points: 150,
        timeLimit: 20,
        explanation: 'La triada de Beck es característica del taponamiento cardíaco.'
    },
    {
        id: 'qa-9',
        category: 'Trauma',
        difficulty: 'Difícil',
        question: '¿A qué presión sistólica se debe mantener a un paciente con trauma craneal severo?',
        answer: 'Mayor a 90 mmHg',
        options: [
            'Mayor a 90 mmHg',
            'Mayor a 120 mmHg',
            'Mayor a 60 mmHg',
            'Mayor a 100 mmHg'
        ],
        points: 200,
        timeLimit: 20,
        explanation: 'En trauma craneal severo, se debe mantener PAS > 90 mmHg para asegurar perfusión cerebral.'
    },

    // Emergencias Cardíacas
    {
        id: 'qa-10',
        category: 'Emergencias Cardíacas',
        difficulty: 'Fácil',
        question: '¿Cuál es la relación compresión-ventilación en RCP para adultos con un rescatador?',
        answer: '30:2',
        options: ['30:2', '15:2', '5:1', '100:2'],
        points: 100,
        timeLimit: 15,
        explanation: 'En RCP de adultos con un rescatador, la relación es 30 compresiones por 2 ventilaciones.'
    },
    {
        id: 'qa-11',
        category: 'Emergencias Cardíacas',
        difficulty: 'Media',
        question: '¿Qué ritmo cardíaco NO es desfibrilable?',
        answer: 'Asistolia',
        options: [
            'Asistolia',
            'Fibrilación ventricular',
            'Taquicardia ventricular sin pulso',
            'Taquicardia ventricular polimórfica'
        ],
        points: 150,
        timeLimit: 15,
        explanation: 'La asistolia y la actividad eléctrica sin pulso (AESP) no son ritmos desfibrilables.'
    },
    {
        id: 'qa-12',
        category: 'Emergencias Cardíacas',
        difficulty: 'Difícil',
        question: '¿Cuáles son las 5 H y 5 T de las causas reversibles de paro cardíaco?',
        answer: 'Hipovolemia, Hipoxia, Hidrogenión, Hipo/Hipercalemia, Hipotermia / Tensión neumotórax, Taponamiento, Tóxicos, Trombosis pulmonar, Trombosis coronaria',
        options: [
            'Hipovolemia, Hipoxia, Hidrogenión, Hipo/Hipercalemia, Hipotermia / Tensión neumotórax, Taponamiento, Tóxicos, Trombosis pulmonar, Trombosis coronaria',
            'Hemorragia, Hipotensión, Hipertensión, Hipoglucemia, Hipocalcemia / Trauma, Taquicardia, Tiempo, Transporte, Tratamiento',
            'Heridas, Hematomas, Hiperglucemia, Hipotermia, Hemorragia / Temperatura, Tensión, Trauma, Taquipnea, Triage',
            'Hipoxemia, Hiponatremia, Hipercalcemia, Hipertensión, Hipotermia / Taquicardia, Trauma, Toxicidad, Trombosis, Temperatura'
        ],
        points: 200,
        timeLimit: 25,
        explanation: 'Las 5 H y 5 T son causas reversibles de paro cardíaco que deben buscarse y tratarse.'
    },

    // Vía Aérea
    {
        id: 'qa-13',
        category: 'Vía Aérea',
        difficulty: 'Fácil',
        question: '¿Cuál es la maniobra inicial para abrir la vía aérea en trauma?',
        answer: 'Tracción mandibular (Jaw thrust)',
        options: [
            'Tracción mandibular (Jaw thrust)',
            'Inclinación de cabeza-elevación de mentón',
            'Barrido digital',
            'Intubación inmediata'
        ],
        points: 100,
        timeLimit: 15,
        explanation: 'En trauma, se usa jaw thrust para evitar mover la columna cervical.'
    },
    {
        id: 'qa-14',
        category: 'Vía Aérea',
        difficulty: 'Media',
        question: '¿Cuál es el tamaño correcto del tubo endotraqueal para un adulto promedio?',
        answer: '7.5-8.0 mm para hombres, 7.0-7.5 mm para mujeres',
        options: [
            '7.5-8.0 mm para hombres, 7.0-7.5 mm para mujeres',
            '6.0-6.5 mm para ambos',
            '9.0-10.0 mm para ambos',
            '5.0-5.5 mm para adultos'
        ],
        points: 150,
        timeLimit: 15,
        explanation: 'Los tubos endotraqueales para adultos varían según el género del paciente.'
    },
    {
        id: 'qa-15',
        category: 'Vía Aérea',
        difficulty: 'Difícil',
        question: '¿Cuál es la indicación principal para realizar una cricotirotomía de emergencia?',
        answer: 'Imposibilidad de intubar y ventilar (Cannot intubate, cannot ventilate)',
        options: [
            'Imposibilidad de intubar y ventilar (Cannot intubate, cannot ventilate)',
            'Todo paciente en paro cardíaco',
            'Paciente con tos persistente',
            'Siempre que haya trauma facial leve'
        ],
        points: 200,
        timeLimit: 20,
        explanation: 'La cricotirotomía es el último recurso cuando no se puede asegurar la vía aérea por otros medios.'
    },

    // Pediatría
    {
        id: 'qa-16',
        category: 'Pediatría',
        difficulty: 'Fácil',
        question: '¿Cuál es la relación compresión-ventilación en RCP pediátrico con 2 rescatadores?',
        answer: '15:2',
        options: ['15:2', '30:2', '5:1', '20:2'],
        points: 100,
        timeLimit: 15,
        explanation: 'En pediatría con 2 rescatadores, la relación es 15:2.'
    },
    {
        id: 'qa-17',
        category: 'Pediatría',
        difficulty: 'Media',
        question: '¿Cuál es la dosis de epinefrina en paro cardíaco pediátrico?',
        answer: '0.01 mg/kg IV/IO',
        options: [
            '0.01 mg/kg IV/IO',
            '1 mg IV/IO dosis fija',
            '0.1 mg/kg IV/IO',
            '0.5 mg/kg IV/IO'
        ],
        points: 150,
        timeLimit: 15,
        explanation: 'En pediatría, la epinefrina se dosifica por peso: 0.01 mg/kg.'
    },
    {
        id: 'qa-18',
        category: 'Pediatría',
        difficulty: 'Difícil',
        question: '¿Qué indica un triángulo de evaluación pediátrica (PAT) anormal?',
        answer: 'Posible compromiso respiratorio, circulatorio o neurológico',
        options: [
            'Posible compromiso respiratorio, circulatorio o neurológico',
            'Siempre indica trauma severo',
            'Solo problemas gastrointestinales',
            'Paciente completamente estable'
        ],
        points: 200,
        timeLimit: 20,
        explanation: 'El PAT evalúa apariencia, trabajo respiratorio y circulación a la piel para identificar niños enfermos.'
    },

    // Evaluación
    {
        id: 'qa-19',
        category: 'Evaluación',
        difficulty: 'Fácil',
        question: '¿Qué significa AVDI en la evaluación del nivel de consciencia?',
        answer: 'Alerta, Verbal, Dolor, Inconsciente',
        options: [
            'Alerta, Verbal, Dolor, Inconsciente',
            'Airway, Ventilation, Defibrillation, IV',
            'Assessment, Vital signs, Diagnosis, Intervention',
            'Anatomía, Vascular, Diagnóstico, Intervención'
        ],
        points: 100,
        timeLimit: 15,
        explanation: 'AVDI es un sistema simple para evaluar el nivel de consciencia.'
    },
    {
        id: 'qa-20',
        category: 'Evaluación',
        difficulty: 'Media',
        question: '¿Qué significa SAMPLE en la historia clínica?',
        answer: 'Signos/Síntomas, Alergias, Medicamentos, Pasado médico, Last oral intake, Eventos',
        options: [
            'Signos/Síntomas, Alergias, Medicamentos, Pasado médico, Last oral intake, Eventos',
            'Shock, Airway, Medical, Pulse, Lesiones, Emergency',
            'Sistema, Anatomía, Médico, Protocol, Lesión, Evaluación',
            'Scene, Assessment, Medical, Patient, Life, Emergency'
        ],
        points: 150,
        timeLimit: 20,
        explanation: 'SAMPLE es el mnemotécnico estándar para obtener la historia clínica del paciente.'
    },
    {
        id: 'qa-21',
        category: 'Evaluación',
        difficulty: 'Difícil',
        question: 'En la escala de Glasgow, ¿cuál es el puntaje mínimo y máximo?',
        answer: '3 mínimo, 15 máximo',
        options: [
            '3 mínimo, 15 máximo',
            '0 mínimo, 10 máximo',
            '1 mínimo, 20 máximo',
            '5 mínimo, 15 máximo'
        ],
        points: 200,
        timeLimit: 15,
        explanation: 'La escala de Glasgow va de 3 (peor) a 15 (mejor), evaluando ojos, verbal y motor.'
    },

    // Protocolos
    {
        id: 'qa-22',
        category: 'Protocolos',
        difficulty: 'Fácil',
        question: '¿Qué significa el ABC en la evaluación inicial?',
        answer: 'Airway, Breathing, Circulation',
        options: [
            'Airway, Breathing, Circulation',
            'Anatomía, Breathing, Corazón',
            'Assessment, Blood, Control',
            'Ambulance, Body, Care'
        ],
        points: 100,
        timeLimit: 15,
        explanation: 'ABC es la secuencia de prioridades en la evaluación inicial.'
    },
    {
        id: 'qa-23',
        category: 'Protocolos',
        difficulty: 'Media',
        question: '¿Qué significa MARCH en el protocolo de atención táctica?',
        answer: 'Massive hemorrhage, Airway, Respirations, Circulation, Hypothermia',
        options: [
            'Massive hemorrhage, Airway, Respirations, Circulation, Hypothermia',
            'Medical, Assessment, Rapid, Care, Hospital',
            'Monitor, Assess, React, Check, Help',
            'Movement, Anatomía, Rescue, Control, Hospital'
        ],
        points: 150,
        timeLimit: 20,
        explanation: 'MARCH es el protocolo de medicina táctica para atención en combate.'
    },
    {
        id: 'qa-24',
        category: 'Protocolos',
        difficulty: 'Difícil',
        question: '¿Cuál es el tiempo objetivo de "puerta-aguja" en un infarto con elevación del ST?',
        answer: 'Menos de 30 minutos',
        options: [
            'Menos de 30 minutos',
            'Menos de 60 minutos',
            'Menos de 90 minutos',
            'Menos de 2 horas'
        ],
        points: 200,
        timeLimit: 20,
        explanation: 'El tiempo puerta-aguja ideal para trombolisis en STEMI es < 30 minutos.'
    },

    // Preguntas adicionales para completar el banco
    {
        id: 'qa-25',
        category: 'Trauma',
        difficulty: 'Media',
        question: '¿Qué es la "hora dorada" en trauma?',
        answer: 'La primera hora después del trauma donde el tratamiento definitivo puede salvar vidas',
        options: [
            'La primera hora después del trauma donde el tratamiento definitivo puede salvar vidas',
            'El tiempo que tarda el paciente en llegar al hospital',
            'Una hora después de la cirugía',
            'El tiempo de espera en el departamento de emergencias'
        ],
        points: 150,
        timeLimit: 15,
        explanation: 'La "hora dorada" enfatiza la importancia del tratamiento rápido en trauma severo.'
    },
    {
        id: 'qa-26',
        category: 'Farmacología',
        difficulty: 'Fácil',
        question: '¿Para qué se utiliza la nitroglicerina sublingual?',
        answer: 'Dolor torácico de origen cardíaco',
        options: [
            'Dolor torácico de origen cardíaco',
            'Dolor de cabeza',
            'Dolor abdominal',
            'Fracturas'
        ],
        points: 100,
        timeLimit: 15,
        explanation: 'La nitroglicerina es un vasodilatador utilizado para el dolor torácico cardíaco.'
    },
    {
        id: 'qa-27',
        category: 'Evaluación',
        difficulty: 'Fácil',
        question: '¿Cuál es la frecuencia cardíaca normal en un adulto en reposo?',
        answer: '60-100 latidos por minuto',
        options: [
            '60-100 latidos por minuto',
            '40-60 latidos por minuto',
            '100-120 latidos por minuto',
            '120-140 latidos por minuto'
        ],
        points: 100,
        timeLimit: 15,
        explanation: 'La frecuencia cardíaca normal en adultos en reposo es de 60-100 lpm.'
    },
    {
        id: 'qa-28',
        category: 'Vía Aérea',
        difficulty: 'Media',
        question: '¿Qué dispositivo ayuda a mantener la lengua alejada de la faringe posterior?',
        answer: 'Cánula orofaríngea (OPA)',
        options: [
            'Cánula orofaríngea (OPA)',
            'Mascarilla de oxígeno',
            'Catéter nasal',
            'Desfibrilador'
        ],
        points: 150,
        timeLimit: 15,
        explanation: 'La OPA previene que la lengua obstruya la vía aérea en pacientes inconscientes.'
    },
    {
        id: 'qa-29',
        category: 'Emergencias Cardíacas',
        difficulty: 'Difícil',
        question: '¿Cuál es la energía inicial recomendada para desfibrilación en adultos con desfibrilador bifásico?',
        answer: '120-200 Joules',
        options: [
            '120-200 Joules',
            '360 Joules',
            '50 Joules',
            '400 Joules'
        ],
        points: 200,
        timeLimit: 20,
        explanation: 'Los desfibriladores bifásicos modernos usan 120-200 J como dosis inicial.'
    },
    {
        id: 'qa-30',
        category: 'Pediatría',
        difficulty: 'Fácil',
        question: '¿A qué edad se considera a un niño como "lactante" en emergencias?',
        answer: 'Menor de 1 año',
        options: [
            'Menor de 1 año',
            'Menor de 2 años',
            'Menor de 6 meses',
            'Menor de 3 años'
        ],
        points: 100,
        timeLimit: 15,
        explanation: 'Un lactante es menor de 1 año; niño es de 1 año hasta la pubertad.'
    },
];

export const DEFAULT_GAME_CONFIG: GameConfig = {
    numberOfQuestions: 15,
    difficulty: 'mixed',
    categories: CATEGORIES,
    maxPlayers: 6,
};

export const POINTS_CONFIG = {
    BASE_POINTS: {
        Fácil: 100,
        Media: 150,
        Difícil: 200,
    },
    SPEED_BONUS: {
        FAST: 50,      // Respuesta en los primeros 5 segundos
        MEDIUM: 25,    // Respuesta entre 5-10 segundos
        SLOW: 0,       // Respuesta después de 10 segundos
    },
    STREAK_MULTIPLIER: {
        3: 1.5,   // 3 respuestas correctas seguidas
        5: 2.0,   // 5 respuestas correctas seguidas
        7: 2.5,   // 7 respuestas correctas seguidas
    },
    PENALTY_WRONG: -50,
};

export const GAME_SETTINGS = {
    MIN_PLAYERS: 2,
    MAX_PLAYERS: 8,
    CODE_LENGTH: 6,
    QUESTION_REVEAL_DELAY: 2000, // ms
    RESULTS_DISPLAY_TIME: 5000,  // ms
    CHAT_MAX_LENGTH: 200,
};
export interface Player {
    id: string;
    name: string;
    avatar: string;
    score: number;
    correctAnswers: number;
    wrongAnswers: number;
    streak: number;
    isReady: boolean;
    lastAnswerTime?: number;
    color: string;
}

export interface PlayerAnswer {
    playerId: string;
    answer: string;
    timestamp: number;
    isCorrect: boolean;
    pointsEarned: number;
}

export interface GameRoom {
    id: string;
    code: string;
    hostId: string;
    players: Player[];
    maxPlayers: number;
    status: 'waiting' | 'playing' | 'finished';
    currentQuestionIndex: number;
    totalQuestions: number;
    currentQuestion: Question | null;
    answers: PlayerAnswer[];
    createdAt: number;
    startedAt?: number;
    finishedAt?: number;
}

export interface ChatMessage {
    id: string;
    roomId: string;
    playerId: string;
    playerName: string;
    message: string;
    timestamp: number;
    type: 'player' | 'system';
}

export interface GameConfig {
    numberOfQuestions: number;
    difficulty: 'mixed' | 'Fácil' | 'Media' | 'Difícil';
    categories: string[];
    maxPlayers: number;
}

export interface QuizArenaState {
    gameRoom: GameRoom | null;
    currentPlayer: Player | null;
    chatMessages: ChatMessage[];
    isHost: boolean;
    loading: boolean;
    error: string | null;
}

