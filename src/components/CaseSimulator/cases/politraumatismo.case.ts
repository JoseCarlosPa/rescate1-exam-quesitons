import {SimulatorCase} from '../CaseSimulator.types';

export const politraumatismoCase: SimulatorCase = {
    id: 'politraumatismo-001',
    title: 'Politraumatismo por Accidente de Tránsito',
    description: 'Paciente joven con trauma múltiple tras colisión vehicular. Evaluación usando protocolo XABCDE completo.',
    scenario: 'Hombre de 25 años, conductor sin cinturón de seguridad en colisión frontal a alta velocidad. Consciente pero agitado, con múltiples lesiones aparentes.',
    patientInfo: {
        age: 25,
        gender: 'Masculino',
        chiefComplaint: 'Trauma múltiple, dolor torácico y abdominal',
        history: 'Previamente sano. No uso de cinturón de seguridad. Mecanismo de alta energía.'
    },
    initialVitalSigns: {
        'FC': '120 lpm',
        'PA': '95/60 mmHg',
        'FR': '28 rpm',
        'SatO2': '92%',
        'Temp': '36.0°C',
        'Glasgow': '13/15'
    },
    steps: [
        {
            id: 'step-x-hemorrhage',
            stepNumber: 1,
            title: 'X - Control de Hemorragia Exanguinante',
            description: 'Observas sangrado activo de laceraciones en extremidades y posible hemorragia interna.',
            options: [
                {
                    id: 'x-1',
                    text: 'Control directo de hemorragia externa, evaluar signos de hemorragia interna',
                    isCorrect: true,
                    consequence: 'Correcto. Controlas sangrado externo, sospechas hemorragia intraabdominal.'
                },
                {
                    id: 'x-2',
                    text: 'Solo presión directa en heridas menores, priorizar otras evaluaciones',
                    isCorrect: false,
                    consequence: 'Insuficiente. En politrauma la hemorragia es causa principal de muerte.'
                },
                {
                    id: 'x-3',
                    text: 'Aplicar torniquetes en todas las extremidades preventivamente',
                    isCorrect: false,
                    consequence: 'Excesivo. Los torniquetes solo se usan en hemorragia masiva no controlable.'
                }
            ],
            correctOptionId: 'x-1',
            feedback: {
                correct: 'Excelente. Has priorizado correctamente el control de hemorragia en politrauma.',
                incorrect: 'En trauma de alta energía, la hemorragia (externa e interna) es la causa más prevenible de muerte.',
                explanation: 'El control temprano de hemorragia puede ser la diferencia entre vida y muerte en politrauma.'
            },
            criticalStep: true
        },
        {
            id: 'step-a-airway-trauma',
            stepNumber: 2,
            title: 'A - Vía Aérea con Control Cervical',
            description: 'Paciente agitado, habla pero con dificultad. Mecanismo sugiere posible lesión cervical.',
            options: [
                {
                    id: 'a-1',
                    text: 'Vía aérea comprometida, inmovilización cervical, preparar vía aérea definitiva',
                    isCorrect: true,
                    consequence: 'Correcto. Mantienes columna cervical e identificas compromiso de vía aérea.'
                },
                {
                    id: 'a-2',
                    text: 'Vía aérea permeable, no requiere inmovilización cervical',
                    isCorrect: false,
                    consequence: 'Peligroso. El mecanismo de trauma exige protección cervical.'
                },
                {
                    id: 'a-3',
                    text: 'Intubación inmediata por agitación',
                    isCorrect: false,
                    consequence: 'Precipitado. Evaluar grado de compromiso antes de vía aérea definitiva.'
                }
            ],
            correctOptionId: 'a-1',
            feedback: {
                correct: 'Perfecto. Has reconocido la necesidad de protección cervical y manejo de vía aérea.',
                incorrect: 'En trauma de alta energía, siempre se debe asumir lesión cervical hasta demostrar lo contrario.',
                explanation: 'La inmovilización cervical es mandatoria en politrauma mientras se evalúa la vía aérea.'
            },
            criticalStep: true
        },
        {
            id: 'step-b-breathing-trauma',
            stepNumber: 3,
            title: 'B - Respiración y Ventilación',
            description: 'Taquipnea, movimiento torácico asimétrico, SatO2 92%, timpanismo en hemitórax derecho.',
            options: [
                {
                    id: 'b-1',
                    text: 'Neumotórax a tensión, descompresión inmediata con aguja',
                    isCorrect: true,
                    consequence: 'Correcto. Realizas descompresión, mejora inmediatamente la ventilación.'
                },
                {
                    id: 'b-2',
                    text: 'Administrar oxígeno y observar evolución',
                    isCorrect: false,
                    consequence: 'Peligroso. El neumotórax a tensión requiere descompresión inmediata.'
                },
                {
                    id: 'b-3',
                    text: 'Intubar inmediatamente por hipoxemia',
                    isCorrect: false,
                    consequence: 'Incorrecto. Primero descomprimir, la intubación puede empeorar el neumotórax.'
                }
            ],
            correctOptionId: 'b-1',
            feedback: {
                correct: 'Excelente. Has identificado y tratado correctamente el neumotórax a tensión.',
                incorrect: 'El neumotórax a tensión es una emergencia que causa muerte rápida si no se trata.',
                explanation: 'La descompresión con aguja es salvadora de vida y debe realizarse antes que cualquier otra intervención.'
            },
            criticalStep: true
        },
        {
            id: 'step-c-circulation-trauma',
            stepNumber: 4,
            title: 'C - Circulación con Control de Hemorragia',
            description: 'Taquicardia, hipotensión, abdomen distendido y doloroso, palidez.',
            options: [
                {
                    id: 'c-1',
                    text: 'Shock hipovolémico, acceso vascular grueso, reanimación controlada',
                    isCorrect: true,
                    consequence: 'Correcto. Inicias reanimación mientras preparas para cirugía urgente.'
                },
                {
                    id: 'c-2',
                    text: 'Reanimación agresiva con cristaloides hasta normalizar PA',
                    isCorrect: false,
                    consequence: 'Peligroso. La reanimación excesiva puede empeorar la hemorragia.'
                },
                {
                    id: 'c-3',
                    text: 'Circulación estable, solo monitorizar',
                    isCorrect: false,
                    consequence: 'Incorrecto. Hay signos claros de shock hipovolémico.'
                }
            ],
            correctOptionId: 'c-1',
            feedback: {
                correct: 'Perfecto. La reanimación controlada es clave en trauma con hemorragia activa.',
                incorrect: 'En hemorragia no controlada, la reanimación excesiva puede ser contraproducente.',
                explanation: 'La hipotensión permisiva mantiene coágulos mientras se controla quirúrgicamente la hemorragia.'
            },
            criticalStep: true
        },
        {
            id: 'step-d-disability-trauma',
            stepNumber: 5,
            title: 'D - Déficit Neurológico',
            description: 'Glasgow 13/15 (ojos 3, verbal 4, motor 6), pupilas asimétricas, agitación.',
            options: [
                {
                    id: 'd-1',
                    text: 'Trauma craneoencefálico con probable aumento de PIC, manejar hipertensión',
                    isCorrect: true,
                    consequence: 'Correcto. Identificas TCE e inicias medidas para reducir presión intracraneal.'
                },
                {
                    id: 'd-2',
                    text: 'Estado neurológico normal para politrauma',
                    isCorrect: false,
                    consequence: 'Incorrecto. Glasgow 13 y pupilas asimétricas son anormales.'
                },
                {
                    id: 'd-3',
                    text: 'Agitación por dolor, administrar sedación',
                    isCorrect: false,
                    consequence: 'Peligroso. La sedación puede enmascarar deterioro neurológico.'
                }
            ],
            correctOptionId: 'd-1',
            feedback: {
                correct: 'Excelente. Has reconocido signos de trauma craneoencefálico significativo.',
                incorrect: 'Las pupilas asimétricas y Glasgow alterado indican trauma craneal que requiere manejo activo.',
                explanation: 'En TCE, mantener perfusión cerebral adecuada es crucial para prevenir lesión secundaria.'
            }
        },
        {
            id: 'step-e-exposure-trauma',
            stepNumber: 6,
            title: 'E - Exposición Completa',
            description: 'Exposición total manteniendo temperatura para evaluación secundaria.',
            options: [
                {
                    id: 'e-1',
                    text: 'Exposición sistemática: fracturas múltiples, equimosis abdominal extensa',
                    isCorrect: true,
                    consequence: 'Correcto. Identificas lesiones adicionales que requieren manejo.'
                },
                {
                    id: 'e-2',
                    text: 'Evitar exposición por riesgo de hipotermia',
                    isCorrect: false,
                    consequence: 'Incorrecto. La evaluación completa es esencial en politrauma.'
                },
                {
                    id: 'e-3',
                    text: 'Solo examinar áreas sintomáticas',
                    isCorrect: false,
                    consequence: 'Insuficiente. Pueden existir lesiones no evidentes inicialmente.'
                }
            ],
            correctOptionId: 'e-1',
            feedback: {
                correct: 'Perfecto. La exposición completa revela lesiones que podrían pasar desapercibidas.',
                incorrect: 'En politrauma, la evaluación sistemática completa puede identificar lesiones potencialmente mortales.',
                explanation: 'La regla en trauma es "no encontrar solo lo que buscas, buscar todo lo que puedes encontrar".'
            }
        },
        {
            id: 'step-priorities',
            stepNumber: 7,
            title: 'Priorización y Disposición',
            description: 'Paciente estabilizado temporalmente. ¿Cuál es tu prioridad de manejo definitivo?',
            options: [
                {
                    id: 'p-1',
                    text: 'Cirugía abdominal urgente para control de hemorragia, diferir otros procedimientos',
                    isCorrect: true,
                    consequence: 'Correcto. La hemorragia intraabdominal es la prioridad más urgente.'
                },
                {
                    id: 'p-2',
                    text: 'TAC de cráneo urgente antes de cualquier intervención',
                    isCorrect: false,
                    consequence: 'Incorrecto. La hemorragia activa tiene prioridad sobre estudios.'
                },
                {
                    id: 'p-3',
                    text: 'Fijación ortopédica de fracturas primero',
                    isCorrect: false,
                    consequence: 'Incorrecto. Las fracturas no son inmediatamente amenazantes para la vida.'
                }
            ],
            correctOptionId: 'p-1',
            feedback: {
                correct: 'Excelente. Has priorizado correctamente según la amenaza inmediata para la vida.',
                incorrect: 'En politrauma, la regla es "controlar la hemorragia primero, todo lo demás después".',
                explanation: 'La tríada mortal en trauma (hipotermia, acidosis, coagulopatía) empeora con el tiempo y la hemorragia.'
            },
            criticalStep: true
        }
    ],
    learningObjectives: [
        'Aplicar protocolo XABCDE en politraumatismo complejo',
        'Reconocer y tratar neumotórax a tensión',
        'Manejar shock hipovolémico con reanimación controlada',
        'Identificar trauma craneoencefálico con signos de hipertensión intracraneal',
        'Priorizar intervenciones según amenaza inmediata para la vida'
    ],
    difficulty: 'intermediate',
    estimatedTime: '20-25 minutos'
};
