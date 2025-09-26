import { SimulatorCase } from '../CaseSimulator.types';

export const pediatriaCrupCase: SimulatorCase = {
  id: 'pediatria-crup-001',
  title: 'Crup Laríngeo Pediátrico',
  description: 'Lactante con dificultad respiratoria y estridor. Evaluación usando protocolo ABCDE.',
  scenario: 'Niño de 2 años con cuadro de 2 días de evolución caracterizado por tos "perruna", estridor inspiratorio y dificultad respiratoria que empeora durante la noche.',
  patientInfo: {
    age: 2,
    gender: 'Masculino',
    chiefComplaint: 'Dificultad respiratoria y tos "perruna"',
    history: 'Previamente sano. Cuadro catarral 3 días previos. Sin antecedentes de intubación o cirugías.'
  },
  initialVitalSigns: {
    'FC': '140 lpm',
    'PA': '90/55 mmHg',
    'FR': '35 rpm',
    'SatO2': '93%',
    'Temp': '38.2°C',
    'Glasgow': '15/15'
  },
  steps: [
    {
      id: 'step-a-airway',
      stepNumber: 1,
      title: 'A - Vía Aérea',
      description: 'Evalúa la permeabilidad de la vía aérea. El niño presenta estridor inspiratorio audible.',
      options: [
        {
          id: 'a-1',
          text: 'Vía aérea comprometida por inflamación laríngea, mantener al niño calmado',
          isCorrect: true,
          consequence: 'Correcto. El estridor indica obstrucción parcial. Mantener calma es clave.'
        },
        {
          id: 'a-2',
          text: 'Realizar laringoscopía inmediata para evaluar laringe',
          isCorrect: false,
          consequence: 'Peligroso. Puede precipitar obstrucción completa por aumento de inflamación.'
        },
        {
          id: 'a-3',
          text: 'Vía aérea normal, el estridor no es significativo',
          isCorrect: false,
          consequence: 'Incorrecto. El estridor siempre indica compromiso de vía aérea.'
        }
      ],
      correctOptionId: 'a-1',
      feedback: {
        correct: 'Excelente. Has reconocido el compromiso de vía aérea y la importancia de mantener al paciente tranquilo.',
        incorrect: 'En pediatría con estridor, cualquier agitación puede empeorar la obstrucción.',
        explanation: 'El crup causa inflamación laríngea. La agitación aumenta el trabajo respiratorio y puede precipitar obstrucción completa.'
      }
    },
    {
      id: 'step-b-breathing',
      stepNumber: 2,
      title: 'B - Respiración',
      description: 'Evalúa el patrón respiratorio. Observas tiraje intercostal y subcostal con SatO2 del 93%.',
      options: [
        {
          id: 'b-1',
          text: 'Dificultad respiratoria moderada, administrar oxígeno humidificado',
          isCorrect: true,
          consequence: 'Correcto. Oxígeno húmedo mejora la oxigenación sin resecar las vías aéreas.'
        },
        {
          id: 'b-2',
          text: 'Iniciar ventilación con bolsa-mascarilla inmediatamente',
          isCorrect: false,
          consequence: 'Innecesario y peligroso. Puede aumentar la agitación y empeorar obstrucción.'
        },
        {
          id: 'b-3',
          text: 'Respiración normal para la edad, no intervenir',
          isCorrect: false,
          consequence: 'Incorrecto. Hay signos claros de dificultad respiratoria que requieren intervención.'
        }
      ],
      correctOptionId: 'b-1',
      feedback: {
        correct: 'Perfecto. El oxígeno humidificado es el tratamiento inicial apropiado para el crup.',
        incorrect: 'Los signos de trabajo respiratorio en crup requieren oxígeno, preferiblemente humidificado.',
        explanation: 'El vapor húmedo ayuda a reducir la inflamación laríngea y mejora el intercambio gaseoso.'
      }
    },
    {
      id: 'step-c-circulation',
      stepNumber: 3,
      title: 'C - Circulación',
      description: 'Evalúa el estado hemodinámico. El niño está taquicárdico pero con pulsos fuertes.',
      options: [
        {
          id: 'c-1',
          text: 'Taquicardia compensatoria por fiebre y trabajo respiratorio, monitorizar',
          isCorrect: true,
          consequence: 'Correcto. La taquicardia es secundaria a fiebre e hipoxia leve.'
        },
        {
          id: 'c-2',
          text: 'Signos de shock, iniciar reanimación con cristaloides',
          isCorrect: false,
          consequence: 'Incorrecto. No hay signos de shock, la taquicardia es compensatoria.'
        },
        {
          id: 'c-3',
          text: 'Establecer acceso vascular inmediato para medicamentos',
          isCorrect: false,
          consequence: 'Innecesario inicialmente. Puede aumentar la agitación del niño.'
        }
      ],
      correctOptionId: 'c-1',
      feedback: {
        correct: 'Excelente. Has identificado correctamente que la taquicardia es compensatoria.',
        incorrect: 'En crup, la taquicardia usualmente es secundaria a fiebre e hipoxia, no a shock.',
        explanation: 'Los niños compensan muy bien. La taquicardia con pulsos fuertes indica compensación, no shock.'
      }
    },
    {
      id: 'step-d-disability',
      stepNumber: 4,
      title: 'D - Déficit Neurológico',
      description: 'Evalúa el estado neurológico. El niño está irritable pero responde apropiadamente.',
      options: [
        {
          id: 'd-1',
          text: 'Irritabilidad apropiada para la edad y situación, neurológicamente intacto',
          isCorrect: true,
          consequence: 'Correcto. La irritabilidad es esperada en un niño con dificultad respiratoria.'
        },
        {
          id: 'd-2',
          text: 'Alteración neurológica significativa, evaluar hipoxia severa',
          isCorrect: false,
          consequence: 'Incorrecto. El niño mantiene respuesta apropiada para su edad.'
        },
        {
          id: 'd-3',
          text: 'Letargia preocupante, considerar intubación inmediata',
          isCorrect: false,
          consequence: 'Incorrecto. El niño está irritable, no letárgico.'
        }
      ],
      correctOptionId: 'd-1',
      feedback: {
        correct: 'Perfecto. Has diferenciado entre irritabilidad normal y alteración neurológica patológica.',
        incorrect: 'En pediatría, la irritabilidad puede ser normal ante estrés, enfermedad o hipoxia leve.',
        explanation: 'Un niño que responde e interactúa, aunque irritable, mantiene función neurológica adecuada.'
      }
    },
    {
      id: 'step-e-exposure',
      stepNumber: 5,
      title: 'E - Exposición/Examen',
      description: 'Exposición controlada manteniendo temperatura. Evalúas signos específicos del crup.',
      options: [
        {
          id: 'e-1',
          text: 'Examinar cuello y tórax, evaluar grado de severidad del crup',
          isCorrect: true,
          consequence: 'Correcto. Identificas crup moderado por estridor en reposo y tiraje.'
        },
        {
          id: 'e-2',
          text: 'Exposición mínima para evitar enfriamiento',
          isCorrect: false,
          consequence: 'Incompleto. Es necesario evaluar signos específicos para gradificar severidad.'
        },
        {
          id: 'e-3',
          text: 'Buscar signos de otras infecciones respiratorias',
          isCorrect: false,
          consequence: 'Secundario. El foco debe estar en evaluar la severidad del crup presente.'
        }
      ],
      correctOptionId: 'e-1',
      feedback: {
        correct: 'Excelente. La gradificación de severidad del crup es crucial para el manejo apropiado.',
        incorrect: 'Es esencial determinar si el crup es leve, moderado o severo para guiar el tratamiento.',
        explanation: 'La escala de severidad del crup (Westley) guía decisiones sobre esteroides, epinefrina y hospitalización.'
      }
    },
    {
      id: 'step-treatment',
      stepNumber: 6,
      title: 'Tratamiento Específico',
      description: 'Basado en tu evaluación ABCDE, ¿cuál es el tratamiento más apropiado?',
      options: [
        {
          id: 't-1',
          text: 'Dexametasona oral/IM y considerar epinefrina nebulizada',
          isCorrect: true,
          consequence: 'Correcto. Tratamiento estándar para crup moderado.'
        },
        {
          id: 't-2',
          text: 'Solo observación y medidas de soporte',
          isCorrect: false,
          consequence: 'Insuficiente para crup moderado con estridor en reposo.'
        },
        {
          id: 't-3',
          text: 'Intubación inmediata por compromiso de vía aérea',
          isCorrect: false,
          consequence: 'Excesivo. El crup moderado responde bien al tratamiento médico.'
        }
      ],
      correctOptionId: 't-1',
      feedback: {
        correct: 'Perfecto. Has aplicado el protocolo ABCDE correctamente y llegado al tratamiento apropiado.',
        incorrect: 'El crup moderado requiere tratamiento activo con esteroides y posiblemente epinefrina.',
        explanation: 'Los esteroides reducen la inflamación laríngea y la epinefrina nebulizada proporciona alivio temporal del estridor.'
      }
    }
  ],
  learningObjectives: [
    'Aplicar el protocolo ABCDE en emergencias pediátricas respiratorias',
    'Reconocer los grados de severidad del crup laríngeo',
    'Identificar cuándo la vía aérea está comprometida sin estar obstruida',
    'Diferenciar irritabilidad normal de alteración neurológica en pediatría',
    'Seleccionar el tratamiento apropiado basado en evaluación sistemática'
  ],
  difficulty: 'intermediate',
  estimatedTime: '12-15 minutos'
};
