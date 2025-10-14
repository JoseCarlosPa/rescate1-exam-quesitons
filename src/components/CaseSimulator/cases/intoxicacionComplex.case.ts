import {SimulatorCase} from '../CaseSimulator.types';

export const intoxicacionComplexCase: SimulatorCase = {
    id: 'intoxicacion-complex-001',
    title: 'Intoxicación Mixta con Complicaciones Sistémicas',
    description: 'Paciente con intoxicación por múltiples sustancias presentando falla multiorgánica. Evaluación ABCDE avanzada.',
    scenario: 'Mujer de 35 años encontrada inconsciente en su domicilio junto a múltiples frascos de medicamentos vacíos y alcohol. Presenta depresión respiratoria, arritmias, convulsiones y signos de falla hepática aguda.',
    patientInfo: {
        age: 35,
        gender: 'Femenino',
        chiefComplaint: 'Intoxicación mixta con depresión del SNC y falla multiorgánica',
        history: 'Antecedentes de depresión mayor. Ingesta probable: acetaminofén, benzodiacepinas, antidepresivos tricíclicos y alcohol.'
    },
    initialVitalSigns: {
        'FC': '145 lpm irregular',
        'PA': '85/45 mmHg',
        'FR': '8 rpm',
        'SatO2': '85%',
        'Temp': '35.2°C',
        'Glasgow': '6/15 (O1V1M4)'
    },
    steps: [
        {
            id: 'step-a-airway-toxic',
            stepNumber: 1,
            title: 'A - Vía Aérea en Intoxicado',
            description: 'Paciente comatosa con Glasgow 6/15, sialorrea abundante, reflejos protectores ausentes.',
            options: [
                {
                    id: 'a-1',
                    text: 'Vía aérea no protegida, intubación inmediata con precauciones',
                    isCorrect: true,
                    consequence: 'Correcto. Aseguras vía aérea definitiva considerando riesgo de aspiración.'
                },
                {
                    id: 'a-2',
                    text: 'Ventilar con bolsa-mascarilla hasta mejoría neurológica',
                    isCorrect: false,
                    consequence: 'Peligroso. Alto riesgo de aspiración con Glasgow 6 y secreciones.'
                },
                {
                    id: 'a-3',
                    text: 'Posición lateral y aspiración de secreciones solamente',
                    isCorrect: false,
                    consequence: 'Insuficiente. La depresión respiratoria severa requiere vía aérea definitiva.'
                }
            ],
            correctOptionId: 'a-1',
            feedback: {
                correct: 'Excelente. Has reconocido la necesidad crítica de protección de vía aérea.',
                incorrect: 'Con Glasgow ≤8 y secreciones abundantes, la intubación es mandatoria para prevenir aspiración.',
                explanation: 'La intoxicación severa con depresión de consciencia requiere vía aérea definitiva inmediata.'
            },
            criticalStep: true
        },
        {
            id: 'step-b-breathing-toxic',
            stepNumber: 2,
            title: 'B - Respiración en Intoxicación',
            description: 'Post-intubación: FR 8 rpm, ventilación asistida, SatO2 mejora a 92%. Patrón respiratorio irregular.',
            options: [
                {
                    id: 'b-1',
                    text: 'Depresión respiratoria por tóxicos, ventilar controladamente, considerar antídotos',
                    isCorrect: true,
                    consequence: 'Correcto. Ventilas apropiadamente y consideras naloxona/flumazenil.'
                },
                {
                    id: 'b-2',
                    text: 'Hiperventilación para compensar acidosis metabólica',
                    isCorrect: false,
                    consequence: 'Prematuro. Necesitas conocer gasometría antes de ajustar ventilación.'
                },
                {
                    id: 'b-3',
                    text: 'Ventilación mínima para evitar alcalosis respiratoria',
                    isCorrect: false,
                    consequence: 'Insuficiente. La depresión respiratoria requiere soporte ventilatorio adecuado.'
                }
            ],
            correctOptionId: 'b-1',
            feedback: {
                correct: 'Perfecto. El manejo ventilatorio considera la causa toxicológica y antídotos específicos.',
                incorrect: 'En intoxicación con depresión respiratoria, el soporte ventilatorio debe ser apropiado.',
                explanation: 'Los antídotos específicos (naloxona, flumazenil) pueden revertir la depresión respiratoria.'
            }
        },
        {
            id: 'step-c-circulation-toxic',
            stepNumber: 3,
            title: 'C - Circulación en Intoxicación Compleja',
            description: 'Taquicardia irregular 145 lpm, QRS ancho en monitor, hipotensión 85/45, llenado capilar >3 seg.',
            options: [
                {
                    id: 'c-1',
                    text: 'Arritmia por antidepresivos tricíclicos, bicarbonato sódico IV, fluidos',
                    isCorrect: true,
                    consequence: 'Correcto. El bicarbonato mejora la arritmia y inicias soporte hemodinámico.'
                },
                {
                    id: 'c-2',
                    text: 'Cardioversión eléctrica inmediata por taquicardia sostenida',
                    isCorrect: false,
                    consequence: 'Contraindicado. Las arritmias por tricíclicos no responden a cardioversión.'
                },
                {
                    id: 'c-3',
                    text: 'Amiodarona IV para control de ritmo',
                    isCorrect: false,
                    consequence: 'Inapropiado. Los antiarrítmicos clase I están contraindicados.'
                }
            ],
            correctOptionId: 'c-1',
            feedback: {
                correct: 'Excelente. Has reconocido la toxicidad por tricíclicos y su tratamiento específico.',
                incorrect: 'Las arritmias por tricíclicos requieren bicarbonato sódico, no antiarrítmicos tradicionales.',
                explanation: 'El bicarbonato sódico revierte el bloqueo de canales de sodio causado por tricíclicos.'
            },
            criticalStep: true
        },
        {
            id: 'step-d-disability-toxic',
            stepNumber: 4,
            title: 'D - Déficit Neurológico en Intoxicación',
            description: 'Glasgow persiste en 6/15, pupilas mióticas, movimientos mioclónicos ocasionales.',
            options: [
                {
                    id: 'd-1',
                    text: 'Múltiples tóxicos depresores, dextrosa, naloxona, flumazenil secuencial',
                    isCorrect: true,
                    consequence: 'Correcto. Abordaje sistemático con antídotos específicos.'
                },
                {
                    id: 'd-2',
                    text: 'TCE probable, manitol y hiperventilación',
                    isCorrect: false,
                    consequence: 'Incorrecto. El contexto sugiere intoxicación, no trauma craneal.'
                },
                {
                    id: 'd-3',
                    text: 'Estado epiléptico, benzodiacepinas IV',
                    isCorrect: false,
                    consequence: 'Contraproducente. Puede empeorar la depresión respiratoria.'
                }
            ],
            correctOptionId: 'd-1',
            feedback: {
                correct: 'Perfecto. El manejo secuencial de antídotos es apropiado en intoxicación mixta.',
                incorrect: 'En intoxicación compleja, el enfoque debe ser toxicológico con antídotos específicos.',
                explanation: 'La administración secuencial permite identificar qué tóxico está causando cada síntoma.'
            }
        },
        {
            id: 'step-e-exposure-toxic',
            stepNumber: 5,
            title: 'E - Exposición y Estudios Toxicológicos',
            description: 'Temperatura 35.2°C, ictericia escleral, petequias, orina oscura. ¿Cómo procedes?',
            options: [
                {
                    id: 'e-1',
                    text: 'Falla hepática aguda por acetaminofén, laboratorios urgentes, N-acetilcisteína',
                    isCorrect: true,
                    consequence: 'Correcto. Identificas hepatotoxicidad e inicias antídoto específico.'
                },
                {
                    id: 'e-2',
                    text: 'Sepsis por broncoaspiración, hemocultivos y antibióticos',
                    isCorrect: false,
                    consequence: 'Prematuro. Los signos sugieren hepatotoxicidad, no sepsis inicial.'
                },
                {
                    id: 'e-3',
                    text: 'Coagulopatía primaria, plasma fresco congelado',
                    isCorrect: false,
                    consequence: 'Incompleto. Necesitas abordar la causa de la coagulopatía.'
                }
            ],
            correctOptionId: 'e-1',
            feedback: {
                correct: 'Excelente. Has conectado los signos clínicos con hepatotoxicidad por acetaminofén.',
                incorrect: 'La tríada ictericia-coagulopatía-encefalopatía sugiere falla hepática aguda.',
                explanation: 'N-acetilcisteína es efectiva incluso después de 24 horas en intoxicación por acetaminofén.'
            },
            criticalStep: true
        },
        {
            id: 'step-elimination',
            stepNumber: 6,
            title: 'Eliminación y Descontaminación',
            description: 'Paciente presenta 8 horas desde ingesta. ¿Cuál es tu estrategia de eliminación?',
            options: [
                {
                    id: 'el-1',
                    text: 'Carbón activado por SNG, diálisis por falla renal, hemoperfusión selectiva',
                    isCorrect: true,
                    consequence: 'Correcto. Enfoque multimodal apropiado para intoxicación tardía compleja.'
                },
                {
                    id: 'el-2',
                    text: 'Lavado gástrico urgente independientemente del tiempo',
                    isCorrect: false,
                    consequence: 'Inútil y riesgoso después de 8 horas. Contraindicado en paciente comatoso.'
                },
                {
                    id: 'el-3',
                    text: 'Solo diuresis forzada con manitol',
                    isCorrect: false,
                    consequence: 'Insuficiente e inapropiado para estos tóxicos específicos.'
                }
            ],
            correctOptionId: 'el-1',
            feedback: {
                correct: 'Perfecto. Has seleccionado métodos de eliminación apropiados para cada tóxico.',
                incorrect: 'En intoxicación tardía compleja, se requieren múltiples modalidades de eliminación.',
                explanation: 'Diferentes tóxicos requieren diferentes métodos: diálisis para acetaminofén, hemoperfusión para tricíclicos.'
            }
        },
        {
            id: 'step-monitoring',
            stepNumber: 7,
            title: 'Monitoreo y Cuidados Intensivos',
            description: 'Paciente en UCI. ¿Cuáles son tus prioridades de monitoreo continuo?',
            options: [
                {
                    id: 'mon-1',
                    text: 'Monitoreo cardiaco continuo, función hepática seriada, gases arteriales, balance hídrico',
                    isCorrect: true,
                    consequence: 'Correcto. Monitoreo integral para detectar deterioro precoz.'
                },
                {
                    id: 'mon-2',
                    text: 'Solo monitoreo neurológico hasta recuperación de consciencia',
                    isCorrect: false,
                    consequence: 'Insuficiente. La intoxicación multiorgánica requiere monitoreo integral.'
                },
                {
                    id: 'mon-3',
                    text: 'Enfoque principal en el soporte ventilatorio únicamente',
                    isCorrect: false,
                    consequence: 'Limitado. La falla multiorgánica requiere atención sistémica.'
                }
            ],
            correctOptionId: 'mon-1',
            feedback: {
                correct: 'Excelente. El monitoreo integral es crucial en intoxicación con falla multiorgánica.',
                incorrect: 'Las intoxicaciones complejas requieren vigilancia de múltiples sistemas simultáneamente.',
                explanation: 'La detección temprana de deterioro permite intervenciones oportunas que pueden salvar la vida.'
            }
        }
    ],
    learningObjectives: [
        'Manejar intoxicación compleja con falla multiorgánica',
        'Aplicar protocolo ABCDE en contexto toxicológico avanzado',
        'Reconocer síndromes toxicológicos específicos y sus antídotos',
        'Integrar múltiples modalidades de eliminación de tóxicos',
        'Coordinar cuidados intensivos en paciente crítico con intoxicación'
    ],
    difficulty: 'advanced',
    estimatedTime: '25-30 minutos'
};
