import {SimulatorCase} from '../CaseSimulator.types';

export const diabeticoHipoglicemicoCase: SimulatorCase = {
    id: 'diabetico-hipoglicemico-001',
    title: 'Crisis Hipoglicémica en Diabético',
    description: 'Paciente diabético con alteración del estado de consciencia por hipoglicemia. Caso intermedio para protocolo ABCDE.',
    scenario: 'Hombre de 45 años encontrado por familiares con confusión y sudoración profusa. Antecedente de diabetes tipo 1, habitualmente bien controlada. Familia refiere que no desayunó pero se aplicó su insulina matinal.',
    patientInfo: {
        age: 45,
        gender: 'Masculino',
        chiefComplaint: 'Alteración del estado de consciencia, confusión y sudoración',
        history: 'Diabetes tipo 1 de 15 años de evolución. Tratamiento con insulina NPH y cristalina. Último HbA1c 7.2%. No otras comorbilidades.'
    },
    initialVitalSigns: {
        'FC': '110 lpm',
        'PA': '135/85 mmHg',
        'FR': '20 rpm',
        'SatO2': '98%',
        'Temp': '36.2°C'
    },
    glasgowScore: {
        expected: 12,
        timing: 'during_neurological',
        contextInfo: 'Durante la evaluación neurológica, el paciente abre los ojos espontáneamente (4 puntos), pero está confuso y desorientado en tiempo y lugar, emite palabras coherentes pero inapropiadas para el contexto (3 puntos). Motoramente localiza el dolor cuando se le aplica estímulo (5 puntos). Total: 4+3+5=12.'
    },
    steps: [
        {
            id: 'step-a-airway',
            stepNumber: 1,
            title: 'A - Vía Aérea',
            description: 'Paciente confuso pero despierto, con abundante sudoración. ¿Cómo evalúas la vía aérea?',
            options: [

                {
                    id: 'a-2',
                    text: 'Posición de seguridad por riesgo de aspiración debido a confusión',
                    isCorrect: false,
                    consequence: 'Innecesario en este momento. El paciente mantiene reflejos protectores.'
                },
                {
                    id: 'a-3',
                    text: 'Aspirar secreciones orales abundantes',
                    isCorrect: false,
                    consequence: 'No hay secreciones patológicas. La sudoración no compromete vía aérea.'
                },
                {
                    id: 'a-1',
                    text: 'Vía aérea permeable, paciente responde verbalmente aunque confuso',
                    isCorrect: true,
                    consequence: 'Correcto. Aunque confuso, mantiene vía aérea permeable y puede vocalizar.'
                },
            ],
            correctOptionId: 'a-1',
            feedback: {
                correct: 'Excelente. Has evaluado correctamente que la vía aérea está permeable.',
                incorrect: 'Un paciente que puede hablar, aunque confuso, mantiene vía aérea permeable.',
                explanation: 'La confusión por hipoglicemia no compromete inmediatamente la vía aérea si el paciente está despierto.'
            }
        },
        {
            id: 'step-b-breathing',
            stepNumber: 2,
            title: 'B - Respiración',
            description: 'Evalúa el patrón respiratorio. Frecuencia 20 rpm, SatO2 98%.',
            options: [

                {
                    id: 'b-2',
                    text: 'Administrar oxígeno por sospecha de compromiso metabólico',
                    isCorrect: false,
                    consequence: 'Innecesario. SatO2 98% es normal, no hay hipoxemia.'
                },
                {
                    id: 'b-1',
                    text: 'Respiración ligeramente taquipneica pero adecuada, monitorizar',
                    isCorrect: true,
                    consequence: 'Correcto. Taquipnea leve secundaria al estrés metabólico, pero oxigenación adecuada.'
                },
                {
                    id: 'b-3',
                    text: 'Buscar signos de Kussmaul por cetoacidosis diabética',
                    isCorrect: false,
                    consequence: 'Incorrecto. Los síntomas sugieren hipoglicemia, no cetoacidosis.'
                }
            ],
            correctOptionId: 'b-1',
            feedback: {
                correct: 'Perfecto. Has reconocido que la respiración es adecuada con taquipnea reactiva.',
                incorrect: 'La taquipnea leve es común en estados de estrés metabólico pero la oxigenación es normal.',
                explanation: 'En hipoglicemia, la taquipnea es una respuesta compensatoria al estrés, no a hipoxemia.'
            }
        },
        {
            id: 'step-c-circulation',
            stepNumber: 3,
            title: 'C - Circulación',
            description: 'Paciente taquicárdico (110 lpm), con sudoración profusa. ¿Cuál es tu evaluación circulatoria?',
            options: [
                {
                    id: 'c-1',
                    text: 'Taquicardia y sudoración secundarias a hipoglicemia, establecer acceso IV',
                    isCorrect: true,
                    consequence: 'Correcto. Signos adrenérgicos típicos de hipoglicemia. Acceso IV para tratamiento.'
                },
                {
                    id: 'c-2',
                    text: 'Signos de shock, iniciar reanimación con cristaloides',
                    isCorrect: false,
                    consequence: 'Incorrecto. No hay signos de shock hipovolémico real.'
                },
                {
                    id: 'c-3',
                    text: 'Circulación normal, la sudoración es por nerviosismo',
                    isCorrect: false,
                    consequence: 'Incorrecto. La sudoración profusa es un signo clásico de hipoglicemia.'
                }
            ],
            correctOptionId: 'c-1',
            feedback: {
                correct: 'Excelente. Has identificado los signos adrenérgicos de hipoglicemia.',
                incorrect: 'La taquicardia y sudoración profusa son signos típicos de descarga adrenérgica por hipoglicemia.',
                explanation: 'La hipoglicemia activa el sistema simpático causando taquicardia, sudoración y temblor.'
            },
            criticalStep: true
        },
        {
            id: 'step-d-disability',
            stepNumber: 4,
            title: 'D - Déficit Neurológico',
            description: 'Paciente confuso, desorientado, pero despierto. ¿Cuál es tu evaluación neurológica?',
            options: [

                {
                    id: 'd-2',
                    text: 'Posible ACV, evaluar signos focales y activar código ictus',
                    isCorrect: false,
                    consequence: 'Prematuro. Los antecedentes y signos sugieren causa metabólica.'
                },
                {
                    id: 'd-1',
                    text: 'Alteración neurológica por hipoglicemia, medir glicemia inmediatamente',
                    isCorrect: true,
                    consequence: 'Correcto. La confusión con signos adrenérgicos sugiere fuertemente hipoglicemia.'
                },
                {
                    id: 'd-3',
                    text: 'Intoxicación o consumo de drogas, interrogar familiares',
                    isCorrect: false,
                    consequence: 'Menos probable dado el contexto diabético y signos específicos.'
                }
            ],
            correctOptionId: 'd-1',
            feedback: {
                correct: 'Perfecto. Has priorizado correctamente la evaluación de glicemia.',
                incorrect: 'En un diabético con confusión y signos adrenérgicos, la hipoglicemia es la causa más probable.',
                explanation: 'La triada de confusión + sudoración + antecedente diabético = hipoglicemia hasta demostrar lo contrario.'
            },
            criticalStep: true
        },
        {
            id: 'step-glucose-check',
            stepNumber: 5,
            title: 'Medición de Glicemia',
            description: 'La glicemia capilar resulta en 35 mg/dl. ¿Cuál es tu acción inmediata?',
            options: [

                {
                    id: 'gluc-2',
                    text: 'Intentar administración oral de azúcar primero',
                    isCorrect: false,
                    consequence: 'Riesgoso. Paciente confuso tiene riesgo de aspiración con vía oral.'
                },
                {
                    id: 'gluc-3',
                    text: 'Administrar glucagón intramuscular',
                    isCorrect: false,
                    consequence: 'Menos efectivo y más lento que dextrosa IV con acceso disponible.'
                },
                {
                    id: 'gluc-1',
                    text: 'Administrar dextrosa 50% IV inmediatamente',
                    isCorrect: true,
                    consequence: 'Correcto. Hipoglicemia severa requiere dextrosa IV inmediata.'
                },
            ],
            correctOptionId: 'gluc-1',
            feedback: {
                correct: 'Excelente. Has elegido el tratamiento más rápido y efectivo.',
                incorrect: 'Con glicemia < 50 mg/dl y acceso IV, la dextrosa endovenosa es el tratamiento de elección.',
                explanation: 'La dextrosa 50% IV es el tratamiento más rápido para hipoglicemia severa con acceso vascular.'
            },
            criticalStep: true
        },
        {
            id: 'step-e-exposure',
            stepNumber: 6,
            title: 'E - Exposición/Reevaluación',
            description: 'Tras administrar dextrosa, ¿cómo procedes con la evaluación?',
            options: [
                {
                    id: 'e-1',
                    text: 'Monitorizar respuesta neurológica y repetir glicemia en 5-10 minutos',
                    isCorrect: true,
                    consequence: 'Correcto. Monitoreo de respuesta al tratamiento y control glicémico.'
                },
                {
                    id: 'e-2',
                    text: 'Exposición corporal completa para buscar sitios de inyección infectados',
                    isCorrect: false,
                    consequence: 'Innecesario como prioridad inmediata tras tratar hipoglicemia.'
                },
                {
                    id: 'e-3',
                    text: 'Buscar medic alert o dispositivos de monitoreo continuo',
                    isCorrect: false,
                    consequence: 'Útil pero no prioritario tras el tratamiento inicial.'
                }
            ],
            correctOptionId: 'e-1',
            feedback: {
                correct: 'Perfecto. El monitoreo post-tratamiento es fundamental.',
                incorrect: 'Tras tratar hipoglicemia, la prioridad es evaluar la respuesta al tratamiento.',
                explanation: 'La mejoría neurológica y normalización glicémica confirman el diagnóstico y tratamiento efectivo.'
            }
        },
        {
            id: 'step-follow-up',
            stepNumber: 7,
            title: 'Seguimiento y Educación',
            description: 'Paciente mejora significativamente tras dextrosa. ¿Cuáles son los siguientes pasos?',
            options: [

                {
                    id: 'f-2',
                    text: 'Alta inmediata tras mejoría neurológica',
                    isCorrect: false,
                    consequence: 'Prematuro. Requiere estabilización y prevención de recurrencia.'
                },
                {
                    id: 'f-1',
                    text: 'Alimentación oral, educación sobre prevención, ajuste de insulina',
                    isCorrect: true,
                    consequence: 'Correcto. Mantenimiento de glicemia y prevención de recurrencia.'
                },
                {
                    id: 'f-3',
                    text: 'Hospitalización para estudio de causa de hipoglicemia',
                    isCorrect: false,
                    consequence: 'Innecesario. Causa clara: insulina sin ingesta alimentaria.'
                }
            ],
            correctOptionId: 'f-1',
            feedback: {
                correct: 'Excelente. Has considerado tanto el tratamiento inmediato como la prevención.',
                incorrect: 'Es importante asegurar estabilidad glicémica y educar para prevenir recurrencias.',
                explanation: 'La educación diabetológica y ajuste terapéutico previenen futuras crisis hipoglicémicas.'
            }
        }
    ],
    learningObjectives: [
        'Reconocer signos y síntomas de hipoglicemia severa',
        'Aplicar protocolo ABCDE en emergencias metabólicas',
        'Priorizar medición de glicemia en pacientes diabéticos con alteración neurológica',
        'Administrar tratamiento apropiado para hipoglicemia severa',
        'Comprender la importancia del seguimiento y educación'
    ],
    difficulty: 'intermediate',
    estimatedTime: '15-20 minutos'
};
