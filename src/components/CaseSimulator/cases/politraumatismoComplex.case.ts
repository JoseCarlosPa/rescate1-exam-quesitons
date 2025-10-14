import {SimulatorCase} from '../CaseSimulator.types';

export const politraumatismoComplexCase: SimulatorCase = {
    id: 'politraumatismo-complex-001',
    title: 'Politraumatismo Complejo con Shock',
    description: 'Paciente politraumatizado con múltiples lesiones y shock hipovolémico. Caso avanzado que requiere manejo complejo usando protocolo XABCDE.',
    scenario: 'Motociclista de 28 años víctima de colisión a alta velocidad contra vehículo. Paciente inconsciente, con múltiples lesiones evidentes: trauma craneoencefálico, tórax inestable, fractura expuesta de fémur y abundante sangrado de heridas múltiples.',
    patientInfo: {
        age: 28,
        gender: 'Masculino',
        chiefComplaint: 'Politraumatismo por accidente de motocicleta a alta velocidad',
        history: 'Sin antecedentes médicos conocidos. Mecanismo de alta energía con eyección del vehículo.'
    },
    initialVitalSigns: {
        'FC': '135 lpm (débil)',
        'PA': '85/45 mmHg',
        'FR': '28 rpm (irregular)',
        'SatO2': '88%',
        'Temp': '35.8°C'
    },
    glasgowScore: {
        expected: 6,
        timing: 'during_neurological',
        contextInfo: 'Durante la evaluación neurológica posterior a la estabilización inicial, el paciente abre los ojos solo al estímulo doloroso (2 puntos), no emite palabras sino solo gemidos incomprensibles (2 puntos), y presenta postura de decorticación al dolor (2 puntos). Total: 2+2+2=6. Esta puntuación indica trauma craneoencefálico severo.'
    },
    steps: [
        {
            id: 'step-x-hemorrhage',
            stepNumber: 1,
            title: 'X - Control de Hemorragia Exanguinante',
            description: 'Paciente con sangrado masivo de fractura expuesta de fémur y múltiples laceraciones. ¿Cuál es tu primera acción?',
            options: [
                {
                    id: 'x-1',
                    text: 'Aplicar torniquete en extremidad inferior y presión directa en otras heridas',
                    isCorrect: true,
                    consequence: 'Correcto. Control inmediato de hemorragia masiva para prevenir muerte por desangrado.'
                },
                {
                    id: 'x-2',
                    text: 'Evaluar vía aérea primero antes del control de sangrado',
                    isCorrect: false,
                    consequence: 'Error crítico. La hemorragia exanguinante mata en minutos, tiene prioridad absoluta.'
                },
                {
                    id: 'x-3',
                    text: 'Establecer acceso vascular para reanimación antes de control directo',
                    isCorrect: false,
                    consequence: 'Incorrecto. Primero detener el sangrado, luego reponer volumen.'
                }
            ],
            correctOptionId: 'x-1',
            feedback: {
                correct: 'Excelente. Has priorizado correctamente el control de hemorragia masiva.',
                incorrect: 'La X del XABCDE tiene prioridad absoluta. Sin control de sangrado, el paciente morirá.',
                explanation: 'La hemorragia exanguinante puede causar muerte en 3-5 minutos, tiene prioridad sobre todo.'
            },
            criticalStep: true
        },
        {
            id: 'step-a-airway',
            stepNumber: 2,
            title: 'A - Vía Aérea con Control Cervical',
            description: 'Paciente inconsciente con trauma facial evidente. ¿Cómo manejas la vía aérea?',
            options: [
                {
                    id: 'a-1',
                    text: 'Intubación orotraqueal con inmovilización cervical manual',
                    isCorrect: true,
                    consequence: 'Correcto. Vía aérea definitiva necesaria en paciente inconsciente con trauma facial.'
                },
                {
                    id: 'a-2',
                    text: 'Maniobra frente-mentón y cánula orofaríngea',
                    isCorrect: false,
                    consequence: 'Insuficiente. Paciente inconsciente con trauma facial requiere vía aérea definitiva.'
                },
                {
                    id: 'a-3',
                    text: 'Cricotiroidotomía inmediata por trauma facial',
                    isCorrect: false,
                    consequence: 'Prematuramente invasivo. Intentar intubación orotraqueal primero.'
                }
            ],
            correctOptionId: 'a-1',
            feedback: {
                correct: 'Perfecto. Has elegido la vía aérea definitiva apropiada con protección cervical.',
                incorrect: 'Paciente inconsciente con trauma facial severo requiere intubación para proteger vía aérea.',
                explanation: 'La intubación protege la vía aérea y permite ventilación controlada en trauma craneoencefálico severo.'
            },
            criticalStep: true
        },
        {
            id: 'step-b-breathing',
            stepNumber: 3,
            title: 'B - Respiración y Ventilación',
            description: 'Tras intubación, notas tórax inestable derecho y disminución de ruidos respiratorios. SatO2 88%.',
            options: [
                {
                    id: 'b-1',
                    text: 'Descompresión torácica derecha por neumotórax a tensión',
                    isCorrect: true,
                    consequence: 'Correcto. Neumotórax a tensión es emergencia inmediata que requiere descompresión.'
                },
                {
                    id: 'b-2',
                    text: 'Aumentar FiO2 y solicitar radiografía de tórax',
                    isCorrect: false,
                    consequence: 'Demasiado lento. Los signos sugieren neumotórax a tensión que requiere acción inmediata.'
                },
                {
                    id: 'b-3',
                    text: 'Fijación externa del tórax inestable',
                    isCorrect: false,
                    consequence: 'No es la prioridad. Primero resolver el compromiso ventilatorio agudo.'
                }
            ],
            correctOptionId: 'b-1',
            feedback: {
                correct: 'Excelente. Has identificado y tratado una emergencia que compromete la vida.',
                incorrect: 'El neumotórax a tensión causa muerte rápida por compromiso cardiorrespiratorio.',
                explanation: 'La descompresión torácica inmediata es vital en neumotórax a tensión post-trauma.'
            },
            criticalStep: true
        },
        {
            id: 'step-c-circulation',
            stepNumber: 4,
            title: 'C - Circulación y Control de Shock',
            description: 'Paciente en shock clase III (FC 135, PA 85/45). Hemorragia controlada. ¿Cuál es tu manejo circulatorio?',
            options: [
                {
                    id: 'c-1',
                    text: 'Acceso vascular calibre 14G, reanimación controlada con cristaloides y sangre',
                    isCorrect: true,
                    consequence: 'Correcto. Reanimación hemostática balanceada para trauma con sangrado significativo.'
                },
                {
                    id: 'c-2',
                    text: 'Reanimación agresiva con cristaloides hasta normalizar tensión',
                    isCorrect: false,
                    consequence: 'Incorrecto. Puede causar coagulopatía dilucional y re-sangrado.'
                },
                {
                    id: 'c-3',
                    text: 'Solo hemoderivados, evitar cristaloides completamente',
                    isCorrect: false,
                    consequence: 'Muy restrictivo. Combinación balanceada es lo apropiado.'
                }
            ],
            correctOptionId: 'c-1',
            feedback: {
                correct: 'Perfecto. Has aplicado los principios de reanimación hemostática moderna.',
                incorrect: 'La reanimación balanceada evita coagulopatía mientras restaura perfusión.',
                explanation: 'La reanimación controlada con balance cristaloides/hemoderivados optimiza la supervivencia.'
            },
            criticalStep: true
        },
        {
            id: 'step-d-disability',
            stepNumber: 5,
            title: 'D - Déficit Neurológico',
            description: 'Evalúas el estado neurológico. ¿Cuáles son tus hallazgos y manejo?',
            options: [
                {
                    id: 'd-1',
                    text: 'Glasgow severo, signos de hipertensión endocraneana, manejar PIC',
                    isCorrect: true,
                    consequence: 'Correcto. Trauma craneoencefálico severo requiere manejo de presión intracraneal.'
                },
                {
                    id: 'd-2',
                    text: 'Deficit focal por lesión medular, inmovilización completa',
                    isCorrect: false,
                    consequence: 'Aunque importante, el manejo de PIC tiene prioridad en trauma craneal severo.'
                },
                {
                    id: 'd-3',
                    text: 'Alteración secundaria a shock, mejorar perfusión primero',
                    isCorrect: false,
                    consequence: 'Incorrecto. Los signos indican trauma craneoencefálico primario severo.'
                }
            ],
            correctOptionId: 'd-1',
            feedback: {
                correct: 'Excelente. Has reconocido trauma craneoencefálico severo con hipertensión endocraneana.',
                incorrect: 'Los signos neurológicos indican trauma craneoencefálico primario que requiere manejo específico.',
                explanation: 'El manejo temprano de la presión intracraneal es crucial para prevenir daño secundario.'
            },
            criticalStep: true
        },
        {
            id: 'step-e-exposure',
            stepNumber: 6,
            title: 'E - Exposición y Prevención de Hipotermia',
            description: 'Temperatura 35.8°C. ¿Cómo manejas la exposición y temperatura?',
            options: [
                {
                    id: 'e-1',
                    text: 'Exposición completa para evaluación, recalentamiento activo inmediato',
                    isCorrect: true,
                    consequence: 'Correcto. Evaluación completa con prevención agresiva de hipotermia.'
                },
                {
                    id: 'e-2',
                    text: 'Mantener cubierto para conservar calor, evaluación limitada',
                    isCorrect: false,
                    consequence: 'Incorrecto. La evaluación completa es crítica en politraumatismo.'
                },
                {
                    id: 'e-3',
                    text: 'La hipotermia es secundaria, enfocar en otras prioridades',
                    isCorrect: false,
                    consequence: 'Error. La hipotermia empeora coagulopatía y mortalidad en trauma.'
                }
            ],
            correctOptionId: 'e-1',
            feedback: {
                correct: 'Perfecto. Has balanceado la evaluación completa con la prevención de hipotermia.',
                incorrect: 'La hipotermia es parte de la tríada letal del trauma y debe prevenirse agresivamente.',
                explanation: 'La hipotermia, acidosis y coagulopatía forman la tríada letal que aumenta mortalidad.'
            }
        },
        {
            id: 'step-definitive-care',
            stepNumber: 7,
            title: 'Cuidado Definitivo y Disposición',
            description: 'Paciente estabilizado pero crítico. ¿Cuál es la disposición apropiada?',
            options: [
                {
                    id: 'def-1',
                    text: 'Traslado inmediato a centro de trauma nivel I con notificación previa',
                    isCorrect: true,
                    consequence: 'Correcto. Politraumatismo complejo requiere centro de trauma especializado.'
                },
                {
                    id: 'def-2',
                    text: 'Completar estudios diagnósticos antes del traslado',
                    isCorrect: false,
                    consequence: 'Retraso innecesario. El tratamiento definitivo es en centro de trauma.'
                },
                {
                    id: 'def-3',
                    text: 'Manejo local hasta estabilización completa',
                    isCorrect: false,
                    consequence: 'Inadecuado. Este caso requiere recursos de centro de trauma especializado.'
                }
            ],
            correctOptionId: 'def-1',
            feedback: {
                correct: 'Excelente. Has reconocido la necesidad de cuidado especializado en trauma.',
                incorrect: 'El politraumatismo complejo requiere recursos y experiencia de centros especializados.',
                explanation: 'Los centros de trauma nivel I tienen recursos multidisciplinarios necesarios para casos complejos.'
            }
        }
    ],
    learningObjectives: [
        'Aplicar protocolo XABCDE en politraumatismo severo',
        'Priorizar intervenciones que salvan vidas en trauma complejo',
        'Reconocer y manejar emergencias torácicas',
        'Aplicar principios de reanimación hemostática',
        'Manejar trauma craneoencefálico severo',
        'Prevenir y tratar la tríada letal del trauma'
    ],
    difficulty: 'advanced',
    estimatedTime: '25-30 minutos'
};
