import { SimulatorCase } from '../CaseSimulator.types';

export const convulsionFebrilCase: SimulatorCase = {
  id: 'convulsion-febril-001',
  title: 'Convulsión Febril Pediátrica',
  description: 'Lactante con convulsión febril simple. Evaluación usando protocolo ABCDE básico.',
  scenario: 'Niña de 18 meses que presenta convulsión tónico-clónica generalizada de 2 minutos de duración en contexto de fiebre. Al llegar, la convulsión ya cesó y la niña está somnolienta pero despierta.',
  patientInfo: {
    age: 1.5,
    gender: 'Femenino',
    chiefComplaint: 'Convulsión febril que ya cedió',
    history: 'Previamente sana. Cuadro febril desde hace 1 día. Esquema básico de vacunación completo.'
  },
  initialVitalSigns: {
    'FC': '150 lpm',
    'PA': '85/50 mmHg',
    'FR': '30 rpm',
    'SatO2': '98%',
    'Temp': '39.2°C',
    'Glasgow': '14/15'
  },
  steps: [
    {
      id: 'step-a-airway-simple',
      stepNumber: 1,
      title: 'A - Vía Aérea',
      description: 'La niña está despierta pero somnolienta. Evalúa la permeabilidad de su vía aérea.',
      options: [
        {
          id: 'a-1',
          text: 'Vía aérea permeable, responde al llamado y llora',
          isCorrect: true,
          consequence: 'Correcto. La vía aérea está permeable, la niña puede llorar normalmente.'
        },
        {
          id: 'a-2',
          text: 'Posición lateral por riesgo de nueva convulsión',
          isCorrect: false,
          consequence: 'Innecesario. La convulsión ya cesó y la vía aérea está permeable.'
        },
        {
          id: 'a-3',
          text: 'Aspirar secreciones preventivamente',
          isCorrect: false,
          consequence: 'No indicado. No hay secreciones y puede agitar a la paciente.'
        }
      ],
      correctOptionId: 'a-1',
      feedback: {
        correct: 'Excelente. Una niña que llora tiene vía aérea completamente permeable.',
        incorrect: 'Si un niño puede llorar o hablar, su vía aérea está funcionando correctamente.',
        explanation: 'El llanto requiere coordinación respiratoria completa, indicando vía aérea intacta.'
      }
    },
    {
      id: 'step-b-breathing-simple',
      stepNumber: 2,
      title: 'B - Respiración',
      description: 'La respiración es regular, simétrica, con saturación del 98%. Leve taquipnea.',
      options: [
        {
          id: 'b-1',
          text: 'Respiración normal para la edad y fiebre, no requiere intervención',
          isCorrect: true,
          consequence: 'Correcto. La taquipnea leve es esperada por la fiebre.'
        },
        {
          id: 'b-2',
          text: 'Administrar oxígeno por la convulsión previa',
          isCorrect: false,
          consequence: 'Innecesario. La SatO2 es normal y no hay compromiso respiratorio.'
        },
        {
          id: 'b-3',
          text: 'Monitorizar estrechamente por posible depresión respiratoria',
          isCorrect: false,
          consequence: 'Excesivo. No hay indicadores de compromiso respiratorio.'
        }
      ],
      correctOptionId: 'b-1',
      feedback: {
        correct: 'Perfecto. Has reconocido que la respiración es apropiada para la situación.',
        incorrect: 'En convulsión febril simple sin compromiso respiratorio, no se requiere intervención.',
        explanation: 'La taquipnea leve en contexto febril es fisiológica y no requiere tratamiento.'
      }
    },
    {
      id: 'step-c-circulation-simple',
      stepNumber: 3,
      title: 'C - Circulación',
      description: 'Taquicardia de 150 lpm, pulsos fuertes, perfusión distal buena, piel caliente.',
      options: [
        {
          id: 'c-1',
          text: 'Taquicardia febril fisiológica, buena perfusión, solo monitorizar',
          isCorrect: true,
          consequence: 'Correcto. La taquicardia es secundaria a la fiebre.'
        },
        {
          id: 'c-2',
          text: 'Establecer acceso vascular por la convulsión',
          isCorrect: false,
          consequence: 'Innecesario en convulsión febril simple sin complicaciones.'
        },
        {
          id: 'c-3',
          text: 'Signos de deshidratación, iniciar hidratación',
          isCorrect: false,
          consequence: 'Incorrecto. La perfusión es buena, no hay signos de deshidratación.'
        }
      ],
      correctOptionId: 'c-1',
      feedback: {
        correct: 'Excelente. Has diferenciado taquicardia fisiológica de patológica.',
        incorrect: 'La taquicardia proporcional a la fiebre con buena perfusión es normal.',
        explanation: 'Por cada grado de fiebre, la FC aumenta aproximadamente 10-15 lpm en niños.'
      }
    },
    {
      id: 'step-d-disability-simple',
      stepNumber: 4,
      title: 'D - Déficit Neurológico',
      description: 'Glasgow 14/15, somnolienta pero despierta al estímulo, pupilas reactivas.',
      options: [
        {
          id: 'd-1',
          text: 'Estado post-ictal normal, Glasgow apropiado para la situación',
          isCorrect: true,
          consequence: 'Correcto. La somnolencia post-ictal es esperada y transitoria.'
        },
        {
          id: 'd-2',
          text: 'Alteración neurológica preocupante, necesita estudios urgentes',
          isCorrect: false,
          consequence: 'Incorrecto. El estado post-ictal es normal en convulsión febril.'
        },
        {
          id: 'd-3',
          text: 'Evaluar glicemia por posible hipoglicemia',
          isCorrect: false,
          consequence: 'No prioritario. La convulsión febril simple no sugiere hipoglicemia.'
        }
      ],
      correctOptionId: 'd-1',
      feedback: {
        correct: 'Perfecto. Has reconocido el estado post-ictal normal.',
        incorrect: 'Después de una convulsión, es normal que los niños estén somnolientos temporalmente.',
        explanation: 'El período post-ictal incluye somnolencia transitoria que se resuelve gradualmente.'
      }
    },
    {
      id: 'step-e-exposure-simple',
      stepNumber: 5,
      title: 'E - Exposición/Examen',
      description: 'Examen físico para identificar fuente de fiebre y descartar complicaciones.',
      options: [
        {
          id: 'e-1',
          text: 'Buscar foco infeccioso, otoscopia, examen de garganta',
          isCorrect: true,
          consequence: 'Correcto. Identificas otitis media como probable causa de la fiebre.'
        },
        {
          id: 'e-2',
          text: 'Búsqueda exhaustiva de signos meníngeos',
          isCorrect: false,
          consequence: 'Excesivo para convulsión febril simple sin signos de alarma.'
        },
        {
          id: 'e-3',
          text: 'Exposición mínima para evitar enfriamiento',
          isCorrect: false,
          consequence: 'Insuficiente. Es importante identificar la fuente de fiebre.'
        }
      ],
      correctOptionId: 'e-1',
      feedback: {
        correct: 'Excelente. Identificar la fuente de fiebre es clave en convulsión febril.',
        incorrect: 'En convulsión febril, encontrar y tratar la causa de la fiebre es fundamental.',
        explanation: 'Las convulsiones febriles son secundarias a la fiebre, por lo que tratar la causa subyacente es importante.'
      }
    },
    {
      id: 'step-management-simple',
      stepNumber: 6,
      title: 'Manejo y Tratamiento',
      description: 'Basado en tu evaluación, ¿cuál es el plan de manejo más apropiado?',
      options: [
        {
          id: 'mg-1',
          text: 'Antipirético, educación a padres, seguimiento ambulatorio',
          isCorrect: true,
          consequence: 'Correcto. Manejo apropiado para convulsión febril simple.'
        },
        {
          id: 'mg-2',
          text: 'Hospitalización para observación neurológica',
          isCorrect: false,
          consequence: 'Innecesario. Las convulsiones febriles simples no requieren hospitalización.'
        },
        {
          id: 'mg-3',
          text: 'Anticonvulsivante profiláctico',
          isCorrect: false,
          consequence: 'No indicado. Los anticonvulsivantes no previenen convulsiones febriles.'
        }
      ],
      correctOptionId: 'mg-1',
      feedback: {
        correct: 'Perfecto. Has aplicado el manejo apropiado para convulsión febril simple.',
        incorrect: 'Las convulsiones febriles simples tienen pronóstico excelente y manejo ambulatorio.',
        explanation: 'La educación familiar sobre convulsiones febriles y control de fiebre es suficiente.'
      }
    }
  ],
  learningObjectives: [
    'Aplicar protocolo ABCDE en pediatría básica',
    'Reconocer convulsión febril simple vs complicada',
    'Diferenciar hallazgos normales de patológicos en niños',
    'Identificar cuándo la hospitalización NO es necesaria',
    'Educar sobre el pronóstico benigno de convulsiones febriles simples'
  ],
  difficulty: 'beginner',
  estimatedTime: '8-10 minutos'
};
