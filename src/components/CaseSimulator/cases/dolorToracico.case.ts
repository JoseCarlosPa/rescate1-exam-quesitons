import {SimulatorCase} from '../CaseSimulator.types';

export const dolotToracicoCase: SimulatorCase = {
    id: 'dolor-toracico-001',
    title: 'Dolor Torácico Agudo',
    description: 'Paciente con dolor torácico súbito. Evaluación usando protocolo ABCDE estándar.',
    scenario: 'Hombre de 60 años con dolor torácico opresivo de inicio súbito hace 30 minutos, acompañado de sudoración y náuseas.',
    patientInfo: {
        age: 60,
        gender: 'Masculino',
        chiefComplaint: 'Dolor torácico opresivo irradiado a brazo izquierdo',
        history: 'Hipertensión, diabetes tipo 2, fumador 30 años. Padre falleció por infarto.'
    },
    initialVitalSigns: {
        'FC': '110 lpm',
        'PA': '160/95 mmHg',
        'FR': '24 rpm',
        'SatO2': '95%',
        'Temp': '36.8°C',
        'Glasgow': '15/15'
    },
    steps: [
        {
            id: 'step-a-airway-cardiac',
            stepNumber: 1,
            title: 'A - Vía Aérea',
            description: 'Evalúa la permeabilidad de la vía aérea en este paciente con dolor torácico.',
            options: [
                {
                    id: 'a-1',
                    text: 'Vía aérea permeable, paciente habla sin dificultad',
                    isCorrect: true,
                    consequence: 'Correcto. El paciente mantiene vía aérea permeable y puede comunicarse claramente.'
                },
                {
                    id: 'a-2',
                    text: 'Riesgo de vómito por náuseas, posición lateral',
                    isCorrect: false,
                    consequence: 'Innecesario. Las náuseas son leves y no comprometen la vía aérea.'
                },
                {
                    id: 'a-3',
                    text: 'Preparar equipo de vía aérea por posible deterioro',
                    isCorrect: false,
                    consequence: 'Excesivo para este momento. La vía aérea está estable.'
                }
            ],
            correctOptionId: 'a-1',
            feedback: {
                correct: 'Excelente. Has confirmado que la vía aérea no está comprometida.',
                incorrect: 'En dolor torácico sin compromiso respiratorio severo, la vía aérea usualmente está intacta.',
                explanation: 'Un paciente consciente que habla claramente tiene vía aérea permeable por definición.'
            }
        },
        {
            id: 'step-b-breathing-cardiac',
            stepNumber: 2,
            title: 'B - Respiración',
            description: 'Evalúa la ventilación. El paciente está taquipneico con SatO2 del 95%.',
            options: [
                {
                    id: 'b-1',
                    text: 'Taquipnea por dolor/ansiedad, administrar O2 para optimizar oxigenación',
                    isCorrect: true,
                    consequence: 'Correcto. El O2 reduce la demanda miocárdica y mejora la oxigenación.'
                },
                {
                    id: 'b-2',
                    text: 'Signos de edema pulmonar, necesita ventilación asistida',
                    isCorrect: false,
                    consequence: 'Incorrecto. No hay evidencia de edema pulmonar agudo en este momento.'
                },
                {
                    id: 'b-3',
                    text: 'Respiración normal, no requiere oxígeno suplementario',
                    isCorrect: false,
                    consequence: 'Incorrecto. Todo síndrome coronario agudo se beneficia de oxígeno.'
                }
            ],
            correctOptionId: 'b-1',
            feedback: {
                correct: 'Perfecto. El oxígeno suplementario es beneficioso en síndrome coronario agudo.',
                incorrect: 'El oxígeno reduce la demanda miocárdica y puede mejorar el pronóstico.',
                explanation: 'Aunque la SatO2 sea aceptable, el oxígeno suplementario optimiza la oxigenación del miocardio isquémico.'
            }
        },
        {
            id: 'step-c-circulation-cardiac',
            stepNumber: 3,
            title: 'C - Circulación',
            description: 'Evalúa el estado hemodinámico. Taquicardia, hipertensión, perfusión distal conservada.',
            options: [
                {
                    id: 'c-1',
                    text: 'Signos de activación simpática, establecer acceso vascular y monitoreo',
                    isCorrect: true,
                    consequence: 'Correcto. Acceso vascular para medicamentos y monitoreo cardíaco continuo.'
                },
                {
                    id: 'c-2',
                    text: 'Estado de shock cardiogénico, iniciar inotrópicos',
                    isCorrect: false,
                    consequence: 'Incorrecto. No hay signos de shock cardiogénico en este momento.'
                },
                {
                    id: 'c-3',
                    text: 'Circulación estable, solo observación',
                    isCorrect: false,
                    consequence: 'Insuficiente. Se requiere monitoreo activo y acceso vascular.'
                }
            ],
            correctOptionId: 'c-1',
            feedback: {
                correct: 'Excelente. Has reconocido la necesidad de monitoreo y acceso vascular en síndrome coronario.',
                incorrect: 'El dolor torácico agudo requiere monitoreo cardíaco continuo y acceso vascular.',
                explanation: 'El acceso vascular permite administración rápida de medicamentos si hay deterioro hemodinámico.'
            }
        },
        {
            id: 'step-d-disability-cardiac',
            stepNumber: 4,
            title: 'D - Déficit Neurológico',
            description: 'Evalúa el estado neurológico considerando perfusión cerebral.',
            options: [
                {
                    id: 'd-1',
                    text: 'Neurológicamente intacto, mantiene perfusión cerebral adecuada',
                    isCorrect: true,
                    consequence: 'Correcto. Estado neurológico normal indica perfusión cerebral conservada.'
                },
                {
                    id: 'd-2',
                    text: 'Confusión por hipoperfusión cerebral',
                    isCorrect: false,
                    consequence: 'Incorrecto. El paciente está consciente y orientado.'
                },
                {
                    id: 'd-3',
                    text: 'Evaluar glicemia por posible hipoglicemia',
                    isCorrect: false,
                    consequence: 'Secundario. No hay indicadores de hipoglicemia en este caso.'
                }
            ],
            correctOptionId: 'd-1',
            feedback: {
                correct: 'Perfecto. El estado neurológico normal es un buen indicador pronóstico.',
                incorrect: 'Un paciente consciente y orientado mantiene perfusión cerebral adecuada.',
                explanation: 'El estado neurológico intacto sugiere que la función cardíaca aún mantiene perfusión vital.'
            }
        },
        {
            id: 'step-e-exposure-cardiac',
            stepNumber: 5,
            title: 'E - Exposición/Examen',
            description: 'Examen físico dirigido para síndrome coronario agudo.',
            options: [
                {
                    id: 'e-1',
                    text: 'Buscar signos de insuficiencia cardíaca, realizar ECG de 12 derivaciones',
                    isCorrect: true,
                    consequence: 'Correcto. ECG es esencial para diagnóstico de síndrome coronario agudo.'
                },
                {
                    id: 'e-2',
                    text: 'Exposición completa para descartar otras causas de dolor',
                    isCorrect: false,
                    consequence: 'Menos prioritario. El enfoque debe ser cardiovascular inicialmente.'
                },
                {
                    id: 'e-3',
                    text: 'Examen abdominal para descartar causas abdominales',
                    isCorrect: false,
                    consequence: 'Secundario. La presentación es típica de síndrome coronario.'
                }
            ],
            correctOptionId: 'e-1',
            feedback: {
                correct: 'Excelente. El ECG es la herramienta diagnóstica más importante en dolor torácico.',
                incorrect: 'En dolor torácico típico, el ECG tiene prioridad sobre otros exámenes.',
                explanation: 'El ECG puede mostrar signos de isquemia, lesión o infarto que guían el tratamiento urgente.'
            }
        },
        {
            id: 'step-management',
            stepNumber: 6,
            title: 'Manejo Específico',
            description: 'El ECG muestra elevación del ST en derivaciones inferiores. ¿Cuál es tu manejo?',
            options: [
                {
                    id: 'mg-1',
                    text: 'STEMI inferior: AAS, clopidogrel, heparina, preparar para reperfusión',
                    isCorrect: true,
                    consequence: 'Correcto. Manejo apropiado para infarto con elevación del ST.'
                },
                {
                    id: 'mg-2',
                    text: 'Solo analgesia y observación hasta más estudios',
                    isCorrect: false,
                    consequence: 'Peligroso. El STEMI requiere tratamiento de reperfusión urgente.'
                },
                {
                    id: 'mg-3',
                    text: 'Iniciar trombolíticos sin considerar otras opciones',
                    isCorrect: false,
                    consequence: 'Precipitado. Debe evaluarse disponibilidad de angioplastia primaria.'
                }
            ],
            correctOptionId: 'mg-1',
            feedback: {
                correct: 'Perfecto. Has aplicado el protocolo ABCDE y llegado al manejo apropiado de STEMI.',
                incorrect: 'El STEMI es una emergencia que requiere reperfusión urgente dentro de las primeras horas.',
                explanation: 'El tiempo es músculo cardíaco. La reperfusión precoz reduce mortalidad y preserva función ventricular.'
            },
            criticalStep: true
        }
    ],
    learningObjectives: [
        'Aplicar sistemáticamente el protocolo ABCDE en emergencias cardiovasculares',
        'Reconocer la presentación típica de síndrome coronario agudo',
        'Priorizar correctamente el ECG en dolor torácico',
        'Integrar evaluación ABCDE con manejo específico de STEMI',
        'Entender la importancia del tiempo en reperfusión miocárdica'
    ],
    difficulty: 'beginner',
    estimatedTime: '12-15 minutos'
};
